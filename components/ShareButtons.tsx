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
  const shareMessage = encodeURIComponent(`${title}\n\n${excerpt}\n\n${articleUrl}`);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    x: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${shareMessage}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedExcerpt}%0A%0A${encodedUrl}`,
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
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.732 5.41 2.124 7.738L.929 23.5l8.272-2.737c2.194 1.2 4.664 1.832 7.249 1.832 5.426 0 9.747-4.318 9.747-9.798 0-2.620-.758-5.09-2.202-7.228m8.02-4.671c2.652 2.652 4.18 6.182 4.18 9.928 0 7.736-6.311 14.047-14.047 14.047-3.746 0-7.276-1.528-9.928-4.18" />
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
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a1.042 1.042 0 0 1 .171.145c.016.016.035.035.048.035.013 0 .022-.035.022-.06a1.15 1.15 0 0 0-.034-.148 1 1 0 0 0-.17-.263.666.666 0 0 0-.114-.107.565.565 0 0 0-.115-.04c-.056-.004-.227.005-.327.008-.099.004-.293.01-.373.012-.591.025-1.6.271-2.859.985-.031.019-.052.044-.052.07 0 .027.016.053.047.07.667.431 1.449.947 1.727 1.126l.006.003c-.374.271-.611.409-.837.472-.128.036-.331.062-.515.062-.18 0-.38-.023-.508-.06-.056-.014-.102-.027-.16-.04-.058-.012-.102-.025-.16-.04a.89.89 0 0 1-.156-.036 1.163 1.163 0 0 1-.104-.047.712.712 0 0 1-.062-.041.58.58 0 0 1-.042-.032.6.6 0 0 1-.024-.018l-.004-.003c-.227-.181-.614-.601-1.095-1.102-.481.501-.868.921-1.095 1.102l-.004.003a.6.6 0 0 1-.024.018.58.58 0 0 1-.042.032.712.712 0 0 1-.062.041 1.163 1.163 0 0 1-.104.047.89.89 0 0 1-.156.036c-.058.015-.102.028-.16.04-.056.014-.353.046-.508.06-.184.037-.387.06-.515.062-.184 0-.387-.026-.515-.062-.226-.063-.463-.201-.837-.472l.006-.003c.278-.179 1.06-.695 1.727-1.126.031-.017.047-.043.047-.07 0-.026-.021-.051-.052-.07-1.259-.714-2.268-.96-2.859-.985-.08-.002-.274-.008-.373-.012-.1-.003-.271-.012-.327-.008a.565.565 0 0 0-.115.04.666.666 0 0 0-.114.107 1 1 0 0 0-.17.263 1.15 1.15 0 0 0-.034.148c0 .025.009.06.022.06.013 0 .032-.019.048-.035a1.042 1.042 0 0 1 .171-.145c.144-.117.365-.142.465-.14.39.007 1.297.271 2.428.888.347.228.655.434.923.614.268.18.526.349.774.503.414.267.85.555 1.287.844l.01.008c.124.082.248.164.372.246.124-.082.248-.164.372-.246l.01-.008c.437-.289.873-.577 1.287-.844.248-.154.506-.323.774-.503.268-.18.576-.386.923-.614 1.131-.617 2.038-.881 2.428-.888zm-.005.005h.004zm-2.97 5.308c-.288-.142-.565-.282-.83-.412-.098-.048-.19-.094-.276-.139-.086.045-.178.091-.276.139-.265.13-.542.27-.83.412-.568.277-1.086.527-1.56.748-.474.221-.897.403-1.27.54-.186.068-.37.13-.552.185.182.055.366.117.552.185.373.137.796.319 1.27.54.474.221.992.471 1.56.748.288.142.565.282.83.412.265-.13.542-.27.83-.412.568-.277 1.086-.527 1.56-.748.474-.221.897-.403 1.27-.54.186-.068.37-.13.552-.185-.182-.055-.366-.117-.552-.185-.373-.137-.796-.319-1.27-.54-.474-.221-.992-.471-1.56-.748z" />
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
