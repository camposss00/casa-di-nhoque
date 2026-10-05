const n='5511922092425';
document.querySelectorAll('.wa-link').forEach(a=>a.href='https://wa.me/'+n+'?text='+encodeURIComponent(a.dataset.msg));
const h=document.getElementById('top'),b=document.querySelector('.burger'),m=document.getElementById('menu');
const sc=()=>h.classList.toggle('solid',scrollY>40);sc();addEventListener('scroll',sc,{passive:true});
function tog(o){b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Fechar menu':'Abrir menu');m.classList.toggle('open',o);h.classList.toggle('menu-open',o);document.body.style.overflow=o?'hidden':''}
b.onclick=()=>tog(b.getAttribute('aria-expanded')!=='true');
m.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>tog(false)));
addEventListener('keydown',e=>{if(e.key==='Escape')tog(false)});
const dow={Sun:0,Mon:1,Tue:2,Wed:3,Thu:4,Fri:5,Sat:6}[new Intl.DateTimeFormat('en-US',{weekday:'short',timeZone:'America/Sao_Paulo'}).format(new Date())];
const td=document.querySelector('#hours li[data-d="'+dow+'"]');if(td)td.classList.add('today');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
