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
  const catchyShareMessage = encodeURIComponent(`You need to read this! 👀\n\n"${title}"\n\n${excerpt}\n\nDive in here: ${articleUrl}`);
  const twitterMessage = encodeURIComponent(`You need to read this! 👀\n\n"${title}"\n\nDive in here:`);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${twitterMessage}&url=${encodedUrl}`,
    x: `https://twitter.com/intent/tweet?text=${twitterMessage}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${catchyShareMessage}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${catchyShareMessage}`,
    email: `mailto:?subject=${encodedTitle}&body=${catchyShareMessage}`,
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
    if (platform === "email") {
      window.location.href = url;
    } else if (url) {
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
        flexWrap: "wrap",
      }}
    >
      <span style={{ color: "var(--text-dark)", fontSize: "0.95rem", fontWeight: 600 }}>
        Share Article:
      </span>
      <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
        {/* X (Twitter) */}
        <button
          onClick={() => handleShare("x")}
          aria-label="Share on X"
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
            color: "#000",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#f1f1f1";
            e.currentTarget.style.borderColor = "#000";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#fff";
            e.currentTarget.style.borderColor = "rgba(15,20,26,0.12)";
          }}
          title="Share on X"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.627l-5.1-6.694-5.867 6.694h-3.306l7.73-8.835L2.882 2.25h6.791l4.6 6.088 5.371-6.088zM17.15 18.75h1.828L5.293 4.002H3.622l13.528 14.748z" />
          </svg>
        </button>

        {/* LinkedIn */}
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

        {/* Facebook */}
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

        {/* WhatsApp */}
        <button
          onClick={() => handleShare("whatsapp")}
          aria-label="Share on WhatsApp"
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
            color: "#25D366",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#E8F8F5";
            e.currentTarget.style.borderColor = "#25D366";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#fff";
            e.currentTarget.style.borderColor = "rgba(15,20,26,0.12)";
          }}
          title="Share on WhatsApp"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.128.552 4.195 1.6 6.015L.301 24l6.082-1.595A11.956 11.956 0 0012.03 24c6.645 0 12.031-5.385 12.031-12.031C24.062 5.385 18.677 0 12.031 0zm0 22.012c-1.802 0-3.565-.483-5.11-1.401l-.367-.217-3.799.996.996-3.798-.217-.367a9.991 9.991 0 01-1.401-5.11C2.133 6.495 6.495 2.133 12.03 2.133c5.534 0 9.897 4.362 9.897 9.898 0 5.536-4.363 9.898-9.897 9.898zm5.433-7.409c-.297-.15-1.761-.871-2.035-.972-.274-.101-.473-.15-.672.15-.198.298-.77.971-.944 1.17-.174.201-.349.225-.646.076-.297-.15-1.258-.465-2.396-1.48-.885-.792-1.482-1.768-1.657-2.068-.175-.298-.018-.461.13-.61.133-.134.298-.349.447-.523.149-.174.198-.298.298-.497.099-.199.049-.373-.025-.523-.074-.15-.672-1.62-.921-2.217-.243-.584-.49-.504-.672-.513-.174-.01-.373-.012-.572-.012s-.522.076-.795.375c-.274.299-1.045 1.021-1.045 2.492 0 1.47 1.07 2.89 1.22 3.089.149.201 2.105 3.214 5.096 4.508.712.308 1.267.492 1.701.629.715.227 1.366.195 1.879.118.574-.085 1.761-.722 2.01-1.419.248-.697.248-1.294.174-1.42-.075-.125-.274-.2-.572-.349z"/>
          </svg>
        </button>

        {/* Telegram */}
        <button
          onClick={() => handleShare("telegram")}
          aria-label="Share on Telegram"
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
            color: "#0088cc",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#E8F4F8";
            e.currentTarget.style.borderColor = "#0088cc";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#fff";
            e.currentTarget.style.borderColor = "rgba(15,20,26,0.12)";
          }}
          title="Share on Telegram"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.372 0 0 5.372 0 12c0 6.627 5.372 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.572.295l.213-3.05 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.869 4.326-2.96-.924c-.643-.203-.658-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.941z"/>
          </svg>
        </button>

        {/* Email */}
        <button
          onClick={() => handleShare("email")}
          aria-label="Share via Email"
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
            color: "#EA4335",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#FFEBEE";
            e.currentTarget.style.borderColor = "#EA4335";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#fff";
            e.currentTarget.style.borderColor = "rgba(15,20,26,0.12)";
          }}
          title="Share via Email"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </button>

        {/* Copy Link */}
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
