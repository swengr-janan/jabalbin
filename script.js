(function(){
  var root=document.documentElement;
  try{var saved=localStorage.getItem("theme");if(saved)root.setAttribute("data-theme",saved)}catch(e){}
  document.getElementById("theme").addEventListener("click",function(){
   var dark=root.getAttribute("data-theme")==="dark"||(!root.getAttribute("data-theme")&&matchMedia("(prefers-color-scheme: dark)").matches);
   var next=dark?"light":"dark";root.setAttribute("data-theme",next);
   try{localStorage.setItem("theme",next)}catch(e){}
  });
  var nav=document.getElementById("nav"),menu=document.getElementById("menu");
  menu.addEventListener("click",function(){var o=nav.classList.toggle("open");menu.setAttribute("aria-expanded",o)});
  nav.addEventListener("click",function(e){if(e.target.tagName==="A"){nav.classList.remove("open");menu.setAttribute("aria-expanded","false")}});
  var links=[].slice.call(document.querySelectorAll("a.link"));
  if("IntersectionObserver" in window){
   var io=new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.isIntersecting){links.forEach(function(l){l.classList.toggle("on",l.getAttribute("href")==="#"+e.target.id)})}
   })},{rootMargin:"-40% 0px -55% 0px"});
   document.querySelectorAll("main section[id]").forEach(function(s){io.observe(s)});
  }
 
  (function(){
   var cv=document.getElementById("net");if(!cv)return;
   var ctx=cv.getContext("2d");
   var W=0,H=0,tb={l:0,r:0,t:0,b:0},dpr=1,seed=11,A=2,col={},nodes=[],edges=[],tries=0;
   function rnd(){seed=(seed*16807)%2147483647;return(seed-1)/2147483646}
   while(nodes.length<46&&tries<4000){tries++;
    var x=.03+rnd()*.94,y=.06+rnd()*.88,ok=true;
    for(var k=0;k<nodes.length;k++){var dx=(x-nodes[k].x)*A,dy=y-nodes[k].y;if(dx*dx+dy*dy<.02){ok=false;break}}
    if(ok)nodes.push({x:x,y:y,f:.35+rnd()*.45,p:rnd()*6.28,adj:[]});
   }
   function link(a,b){if(nodes[a].adj.indexOf(b)<0){nodes[a].adj.push(b);nodes[b].adj.push(a);edges.push([a,b])}}
   nodes.forEach(function(n,i){
    nodes.map(function(m,j){var dx=(n.x-m.x)*A,dy=n.y-m.y;return{j:j,d:dx*dx+dy*dy}})
     .filter(function(o){return o.j!==i}).sort(function(a,b){return a.d-b.d}).slice(0,3)
     .forEach(function(o){link(i,o.j)});
   });
   function bfs(s){var d=nodes.map(function(){return -1}),prev=[],q=[s];d[s]=0;
    while(q.length){var u=q.shift();nodes[u].adj.forEach(function(v){if(d[v]<0){d[v]=d[u]+1;prev[v]=u;q.push(v)}})}
    return{d:d,prev:prev}}
   function pathTo(s,t){var r=bfs(s),p=[t];while(p[0]!==s&&r.prev[p[0]]!==undefined)p.unshift(r.prev[p[0]]);return p}
   var start=0,bug=0,path=[0],p=0,phase="scan",pt=0,verified=[],lit=[0];
   function nextRun(){
    var r=bfs(start),c=[];
    r.d.forEach(function(d,i){if(d>=3&&d<=7&&verified.indexOf(i)<0)c.push(i)});
    var free=c.filter(function(i){var x=nodes[i].x*W,y=nodes[i].y*H;return !(x>tb.l&&x<tb.r&&y>tb.t&&y<tb.b)});
    if(free.length)c=free;
    if(!c.length)r.d.forEach(function(d,i){if(d>0)c.push(i)});
    bug=c[Math.floor(Math.random()*c.length)];path=pathTo(start,bug);p=0;phase="scan";pt=0;lit=[start];
   }
   function colors(){var s=getComputedStyle(document.documentElement);
    ["accent","muted","surface","pass","bug"].forEach(function(k){col[k]=s.getPropertyValue("--"+k).trim()})}
   function size(){dpr=Math.min(window.devicePixelRatio||1,2);W=cv.clientWidth;H=cv.clientHeight;var tx=document.querySelector(".hero .wrap>div"),cr=cv.getBoundingClientRect(),tr=tx.getBoundingClientRect();tb={l:tr.left-cr.left-24,r:tr.right-cr.left+24,t:tr.top-cr.top-24,b:tr.bottom-cr.top+24};cv.width=W*dpr;cv.height=H*dpr}
   function pos(i,t){var n=nodes[i];return[(n.x+Math.sin(t*n.f+n.p)*.008)*W,(n.y+Math.cos(t*n.f*.8+n.p)*.02)*H]}
   function step(dt){
    pt+=dt;
    if(phase==="scan"){p+=dt*2.2;var idx=Math.max(0,Math.min(Math.floor(p),path.length-1));lit=path.slice(0,idx+1);
     if(p>=path.length-1){phase="found";pt=0}}
    else if(phase==="found"){if(pt>2){phase="fixed";pt=0}}
    else if(pt>1.4){verified.push(bug);if(verified.length>5)verified.shift();start=bug;nextRun()}
   }
   function draw(t){
    ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,W,H);
    var P=nodes.map(function(_,i){return pos(i,t)}),i;
    ctx.globalAlpha=.28;ctx.lineWidth=1;ctx.strokeStyle=col.muted;ctx.beginPath();
    edges.forEach(function(e){ctx.moveTo(P[e[0]][0],P[e[0]][1]);ctx.lineTo(P[e[1]][0],P[e[1]][1])});ctx.stroke();
    ctx.globalAlpha=1;ctx.strokeStyle=col.accent;ctx.lineWidth=2;ctx.beginPath();
    for(i=0;i<lit.length-1;i++){ctx.moveTo(P[lit[i]][0],P[lit[i]][1]);ctx.lineTo(P[lit[i+1]][0],P[lit[i+1]][1])}
    var hx=0,hy=0,head=false;
    if(phase==="scan"&&lit.length<path.length){
     var a=P[lit[lit.length-1]],b=P[path[lit.length]],f=p-(lit.length-1);
     hx=a[0]+(b[0]-a[0])*f;hy=a[1]+(b[1]-a[1])*f;head=true;ctx.moveTo(a[0],a[1]);ctx.lineTo(hx,hy);
    }
    ctx.stroke();
    for(i=0;i<nodes.length;i++){
     var isBug=i===bug&&phase!=="scan",fill=col.surface,plain=true,r=4.5;
     if(verified.indexOf(i)>=0){fill=col.pass;plain=false}
     if(lit.indexOf(i)>=0){fill=col.accent;plain=false}
     if(isBug){fill=phase==="found"?col.bug:col.pass;r=7;plain=false}
     ctx.beginPath();ctx.arc(P[i][0],P[i][1],r,0,6.283);ctx.fillStyle=fill;ctx.fill();
     ctx.globalAlpha=plain?.55:1;ctx.lineWidth=1.5;ctx.strokeStyle=plain?col.muted:fill;ctx.stroke();ctx.globalAlpha=1;
    }
    if(head){ctx.globalAlpha=.25;ctx.fillStyle=col.accent;ctx.beginPath();ctx.arc(hx,hy,13,0,6.283);ctx.fill();
     ctx.globalAlpha=1;ctx.beginPath();ctx.arc(hx,hy,4.5,0,6.283);ctx.fill()}
    if(phase!=="scan"){
     var q=P[bug],c=phase==="found"?col.bug:col.pass,right=q[0]>W*.8;
     if(phase==="found"){var k=(pt%.9)/.9;ctx.globalAlpha=1-k;ctx.strokeStyle=col.bug;ctx.lineWidth=2;
      ctx.beginPath();ctx.arc(q[0],q[1],9+k*28,0,6.283);ctx.stroke();ctx.globalAlpha=1}
     ctx.font="500 12px 'IBM Plex Mono',ui-monospace,monospace";ctx.fillStyle=c;ctx.textAlign=right?"right":"left";
     ctx.fillText(phase==="found"?"bug":"pass",q[0]+(right?-14:14),q[1]+4);
    }
   }
   var last=0,run=false;
   function frame(ts){
    if(!run)return;
    var dt=last?Math.max(0,Math.min((ts-last)/1000,.1)):0;last=ts;
    var r=cv.getBoundingClientRect();
    if(r.bottom>0&&r.top<innerHeight){step(dt);colors();draw(ts/1000)}
    requestAnimationFrame(frame)}
   size();colors();nextRun();
   if("ResizeObserver" in window)new ResizeObserver(size).observe(cv);else addEventListener("resize",size);
   run=true;last=0;requestAnimationFrame(frame);
  })();
  document.getElementById("year").textContent=new Date().getFullYear();
 })();