#!/usr/bin/env node
/* Membuat bentuk-harian.json: wadah urutan bentuk soal per tanggal untuk Latihan Kuantitatif.
   Jalankan dari akar repo:  node alat/buat-bentuk-harian.js [mulai YYYY-MM-DD] [sampai YYYY-MM-DD]
   Daftar bentuk (STIM, TANYA, LAMA, TUAS, KONTEKS, GVAR) dibaca langsung dari index.html, jadi file ini
   cukup dijalankan ulang bila daftar bentuk di aplikasi berubah.

   Cara kerja: tiap dimensi (misalnya "stim:PU") punya barisan panjang berisi permutasi acak berulang.
   Setiap hari penunjuk maju sebanyak jatah harian dimensi itu, jadi bentuk di depan antrean hari ini
   belum dipakai hari-hari sebelumnya sampai seluruh daftar habis terpakai. Acakannya memakai benih tetap,
   sehingga hasilnya sama setiap kali dibuat ulang. */
const fs=require('fs'), path=require('path');
const ROOT=path.join(__dirname,'..');
const html=fs.readFileSync(path.join(ROOT,'index.html'),'utf8');
const scripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m=>m[1]);
const main=scripts.find(s=>s.includes('const GENS=')); if(!main) throw new Error('Skrip utama tidak ditemukan di index.html');
const mem={}, localStorage={getItem:k=>k in mem?mem[k]:null,setItem:(k,v)=>{ mem[k]=String(v); },removeItem:k=>{ delete mem[k]; }};
const mod={exports:{}};
const noop=()=>{}, doc={addEventListener:noop,querySelector:()=>null,querySelectorAll:()=>[],documentElement:{setAttribute:noop,removeAttribute:noop,style:{}}};
new Function('module','localStorage','document','window','SFX','sfxHasil','matchMedia','setInterval',main)(mod,localStorage,doc,{addEventListener:noop},{play(){},on(){return false;},musikOn(){return false;}},noop,()=>({matches:false}),noop);
const A=mod.exports;

const arg=process.argv.slice(2);
const MULAI=arg[0]||'2026-11-20', SAMPAI=arg[1]||'2027-04-10';

