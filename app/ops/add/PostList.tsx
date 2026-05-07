"use client";

import { useState, useEffect } from "react";
import { type AdminPost } from "@/lib/blog";
import { updatePostAction, deletePostAction } from "./actions";
import { PostFields } from "./PostFields";

export function PostList({ posts, activeFilter }: { posts: AdminPost[]; activeFilter: string }) {
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we are near the bottom of the page (within 500px)
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        setLimit((prev) => Math.min(prev + 5, posts.length));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [posts.length]);

  const visiblePosts = posts.slice(0, limit);

  return (
    <div className="ops-post-list">
      {posts.length === 0 && (
        <p style={{ padding: "2rem", color: "var(--muted)", textAlign: "center" }}>
          No posts with status &ldquo;{activeFilter}&rdquo;.
        </p>
      )}
      {visiblePosts.map((post) => (
        <article className="ops-post-item" key={post.id}>
          <details>
            <summary>
              <span className={`ops-status ops-status-${post.status}`}>{post.status}</span>
              <strong>{post.title}</strong>
              <span>
                {post.category} / {post.readTime}
              </span>
            </summary>

            <form className="ops-inline-editor" action={updatePostAction}>
              <PostFields post={post} />
              <div className="ops-form-actions">
                <button className="button button-primary" type="submit">
                  Save Changes
                </button>
              </div>
            </form>

            <form action={deletePostAction} className="ops-delete-form">
              <input type="hidden" name="id" value={post.id} />
              <input type="hidden" name="title" value={post.title} />
              <button type="submit">Delete post</button>
            </form>
          </details>
        </article>
      ))}
      
      {limit < posts.length && (
        <div style={{ textAlign: "center", padding: "2rem", color: "var(--muted)", fontStyle: "italic" }}>
          Loading more posts...
        </div>
      )}
    </div>
  );
}
