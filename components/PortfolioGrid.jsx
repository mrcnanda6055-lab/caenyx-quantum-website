// components/PortfolioGrid.jsx
"use client";

import styles from "./styles/PortfolioGrid.module.css";
import { useState } from "react";

const projects = [
  { id:1, title:"Event Booking Portal", img:"/portfolio/event1.jpg", desc:"Full booking + admin" },
  { id:2, title:"Resort Booking", img:"/portfolio/resort1.jpg", desc:"Direct booking + CMS" },
  { id:3, title:"Restaurant POS", img:"/portfolio/food1.jpg", desc:"Menu + order flow" },
  { id:4, title:"Interior Showcase", img:"/portfolio/decor1.jpg", desc:"3D gallery + client tool" },
];

export default function PortfolioGrid(){
  const [open, setOpen] = useState(null);
  return (
    <section style={{padding:48}} className="center">
      <h2 style={{fontSize:22,fontWeight:800}}>Portfolio</h2>
      <p style={{color:'rgba(15,23,42,0.7)'}}>Selected live projects & demos</p>

      <div className={styles.grid}>
        {projects.map(p=>(
          <div key={p.id} className={styles.card} onClick={()=>setOpen(p)}>
            <img src={p.img} alt={p.title} className={styles.thumb}/>
            <div className={styles.info}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {open && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button className={styles.close} onClick={()=>setOpen(null)}>✕</button>
            <img src={open.img} alt={open.title} style={{width:'100%',borderRadius:10}}/>
            <h3 style={{marginTop:12}}>{open.title}</h3>
            <p>{open.desc} — detailed case study content goes here.</p>
          </div>
        </div>
      )}
    </section>
  )
}
