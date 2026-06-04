"use client";

import { useState } from "react";

interface ShareButtonsProps {
  title: string;
  slug: string;
  excerpt: string;
}

export default function ShareButtons({ title, slug, excerpt }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "https://seversoft.com";
  const articleUrl = `${baseUrl}/blog/${slug}`;
  const encodedUrl = encodeURIComponent(articleUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedExcerpt = encodeURIComponent(excerpt);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleShare = (platform: string) => {
    const url = shareLinks[platform as keyof typeof shareLinks];
    if (url) {
      window.open(url, "_blank", "width=550,height=420");
    }
  };

  return (
    <div
      className="share-buttons-container"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "28px 0",
        borderTop: "1px solid rgba(15,20,26,0.08)",
        borderBottom: "1px solid rgba(15,20,26,0.08)",
        marginTop: "48px",
        marginBottom: "38px",
      }}
    >
      <span style={{ color: "var(--text-dark)", fontSize: "0.95rem", fontWeight: 600 }}>
        Share Article:
      </span>
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <button
          onClick={() => handleShare("twitter")}
          aria-label="Share on Twitter"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "44px",
            height: "44px",
            borderRadius: "8px",
            border: "1px solid rgba(15,20,26,0.12)",
            background: "#fff",
            cursor: "pointer",
            transition: "all 0.2s ease",
            color: "#1DA1F2",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#F7F9FA";
            e.currentTarget.style.borderColor = "#1DA1F2";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#fff";
            e.currentTarget.style.borderColor = "rgba(15,20,26,0.12)";
          }}
          title="Share on Twitter"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75-2.45 2.08-7.56 2.08-7.56" />
          </svg>
        </button>

        <button
          onClick={() => handleShare("linkedin")}
          aria-label="Share on LinkedIn"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "44px",
            height: "44px",
            borderRadius: "8px",
            border: "1px solid rgba(15,20,26,0.12)",
            background: "#fff",
            cursor: "pointer",
            transition: "all 0.2s ease",
            color: "#0A66C2",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#F0F6FF";
            e.currentTarget.style.borderColor = "#0A66C2";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#fff";
            e.currentTarget.style.borderColor = "rgba(15,20,26,0.12)";
          }}
          title="Share on LinkedIn"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </button>

        <button
          onClick={() => handleShare("facebook")}
          aria-label="Share on Facebook"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "44px",
            height: "44px",
            borderRadius: "8px",
            border: "1px solid rgba(15,20,26,0.12)",
            background: "#fff",
            cursor: "pointer",
            transition: "all 0.2s ease",
            color: "#1877F2",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#EFF3FF";
            e.currentTarget.style.borderColor = "#1877F2";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#fff";
            e.currentTarget.style.borderColor = "rgba(15,20,26,0.12)";
          }}
          title="Share on Facebook"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a1 1 0 011-1h3z" />
          </svg>
        </button>

        <button
          onClick={handleCopyLink}
          aria-label="Copy link"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "44px",
            height: "44px",
            borderRadius: "8px",
            border: "1px solid rgba(15,20,26,0.12)",
            background: copied ? "var(--teal)" : "#fff",
            cursor: "pointer",
            transition: "all 0.2s ease",
            color: copied ? "#fff" : "var(--text-dark)",
          }}
          onMouseEnter={(e) => {
            if (!copied) {
              e.currentTarget.style.background = "rgba(15,20,26,0.04)";
              e.currentTarget.style.borderColor = "rgba(15,20,26,0.2)";
            }
          }}
          onMouseLeave={(e) => {
            if (!copied) {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.borderColor = "rgba(15,20,26,0.12)";
            }
          }}
          title={copied ? "Copied!" : "Copy link"}
        >
          {copied ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
