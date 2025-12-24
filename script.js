// 🎵 Música
const music=document.getElementById("bgMusic");
document.getElementById("musicBtn").onclick=()=>{
  music.play();
};

// ⏳ Cuenta regresiva
const target=new Date("January 1, 2026 00:00:00").getTime();
const frase=document.getElementById("frase");

setInterval(()=>{
  const now=new Date().getTime();
  const diff=target-now;

  if(diff<=0){
    frase.innerHTML="🎆 ¡FELIZ 2026! 🌍✨";
    return;
  }

  const d=Math.floor(diff/(1000*60*60*24));
  const h=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
  const m=Math.floor((diff%(1000*60*60))/(1000*60));
  const s=Math.floor((diff%(1000*60))/1000);

  document.getElementById("d").textContent=d;
  document.getElementById("h").textContent=h;
  document.getElementById("m").textContent=m;
  document.getElementById("s").textContent=s;

  if(d<=10 && d>1){
    frase.innerHTML="🌠 Faltan "+d+" días… el universo ya lo sabe";
  }
  if(d===1){
    frase.innerHTML="🌍 Mañana comienza una nueva era";
  }
  if(d===0 && h===0 && m===0 && s<=10){
    frase.innerHTML="🔥 "+s+" segundos… ¡EL UNIVERSO EXPLOTA! 🔥";
  }
},1000);

// 🌌 Partículas fuego + planetas
const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const emojis=["🌍","🪐","🌎","⭐","✨","🔥","🌟"];

let particles=[];
for(let i=0;i<200;i++){
  particles.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    size:Math.random()*20+17,
    speed:Math.random()*1+0.3,
    emoji:emojis[Math.floor(Math.random()*emojis.length)]
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    ctx.font=p.size+"px serif";
    ctx.fillText(p.emoji,p.x,p.y);
    p.y-=p.speed;
    if(p.y<-50){
      p.y=canvas.height+50;
      p.x=Math.random()*canvas.width;
    }
  });
  requestAnimationFrame(animate);
}
animate();

window.onresize=()=>{
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
};
