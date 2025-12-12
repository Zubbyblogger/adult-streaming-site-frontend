import React from "react";
import BottomNav from "../components/BottomNav";

export default function Discover() {
  return (
    <>
      <div style={{ padding: 16, minHeight: "100vh", background: "#eef6ff" }}>
        <h1 style={{ color: "#034ea2" }}>Discover</h1>
        <p>Discover page — trending tags, categories and recommended videos.</p>
      </div>
      <BottomNav />
    </>
  );
}
