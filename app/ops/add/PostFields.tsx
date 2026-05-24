import { contentToText, slugify, type AdminPost } from "@/lib/blog";
import { AIGenerator } from "./AIGenerator";

export const emptyDraft = {
  title: "",
  slug: "",
  category: "Software Engineering",
  excerpt: "",
  callout: "",
  content: "",
  status: "draft" as AdminPost["status"],
  readTime: "4 min read",
  featured: false,
};

export type PostFieldsInput = Partial<Omit<AdminPost, "content">> & {
  content?: AdminPost["content"] | string;
};

export function PostFields({ post = emptyDraft }: { post?: PostFieldsInput }) {
  const content = typeof post.content === "string" ? post.content : (Array.isArray(post.content) ? contentToText(post.content as AdminPost["content"]) : "");
  const title = post.title ?? "";

  return (
    <>
      <AIGenerator id={post.id ?? "new"} />
      {"id" in post && post.id && <input type="hidden" name="id" value={post.id} />}
      <div className="ops-field">
        <label htmlFor={`title-${post.id ?? "new"}`}>Title</label>
        <input id={`title-${post.id ?? "new"}`} name="title" defaultValue={title} placeholder="How to build reliable fintech systems" required />
      </div>

      <div className="ops-row">
        <div className="ops-field">
          <label htmlFor={`slug-${post.id ?? "new"}`}>Slug</label>
          <input id={`slug-${post.id ?? "new"}`} name="slug" defaultValue={post.slug || slugify(title)} placeholder="reliable-fintech-systems" required />
        </div>
        <div className="ops-field">
          <label htmlFor={`readTime-${post.id ?? "new"}`}>Read Time</label>
          <input id={`readTime-${post.id ?? "new"}`} name="readTime" defaultValue={post.readTime ?? "4 min read"} required />
        </div>
      </div>

      <div className="ops-row">
        <div className="ops-field">
          <label htmlFor={`category-${post.id ?? "new"}`}>Category</label>
          <select id={`category-${post.id ?? "new"}`} name="category" defaultValue={post.category ?? "Software Engineering"}>
            <option>Software Engineering</option>
            <option>Fintech Infrastructure</option>
            <option>AI Systems</option>
            <option>Cybersecurity</option>
            <option>Compliance</option>
            <option>Product Strategy</option>
            <option>APIs</option>
            <option>Cloud Infrastructure</option>
            <option>Finance</option>
            <option>General</option>
          </select>
        </div>
        <div className="ops-field">
          <label htmlFor={`status-${post.id ?? "new"}`}>Status</label>
          <select id={`status-${post.id ?? "new"}`} name="status" defaultValue={post.status ?? "draft"}>
            <option value="draft">Draft</option>
            <option value="review">Review</option>
            <option value="published">Published</option>
          </select>
        </div>
      </div>

      <div className="ops-field">
        <label htmlFor={`callout-${post.id ?? "new"}`}>Callout</label>
        <input id={`callout-${post.id ?? "new"}`} name="callout" defaultValue={post.callout ?? ""} placeholder="A short article insight." />
      </div>

      <div className="ops-field">
        <label htmlFor={`excerpt-${post.id ?? "new"}`}>Excerpt</label>
        <textarea id={`excerpt-${post.id ?? "new"}`} name="excerpt" defaultValue={post.excerpt ?? ""} required />
      </div>

      <div className="ops-field">
        <label htmlFor={`content-${post.id ?? "new"}`}>Content</label>
        <textarea
          id={`content-${post.id ?? "new"}`}
          name="content"
          className="ops-content-input"
          defaultValue={content}
          placeholder={"Heading\n\nParagraph text\n\n---\n\nNext heading\n\nMore text"}
          required
        />
      </div>

      <label className="ops-check">
        <input type="checkbox" name="featured" defaultChecked={Boolean(post.featured)} />
        Feature this post
      </label>
    </>
  );
}
