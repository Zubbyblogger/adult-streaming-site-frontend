import axios from 'axios';
import { useEffect, useState } from 'react';
export default function PornDrawer(){
  const [items, setItems] = useState([]);
  useEffect(()=> {
    axios.get(process.env.NEXT_PUBLIC_API_BASE + '/api/videos/porn-drawer')
      .then(r=> setItems(r.data)).catch(e=> console.log(e));
  },[]);
  return (
    <div style={{background:'#eef6ff', padding:16, minHeight:'100vh'}}>
      <h1 style={{color:'#034ea2'}}>Porn Drawer (Aggregator)</h1>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:12}}>
        {items.map((it, idx)=>(
          <a key={idx} href={it.link} target="_blank" rel="noreferrer" style={{textDecoration:'none', color:'#000'}}>
            <img src={it.thumbnailUrl} alt={it.title} style={{width:'100%', height:160, objectFit:'cover', borderRadius:8}}/>
            <div style={{fontSize:13, marginTop:6}}>{it.title}</div>
          </a>
        ))}
      </div>
    </div>
  )
}
