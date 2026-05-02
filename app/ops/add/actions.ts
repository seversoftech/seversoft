"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createAuditLog, createPost, deletePost, slugify, textToContent, updatePost } from "@/lib/blog";

const SESSION_COOKIE = "seversoft_ops_session";

function getAdminPassword() {
  return process.env.ADMIN_PASSWORD;
}

function getSessionSecret() {
  return process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD;
}

export async function isAdminAuthed() {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE)?.value;
  const secret = getSessionSecret();
  return Boolean(secret && session === secret);
}

async function requireAdmin() {
  if (!(await isAdminAuthed())) {
    redirect("/ops/add");
  }
}

function readPostForm(formData: FormData) {
  const title = String(formData.get("title") || "").trim();
  const slug = slugify(String(formData.get("slug") || title));
  const status = String(formData.get("status") || "draft") as "draft" | "review" | "published";

  return {
    title,
    slug,
    category: String(formData.get("category") || "Software Engineering").trim(),
    excerpt: String(formData.get("excerpt") || "").trim(),
    content: textToContent(String(formData.get("content") || "")),
    callout: String(formData.get("callout") || "").trim() || "Practical ideas for modern digital teams.",
    status,
    readTime: String(formData.get("readTime") || "4 min read").trim(),
    featured: formData.get("featured") === "on",
  };
}

export async function loginAction(formData: FormData) {
  const password = getAdminPassword();
  const secret = getSessionSecret();
  const submittedPassword = String(formData.get("password") || "");

  if (!password || !secret || submittedPassword !== password) {
    redirect("/ops/add?error=1");
  }

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, secret, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  await createAuditLog("Admin login", "An admin session was started.");
  redirect("/ops/add");
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
  await createAuditLog("Admin logout", "An admin session was ended.");
  redirect("/ops/add");
}

export async function createPostAction(formData: FormData) {
  await requireAdmin();
  const input = readPostForm(formData);
  await createPost(input);
  await createAuditLog("Post created", input.title);
  revalidatePath("/blog");
  revalidatePath(`/blog/${input.slug}`);
  redirect("/ops/add?saved=created");
}

export async function updatePostAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") || "");
  const input = readPostForm(formData);
  await updatePost(id, input);
  await createAuditLog("Post updated", input.title);
  revalidatePath("/blog");
  revalidatePath(`/blog/${input.slug}`);
  redirect("/ops/add?saved=updated");
}

export async function deletePostAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") || "");
  const title = String(formData.get("title") || "Untitled post");
  await deletePost(id);
  await createAuditLog("Post deleted", title);
  revalidatePath("/blog");
  redirect("/ops/add?saved=deleted");
}
