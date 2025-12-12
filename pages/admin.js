import React from "react";
import BottomNav from "../components/BottomNav";

export default function Admin() {
  return (
    <>
      <div style={{ padding: 16 }}>
        <h1>Admin</h1>
        <p>Admin moderation tools (approve/reject uploads).</p>
      </div>
      <BottomNav />
    </>
  );
}
