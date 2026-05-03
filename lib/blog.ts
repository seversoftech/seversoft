import { blogPosts, type BlogPost } from "@/app/blog/posts";

type SupabasePostRow = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  content: BlogPost["content"];
  callout: string;
  status: "draft" | "review" | "published";
  read_time: string;
  featured: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

export type AdminPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  content: BlogPost["content"];
  callout: string;
  status: "draft" | "review" | "published";
  readTime: string;
  featured: boolean;
  publishedAt: string | null;
  updatedAt: string;
};

export type PostInput = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  content: BlogPost["content"];
  callout: string;
  status: "draft" | "review" | "published";
  readTime: string;
  featured: boolean;
};

export function getBlogBackendStatus() {
  return {
    hasSupabaseUrl: Boolean(supabaseUrl),
    hasAnonKey: Boolean(anonKey),
    hasServiceRoleKey: Boolean(serviceRoleKey),
    publicReadsConfigured: isSupabaseConfigured(),
    adminWritesConfigured: isSupabaseConfigured({ admin: true }),
  };
}

const supabaseUrl = process.env.SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

function isSupabaseConfigured({ admin = false } = {}) {
  return Boolean(supabaseUrl && (admin ? serviceRoleKey : anonKey || serviceRoleKey));
}

function getApiKey(admin = false) {
  const key = admin ? serviceRoleKey : anonKey || serviceRoleKey;
  if (!supabaseUrl || !key) {
    throw new Error("Supabase environment variables are not configured.");
  }
  return key;
}

function endpoint(path: string) {
  if (!supabaseUrl) throw new Error("SUPABASE_URL is not configured.");
  return `${supabaseUrl.replace(/\/$/, "")}/rest/v1/${path}`;
}

async function supabaseFetch<T>(path: string, init: RequestInit = {}, { admin = false } = {}) {
  const key = getApiKey(admin);
  const response = await fetch(endpoint(path), {
    ...init,
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
      ...(init.headers ?? {}),
    },
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Supabase request failed with ${response.status}`);
  }

  if (response.status === 204) return null as T;
  
  const text = await response.text();
  if (!text) return null as T;
  
  return JSON.parse(text) as T;
}

function formatDate(value: string | null) {
  if (!value) return "";
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

function rowToBlogPost(row: SupabasePostRow): BlogPost {
  const normalizedContent = row.content.map((section) => {
    if (section.heading && section.heading.length > 100) {
      return {
        heading: "",
        paragraphs: [section.heading, ...section.paragraphs],
      };
    }
    return section;
  });

  return {
    slug: row.slug,
    category: row.category,
    title: row.title,
    excerpt: row.excerpt,
    date: formatDate(row.published_at ?? row.updated_at),
    readTime: row.read_time,
    featured: row.featured,
    callout: row.callout,
    content: normalizedContent,
  };
}

function rowToAdminPost(row: SupabasePostRow): AdminPost {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    category: row.category,
    content: row.content,
    callout: row.callout,
    status: row.status,
    readTime: row.read_time,
    featured: row.featured,
    publishedAt: row.published_at,
    updatedAt: row.updated_at,
  };
}

function fallbackAdminPosts(): AdminPost[] {
  return blogPosts.map((post) => ({
    id: post.slug,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    content: post.content,
    callout: post.callout,
    status: post.featured ? "published" : "review",
    readTime: post.readTime,
    featured: Boolean(post.featured),
    publishedAt: null,
    updatedAt: post.date,
  }));
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function contentToText(content: BlogPost["content"]) {
  return content.map((section) => {
    const parts = [];
    if (section.heading) parts.push(section.heading);
    parts.push(...section.paragraphs);
    return parts.join("\n\n");
  }).join("\n\n");
}

export function textToContent(value: string): BlogPost["content"] {
  const parts = value
    .split(/\n+/)
    .map((part) => part.trim())
    .filter((part) => part && part !== "---");

  return [{
    heading: "",
    paragraphs: parts.length ? parts : []
  }];
}

export async function getPublishedPosts() {
  if (!isSupabaseConfigured()) {
    return blogPosts;
  }

  const rows = await supabaseFetch<SupabasePostRow[]>(
    "posts?select=*&status=eq.published&order=featured.desc,published_at.desc,updated_at.desc",
    { next: { revalidate: 60 } },
  );

  return rows.map(rowToBlogPost);
}

export async function getPublishedPost(slug: string) {
  if (!isSupabaseConfigured()) {
    return blogPosts.find((post) => post.slug === slug);
  }

  const rows = await supabaseFetch<SupabasePostRow[]>(
    `posts?select=*&status=eq.published&slug=eq.${encodeURIComponent(slug)}&limit=1`,
    { next: { revalidate: 60 } },
  );

  return rows[0] ? rowToBlogPost(rows[0]) : undefined;
}

export async function getAdminPosts() {
  if (!isSupabaseConfigured({ admin: true })) {
    return fallbackAdminPosts();
  }

  const rows = await supabaseFetch<SupabasePostRow[]>("posts?select=*&order=updated_at.desc", { cache: "no-store" }, { admin: true });
  return rows.map(rowToAdminPost);
}

export async function createPost(input: PostInput) {
  const payload = {
    slug: input.slug,
    title: input.title,
    excerpt: input.excerpt,
    category: input.category,
    content: input.content,
    callout: input.callout,
    status: input.status,
    read_time: input.readTime,
    featured: input.featured,
    published_at: input.status === "published" ? new Date().toISOString() : null,
  };

  const rows = await supabaseFetch<SupabasePostRow[]>(
    "posts",
    {
      method: "POST",
      body: JSON.stringify(payload),
    },
    { admin: true },
  );

  return rowToAdminPost(rows[0]);
}

export async function updatePost(id: string, input: PostInput) {
  const payload = {
    slug: input.slug,
    title: input.title,
    excerpt: input.excerpt,
    category: input.category,
    content: input.content,
    callout: input.callout,
    status: input.status,
    read_time: input.readTime,
    featured: input.featured,
    published_at: input.status === "published" ? new Date().toISOString() : null,
    updated_at: new Date().toISOString(),
  };

  const rows = await supabaseFetch<SupabasePostRow[]>(
    `posts?id=eq.${encodeURIComponent(id)}`,
    {
      method: "PATCH",
      body: JSON.stringify(payload),
    },
    { admin: true },
  );

  return rowToAdminPost(rows[0]);
}

export async function deletePost(id: string) {
  await supabaseFetch<null>(
    `posts?id=eq.${encodeURIComponent(id)}`,
    {
      method: "DELETE",
      headers: {
        Prefer: "return=minimal",
      },
    },
    { admin: true },
  );
}

export async function createAuditLog(action: string, detail: string) {
  if (!isSupabaseConfigured({ admin: true })) return;

  await supabaseFetch(
    "audit_logs",
    {
      method: "POST",
      body: JSON.stringify({ action, detail }),
      headers: {
        Prefer: "return=minimal",
      },
    },
    { admin: true },
  );
}

export async function getAuditLogs() {
  if (!isSupabaseConfigured({ admin: true })) {
    return [
      {
        id: "local",
        action: "Local fallback",
        detail: "Configure Supabase env vars to persist admin activity.",
        created_at: new Date().toISOString(),
      },
    ];
  }

  return supabaseFetch<Array<{ id: string; action: string; detail: string; created_at: string }>>(
    "audit_logs?select=*&order=created_at.desc&limit=8",
    { cache: "no-store" },
    { admin: true },
  );
}
