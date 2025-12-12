// utils/api.js
// Simple API helper for frontend — uses NEXT_PUBLIC_API_URL if provided
export const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

async function handleResponse(res) {
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`API request failed: ${res.status} ${res.statusText} ${text ? '| ' + text : ''}`);
  }
  // Try JSON, fall back to text
  try {
    return await res.json();
  } catch {
    return await res.text();
  }
}

export async function getVideos() {
  const res = await fetch(`${API}/videos`);
  return handleResponse(res);
}

export async function getHomeVideos() {
  const res = await fetch(`${API}/videos/home`);
  return handleResponse(res);
}

export async function uploadVideoMeta(formData) {
  const res = await fetch(`${API}/videos/upload`, {
    method: 'POST',
    body: formData
  });
  return handleResponse(res);
}

export async function getVideoById(id) {
  // try to hit a single-video endpoint first (if your backend provides it)
  if (!id) throw new Error('getVideoById: id is required');
  const res = await fetch(`${API}/videos/${encodeURIComponent(id)}`);
  return handleResponse(res);
}