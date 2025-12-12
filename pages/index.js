import React, { useEffect, useState, useRef } from 'react';
import { getHomeVideos } from '../utils/api';
import VideoCard from '../components/VideoCard';

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(0);
  const loadingRef = useRef(false);

  useEffect(()=>{ loadMore(); window.addEventListener('scroll', onScroll); return ()=>window.removeEventListener('scroll', onScroll) }, []);

  async function loadMore(){
    if (loadingRef.current) return;
    loadingRef.current = true;
    try {
      const items = await getHomeVideos(); // backend returns up to 30: for demo we just load once
      setVideos(items);
    } catch (e) {
      console.error(e);
    } finally { loadingRef.current = false }
  }

  function onScroll(){
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 400)) {
      // near bottom - no paging yet, just re-run load (demo)
      // In production implement server paging.
    }
  }

  return (
    <div style={{padding:12}}>
      <h1>Home Feed</h1>
      <div className='grid'>
        {videos.map(v => <VideoCard key={v._id} video={v} />)}
      </div>

      <style jsx>{`
  .grid {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  @media (min-width: 800px) {
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }
  }
`}</style>
    </div>
  );
}