function hash(s){ let h=2166136261; for(const c of s){ h^=c.charCodeAt(0); h=Math.imul(h,16777619); } return h>>>0; }
function rng(seed){ let a=seed; return ()=>{ a|=0; a=a+0x6D2B79F5|0; let t=Math.imul(a^a>>>15,1|a); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; }; }
function shuf(a,r){ a=a.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(r()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
/* barisan permutasi berulang; awal permutasi baru tidak sama dengan ujung permutasi sebelumnya */
function barisan(name,ids,len){ const r=rng(hash(name)), out=[]; while(out.length<len){ let p=shuf(ids,r); const tail=out.slice(-Math.min(2,ids.length-1)); let g=0; while(tail.includes(p[0])&&g++<20) p=shuf(ids,r); out.push(...p); } return out; }
/* antrean hari ke-d: mulai dari penunjuk d × jatah, unik, dipotong sepanjang "panjang" */
function antrean(seq,d,jatah,ids,panjang){ const out=[]; for(let i=d*jatah;out.length<ids.length&&i<seq.length;i++) if(!out.includes(seq[i])) out.push(seq[i]); ids.forEach(x=>{ if(!out.includes(x)) out.push(x); }); return out.slice(0,panjang); }

const tanggal=[]; for(let d=new Date(MULAI+'T00:00:00Z');d<=new Date(SAMPAI+'T00:00:00Z');d.setUTCDate(d.getUTCDate()+1)) tanggal.push(d.toISOString().slice(0,10));
const N=tanggal.length;
const ids=l=>l.map(x=>x.id);
/* dimensi: [nama, daftar id, jatah per hari] */
const DIM=[
  ['stim:PU',ids(A.STIM.PU),3],['tanya:PU',ids(A.TANYA.PU),3],
  ['stim:PK',ids(A.STIM.PK),3],['tanya:PK',ids(A.TANYA.PK),3],
  ['stim:PM',ids(A.STIM.PM),2],['kon',ids(A.KONTEKS),2],
  ['tanya:PM-A',ids(A.TANYA['PM-A']),1],['tanya:PM-B',ids(A.TANYA['PM-B']),2],['tanya:PM-C',ids(A.TANYA['PM-C']),1],
  ['tuas',ids(A.TUAS),2],['lamaM',ids(A.LAMA.PKM),2],
  ['kem',['PU-KUA-1','PU-KUA-2','PU-KUA-3','PU-KUA-4'],2],['kem#PK',['PK-A','PK-B','PK-C'],2]
];
/* arsip LAMA: satu dimensi "lama" di aplikasi, diputar per subtes lalu digabung */
const LAMA=[['lama#PU',ids(A.LAMA.PU),3],['lama#PK',ids(A.LAMA.PK),2],['lama#PM',ids(A.LAMA.PM),1]];
Object.keys(A.GVAR).forEach(g=>DIM.push(['game:'+g,ids(A.GVAR[g]),3]));
/* tema cerita: bank situasi sehari-hari, tiga per hari, tidak berulang sampai bank habis */
const TEMA=['koperasi sekolah','bengkel sepeda','warung bakso','panen padi','posyandu balita','bank sampah RT','kolam renang umum','pameran buku','kebun hidroponik','jasa laundry kiloan',
  'toko bangunan','perpustakaan kota','lomba lari 5K','katering nasi kotak','pabrik roti','kebun stroberi','tempat parkir mal','servis AC','kedai kopi','percetakan undangan',
  'apotek','peternakan ayam petelur','festival kuliner','kereta komuter','pom bensin','kos-kosan mahasiswa','kantin pabrik','rental kamera','sanggar tari','studio foto',
  'les bimbel','pasar tradisional','toko alat tulis','tambak udang','pembibitan pohon','kebun teh','gudang ekspedisi','bus antarkota','bioskop','klinik gigi',
  'turnamen futsal','donor darah','pengolahan kopi','kerajinan batik','toko sepatu','air minum isi ulang','penginapan homestay','bengkel motor','toko kue ulang tahun','penyewaan tenda',
  'pengiriman paket','kelas memasak','perkebunan sawit','toko buah','perajin gerabah','panti asuhan','pusat kebugaran','tempat cuci mobil','toko bunga','bazar amal'];
DIM.push(['tema',TEMA,3]);

const SEQ={}; DIM.concat(LAMA).forEach(([n,l,j])=>{ SEQ[n]=barisan(n,l,N*j+l.length*2); });
const hari={};
tanggal.forEach((k,d)=>{ const o={};
  DIM.forEach(([n,l,j])=>{ const key=n.split('#')[0], q=antrean(SEQ[n],d,j,l,n==='tema'?3:Math.min(l.length,j*2+1)); o[key]=(o[key]||[]).concat(q); });
  o.lama=[].concat(...LAMA.map(([n,l,j])=>antrean(SEQ[n],d,j,l,Math.min(l.length,j*2+1))));
  hari[k]=o; });

/* cek: berapa hari bentuk terdepan sebuah dimensi berulang dari kemarin */
let ulang=0; tanggal.slice(1).forEach((k,i)=>{ const a=hari[tanggal[i]]['stim:PU'][0], b=hari[k]['stim:PU'][0]; if(a===b) ulang++; });
const out={versi:1,dibuat:new Date().toISOString().slice(0,10)+'-'+hash(JSON.stringify(hari)).toString(36),mulai:MULAI,sampai:SAMPAI,
  keterangan:'Wadah bentuk harian Latihan Kuantitatif. Tiap tanggal berisi urutan prioritas bentuk per dimensi (id dari index.html). Aplikasi memakai urutan ini saat menyusun resep harian dan bentuk mini game; bentuk yang tidak tercantum memakai riwayat lokal. Buat ulang dengan: node alat/buat-bentuk-harian.js',
  hari};
const lines=['{','  "versi": 1,','  "dibuat": '+JSON.stringify(out.dibuat)+',','  "mulai": '+JSON.stringify(MULAI)+',','  "sampai": '+JSON.stringify(SAMPAI)+',','  "keterangan": '+JSON.stringify(out.keterangan)+',','  "hari": {'];
tanggal.forEach((k,i)=>lines.push('    '+JSON.stringify(k)+': '+JSON.stringify(hari[k])+(i<tanggal.length-1?',':'')));
lines.push('  }','}');
fs.writeFileSync(path.join(ROOT,'bentuk-harian.json'),lines.join('\n')+'\n');
console.log('bentuk-harian.json: '+N+' hari ('+MULAI+' s.d. '+SAMPAI+'), stimulus PU terdepan sama dengan kemarin: '+ulang+' hari.');
