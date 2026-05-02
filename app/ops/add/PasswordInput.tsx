"use client";

import { useState } from "react";

export function PasswordInput() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <input
        id="ops-password"
        name="password"
        type={show ? "text" : "password"}
        placeholder="Enter admin password"
        autoComplete="current-password"
        required
        style={{ paddingRight: "4rem" }}
      />
      <button
        type="button"
        onClick={() => setShow(!show)}
        style={{
          position: "absolute",
          right: "1rem",
          top: "50%",
          transform: "translateY(-50%)",
          background: "transparent",
          border: "none",
          color: "inherit",
          opacity: 0.6,
          cursor: "pointer",
          fontSize: "0.875rem",
          padding: 0,
        }}
      >
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}
