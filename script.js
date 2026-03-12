const box = document.getElementById("box");
const reward = document.getElementById("reward");

const images = [

"https://www.clipartmax.com/png/small/26-262338_hannah-montana-clip-art-hannah-montana-forever-logo.png",
"https://picsum.photos/200?2",
"https://picsum.photos/200?3",
"https://picsum.photos/200?4",
"https://picsum.photos/200?5"

];

box.onclick = () => {

reward.classList.remove("showItem");

box.classList.add("shake");

setTimeout(()=>{

box.classList.remove("shake");

const randomImage = images[Math.floor(Math.random()*images.length)];

reward.src = randomImage;

createSparkles();

setTimeout(()=>{

reward.classList.add("showItem");

launchConfetti();

},300);

},1200);

};

/* sparkles */

function createSparkles(){

const area=document.getElementById("sparkles");

for(let i=0;i<25;i++){

const s=document.createElement("div");

s.className="sparkle";

s.style.left=Math.random()*80-40+"px";

area.appendChild(s);

setTimeout(()=>s.remove(),1000);

}

}

/* confetti */

function launchConfetti(){

const canvas=document.getElementById("confetti");
const ctx=canvas.getContext("2d");

canvas.width=500;
canvas.height=400;

const pieces=[];

for(let i=0;i<120;i++){

pieces.push({
x:250,
y:120,
size:Math.random()*6+3,
color:`hsl(${Math.random()*360},80%,60%)`,
vx:(Math.random()-0.5)*8,
vy:Math.random()*-8
});

}

function animate(){

ctx.clearRect(0,0,500,400);

pieces.forEach(p=>{

p.x+=p.vx;
p.y+=p.vy;
p.vy+=0.2;

ctx.fillStyle=p.color;
ctx.fillRect(p.x,p.y,p.size,p.size);

});

requestAnimationFrame(animate);

}

animate();

}