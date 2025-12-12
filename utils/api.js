 /**
  * utils/api.js
  * Simple API helper for frontend — uses NEXT_PUBLIC_API_URL
  */
 export const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

 export async function getVideos() {
   const res = await fetch(${API}/videos);
   if (!res.ok) throw new Error('Failed to fetch videos: ' + res.status);
   return res.json();
 }

 export async function getHomeVideos() {
   const res = await fetch(${API}/videos/home);
   if (!res.ok) throw new Error('Failed to fetch home videos: ' + res.status);
   return res.json();
 }

 export async function uploadVideoMeta(formData) {
   const res = await fetch(${API}/videos/upload, { method: 'POST', body: formData });
   if (!res.ok) throw new Error('Upload failed: ' + res.status);
   return res.json();
 }

export async function getVideoById(id){
  const res = await fetch(\\/videos\); // fallback - server route not exposing single video
  // If your backend exposes GET /api/videos/:id replace logic with direct call
  try {
    // try direct single-video endpoint
    const r2 = await fetch(\\/videos/\\);
    if (r2.ok) return r2.json();
  } catch(e){ }
  // fallback: fetch list and find id
  const list = await fetch(\\/videos\).then(r=>r.json());
  return list.find(v=>v._id === id) || null;
}

export async function uploadVideoFile(formData){
  // formData must include 'file' (File object) and other fields
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL.replace('/api','') + '/api/uploads/file', { method: 'POST', body: formData });
  if (!res.ok) throw new Error('upload failed: ' + res.status);
  return res.json();
}
