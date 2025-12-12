import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const styles = {
  wrapper: {
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 0,
    height: 72,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    background: "#ffffff",
    boxShadow: "0 -6px 20px rgba(0,0,0,0.08)",
    zIndex: 1000,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: "10px 12px",
  },
  item: {
    textAlign: "center",
    fontSize: 12,
    color: "#222",
    textDecoration: "none",
    width: 72,
    display: "inline-block"
  },
  iconBox: {
    display: "block",
    width: 44,
    height: 44,
    lineHeight: "44px",
    borderRadius: 10,
    margin: "0 auto 6px auto",
    background: "#f3f7fb",
    fontSize: 20,
  },
  label: { display: "block", marginTop: 0 }
};

export default function BottomNav() {
  const router = useRouter();
  const Item = ({ href, icon, label }) => {
    const isActive = router.pathname === href;
    const color = isActive ? "#0b63c6" : "#222";
    return (
      <Link href={href} legacyBehavior>
        <a aria-current={isActive ? "page" : undefined} style={{ ...styles.item, color }}>
          <span style={styles.iconBox}>{icon}</span>
          <span style={styles.label}>{label}</span>
        </a>
      </Link>
    );
  };

  return (
    <nav aria-label="bottom navigation" style={styles.wrapper}>
      <Item href="/" icon="🏠" label="Home" />
      <Item href="/discover" icon="🔎" label="Discover" />
      <Item href="/upload" icon="⬆️" label="Upload" />
      <Item href="/admin" icon="⚙️" label="Admin" />
    </nav>
  );
}
