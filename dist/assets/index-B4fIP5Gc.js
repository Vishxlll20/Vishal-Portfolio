var Pm=Object.defineProperty;var Lm=(r,t,e)=>t in r?Pm(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Dt=(r,t,e)=>Lm(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const Eu={profile:{name:"Vishal Kumar",monogram:"VK",tagline:"Software Developer & AI Engineer",status:"Open for Opportunities",location:"Jamshedpur, Jharkhand",email:"vishalk785032@gmail.com",phone:"9955129528",summary:"Software Developer with strong foundations in Data Structures & Algorithms and problem-solving. Built scalable applications serving 1,700+ employees at Tata Steel Foundation. Experienced in React.js, Node.js, modern AI technologies, and open-source development.",links:[{label:"LinkedIn",href:"https://www.linkedin.com/in/vishal-kumar9/"},{label:"GitHub",href:"https://github.com/Vishxlll20"},{label:"LeetCode",href:"https://leetcode.com/u/Vishxlll20/"},{label:"GeeksforGeeks",href:"https://www.geeksforgeeks.org/profile/vishxlll20"}]},chapters:[{id:"origin",index:"01",navLabel:"Origin",eyebrow:"01 / ORIGIN — JAMSHEDPUR",title:"Every system starts with a single question.",subtitle:"Vishal Kumar · Software & AI Engineer",description:"Scroll to follow my journey in real time: walking through school foundations, cycling across campus to R.V.S. College of Engineering & Technology, and sitting down at my studio desk to ship full-stack and AI products.",highlights:["1,700+ Users Served","50+ Countries Hackathon Finalist","200+ DSA Problems"]},{id:"school",index:"02",navLabel:"School",eyebrow:"02 / DAV PUBLIC SCHOOL",title:"Where curiosity turned into foundational science & code.",subtitle:"Basic Physics, Chemistry, Maths · Basic Python & Java",description:"Walking through DAV Public School built my core analytical habits—learning basic Physics, Chemistry, and Mathematics alongside my first steps in basic Python and Java coding.",highlights:["Physics, Chemistry & Maths","Basic Python","Basic Java & Logic"]},{id:"college",index:"03",navLabel:"College",eyebrow:"03 / R.V.S. COLLEGE OF ENGG & TECH",title:"Pedaling into engineering, open source & global competition.",subtitle:"B.Tech in Computer Science & Engineering · 2023 – 2027 (CGPA: 6.8/10)",description:"Cycling to college marked the leap from theory to community impact: leading DSA culture as GeeksForGeeks Campus Mantri, shipping 25+ PRs in GSSoC ’26, and reaching the finals of a 50+ country innovation challenge.",highlights:[]},{id:"setup",index:"04",navLabel:"The Setup",eyebrow:"04 / AT THE STUDIO DESK",title:"What I mastered & build with every day.",subtitle:"Full-Stack Architecture · Distributed Backends · Agentic AI",description:"At the desk, ideas become resilient software—from motion-driven React & Next.js interfaces to multi-service Node.js/PostgreSQL/Redis backends and LangGraph/RAG AI pipelines.",highlights:[]},{id:"impact",index:"05",navLabel:"Work & Projects",eyebrow:"05 / WORK & SHIPPED PROJECTS",title:"Production engineering & flagship builds.",subtitle:"Tata Steel Foundation · LexAI · PulseWatch · Moodify",description:"Explore my industry internships and full-stack AI applications below, complete with live links, source code, and architecture breakdowns.",highlights:[]},{id:"contact",index:"06",navLabel:"Opportunities",eyebrow:"06 / NEXT CHAPTER",title:"Open for opportunities & ready to put knowledge into the real world.",subtitle:"Full-Stack Software Engineering · AI Systems · Product Engineering",description:"I am actively seeking Software Developer, Full-Stack, and AI Engineering opportunities where I can build high-impact products with great teams.",highlights:[]}],skills:[{group:"Languages",color:"#a3e635",items:["C++","Java","Python","JavaScript","TypeScript"]},{group:"Frontend & Motion",color:"#ffffff",items:["React.js","Next.js","Redux","Tailwind CSS","GSAP","Framer Motion"]},{group:"Backend & Systems",color:"#a3e635",items:["Node.js","Express.js","REST APIs","JWT Auth","Socket.io","Microservices"]},{group:"Data & Cloud",color:"#ffffff",items:["MongoDB","PostgreSQL","Redis","Docker","Git / GitHub","Linux","AWS"]},{group:"AI & Agents",color:"#a3e635",items:["Generative AI","LangChain","LangGraph","RAG"]}],experiences:[{id:"tsf-ai",role:"Artificial Intelligence Intern",company:"Tata Steel Foundation",period:"Mar 2026 – Jul 2026",location:"Jamshedpur, Jharkhand (Hybrid)",accent:"#a3e635",summary:"Engineered real-time English↔Hindi speech translation microservices and advised CSR AI initiatives.",points:["Built and benchmarked a bidirectional English↔Hindi real-time speech translator (faster-whisper, deep-translator, gTTS), measuring end-to-end latency and identifying the ASR stage as the primary bottleneck.","Migrated backend to a split Node.js/Express + Python microservice architecture deployed via Cloudflare Tunnel; proposed Azure AI Speech as a production scaling path.","Advised IT Lead on AI integration strategy for CSR initiatives, including a WhatsApp-based health triage assistant and a satellite-data watershed monitoring prototype."]},{id:"tsf-sde",role:"Software Developer Intern",company:"Tata Steel Foundation",period:"May 2025 – Jul 2025",location:"Jamshedpur, Jharkhand (On-site)",accent:"#a3e635",summary:"Built an enterprise intranet platform using React.js and SQL serving 1,000+ employees across 5 core modules.",points:["Engineered scalable internal intranet platform using React.js and SQL, streamlining communication and information flow across 1,000+ employees (1,700+ total across platforms).","Architected and delivered 5 core modules including About Us, Policies, News, Communication Center, and People Corner.","Analyzed and validated large-scale datasets using SQL, maintaining 100% data accuracy and consistency across the intranet portal database."]}],projects:[{id:"lexai",index:"01",title:"LexAI — AI Legal Research & Drafting",period:"Mar 2026 – Present",accent:"#a3e635",stack:["Next.js 16","TypeScript","Express.js","PostgreSQL","Redis","Claude AI"],summary:"4 AI agent pipelines for legal research, drafting, compliance & case analysis with Indian Kanoon citation verification, 20+ REST APIs, BullMQ queues, and Razorpay billing.",metrics:["4 AI Agent Pipelines","20+ REST APIs","11 Modular Services"],frontendUrl:"https://github.com/Vishxlll20/lexai-frontend",backendUrl:"https://github.com/Vishxlll20/lexai-backend",highlights:["Architected 4 AI agent pipelines (research, drafting, compliance, case analysis) using Anthropic Claude with hallucination checks against the Indian Kanoon API.","Engineered 20+ REST APIs across 11 modular services using TypeScript, Prisma/PostgreSQL, and Redis for WhatsApp workflows, voice transcription, and automated PDF/DOCX export.","Implemented JWT auth, Redis-backed rate limiting, tiered Razorpay subscriptions, and BullMQ background queues for async voice, PDF, and compliance processing.","Built the frontend with Next.js 16 / React 19, integrating a Tiptap rich text editor and Redux Toolkit."]},{id:"pulsewatch",index:"02",title:"PulseWatch — Real-Time Uptime Monitor",period:"Apr 2026 – Jun 2026",accent:"#a3e635",stack:["Node.js","React","MongoDB","Socket.io","JWT","Redis"],summary:"24/7 automated health-check monitor (15–3600s intervals) with 15+ REST APIs, RBAC, OTP reset, Socket.io alerts, and AI-driven incident analysis.",metrics:["15–3600s Health Checks","15+ REST APIs","Live Socket.io Alerts"],liveUrl:"https://pulsewatch-zeta.vercel.app/",githubUrl:"https://github.com/Vishxlll20/PulseWatch",highlights:["Built automated health checks at 15–3600s intervals supporting 24/7 availability and live status tracking.","Engineered 15+ REST APIs featuring JWT authentication, OTP password reset, RBAC, and Redis rate limiting.","Integrated Socket.io instant incident alerts paired with AI-driven root-cause incident summaries."]},{id:"moodify",index:"03",title:"Moodify — AI Mood Detection Music App",period:"Feb 2026 – Mar 2026",accent:"#a3e635",stack:["React.js","Node.js","MongoDB","Redis","MediaPipe","GSAP"],summary:"Full-stack facial-expression music recommender classifying 5 moods via MediaPipe with Redis caching, ImageKit CDN (-40% load time), and GSAP motion.",metrics:["5 Real-Time Moods","40% Faster Load","MediaPipe + GSAP"],liveUrl:"https://moodify-beige-kappa.vercel.app/",githubUrl:"https://github.com/Vishxlll20/Moodify",highlights:["Used MediaPipe computer vision to classify 5 user moods and serve tailored music recommendations.","Secured user accounts with JWT authentication and OTP verification.","Optimized asset delivery using Redis caching and ImageKit CDN, cutting asset load time by 40%."]}],achievements:[{title:"International Innovation Challenge — Finalist",org:"JSPM Pune",date:"Apr 2026",detail:"Finalist among teams from 50+ countries in a global technology hackathon."},{title:"Open Source Contributor — GSSoC ’26",org:"GirlScript Summer of Code",date:"May – Jul 2026",detail:"Merged a security fix for leaked credentials; 25+ PRs across 5 repositories."},{title:"Campus Mantri — GeeksForGeeks",org:"GeeksForGeeks",date:"May 2025 – May 2026",detail:"Promoted DSA & competitive programming; solved 200+ problems on GFG & LeetCode."},{title:"HackerRank SQL (Intermediate)",org:"HackerRank",date:"June 2026",detail:"Certified in intermediate relational database querying and optimization."}]};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ih="172",Dm=0,Tu=1,Im=2,Sd=1,Md=2,zi=3,yr=0,Nn=1,bi=2,pr=0,Os=1,wu=2,bu=3,Au=4,Um=5,Vr=100,Nm=101,Om=102,Fm=103,Bm=104,km=200,zm=201,Hm=202,Vm=203,Ec=204,Tc=205,Gm=206,Wm=207,Xm=208,Ym=209,qm=210,$m=211,Jm=212,Km=213,Zm=214,wc=0,bc=1,Ac=2,Ys=3,Rc=4,Cc=5,Pc=6,Lc=7,Ed=0,jm=1,Qm=2,mr=0,t_=1,e_=2,n_=3,Td=4,i_=5,r_=6,s_=7,wd=300,qs=301,$s=302,Dc=303,Ic=304,yl=306,Uc=1e3,Wr=1001,Nc=1002,Si=1003,o_=1004,sa=1005,Ri=1006,Rl=1007,Xr=1008,Ki=1009,bd=1010,Ad=1011,Vo=1012,Uh=1013,ns=1014,Xi=1015,ea=1016,Nh=1017,Oh=1018,Js=1020,Rd=35902,Cd=1021,Pd=1022,yi=1023,Ld=1024,Dd=1025,Fs=1026,Ks=1027,Id=1028,Fh=1029,Ud=1030,Bh=1031,kh=1033,Va=33776,Ga=33777,Wa=33778,Xa=33779,Oc=35840,Fc=35841,Bc=35842,kc=35843,zc=36196,Hc=37492,Vc=37496,Gc=37808,Wc=37809,Xc=37810,Yc=37811,qc=37812,$c=37813,Jc=37814,Kc=37815,Zc=37816,jc=37817,Qc=37818,th=37819,eh=37820,nh=37821,Ya=36492,ih=36494,rh=36495,Nd=36283,sh=36284,oh=36285,ah=36286,a_=3200,l_=3201,Od=0,c_=1,lr="",Dn="srgb",Zs="srgb-linear",il="linear",Me="srgb",cs=7680,Ru=519,h_=512,u_=513,f_=514,Fd=515,d_=516,p_=517,m_=518,__=519,Cu=35044,Pu="300 es",Yi=2e3,rl=2001;class so{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lu=1234567;const Ao=Math.PI/180,Go=180/Math.PI;function oo(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[r&255]+fn[r>>8&255]+fn[r>>16&255]+fn[r>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[e&63|128]+fn[e>>8&255]+"-"+fn[e>>16&255]+fn[e>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function se(r,t,e){return Math.max(t,Math.min(e,r))}function zh(r,t){return(r%t+t)%t}function g_(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function v_(r,t,e){return r!==t?(e-r)/(t-r):0}function Ro(r,t,e){return(1-e)*r+e*t}function x_(r,t,e,n){return Ro(r,t,1-Math.exp(-e*n))}function y_(r,t=1){return t-Math.abs(zh(r,t*2)-t)}function S_(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function M_(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function E_(r,t){return r+Math.floor(Math.random()*(t-r+1))}function T_(r,t){return r+Math.random()*(t-r)}function w_(r){return r*(.5-Math.random())}function b_(r){r!==void 0&&(Lu=r);let t=Lu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function A_(r){return r*Ao}function R_(r){return r*Go}function C_(r){return(r&r-1)===0&&r!==0}function P_(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function L_(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function D_(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),d=s((t-n)/2),u=o((t-n)/2),f=s((n-t)/2),_=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*d,l*u,a*c);break;case"YZY":r.set(l*u,a*h,l*d,a*c);break;case"ZXZ":r.set(l*d,l*u,a*h,a*c);break;case"XZX":r.set(a*h,l*_,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*_,a*c);break;case"ZYZ":r.set(l*_,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Rs(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Mn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const he={DEG2RAD:Ao,RAD2DEG:Go,generateUUID:oo,clamp:se,euclideanModulo:zh,mapLinear:g_,inverseLerp:v_,lerp:Ro,damp:x_,pingpong:y_,smoothstep:S_,smootherstep:M_,randInt:E_,randFloat:T_,randFloatSpread:w_,seededRandom:b_,degToRad:A_,radToDeg:R_,isPowerOfTwo:C_,ceilPowerOfTwo:P_,floorPowerOfTwo:L_,setQuaternionFromProperEuler:D_,normalize:Mn,denormalize:Rs};class Ct{constructor(t=0,e=0){Ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class te{constructor(t,e,n,i,s,o,a,l,c){te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],_=n[8],g=i[0],m=i[3],p=i[6],y=i[1],M=i[4],v=i[7],A=i[2],b=i[5],w=i[8];return s[0]=o*g+a*y+l*A,s[3]=o*m+a*M+l*b,s[6]=o*p+a*v+l*w,s[1]=c*g+h*y+d*A,s[4]=c*m+h*M+d*b,s[7]=c*p+h*v+d*w,s[2]=u*g+f*y+_*A,s[5]=u*m+f*M+_*b,s[8]=u*p+f*v+_*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*s,f=c*s-o*l,_=e*d+n*u+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=d*g,t[1]=(i*c-h*n)*g,t[2]=(a*n-i*o)*g,t[3]=u*g,t[4]=(h*e-i*l)*g,t[5]=(i*s-a*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Cl.makeScale(t,e)),this}rotate(t){return this.premultiply(Cl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Cl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Cl=new te;function Bd(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function sl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function I_(){const r=sl("canvas");return r.style.display="block",r}const Du={};function Cs(r){r in Du||(Du[r]=!0,console.warn(r))}function U_(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function N_(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function O_(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Iu=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uu=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function F_(){const r={enabled:!0,workingColorSpace:Zs,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Me&&(i.r=$i(i.r),i.g=$i(i.g),i.b=$i(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Me&&(i.r=Bs(i.r),i.g=Bs(i.g),i.b=Bs(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===lr?il:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Zs]:{primaries:t,whitePoint:n,transfer:il,toXYZ:Iu,fromXYZ:Uu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:t,whitePoint:n,transfer:Me,toXYZ:Iu,fromXYZ:Uu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}}),r}const _e=F_();function $i(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Bs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let hs;class B_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{hs===void 0&&(hs=sl("canvas")),hs.width=t.width,hs.height=t.height;const n=hs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=hs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=sl("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=$i(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($i(e[n]/255)*255):e[n]=$i(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let k_=0;class kd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=oo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Pl(i[o].image)):s.push(Pl(i[o]))}else s=Pl(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Pl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?B_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let z_=0;class Cn extends so{constructor(t=Cn.DEFAULT_IMAGE,e=Cn.DEFAULT_MAPPING,n=Wr,i=Wr,s=Ri,o=Xr,a=yi,l=Ki,c=Cn.DEFAULT_ANISOTROPY,h=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=oo(),this.name="",this.source=new kd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Uc:t.x=t.x-Math.floor(t.x);break;case Wr:t.x=t.x<0?0:1;break;case Nc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Uc:t.y=t.y-Math.floor(t.y);break;case Wr:t.y=t.y<0?0:1;break;case Nc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=wd;Cn.DEFAULT_ANISOTROPY=1;class we{constructor(t=0,e=0,n=0,i=1){we.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,v=(f+1)/2,A=(p+1)/2,b=(h+u)/4,w=(d+g)/4,C=(_+m)/4;return M>v&&M>A?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=b/n,s=w/n):v>A?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=b/i,s=C/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=w/s,i=C/s),this.set(n,i,s,e),this}let y=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(d-g)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class H_ extends so{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Cn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new kd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class is extends H_{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class zd extends Cn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Si,this.minFilter=Si,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class V_ extends Cn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Si,this.minFilter=Si,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class na{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=s[o+0],f=s[o+1],_=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(d!==g||l!==u||c!==f||h!==_){let m=1-a;const p=l*u+c*f+h*_+d*g,y=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const A=Math.sqrt(M),b=Math.atan2(A,p*y);m=Math.sin(m*b)/A,a=Math.sin(a*b)/A}const v=a*y;if(l=l*m+u*v,c=c*m+f*v,h=h*m+_*v,d=d*m+g*v,m===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=A,c*=A,h*=A,d*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[o],u=s[o+1],f=s[o+2],_=s[o+3];return t[e]=a*_+h*d+l*f-c*u,t[e+1]=l*_+h*u+c*d-a*f,t[e+2]=c*_+h*f+a*u-l*d,t[e+3]=h*_-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(s/2),u=l(n/2),f=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"YXZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"ZXY":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"ZYX":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"YZX":this._x=u*h*d+c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d-u*f*_;break;case"XZY":this._x=u*h*d-c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d+u*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=i+l*d+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ll.copy(this).projectOnVector(t),this.sub(Ll)}reflect(t){return this.sub(Ll.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ll=new N,Nu=new na;class ia{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(mi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(mi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=mi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,mi):mi.fromBufferAttribute(s,o),mi.applyMatrix4(t.matrixWorld),this.expandByPoint(mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oa.copy(n.boundingBox)),oa.applyMatrix4(t.matrixWorld),this.union(oa)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mi),mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ho),aa.subVectors(this.max,ho),us.subVectors(t.a,ho),fs.subVectors(t.b,ho),ds.subVectors(t.c,ho),Qi.subVectors(fs,us),tr.subVectors(ds,fs),Rr.subVectors(us,ds);let e=[0,-Qi.z,Qi.y,0,-tr.z,tr.y,0,-Rr.z,Rr.y,Qi.z,0,-Qi.x,tr.z,0,-tr.x,Rr.z,0,-Rr.x,-Qi.y,Qi.x,0,-tr.y,tr.x,0,-Rr.y,Rr.x,0];return!Dl(e,us,fs,ds,aa)||(e=[1,0,0,0,1,0,0,0,1],!Dl(e,us,fs,ds,aa))?!1:(la.crossVectors(Qi,tr),e=[la.x,la.y,la.z],Dl(e,us,fs,ds,aa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ni=[new N,new N,new N,new N,new N,new N,new N,new N],mi=new N,oa=new ia,us=new N,fs=new N,ds=new N,Qi=new N,tr=new N,Rr=new N,ho=new N,aa=new N,la=new N,Cr=new N;function Dl(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Cr.fromArray(r,s);const a=i.x*Math.abs(Cr.x)+i.y*Math.abs(Cr.y)+i.z*Math.abs(Cr.z),l=t.dot(Cr),c=e.dot(Cr),h=n.dot(Cr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const G_=new ia,uo=new N,Il=new N;class Sl{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):G_.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;uo.subVectors(t,this.center);const e=uo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(uo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Il.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(uo.copy(t.center).add(Il)),this.expandByPoint(uo.copy(t.center).sub(Il))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Oi=new N,Ul=new N,ca=new N,er=new N,Nl=new N,ha=new N,Ol=new N;class Hh{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Oi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Oi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Oi.copy(this.origin).addScaledVector(this.direction,e),Oi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ul.copy(t).add(e).multiplyScalar(.5),ca.copy(e).sub(t).normalize(),er.copy(this.origin).sub(Ul);const s=t.distanceTo(e)*.5,o=-this.direction.dot(ca),a=er.dot(this.direction),l=-er.dot(ca),c=er.lengthSq(),h=Math.abs(1-o*o);let d,u,f,_;if(h>0)if(d=o*l-a,u=o*a-l,_=s*h,d>=0)if(u>=-_)if(u<=_){const g=1/h;d*=g,u*=g,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-_?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=_?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ul).addScaledVector(ca,u),f}intersectSphere(t,e){Oi.subVectors(t.center,this.origin);const n=Oi.dot(this.direction),i=Oi.dot(Oi)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Oi)!==null}intersectTriangle(t,e,n,i,s){Nl.subVectors(e,t),ha.subVectors(n,t),Ol.crossVectors(Nl,ha);let o=this.direction.dot(Ol),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;er.subVectors(this.origin,t);const l=a*this.direction.dot(ha.crossVectors(er,ha));if(l<0)return null;const c=a*this.direction.dot(Nl.cross(er));if(c<0||l+c>o)return null;const h=-a*er.dot(Ol);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pe{constructor(t,e,n,i,s,o,a,l,c,h,d,u,f,_,g,m){Pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,d,u,f,_,g,m)}set(t,e,n,i,s,o,a,l,c,h,d,u,f,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ps.setFromMatrixColumn(t,0).length(),s=1/ps.setFromMatrixColumn(t,1).length(),o=1/ps.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=o*h,f=o*d,_=a*h,g=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+_*c,e[5]=u-g*c,e[9]=-a*l,e[2]=g-u*c,e[6]=_+f*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,_=c*h,g=c*d;e[0]=u+g*a,e[4]=_*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-_,e[6]=g+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,_=c*h,g=c*d;e[0]=u-g*a,e[4]=-o*d,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*h,e[9]=g-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,f=o*d,_=a*h,g=a*d;e[0]=l*h,e[4]=_*c-f,e[8]=u*c+g,e[1]=l*d,e[5]=g*c+u,e[9]=f*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=g-u*d,e[8]=_*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+_,e[10]=u-g*d}else if(t.order==="XZY"){const u=o*l,f=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+g,e[5]=o*h,e[9]=f*d-_,e[2]=_*d-f,e[6]=a*h,e[10]=g*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(W_,t,X_)}lookAt(t,e,n){const i=this.elements;return Gn.subVectors(t,e),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),nr.crossVectors(n,Gn),nr.lengthSq()===0&&(Math.abs(n.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),nr.crossVectors(n,Gn)),nr.normalize(),ua.crossVectors(Gn,nr),i[0]=nr.x,i[4]=ua.x,i[8]=Gn.x,i[1]=nr.y,i[5]=ua.y,i[9]=Gn.y,i[2]=nr.z,i[6]=ua.z,i[10]=Gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],y=n[3],M=n[7],v=n[11],A=n[15],b=i[0],w=i[4],C=i[8],S=i[12],x=i[1],P=i[5],U=i[9],F=i[13],z=i[2],Y=i[6],H=i[10],X=i[14],V=i[3],it=i[7],D=i[11],ht=i[15];return s[0]=o*b+a*x+l*z+c*V,s[4]=o*w+a*P+l*Y+c*it,s[8]=o*C+a*U+l*H+c*D,s[12]=o*S+a*F+l*X+c*ht,s[1]=h*b+d*x+u*z+f*V,s[5]=h*w+d*P+u*Y+f*it,s[9]=h*C+d*U+u*H+f*D,s[13]=h*S+d*F+u*X+f*ht,s[2]=_*b+g*x+m*z+p*V,s[6]=_*w+g*P+m*Y+p*it,s[10]=_*C+g*U+m*H+p*D,s[14]=_*S+g*F+m*X+p*ht,s[3]=y*b+M*x+v*z+A*V,s[7]=y*w+M*P+v*Y+A*it,s[11]=y*C+M*U+v*H+A*D,s[15]=y*S+M*F+v*X+A*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+s*l*d-i*c*d-s*a*u+n*c*u+i*a*f-n*l*f)+g*(+e*l*f-e*c*u+s*o*u-i*o*f+i*c*h-s*l*h)+m*(+e*c*d-e*a*f-s*o*d+n*o*f+s*a*h-n*c*h)+p*(-i*a*h-e*l*d+e*a*u+i*o*d-n*o*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],_=t[12],g=t[13],m=t[14],p=t[15],y=d*m*c-g*u*c+g*l*f-a*m*f-d*l*p+a*u*p,M=_*u*c-h*m*c-_*l*f+o*m*f+h*l*p-o*u*p,v=h*g*c-_*d*c+_*a*f-o*g*f-h*a*p+o*d*p,A=_*d*l-h*g*l-_*a*u+o*g*u+h*a*m-o*d*m,b=e*y+n*M+i*v+s*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=y*w,t[1]=(g*u*s-d*m*s-g*i*f+n*m*f+d*i*p-n*u*p)*w,t[2]=(a*m*s-g*l*s+g*i*c-n*m*c-a*i*p+n*l*p)*w,t[3]=(d*l*s-a*u*s-d*i*c+n*u*c+a*i*f-n*l*f)*w,t[4]=M*w,t[5]=(h*m*s-_*u*s+_*i*f-e*m*f-h*i*p+e*u*p)*w,t[6]=(_*l*s-o*m*s-_*i*c+e*m*c+o*i*p-e*l*p)*w,t[7]=(o*u*s-h*l*s+h*i*c-e*u*c-o*i*f+e*l*f)*w,t[8]=v*w,t[9]=(_*d*s-h*g*s-_*n*f+e*g*f+h*n*p-e*d*p)*w,t[10]=(o*g*s-_*a*s+_*n*c-e*g*c-o*n*p+e*a*p)*w,t[11]=(h*a*s-o*d*s-h*n*c+e*d*c+o*n*f-e*a*f)*w,t[12]=A*w,t[13]=(h*g*i-_*d*i+_*n*u-e*g*u-h*n*m+e*d*m)*w,t[14]=(_*a*i-o*g*i-_*n*l+e*g*l+o*n*m-e*a*m)*w,t[15]=(o*d*i-h*a*i+h*n*l-e*d*l-o*n*u+e*a*u)*w,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,d=a+a,u=s*c,f=s*h,_=s*d,g=o*h,m=o*d,p=a*d,y=l*c,M=l*h,v=l*d,A=n.x,b=n.y,w=n.z;return i[0]=(1-(g+p))*A,i[1]=(f+v)*A,i[2]=(_-M)*A,i[3]=0,i[4]=(f-v)*b,i[5]=(1-(u+p))*b,i[6]=(m+y)*b,i[7]=0,i[8]=(_+M)*w,i[9]=(m-y)*w,i[10]=(1-(u+g))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ps.set(i[0],i[1],i[2]).length();const o=ps.set(i[4],i[5],i[6]).length(),a=ps.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],_i.copy(this);const c=1/s,h=1/o,d=1/a;return _i.elements[0]*=c,_i.elements[1]*=c,_i.elements[2]*=c,_i.elements[4]*=h,_i.elements[5]*=h,_i.elements[6]*=h,_i.elements[8]*=d,_i.elements[9]*=d,_i.elements[10]*=d,e.setFromRotationMatrix(_i),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Yi){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let f,_;if(a===Yi)f=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===rl)f=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Yi){const l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(o-s),u=(e+t)*c,f=(n+i)*h;let _,g;if(a===Yi)_=(o+s)*d,g=-2*d;else if(a===rl)_=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ps=new N,_i=new Pe,W_=new N(0,0,0),X_=new N(1,1,1),nr=new N,ua=new N,Gn=new N,Ou=new Pe,Fu=new na;class Di{constructor(t=0,e=0,n=0,i=Di.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ou.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ou,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fu.setFromEuler(this),this.setFromQuaternion(Fu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Di.DEFAULT_ORDER="XYZ";class Vh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Y_=0;const Bu=new N,ms=new na,Fi=new Pe,fa=new N,fo=new N,q_=new N,$_=new na,ku=new N(1,0,0),zu=new N(0,1,0),Hu=new N(0,0,1),Vu={type:"added"},J_={type:"removed"},_s={type:"childadded",child:null},Fl={type:"childremoved",child:null};class on extends so{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const t=new N,e=new Di,n=new na,i=new N(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pe},normalMatrix:{value:new te}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.multiply(ms),this}rotateOnWorldAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.premultiply(ms),this}rotateX(t){return this.rotateOnAxis(ku,t)}rotateY(t){return this.rotateOnAxis(zu,t)}rotateZ(t){return this.rotateOnAxis(Hu,t)}translateOnAxis(t,e){return Bu.copy(t).applyQuaternion(this.quaternion),this.position.add(Bu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ku,t)}translateY(t){return this.translateOnAxis(zu,t)}translateZ(t){return this.translateOnAxis(Hu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fa.copy(t):fa.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(fo,fa,this.up):Fi.lookAt(fa,fo,this.up),this.quaternion.setFromRotationMatrix(Fi),i&&(Fi.extractRotation(i.matrixWorld),ms.setFromRotationMatrix(Fi),this.quaternion.premultiply(ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vu),_s.child=t,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(J_),Fl.child=t,this.dispatchEvent(Fl),Fl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vu),_s.child=t,this.dispatchEvent(_s),_s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,t,q_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,$_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}on.DEFAULT_UP=new N(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new N,Bi=new N,Bl=new N,ki=new N,gs=new N,vs=new N,Gu=new N,kl=new N,zl=new N,Hl=new N,Vl=new we,Gl=new we,Wl=new we;class xi{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),gi.subVectors(t,e),i.cross(gi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){gi.subVectors(i,e),Bi.subVectors(n,e),Bl.subVectors(t,e);const o=gi.dot(gi),a=gi.dot(Bi),l=gi.dot(Bl),c=Bi.dot(Bi),h=Bi.dot(Bl),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,_=(o*h-a*l)*u;return s.set(1-f-_,_,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ki.x),l.addScaledVector(o,ki.y),l.addScaledVector(a,ki.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Vl.setScalar(0),Gl.setScalar(0),Wl.setScalar(0),Vl.fromBufferAttribute(t,e),Gl.fromBufferAttribute(t,n),Wl.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Vl,s.x),o.addScaledVector(Gl,s.y),o.addScaledVector(Wl,s.z),o}static isFrontFacing(t,e,n,i){return gi.subVectors(n,e),Bi.subVectors(t,e),gi.cross(Bi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gi.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),gi.cross(Bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return xi.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return xi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;gs.subVectors(i,n),vs.subVectors(s,n),kl.subVectors(t,n);const l=gs.dot(kl),c=vs.dot(kl);if(l<=0&&c<=0)return e.copy(n);zl.subVectors(t,i);const h=gs.dot(zl),d=vs.dot(zl);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(gs,o);Hl.subVectors(t,s);const f=gs.dot(Hl),_=vs.dot(Hl);if(_>=0&&f<=_)return e.copy(s);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(vs,a);const m=h*_-f*d;if(m<=0&&d-h>=0&&f-_>=0)return Gu.subVectors(s,i),a=(d-h)/(d-h+(f-_)),e.copy(i).addScaledVector(Gu,a);const p=1/(m+g+u);return o=g*p,a=u*p,e.copy(n).addScaledVector(gs,o).addScaledVector(vs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},da={h:0,s:0,l:0};function Xl(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class ue{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=_e.workingColorSpace){return this.r=t,this.g=e,this.b=n,_e.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=_e.workingColorSpace){if(t=zh(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Xl(o,s,t+1/3),this.g=Xl(o,s,t),this.b=Xl(o,s,t-1/3)}return _e.toWorkingColorSpace(this,i),this}setStyle(t,e=Dn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Dn){const n=Hd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}copyLinearToSRGB(t){return this.r=Bs(t.r),this.g=Bs(t.g),this.b=Bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Dn){return _e.fromWorkingColorSpace(dn.copy(this),t),Math.round(se(dn.r*255,0,255))*65536+Math.round(se(dn.g*255,0,255))*256+Math.round(se(dn.b*255,0,255))}getHexString(t=Dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.fromWorkingColorSpace(dn.copy(this),e);const n=dn.r,i=dn.g,s=dn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=_e.workingColorSpace){return _e.fromWorkingColorSpace(dn.copy(this),e),t.r=dn.r,t.g=dn.g,t.b=dn.b,t}getStyle(t=Dn){_e.fromWorkingColorSpace(dn.copy(this),t);const e=dn.r,n=dn.g,i=dn.b;return t!==Dn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ir),this.setHSL(ir.h+t,ir.s+e,ir.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ir),t.getHSL(da);const n=Ro(ir.h,da.h,e),i=Ro(ir.s,da.s,e),s=Ro(ir.l,da.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new ue;ue.NAMES=Hd;let K_=0;class ao extends so{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=oo(),this.name="",this.type="Material",this.blending=Os,this.side=yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ec,this.blendDst=Tc,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(n.blending=this.blending),this.side!==yr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ec&&(n.blendSrc=this.blendSrc),this.blendDst!==Tc&&(n.blendDst=this.blendDst),this.blendEquation!==Vr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ru&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vi extends ao{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=Ed,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const We=new N,pa=new Ct;class Mi{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Cu,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)pa.fromBufferAttribute(this,e),pa.applyMatrix3(t),this.setXY(e,pa.x,pa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Rs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Rs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Mn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Rs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Mn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Rs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Mn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Rs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Mn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Mn(e,this.array),n=Mn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Mn(e,this.array),n=Mn(n,this.array),i=Mn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Mn(e,this.array),n=Mn(n,this.array),i=Mn(i,this.array),s=Mn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Cu&&(t.usage=this.usage),t}}class Vd extends Mi{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Gd extends Mi{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class je extends Mi{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Z_=0;const oi=new Pe,Yl=new on,xs=new N,Wn=new ia,po=new ia,en=new N;class ni extends so{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bd(t)?Gd:Vd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new te().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return oi.makeRotationFromQuaternion(t),this.applyMatrix4(oi),this}rotateX(t){return oi.makeRotationX(t),this.applyMatrix4(oi),this}rotateY(t){return oi.makeRotationY(t),this.applyMatrix4(oi),this}rotateZ(t){return oi.makeRotationZ(t),this.applyMatrix4(oi),this}translate(t,e,n){return oi.makeTranslation(t,e,n),this.applyMatrix4(oi),this}scale(t,e,n){return oi.makeScale(t,e,n),this.applyMatrix4(oi),this}lookAt(t){return Yl.lookAt(t),Yl.updateMatrix(),this.applyMatrix4(Yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new je(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ia);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Wn.setFromBufferAttribute(s),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Wn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];po.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Wn.min,po.min),Wn.expandByPoint(en),en.addVectors(Wn.max,po.max),Wn.expandByPoint(en)):(Wn.expandByPoint(po.min),Wn.expandByPoint(po.max))}Wn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)en.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(en));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)en.fromBufferAttribute(a,c),l&&(xs.fromBufferAttribute(t,c),en.add(xs)),i=Math.max(i,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new N,l[C]=new N;const c=new N,h=new N,d=new N,u=new Ct,f=new Ct,_=new Ct,g=new N,m=new N;function p(C,S,x){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,x),u.fromBufferAttribute(s,C),f.fromBufferAttribute(s,S),_.fromBufferAttribute(s,x),h.sub(c),d.sub(c),f.sub(u),_.sub(u);const P=1/(f.x*_.y-_.x*f.y);isFinite(P)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(P),a[C].add(g),a[S].add(g),a[x].add(g),l[C].add(m),l[S].add(m),l[x].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,S=y.length;C<S;++C){const x=y[C],P=x.start,U=x.count;for(let F=P,z=P+U;F<z;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const M=new N,v=new N,A=new N,b=new N;function w(C){A.fromBufferAttribute(i,C),b.copy(A);const S=a[C];M.copy(S),M.sub(A.multiplyScalar(A.dot(S))).normalize(),v.crossVectors(b,S);const P=v.dot(l[C])<0?-1:1;o.setXYZW(C,M.x,M.y,M.z,P)}for(let C=0,S=y.length;C<S;++C){const x=y[C],P=x.start,U=x.count;for(let F=P,z=P+U;F<z;F+=3)w(t.getX(F+0)),w(t.getX(F+1)),w(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new N,s=new N,o=new N,a=new N,l=new N,c=new N,h=new N,d=new N;if(t)for(let u=0,f=t.count;u<f;u+=3){const _=t.getX(u+0),g=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)en.fromBufferAttribute(t,e),en.normalize(),t.setXYZ(e,en.x,en.y,en.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let p=0;p<h;p++)u[_++]=c[f++]}return new Mi(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ni,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wu=new Pe,Pr=new Hh,ma=new Sl,Xu=new N,_a=new N,ga=new N,va=new N,ql=new N,xa=new N,Yu=new N,ya=new N;class at extends on{constructor(t=new ni,e=new Vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){xa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],d=s[l];h!==0&&(ql.fromBufferAttribute(d,t),o?xa.addScaledVector(ql,h):xa.addScaledVector(ql.sub(e),h))}e.add(xa)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(s),Pr.copy(t.ray).recast(t.near),!(ma.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(ma,Xu)===null||Pr.origin.distanceToSquared(Xu)>(t.far-t.near)**2))&&(Wu.copy(s).invert(),Pr.copy(t.ray).applyMatrix4(Wu),!(n.boundingBox!==null&&Pr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pr)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=u.length;_<g;_++){const m=u[_],p=o[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,A=M;v<A;v+=3){const b=a.getX(v),w=a.getX(v+1),C=a.getX(v+2);i=Sa(this,p,t,n,c,h,d,b,w,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const y=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);i=Sa(this,o,t,n,c,h,d,y,M,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=u.length;_<g;_++){const m=u[_],p=o[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,A=M;v<A;v+=3){const b=v,w=v+1,C=v+2;i=Sa(this,p,t,n,c,h,d,b,w,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const y=m,M=m+1,v=m+2;i=Sa(this,o,t,n,c,h,d,y,M,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function j_(r,t,e,n,i,s,o,a){let l;if(t.side===Nn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===yr,a),l===null)return null;ya.copy(a),ya.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(ya);return c<e.near||c>e.far?null:{distance:c,point:ya.clone(),object:r}}function Sa(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,_a),r.getVertexPosition(l,ga),r.getVertexPosition(c,va);const h=j_(r,t,e,n,_a,ga,va,Yu);if(h){const d=new N;xi.getBarycoord(Yu,_a,ga,va,d),i&&(h.uv=xi.getInterpolatedAttribute(i,a,l,c,d,new Ct)),s&&(h.uv1=xi.getInterpolatedAttribute(s,a,l,c,d,new Ct)),o&&(h.normal=xi.getInterpolatedAttribute(o,a,l,c,d,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new N,materialIndex:0};xi.getNormal(_a,ga,va,u.normal),h.face=u,h.barycoord=d}return h}class ce extends ni{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(d,2));function _(g,m,p,y,M,v,A,b,w,C,S){const x=v/w,P=A/C,U=v/2,F=A/2,z=b/2,Y=w+1,H=C+1;let X=0,V=0;const it=new N;for(let D=0;D<H;D++){const ht=D*P-F;for(let Ut=0;Ut<Y;Ut++){const Kt=Ut*x-U;it[g]=Kt*y,it[m]=ht*M,it[p]=z,c.push(it.x,it.y,it.z),it[g]=0,it[m]=0,it[p]=b>0?1:-1,h.push(it.x,it.y,it.z),d.push(Ut/w),d.push(1-D/C),X+=1}}for(let D=0;D<C;D++)for(let ht=0;ht<w;ht++){const Ut=u+ht+Y*D,Kt=u+ht+Y*(D+1),J=u+(ht+1)+Y*(D+1),st=u+(ht+1)+Y*D;l.push(Ut,Kt,st),l.push(Kt,J,st),V+=6}a.addGroup(f,V,S),f+=V,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ce(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function js(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Tn(r){const t={};for(let e=0;e<r.length;e++){const n=js(r[e]);for(const i in n)t[i]=n[i]}return t}function Q_(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Wd(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}const tg={clone:js,merge:Tn};var eg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ng=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sr extends ao{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eg,this.fragmentShader=ng,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=js(t.uniforms),this.uniformsGroups=Q_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Xd extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=Yi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rr=new N,qu=new Ct,$u=new Ct;class $n extends Xd{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Go*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ao*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Go*2*Math.atan(Math.tan(Ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(rr.x,rr.y).multiplyScalar(-t/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rr.x,rr.y).multiplyScalar(-t/rr.z)}getViewSize(t,e){return this.getViewBounds(t,qu,$u),e.subVectors($u,qu)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ao*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ys=-90,Ss=1;class ig extends on{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $n(ys,Ss,t,e);i.layers=this.layers,this.add(i);const s=new $n(ys,Ss,t,e);s.layers=this.layers,this.add(s);const o=new $n(ys,Ss,t,e);o.layers=this.layers,this.add(o);const a=new $n(ys,Ss,t,e);a.layers=this.layers,this.add(a);const l=new $n(ys,Ss,t,e);l.layers=this.layers,this.add(l);const c=new $n(ys,Ss,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Yi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===rl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Yd extends Cn{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:qs,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class rg extends is{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Yd(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ri}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ce(5,5,5),s=new Sr({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nn,blending:pr});s.uniforms.tEquirect.value=e;const o=new at(i,s),a=e.minFilter;return e.minFilter===Xr&&(e.minFilter=Ri),new ig(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}class Gh{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ue(t),this.density=e}clone(){return new Gh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class sg extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const $l=new N,og=new N,ag=new te;class Or{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=$l.subVectors(n,e).cross(og.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta($l),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ag.getNormalMatrix(t),i=this.coplanarPoint($l).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Lr=new Sl,Ma=new N;class Wh{constructor(t=new Or,e=new Or,n=new Or,i=new Or,s=new Or,o=new Or){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Yi){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],f=i[8],_=i[9],g=i[10],m=i[11],p=i[12],y=i[13],M=i[14],v=i[15];if(n[0].setComponents(l-s,u-c,m-f,v-p).normalize(),n[1].setComponents(l+s,u+c,m+f,v+p).normalize(),n[2].setComponents(l+o,u+h,m+_,v+y).normalize(),n[3].setComponents(l-o,u-h,m-_,v-y).normalize(),n[4].setComponents(l-a,u-d,m-g,v-M).normalize(),e===Yi)n[5].setComponents(l+a,u+d,m+g,v+M).normalize();else if(e===rl)n[5].setComponents(a,d,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Lr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Lr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(t){return Lr.center.set(0,0,0),Lr.radius=.7071067811865476,Lr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ma.x=i.normal.x>0?t.max.x:t.min.x,Ma.y=i.normal.y>0?t.max.y:t.min.y,Ma.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ma)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qd extends ao{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ju=new Pe,lh=new Hh,Ea=new Sl,Ta=new N;class lg extends on{constructor(t=new ni,e=new qd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(i),Ea.radius+=s,t.ray.intersectsSphere(Ea)===!1)return;Ju.copy(i).invert(),lh.copy(t.ray).applyMatrix4(Ju);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let _=u,g=f;_<g;_++){const m=c.getX(_);Ta.fromBufferAttribute(d,m),Ku(Ta,m,l,i,t,e,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let _=u,g=f;_<g;_++)Ta.fromBufferAttribute(d,_),Ku(Ta,_,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ku(r,t,e,n,i,s,o){const a=lh.distanceSqToPoint(r);if(a<e){const l=new N;lh.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Ee extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}class $d extends Cn{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Jd extends Cn{constructor(t,e,n,i,s,o,a,l,c,h=Fs){if(h!==Fs&&h!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Fs&&(n=ns),n===void 0&&h===Ks&&(n=Js),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Si,this.minFilter=l!==void 0?l:Si,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ui{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new Ct:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new N,i=[],s=[],o=[],a=new N,l=new Pe;for(let f=0;f<=t;f++){const _=f/t;i[f]=this.getTangentAt(_,new N)}s[0]=new N,o[0]=new N;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(se(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,_))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(se(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],f*_)),o[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Xh extends Ui{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Ct){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class cg extends Xh{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Yh(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,d){let u=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,i(o,a,u,f)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const wa=new N,Jl=new Yh,Kl=new Yh,Zl=new Yh;class hg extends Ui{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new N){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(wa.subVectors(i[0],i[1]).add(i[0]),c=wa);const d=i[a%s],u=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(wa.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=wa),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),Jl.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,_,g,m),Kl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,_,g,m),Zl.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,_,g,m)}else this.curveType==="catmullrom"&&(Jl.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Kl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Zl.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Jl.calc(l),Kl.calc(l),Zl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new N().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Zu(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function ug(r,t){const e=1-r;return e*e*t}function fg(r,t){return 2*(1-r)*r*t}function dg(r,t){return r*r*t}function Co(r,t,e,n){return ug(r,t)+fg(r,e)+dg(r,n)}function pg(r,t){const e=1-r;return e*e*e*t}function mg(r,t){const e=1-r;return 3*e*e*r*t}function _g(r,t){return 3*(1-r)*r*r*t}function gg(r,t){return r*r*r*t}function Po(r,t,e,n,i){return pg(r,t)+mg(r,e)+_g(r,n)+gg(r,i)}class Kd extends Ui{constructor(t=new Ct,e=new Ct,n=new Ct,i=new Ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Ct){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Po(t,i.x,s.x,o.x,a.x),Po(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class vg extends Ui{constructor(t=new N,e=new N,n=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new N){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Po(t,i.x,s.x,o.x,a.x),Po(t,i.y,s.y,o.y,a.y),Po(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Zd extends Ui{constructor(t=new Ct,e=new Ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xg extends Ui{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jd extends Ui{constructor(t=new Ct,e=new Ct,n=new Ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ct){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Co(t,i.x,s.x,o.x),Co(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yg extends Ui{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Co(t,i.x,s.x,o.x),Co(t,i.y,s.y,o.y),Co(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qd extends Ui{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ct){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(Zu(a,l.x,c.x,h.x,d.x),Zu(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Ct().fromArray(i))}return this}}var ju=Object.freeze({__proto__:null,ArcCurve:cg,CatmullRomCurve3:hg,CubicBezierCurve:Kd,CubicBezierCurve3:vg,EllipseCurve:Xh,LineCurve:Zd,LineCurve3:xg,QuadraticBezierCurve:jd,QuadraticBezierCurve3:yg,SplineCurve:Qd});class Sg extends Ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ju[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new ju[i.type]().fromJSON(i))}return this}}class Mg extends Sg{constructor(t){super(),this.type="Path",this.currentPoint=new Ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Zd(this.currentPoint.clone(),new Ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new jd(this.currentPoint.clone(),new Ct(t,e),new Ct(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new Kd(this.currentPoint.clone(),new Ct(t,e),new Ct(n,i),new Ct(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Qd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){const c=new Xh(t,e,n,i,s,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class qh extends ni{constructor(t=[new Ct(0,-.5),new Ct(.5,0),new Ct(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=se(i,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],h=1/e,d=new N,u=new Ct,f=new N,_=new N,g=new N;let m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(g.x,g.y,g.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),l.push(f.x,f.y,f.z),g.copy(_)}for(let y=0;y<=e;y++){const M=n+y*h*i,v=Math.sin(M),A=Math.cos(M);for(let b=0;b<=t.length-1;b++){d.x=t[b].x*v,d.y=t[b].y,d.z=t[b].x*A,o.push(d.x,d.y,d.z),u.x=y/e,u.y=b/(t.length-1),a.push(u.x,u.y);const w=l[3*b+0]*v,C=l[3*b+1],S=l[3*b+0]*A;c.push(w,C,S)}}for(let y=0;y<e;y++)for(let M=0;M<t.length-1;M++){const v=M+y*t.length,A=v,b=v+t.length,w=v+t.length+1,C=v+1;s.push(A,b,C),s.push(w,C,b)}this.setIndex(s),this.setAttribute("position",new je(o,3)),this.setAttribute("uv",new je(a,2)),this.setAttribute("normal",new je(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qh(t.points,t.segments,t.phiStart,t.phiLength)}}class ai extends qh{constructor(t=1,e=1,n=4,i=8){const s=new Mg;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new ai(t.radius,t.length,t.capSegments,t.radialSegments)}}class sn extends ni{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],u=[],f=[];let _=0;const g=[],m=n/2;let p=0;y(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new je(d,3)),this.setAttribute("normal",new je(u,3)),this.setAttribute("uv",new je(f,2));function y(){const v=new N,A=new N;let b=0;const w=(e-t)/n;for(let C=0;C<=s;C++){const S=[],x=C/s,P=x*(e-t)+t;for(let U=0;U<=i;U++){const F=U/i,z=F*l+a,Y=Math.sin(z),H=Math.cos(z);A.x=P*Y,A.y=-x*n+m,A.z=P*H,d.push(A.x,A.y,A.z),v.set(Y,w,H).normalize(),u.push(v.x,v.y,v.z),f.push(F,1-x),S.push(_++)}g.push(S)}for(let C=0;C<i;C++)for(let S=0;S<s;S++){const x=g[S][C],P=g[S+1][C],U=g[S+1][C+1],F=g[S][C+1];(t>0||S!==0)&&(h.push(x,P,F),b+=3),(e>0||S!==s-1)&&(h.push(P,U,F),b+=3)}c.addGroup(p,b,0),p+=b}function M(v){const A=_,b=new Ct,w=new N;let C=0;const S=v===!0?t:e,x=v===!0?1:-1;for(let U=1;U<=i;U++)d.push(0,m*x,0),u.push(0,x,0),f.push(.5,.5),_++;const P=_;for(let U=0;U<=i;U++){const z=U/i*l+a,Y=Math.cos(z),H=Math.sin(z);w.x=S*H,w.y=m*x,w.z=S*Y,d.push(w.x,w.y,w.z),u.push(0,x,0),b.x=Y*.5+.5,b.y=H*.5*x+.5,f.push(b.x,b.y),_++}for(let U=0;U<i;U++){const F=A+U,z=P+U;v===!0?h.push(z,z+1,F):h.push(z+1,z,F),C+=3}c.addGroup(p,C,v===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $h extends sn{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new $h(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $r extends ni{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],_=[],g=[],m=[];for(let p=0;p<h;p++){const y=p*u-o;for(let M=0;M<c;M++){const v=M*d-s;_.push(v,-y,0),g.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const M=y+c*p,v=y+c*(p+1),A=y+1+c*(p+1),b=y+1+c*p;f.push(M,v,b),f.push(v,A,b)}this.setIndex(f),this.setAttribute("position",new je(_,3)),this.setAttribute("normal",new je(g,3)),this.setAttribute("uv",new je(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $r(t.width,t.height,t.widthSegments,t.heightSegments)}}class cn extends ni{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new N,u=new N,f=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const y=[],M=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){const b=A/e;d.x=-t*Math.cos(i+b*s)*Math.sin(o+M*a),d.y=t*Math.cos(o+M*a),d.z=t*Math.sin(i+b*s)*Math.sin(o+M*a),_.push(d.x,d.y,d.z),u.copy(d).normalize(),g.push(u.x,u.y,u.z),m.push(b+v,1-M),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const M=h[p][y+1],v=h[p][y],A=h[p+1][y],b=h[p+1][y+1];(p!==0||o>0)&&f.push(M,v,b),(p!==n-1||l<Math.PI)&&f.push(v,A,b)}this.setIndex(f),this.setAttribute("position",new je(_,3)),this.setAttribute("normal",new je(g,3)),this.setAttribute("uv",new je(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ol extends ni{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new N,d=new N,u=new N;for(let f=0;f<=n;f++)for(let _=0;_<=i;_++){const g=_/i*s,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(g),d.y=(t+e*Math.cos(m))*Math.sin(g),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(_/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=i;_++){const g=(i+1)*f+_-1,m=(i+1)*(f-1)+_-1,p=(i+1)*(f-1)+_,y=(i+1)*f+_;o.push(g,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new je(a,3)),this.setAttribute("normal",new je(l,3)),this.setAttribute("uv",new je(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ol(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class kt extends ao{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Od,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Eg extends ao{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=a_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Tg extends ao{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Jh extends on{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ue(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class wg extends Jh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ue(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const jl=new Pe,Qu=new N,tf=new N;class tp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wh,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Qu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qu),tf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(tf),e.updateMatrixWorld(),jl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ef=new Pe,mo=new N,Ql=new N;class bg extends tp{constructor(){super(new $n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ct(4,2),this._viewportCount=6,this._viewports=[new we(2,1,1,1),new we(0,1,1,1),new we(3,1,1,1),new we(1,1,1,1),new we(3,0,1,1),new we(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),mo.setFromMatrixPosition(t.matrixWorld),n.position.copy(mo),Ql.copy(n.position),Ql.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ql),n.updateMatrixWorld(),i.makeTranslation(-mo.x,-mo.y,-mo.z),ef.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ef)}}class Ag extends Jh{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new bg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ep extends Xd{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Rg extends tp{constructor(){super(new ep(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nf extends Jh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new Rg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Cg extends $n{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Pg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=rf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=rf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function rf(){return performance.now()}const sf=new Pe;class Lg{constructor(t,e,n=0,i=1/0){this.ray=new Hh(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Vh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return sf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sf),this}intersectObject(t,e=!0,n=[]){return ch(t,this,n,e),n.sort(of),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)ch(t[i],this,n,e);return n.sort(of),n}}function of(r,t){return r.distance-t.distance}function ch(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)ch(s[o],t,e,!0)}}function af(r,t,e,n){const i=Dg(n);switch(e){case Cd:return r*t;case Ld:return r*t;case Dd:return r*t*2;case Id:return r*t/i.components*i.byteLength;case Fh:return r*t/i.components*i.byteLength;case Ud:return r*t*2/i.components*i.byteLength;case Bh:return r*t*2/i.components*i.byteLength;case Pd:return r*t*3/i.components*i.byteLength;case yi:return r*t*4/i.components*i.byteLength;case kh:return r*t*4/i.components*i.byteLength;case Va:case Ga:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Wa:case Xa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Fc:case kc:return Math.max(r,16)*Math.max(t,8)/4;case Oc:case Bc:return Math.max(r,8)*Math.max(t,8)/2;case zc:case Hc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Vc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Gc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Wc:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Xc:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Yc:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case qc:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case $c:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Jc:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Kc:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Zc:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case jc:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Qc:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case th:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case eh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case nh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Ya:case ih:case rh:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Nd:case sh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case oh:case ah:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Dg(r){switch(r){case Ki:case bd:return{byteLength:1,components:1};case Vo:case Ad:case ea:return{byteLength:2,components:1};case Nh:case Oh:return{byteLength:2,components:4};case ns:case Uh:case Xi:return{byteLength:4,components:1};case Rd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ih}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ih);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function np(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Ig(r){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,_)=>f.start-_.start);let u=0;for(let f=1;f<d.length;f++){const _=d[u],g=d[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++u,d[u]=g)}d.length=u+1;for(let f=0,_=d.length;f<_;f++){const g=d[f];r.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Ug=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ng=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Og=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Gg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$g=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Kg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,t0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,e0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,n0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,i0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,r0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,s0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,o0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,a0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,c0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,h0="gl_FragColor = linearToOutputTexel( gl_FragColor );",u0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,f0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,d0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,p0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,m0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,g0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,v0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,x0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,y0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,S0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,M0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,E0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,T0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,w0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,b0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,A0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,R0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,C0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,P0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,L0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,D0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,I0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,U0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,N0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,O0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,F0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,z0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,H0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,V0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,G0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Y0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,q0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,K0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,j0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ev=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,iv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ov=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,av=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_v=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Sv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ev=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Av=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Rv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Dv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Iv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Uv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ov=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Hv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Vv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$v=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ex=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ix=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ox=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ax=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ux=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ee={alphahash_fragment:Ug,alphahash_pars_fragment:Ng,alphamap_fragment:Og,alphamap_pars_fragment:Fg,alphatest_fragment:Bg,alphatest_pars_fragment:kg,aomap_fragment:zg,aomap_pars_fragment:Hg,batching_pars_vertex:Vg,batching_vertex:Gg,begin_vertex:Wg,beginnormal_vertex:Xg,bsdfs:Yg,iridescence_fragment:qg,bumpmap_pars_fragment:$g,clipping_planes_fragment:Jg,clipping_planes_pars_fragment:Kg,clipping_planes_pars_vertex:Zg,clipping_planes_vertex:jg,color_fragment:Qg,color_pars_fragment:t0,color_pars_vertex:e0,color_vertex:n0,common:i0,cube_uv_reflection_fragment:r0,defaultnormal_vertex:s0,displacementmap_pars_vertex:o0,displacementmap_vertex:a0,emissivemap_fragment:l0,emissivemap_pars_fragment:c0,colorspace_fragment:h0,colorspace_pars_fragment:u0,envmap_fragment:f0,envmap_common_pars_fragment:d0,envmap_pars_fragment:p0,envmap_pars_vertex:m0,envmap_physical_pars_fragment:b0,envmap_vertex:_0,fog_vertex:g0,fog_pars_vertex:v0,fog_fragment:x0,fog_pars_fragment:y0,gradientmap_pars_fragment:S0,lightmap_pars_fragment:M0,lights_lambert_fragment:E0,lights_lambert_pars_fragment:T0,lights_pars_begin:w0,lights_toon_fragment:A0,lights_toon_pars_fragment:R0,lights_phong_fragment:C0,lights_phong_pars_fragment:P0,lights_physical_fragment:L0,lights_physical_pars_fragment:D0,lights_fragment_begin:I0,lights_fragment_maps:U0,lights_fragment_end:N0,logdepthbuf_fragment:O0,logdepthbuf_pars_fragment:F0,logdepthbuf_pars_vertex:B0,logdepthbuf_vertex:k0,map_fragment:z0,map_pars_fragment:H0,map_particle_fragment:V0,map_particle_pars_fragment:G0,metalnessmap_fragment:W0,metalnessmap_pars_fragment:X0,morphinstance_vertex:Y0,morphcolor_vertex:q0,morphnormal_vertex:$0,morphtarget_pars_vertex:J0,morphtarget_vertex:K0,normal_fragment_begin:Z0,normal_fragment_maps:j0,normal_pars_fragment:Q0,normal_pars_vertex:tv,normal_vertex:ev,normalmap_pars_fragment:nv,clearcoat_normal_fragment_begin:iv,clearcoat_normal_fragment_maps:rv,clearcoat_pars_fragment:sv,iridescence_pars_fragment:ov,opaque_fragment:av,packing:lv,premultiplied_alpha_fragment:cv,project_vertex:hv,dithering_fragment:uv,dithering_pars_fragment:fv,roughnessmap_fragment:dv,roughnessmap_pars_fragment:pv,shadowmap_pars_fragment:mv,shadowmap_pars_vertex:_v,shadowmap_vertex:gv,shadowmask_pars_fragment:vv,skinbase_vertex:xv,skinning_pars_vertex:yv,skinning_vertex:Sv,skinnormal_vertex:Mv,specularmap_fragment:Ev,specularmap_pars_fragment:Tv,tonemapping_fragment:wv,tonemapping_pars_fragment:bv,transmission_fragment:Av,transmission_pars_fragment:Rv,uv_pars_fragment:Cv,uv_pars_vertex:Pv,uv_vertex:Lv,worldpos_vertex:Dv,background_vert:Iv,background_frag:Uv,backgroundCube_vert:Nv,backgroundCube_frag:Ov,cube_vert:Fv,cube_frag:Bv,depth_vert:kv,depth_frag:zv,distanceRGBA_vert:Hv,distanceRGBA_frag:Vv,equirect_vert:Gv,equirect_frag:Wv,linedashed_vert:Xv,linedashed_frag:Yv,meshbasic_vert:qv,meshbasic_frag:$v,meshlambert_vert:Jv,meshlambert_frag:Kv,meshmatcap_vert:Zv,meshmatcap_frag:jv,meshnormal_vert:Qv,meshnormal_frag:tx,meshphong_vert:ex,meshphong_frag:nx,meshphysical_vert:ix,meshphysical_frag:rx,meshtoon_vert:sx,meshtoon_frag:ox,points_vert:ax,points_frag:lx,shadow_vert:cx,shadow_frag:hx,sprite_vert:ux,sprite_frag:fx},xt={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},wi={basic:{uniforms:Tn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:Tn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new ue(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:Tn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:Tn([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:Tn([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new ue(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:Tn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:Tn([xt.points,xt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:Tn([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:Tn([xt.common,xt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:Tn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:Tn([xt.sprite,xt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:Tn([xt.common,xt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:Tn([xt.lights,xt.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};wi.physical={uniforms:Tn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const ba={r:0,b:0,g:0},Dr=new Di,dx=new Pe;function px(r,t,e,n,i,s,o){const a=new ue(0);let l=s===!0?0:1,c,h,d=null,u=0,f=null;function _(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function g(M){let v=!1;const A=_(M);A===null?p(a,l):A&&A.isColor&&(p(A,1),v=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(M,v){const A=_(v);A&&(A.isCubeTexture||A.mapping===yl)?(h===void 0&&(h=new at(new ce(1,1,1),new Sr({name:"BackgroundCubeMaterial",uniforms:js(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Dr.copy(v.backgroundRotation),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(dx.makeRotationFromEuler(Dr)),h.material.toneMapped=_e.getTransfer(A.colorSpace)!==Me,(d!==A||u!==A.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,d=A,u=A.version,f=r.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new at(new $r(2,2),new Sr({name:"BackgroundMaterial",uniforms:js(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:yr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=_e.getTransfer(A.colorSpace)!==Me,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||u!==A.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,d=A,u=A.version,f=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,v){M.getRGB(ba,Wd(r)),n.buffers.color.setClear(ba.r,ba.g,ba.b,v,o)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:g,addToRenderList:m,dispose:y}}function mx(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null);let s=i,o=!1;function a(x,P,U,F,z){let Y=!1;const H=d(F,U,P);s!==H&&(s=H,c(s.object)),Y=f(x,F,U,z),Y&&_(x,F,U,z),z!==null&&t.update(z,r.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,v(x,P,U,F),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return r.createVertexArray()}function c(x){return r.bindVertexArray(x)}function h(x){return r.deleteVertexArray(x)}function d(x,P,U){const F=U.wireframe===!0;let z=n[x.id];z===void 0&&(z={},n[x.id]=z);let Y=z[P.id];Y===void 0&&(Y={},z[P.id]=Y);let H=Y[F];return H===void 0&&(H=u(l()),Y[F]=H),H}function u(x){const P=[],U=[],F=[];for(let z=0;z<e;z++)P[z]=0,U[z]=0,F[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:F,object:x,attributes:{},index:null}}function f(x,P,U,F){const z=s.attributes,Y=P.attributes;let H=0;const X=U.getAttributes();for(const V in X)if(X[V].location>=0){const D=z[V];let ht=Y[V];if(ht===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(ht=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(ht=x.instanceColor)),D===void 0||D.attribute!==ht||ht&&D.data!==ht.data)return!0;H++}return s.attributesNum!==H||s.index!==F}function _(x,P,U,F){const z={},Y=P.attributes;let H=0;const X=U.getAttributes();for(const V in X)if(X[V].location>=0){let D=Y[V];D===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(D=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(D=x.instanceColor));const ht={};ht.attribute=D,D&&D.data&&(ht.data=D.data),z[V]=ht,H++}s.attributes=z,s.attributesNum=H,s.index=F}function g(){const x=s.newAttributes;for(let P=0,U=x.length;P<U;P++)x[P]=0}function m(x){p(x,0)}function p(x,P){const U=s.newAttributes,F=s.enabledAttributes,z=s.attributeDivisors;U[x]=1,F[x]===0&&(r.enableVertexAttribArray(x),F[x]=1),z[x]!==P&&(r.vertexAttribDivisor(x,P),z[x]=P)}function y(){const x=s.newAttributes,P=s.enabledAttributes;for(let U=0,F=P.length;U<F;U++)P[U]!==x[U]&&(r.disableVertexAttribArray(U),P[U]=0)}function M(x,P,U,F,z,Y,H){H===!0?r.vertexAttribIPointer(x,P,U,z,Y):r.vertexAttribPointer(x,P,U,F,z,Y)}function v(x,P,U,F){g();const z=F.attributes,Y=U.getAttributes(),H=P.defaultAttributeValues;for(const X in Y){const V=Y[X];if(V.location>=0){let it=z[X];if(it===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(it=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(it=x.instanceColor)),it!==void 0){const D=it.normalized,ht=it.itemSize,Ut=t.get(it);if(Ut===void 0)continue;const Kt=Ut.buffer,J=Ut.type,st=Ut.bytesPerElement,dt=J===r.INT||J===r.UNSIGNED_INT||it.gpuType===Uh;if(it.isInterleavedBufferAttribute){const rt=it.data,Tt=rt.stride,bt=it.offset;if(rt.isInstancedInterleavedBuffer){for(let Wt=0;Wt<V.locationSize;Wt++)p(V.location+Wt,rt.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Wt=0;Wt<V.locationSize;Wt++)m(V.location+Wt);r.bindBuffer(r.ARRAY_BUFFER,Kt);for(let Wt=0;Wt<V.locationSize;Wt++)M(V.location+Wt,ht/V.locationSize,J,D,Tt*st,(bt+ht/V.locationSize*Wt)*st,dt)}else{if(it.isInstancedBufferAttribute){for(let rt=0;rt<V.locationSize;rt++)p(V.location+rt,it.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let rt=0;rt<V.locationSize;rt++)m(V.location+rt);r.bindBuffer(r.ARRAY_BUFFER,Kt);for(let rt=0;rt<V.locationSize;rt++)M(V.location+rt,ht/V.locationSize,J,D,ht*st,ht/V.locationSize*rt*st,dt)}}else if(H!==void 0){const D=H[X];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(V.location,D);break;case 3:r.vertexAttrib3fv(V.location,D);break;case 4:r.vertexAttrib4fv(V.location,D);break;default:r.vertexAttrib1fv(V.location,D)}}}}y()}function A(){C();for(const x in n){const P=n[x];for(const U in P){const F=P[U];for(const z in F)h(F[z].object),delete F[z];delete P[U]}delete n[x]}}function b(x){if(n[x.id]===void 0)return;const P=n[x.id];for(const U in P){const F=P[U];for(const z in F)h(F[z].object),delete F[z];delete P[U]}delete n[x.id]}function w(x){for(const P in n){const U=n[P];if(U[x.id]===void 0)continue;const F=U[x.id];for(const z in F)h(F[z].object),delete F[z];delete U[x.id]}}function C(){S(),o=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:m,disableUnusedAttributes:y}}function _x(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(r.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let _=0;_<d;_++)f+=h[_];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],h[_],u[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let _=0;for(let g=0;g<d;g++)_+=h[g]*u[g];e.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function gx(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==yi&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const C=w===ea&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Ki&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Xi&&!C)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,b=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:A,maxSamples:b}}function vx(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Or,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,p=r.get(d);if(!i||_===null||_.length===0||s&&!m)s?h(null):c();else{const y=s?0:n,M=y*4;let v=p.clippingState||null;l.value=v,v=h(_,u,M,f);for(let A=0;A!==M;++A)v[A]=e[A];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,_){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=f+g*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=f;M!==g;++M,v+=4)o.copy(d[M]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function xx(r){let t=new WeakMap;function e(o,a){return a===Dc?o.mapping=qs:a===Ic&&(o.mapping=$s),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Dc||a===Ic)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new rg(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Ds=4,lf=[.125,.215,.35,.446,.526,.582],Gr=20,tc=new ep,cf=new ue;let ec=null,nc=0,ic=0,rc=!1;const Fr=(1+Math.sqrt(5))/2,Ms=1/Fr,hf=[new N(-Fr,Ms,0),new N(Fr,Ms,0),new N(-Ms,0,Fr),new N(Ms,0,Fr),new N(0,Fr,-Ms),new N(0,Fr,Ms),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class uf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ec=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=df(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ec,nc,ic),this._renderer.xr.enabled=rc,t.scissorTest=!1,Aa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qs||t.mapping===$s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ec=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:ea,format:yi,colorSpace:Zs,depthBuffer:!1},i=ff(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ff(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yx(s)),this._blurMaterial=Sx(s,t,e)}return i}_compileMaterial(t){const e=new at(this._lodPlanes[0],t);this._renderer.compile(e,tc)}_sceneToCubeUV(t,e,n,i){const a=new $n(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(cf),h.toneMapping=mr,h.autoClear=!1;const f=new Vi({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),_=new at(new ce,f);let g=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,g=!0):(f.color.copy(cf),g=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const M=this._cubeSize;Aa(i,y*M,p>2?M:0,M,M),h.setRenderTarget(i),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===qs||t.mapping===$s;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=pf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=df());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new at(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Aa(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,tc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=hf[(i-s-1)%hf.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new at(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Gr-1),g=s/_,m=isFinite(s)?1+Math.floor(h*g):Gr;m>Gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gr}`);const p=[];let y=0;for(let w=0;w<Gr;++w){const C=w/g,S=Math.exp(-C*C/2);p.push(S),w===0?y+=S:w<m&&(y+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:M}=this;u.dTheta.value=_,u.mipInt.value=M-n;const v=this._sizeLods[i],A=3*v*(i>M-Ds?i-M+Ds:0),b=4*(this._cubeSize-v);Aa(e,A,b,3*v,2*v),l.setRenderTarget(e),l.render(d,tc)}}function yx(r){const t=[],e=[],n=[];let i=r;const s=r-Ds+1+lf.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Ds?l=lf[o-r+Ds-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,_=6,g=3,m=2,p=1,y=new Float32Array(g*_*f),M=new Float32Array(m*_*f),v=new Float32Array(p*_*f);for(let b=0;b<f;b++){const w=b%3*2/3-1,C=b>2?0:-1,S=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];y.set(S,g*_*b),M.set(u,m*_*b);const x=[b,b,b,b,b,b];v.set(x,p*_*b)}const A=new ni;A.setAttribute("position",new Mi(y,g)),A.setAttribute("uv",new Mi(M,m)),A.setAttribute("faceIndex",new Mi(v,p)),t.push(A),i>Ds&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ff(r,t,e){const n=new is(r,t,e);return n.texture.mapping=yl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Aa(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Sx(r,t,e){const n=new Float32Array(Gr),i=new N(0,1,0);return new Sr({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function df(){return new Sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function pf(){return new Sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Kh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Mx(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Dc||l===Ic,h=l===qs||l===$s;if(c||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new uf(r)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new uf(r)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Ex(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Cs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Tx(r,t,e,n){const i={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",o),delete i[u.id];const f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)t.update(u[f],r.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,_=d.attributes.position;let g=0;if(f!==null){const y=f.array;g=f.version;for(let M=0,v=y.length;M<v;M+=3){const A=y[M+0],b=y[M+1],w=y[M+2];u.push(A,b,b,w,w,A)}}else if(_!==void 0){const y=_.array;g=_.version;for(let M=0,v=y.length/3-1;M<v;M+=3){const A=M+0,b=M+1,w=M+2;u.push(A,b,b,w,w,A)}}else return;const m=new(Bd(u)?Gd:Vd)(u,1);m.version=g;const p=s.get(d);p&&t.remove(p),s.set(d,m)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function wx(r,t,e){let n;function i(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,f){r.drawElements(n,f,s,u*o),e.update(f,n,1)}function c(u,f,_){_!==0&&(r.drawElementsInstanced(n,f,s,u*o,_),e.update(f,n,_))}function h(u,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];e.update(m,n,1)}function d(u,f,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/o,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,u,0,g,0,_);let p=0;for(let y=0;y<_;y++)p+=f[y]*g[y];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function bx(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ax(r,t,e){const n=new WeakMap,i=new we;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let x=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var f=x;u!==void 0&&u.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;_===!0&&(v=1),g===!0&&(v=2),m===!0&&(v=3);let A=a.attributes.position.count*v,b=1;A>t.maxTextureSize&&(b=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const w=new Float32Array(A*b*4*d),C=new zd(w,A,b,d);C.type=Xi,C.needsUpdate=!0;const S=v*4;for(let P=0;P<d;P++){const U=p[P],F=y[P],z=M[P],Y=A*b*4*P;for(let H=0;H<U.count;H++){const X=H*S;_===!0&&(i.fromBufferAttribute(U,H),w[Y+X+0]=i.x,w[Y+X+1]=i.y,w[Y+X+2]=i.z,w[Y+X+3]=0),g===!0&&(i.fromBufferAttribute(F,H),w[Y+X+4]=i.x,w[Y+X+5]=i.y,w[Y+X+6]=i.z,w[Y+X+7]=0),m===!0&&(i.fromBufferAttribute(z,H),w[Y+X+8]=i.x,w[Y+X+9]=i.y,w[Y+X+10]=i.z,w[Y+X+11]=z.itemSize===4?i.w:1)}}u={count:d,texture:C,size:new Ct(A,b)},n.set(a,u),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function Rx(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const ip=new Cn,mf=new Jd(1,1),rp=new zd,sp=new V_,op=new Yd,_f=[],gf=[],vf=new Float32Array(16),xf=new Float32Array(9),yf=new Float32Array(4);function lo(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=_f[i];if(s===void 0&&(s=new Float32Array(i),_f[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Qe(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function tn(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Ml(r,t){let e=gf[t];e===void 0&&(e=new Int32Array(t),gf[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Cx(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Px(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;r.uniform2fv(this.addr,t),tn(e,t)}}function Lx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Qe(e,t))return;r.uniform3fv(this.addr,t),tn(e,t)}}function Dx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;r.uniform4fv(this.addr,t),tn(e,t)}}function Ix(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;yf.set(n),r.uniformMatrix2fv(this.addr,!1,yf),tn(e,n)}}function Ux(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;xf.set(n),r.uniformMatrix3fv(this.addr,!1,xf),tn(e,n)}}function Nx(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;vf.set(n),r.uniformMatrix4fv(this.addr,!1,vf),tn(e,n)}}function Ox(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Fx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;r.uniform2iv(this.addr,t),tn(e,t)}}function Bx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;r.uniform3iv(this.addr,t),tn(e,t)}}function kx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;r.uniform4iv(this.addr,t),tn(e,t)}}function zx(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Hx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;r.uniform2uiv(this.addr,t),tn(e,t)}}function Vx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;r.uniform3uiv(this.addr,t),tn(e,t)}}function Gx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;r.uniform4uiv(this.addr,t),tn(e,t)}}function Wx(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(mf.compareFunction=Fd,s=mf):s=ip,e.setTexture2D(t||s,i)}function Xx(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||sp,i)}function Yx(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||op,i)}function qx(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||rp,i)}function $x(r){switch(r){case 5126:return Cx;case 35664:return Px;case 35665:return Lx;case 35666:return Dx;case 35674:return Ix;case 35675:return Ux;case 35676:return Nx;case 5124:case 35670:return Ox;case 35667:case 35671:return Fx;case 35668:case 35672:return Bx;case 35669:case 35673:return kx;case 5125:return zx;case 36294:return Hx;case 36295:return Vx;case 36296:return Gx;case 35678:case 36198:case 36298:case 36306:case 35682:return Wx;case 35679:case 36299:case 36307:return Xx;case 35680:case 36300:case 36308:case 36293:return Yx;case 36289:case 36303:case 36311:case 36292:return qx}}function Jx(r,t){r.uniform1fv(this.addr,t)}function Kx(r,t){const e=lo(t,this.size,2);r.uniform2fv(this.addr,e)}function Zx(r,t){const e=lo(t,this.size,3);r.uniform3fv(this.addr,e)}function jx(r,t){const e=lo(t,this.size,4);r.uniform4fv(this.addr,e)}function Qx(r,t){const e=lo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function ty(r,t){const e=lo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function ey(r,t){const e=lo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function ny(r,t){r.uniform1iv(this.addr,t)}function iy(r,t){r.uniform2iv(this.addr,t)}function ry(r,t){r.uniform3iv(this.addr,t)}function sy(r,t){r.uniform4iv(this.addr,t)}function oy(r,t){r.uniform1uiv(this.addr,t)}function ay(r,t){r.uniform2uiv(this.addr,t)}function ly(r,t){r.uniform3uiv(this.addr,t)}function cy(r,t){r.uniform4uiv(this.addr,t)}function hy(r,t,e){const n=this.cache,i=t.length,s=Ml(e,i);Qe(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||ip,s[o])}function uy(r,t,e){const n=this.cache,i=t.length,s=Ml(e,i);Qe(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||sp,s[o])}function fy(r,t,e){const n=this.cache,i=t.length,s=Ml(e,i);Qe(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||op,s[o])}function dy(r,t,e){const n=this.cache,i=t.length,s=Ml(e,i);Qe(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||rp,s[o])}function py(r){switch(r){case 5126:return Jx;case 35664:return Kx;case 35665:return Zx;case 35666:return jx;case 35674:return Qx;case 35675:return ty;case 35676:return ey;case 5124:case 35670:return ny;case 35667:case 35671:return iy;case 35668:case 35672:return ry;case 35669:case 35673:return sy;case 5125:return oy;case 36294:return ay;case 36295:return ly;case 36296:return cy;case 35678:case 36198:case 36298:case 36306:case 35682:return hy;case 35679:case 36299:case 36307:return uy;case 35680:case 36300:case 36308:case 36293:return fy;case 36289:case 36303:case 36311:case 36292:return dy}}class my{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$x(e.type)}}class _y{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=py(e.type)}}class gy{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const sc=/(\w+)(\])?(\[|\.)?/g;function Sf(r,t){r.seq.push(t),r.map[t.id]=t}function vy(r,t,e){const n=r.name,i=n.length;for(sc.lastIndex=0;;){const s=sc.exec(n),o=sc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Sf(e,c===void 0?new my(a,r,t):new _y(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new gy(a),Sf(e,d)),e=d}}}class qa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);vy(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Mf(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const xy=37297;let yy=0;function Sy(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Ef=new te;function My(r){_e._getMatrix(Ef,_e.workingColorSpace,r);const t=`mat3( ${Ef.elements.map(e=>e.toFixed(4))} )`;switch(_e.getTransfer(r)){case il:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Tf(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Sy(r.getShaderSource(t),o)}else return i}function Ey(r,t){const e=My(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Ty(r,t){let e;switch(t){case t_:e="Linear";break;case e_:e="Reinhard";break;case n_:e="Cineon";break;case Td:e="ACESFilmic";break;case r_:e="AgX";break;case s_:e="Neutral";break;case i_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ra=new N;function wy(){_e.getLuminanceCoefficients(Ra);const r=Ra.x.toFixed(4),t=Ra.y.toFixed(4),e=Ra.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function by(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xo).join(`
`)}function Ay(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ry(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function xo(r){return r!==""}function wf(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bf(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Cy=/^[ \t]*#include +<([\w\d./]+)>/gm;function hh(r){return r.replace(Cy,Ly)}const Py=new Map;function Ly(r,t){let e=ee[t];if(e===void 0){const n=Py.get(t);if(n!==void 0)e=ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return hh(e)}const Dy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Af(r){return r.replace(Dy,Iy)}function Iy(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Rf(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Uy(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Sd?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Md?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===zi&&(t="SHADOWMAP_TYPE_VSM"),t}function Ny(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case qs:case $s:t="ENVMAP_TYPE_CUBE";break;case yl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Oy(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case $s:t="ENVMAP_MODE_REFRACTION";break}return t}function Fy(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ed:t="ENVMAP_BLENDING_MULTIPLY";break;case jm:t="ENVMAP_BLENDING_MIX";break;case Qm:t="ENVMAP_BLENDING_ADD";break}return t}function By(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ky(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Uy(e),c=Ny(e),h=Oy(e),d=Fy(e),u=By(e),f=by(e),_=Ay(s),g=i.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(xo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(xo).join(`
`),p.length>0&&(p+=`
`)):(m=[Rf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xo).join(`
`),p=[Rf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mr?"#define TONE_MAPPING":"",e.toneMapping!==mr?ee.tonemapping_pars_fragment:"",e.toneMapping!==mr?Ty("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,Ey("linearToOutputTexel",e.outputColorSpace),wy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xo).join(`
`)),o=hh(o),o=wf(o,e),o=bf(o,e),a=hh(a),a=wf(a,e),a=bf(a,e),o=Af(o),a=Af(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=y+m+o,v=y+p+a,A=Mf(i,i.VERTEX_SHADER,M),b=Mf(i,i.FRAGMENT_SHADER,v);i.attachShader(g,A),i.attachShader(g,b),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function w(P){if(r.debug.checkShaderErrors){const U=i.getProgramInfoLog(g).trim(),F=i.getShaderInfoLog(A).trim(),z=i.getShaderInfoLog(b).trim();let Y=!0,H=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,A,b);else{const X=Tf(i,A,"vertex"),V=Tf(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+X+`
`+V)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(F===""||z==="")&&(H=!1);H&&(P.diagnostics={runnable:Y,programLog:U,vertexShader:{log:F,prefix:m},fragmentShader:{log:z,prefix:p}})}i.deleteShader(A),i.deleteShader(b),C=new qa(i,g),S=Ry(i,g)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(g,xy)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yy++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=b,this}let zy=0;class Hy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Vy(t),e.set(t,n)),n}}class Vy{constructor(t){this.id=zy++,this.code=t,this.usedTimes=0}}function Gy(r,t,e,n,i,s,o){const a=new Vh,l=new Hy,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,x,P,U,F){const z=U.fog,Y=F.geometry,H=S.isMeshStandardMaterial?U.environment:null,X=(S.isMeshStandardMaterial?e:t).get(S.envMap||H),V=X&&X.mapping===yl?X.image.height:null,it=_[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const D=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ht=D!==void 0?D.length:0;let Ut=0;Y.morphAttributes.position!==void 0&&(Ut=1),Y.morphAttributes.normal!==void 0&&(Ut=2),Y.morphAttributes.color!==void 0&&(Ut=3);let Kt,J,st,dt;if(it){const St=wi[it];Kt=St.vertexShader,J=St.fragmentShader}else Kt=S.vertexShader,J=S.fragmentShader,l.update(S),st=l.getVertexShaderID(S),dt=l.getFragmentShaderID(S);const rt=r.getRenderTarget(),Tt=r.state.buffers.depth.getReversed(),bt=F.isInstancedMesh===!0,Wt=F.isBatchedMesh===!0,$t=!!S.map,et=!!S.matcap,tt=!!X,L=!!S.aoMap,Zt=!!S.lightMap,Ot=!!S.bumpMap,k=!!S.normalMap,yt=!!S.displacementMap,ae=!!S.emissiveMap,Rt=!!S.metalnessMap,R=!!S.roughnessMap,E=S.anisotropy>0,G=S.clearcoat>0,Q=S.dispersion>0,j=S.iridescence>0,K=S.sheen>0,pt=S.transmission>0,ct=E&&!!S.anisotropyMap,_t=G&&!!S.clearcoatMap,qt=G&&!!S.clearcoatNormalMap,ot=G&&!!S.clearcoatRoughnessMap,lt=j&&!!S.iridescenceMap,Bt=j&&!!S.iridescenceThicknessMap,Ft=K&&!!S.sheenColorMap,Mt=K&&!!S.sheenRoughnessMap,jt=!!S.specularMap,Vt=!!S.specularColorMap,de=!!S.specularIntensityMap,I=pt&&!!S.transmissionMap,ft=pt&&!!S.thicknessMap,$=!!S.gradientMap,Z=!!S.alphaMap,ut=S.alphaTest>0,mt=!!S.alphaHash,Gt=!!S.extensions;let pe=mr;S.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(pe=r.toneMapping);const Fe={shaderID:it,shaderType:S.type,shaderName:S.name,vertexShader:Kt,fragmentShader:J,defines:S.defines,customVertexShaderID:st,customFragmentShaderID:dt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Wt,batchingColor:Wt&&F._colorsTexture!==null,instancing:bt,instancingColor:bt&&F.instanceColor!==null,instancingMorph:bt&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:rt===null?r.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Zs,alphaToCoverage:!!S.alphaToCoverage,map:$t,matcap:et,envMap:tt,envMapMode:tt&&X.mapping,envMapCubeUVHeight:V,aoMap:L,lightMap:Zt,bumpMap:Ot,normalMap:k,displacementMap:u&&yt,emissiveMap:ae,normalMapObjectSpace:k&&S.normalMapType===c_,normalMapTangentSpace:k&&S.normalMapType===Od,metalnessMap:Rt,roughnessMap:R,anisotropy:E,anisotropyMap:ct,clearcoat:G,clearcoatMap:_t,clearcoatNormalMap:qt,clearcoatRoughnessMap:ot,dispersion:Q,iridescence:j,iridescenceMap:lt,iridescenceThicknessMap:Bt,sheen:K,sheenColorMap:Ft,sheenRoughnessMap:Mt,specularMap:jt,specularColorMap:Vt,specularIntensityMap:de,transmission:pt,transmissionMap:I,thicknessMap:ft,gradientMap:$,opaque:S.transparent===!1&&S.blending===Os&&S.alphaToCoverage===!1,alphaMap:Z,alphaTest:ut,alphaHash:mt,combine:S.combine,mapUv:$t&&g(S.map.channel),aoMapUv:L&&g(S.aoMap.channel),lightMapUv:Zt&&g(S.lightMap.channel),bumpMapUv:Ot&&g(S.bumpMap.channel),normalMapUv:k&&g(S.normalMap.channel),displacementMapUv:yt&&g(S.displacementMap.channel),emissiveMapUv:ae&&g(S.emissiveMap.channel),metalnessMapUv:Rt&&g(S.metalnessMap.channel),roughnessMapUv:R&&g(S.roughnessMap.channel),anisotropyMapUv:ct&&g(S.anisotropyMap.channel),clearcoatMapUv:_t&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:qt&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&g(S.sheenRoughnessMap.channel),specularMapUv:jt&&g(S.specularMap.channel),specularColorMapUv:Vt&&g(S.specularColorMap.channel),specularIntensityMapUv:de&&g(S.specularIntensityMap.channel),transmissionMapUv:I&&g(S.transmissionMap.channel),thicknessMapUv:ft&&g(S.thicknessMap.channel),alphaMapUv:Z&&g(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(k||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Y.attributes.uv&&($t||Z),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Tt,skinning:F.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:Ut,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:pe,decodeVideoTexture:$t&&S.map.isVideoTexture===!0&&_e.getTransfer(S.map.colorSpace)===Me,decodeVideoTextureEmissive:ae&&S.emissiveMap.isVideoTexture===!0&&_e.getTransfer(S.emissiveMap.colorSpace)===Me,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===bi,flipSided:S.side===Nn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Gt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&S.extensions.multiDraw===!0||Wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function p(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)x.push(P),x.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(y(x,S),M(x,S),x.push(r.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function y(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function M(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const x=_[S.type];let P;if(x){const U=wi[x];P=tg.clone(U.uniforms)}else P=S.uniforms;return P}function A(S,x){let P;for(let U=0,F=h.length;U<F;U++){const z=h[U];if(z.cacheKey===x){P=z,++P.usedTimes;break}}return P===void 0&&(P=new ky(r,x,S,s),h.push(P)),P}function b(S){if(--S.usedTimes===0){const x=h.indexOf(S);h[x]=h[h.length-1],h.pop(),S.destroy()}}function w(S){l.remove(S)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:b,releaseShaderCache:w,programs:h,dispose:C}}function Wy(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Xy(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Cf(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Pf(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,f,_,g,m){let p=r[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},r[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=_,p.renderOrder=d.renderOrder,p.z=g,p.group=m),t++,p}function a(d,u,f,_,g,m){const p=o(d,u,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(d,u,f,_,g,m){const p=o(d,u,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||Xy),n.length>1&&n.sort(u||Cf),i.length>1&&i.sort(u||Cf)}function h(){for(let d=t,u=r.length;d<u;d++){const f=r[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function Yy(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Pf,r.set(n,[o])):i>=s.length?(o=new Pf,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function qy(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new ue};break;case"SpotLight":e={position:new N,direction:new N,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new ue,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":e={color:new ue,position:new N,halfWidth:new N,halfHeight:new N};break}return r[t.id]=e,e}}}function $y(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Jy=0;function Ky(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Zy(r){const t=new qy,e=$y(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const i=new N,s=new Pe,o=new Pe;function a(c){let h=0,d=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,y=0,M=0,v=0,A=0,b=0,w=0;c.sort(Ky);for(let S=0,x=c.length;S<x;S++){const P=c[S],U=P.color,F=P.intensity,z=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=U.r*F,d+=U.g*F,u+=U.b*F;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],F);w++}else if(P.isDirectionalLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const X=P.shadow,V=e.get(P);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=P.shadow.matrix,y++}n.directional[f]=H,f++}else if(P.isSpotLight){const H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(U).multiplyScalar(F),H.distance=z,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[g]=H;const X=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,X.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[g]=X.matrix,P.castShadow){const V=e.get(P);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.spotShadow[g]=V,n.spotShadowMap[g]=Y,v++}g++}else if(P.isRectAreaLight){const H=t.get(P);H.color.copy(U).multiplyScalar(F),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=H,m++}else if(P.isPointLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const X=P.shadow,V=e.get(P);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,V.shadowCameraNear=X.camera.near,V.shadowCameraFar=X.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=Y,n.pointShadowMatrix[_]=P.shadow.matrix,M++}n.point[_]=H,_++}else if(P.isHemisphereLight){const H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(F),H.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[p]=H,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const C=n.hash;(C.directionalLength!==f||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==M||C.numSpotShadows!==v||C.numSpotMaps!==A||C.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=w,C.directionalLength=f,C.pointLength=_,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=M,C.numSpotShadows=v,C.numSpotMaps=A,C.numLightProbes=w,n.version=Jy++)}function l(c,h){let d=0,u=0,f=0,_=0,g=0;const m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const M=c[p];if(M.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(M.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const v=n.point[u];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Lf(r){const t=new Zy(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function jy(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new Lf(r),t.set(i,[a])):s>=o.length?(a=new Lf(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Qy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function eS(r,t,e){let n=new Wh;const i=new Ct,s=new Ct,o=new we,a=new Eg({depthPacking:l_}),l=new Tg,c={},h=e.maxTextureSize,d={[yr]:Nn,[Nn]:yr,[bi]:bi},u=new Sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:Qy,fragmentShader:tS}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const _=new ni;_.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new at(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sd;let p=this.type;this.render=function(b,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const S=r.getRenderTarget(),x=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),U=r.state;U.setBlending(pr),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const F=p!==zi&&this.type===zi,z=p===zi&&this.type!==zi;for(let Y=0,H=b.length;Y<H;Y++){const X=b[Y],V=X.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const it=V.getFrameExtents();if(i.multiply(it),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/it.x),i.x=s.x*it.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/it.y),i.y=s.y*it.y,V.mapSize.y=s.y)),V.map===null||F===!0||z===!0){const ht=this.type!==zi?{minFilter:Si,magFilter:Si}:{};V.map!==null&&V.map.dispose(),V.map=new is(i.x,i.y,ht),V.map.texture.name=X.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const D=V.getViewportCount();for(let ht=0;ht<D;ht++){const Ut=V.getViewport(ht);o.set(s.x*Ut.x,s.y*Ut.y,s.x*Ut.z,s.y*Ut.w),U.viewport(o),V.updateMatrices(X,ht),n=V.getFrustum(),v(w,C,V.camera,X,this.type)}V.isPointLightShadow!==!0&&this.type===zi&&y(V,C),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(S,x,P)};function y(b,w){const C=t.update(g);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new is(i.x,i.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(w,null,C,u,g,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(w,null,C,f,g,null)}function M(b,w,C,S){let x=null;const P=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)x=P;else if(x=C.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const U=x.uuid,F=w.uuid;let z=c[U];z===void 0&&(z={},c[U]=z);let Y=z[F];Y===void 0&&(Y=x.clone(),z[F]=Y,w.addEventListener("dispose",A)),x=Y}if(x.visible=w.visible,x.wireframe=w.wireframe,S===zi?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:d[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const U=r.properties.get(x);U.light=C}return x}function v(b,w,C,S,x){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===zi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const F=t.update(b),z=b.material;if(Array.isArray(z)){const Y=F.groups;for(let H=0,X=Y.length;H<X;H++){const V=Y[H],it=z[V.materialIndex];if(it&&it.visible){const D=M(b,it,S,x);b.onBeforeShadow(r,b,w,C,F,D,V),r.renderBufferDirect(C,null,F,D,b,V),b.onAfterShadow(r,b,w,C,F,D,V)}}}else if(z.visible){const Y=M(b,z,S,x);b.onBeforeShadow(r,b,w,C,F,Y,null),r.renderBufferDirect(C,null,F,Y,b,null),b.onAfterShadow(r,b,w,C,F,Y,null)}}const U=b.children;for(let F=0,z=U.length;F<z;F++)v(U[F],w,C,S,x)}function A(b){b.target.removeEventListener("dispose",A);for(const C in c){const S=c[C],x=b.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const nS={[wc]:bc,[Ac]:Pc,[Rc]:Lc,[Ys]:Cc,[bc]:wc,[Pc]:Ac,[Lc]:Rc,[Cc]:Ys};function iS(r,t){function e(){let I=!1;const ft=new we;let $=null;const Z=new we(0,0,0,0);return{setMask:function(ut){$!==ut&&!I&&(r.colorMask(ut,ut,ut,ut),$=ut)},setLocked:function(ut){I=ut},setClear:function(ut,mt,Gt,pe,Fe){Fe===!0&&(ut*=pe,mt*=pe,Gt*=pe),ft.set(ut,mt,Gt,pe),Z.equals(ft)===!1&&(r.clearColor(ut,mt,Gt,pe),Z.copy(ft))},reset:function(){I=!1,$=null,Z.set(-1,0,0,0)}}}function n(){let I=!1,ft=!1,$=null,Z=null,ut=null;return{setReversed:function(mt){if(ft!==mt){const Gt=t.get("EXT_clip_control");ft?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT);const pe=ut;ut=null,this.setClear(pe)}ft=mt},getReversed:function(){return ft},setTest:function(mt){mt?rt(r.DEPTH_TEST):Tt(r.DEPTH_TEST)},setMask:function(mt){$!==mt&&!I&&(r.depthMask(mt),$=mt)},setFunc:function(mt){if(ft&&(mt=nS[mt]),Z!==mt){switch(mt){case wc:r.depthFunc(r.NEVER);break;case bc:r.depthFunc(r.ALWAYS);break;case Ac:r.depthFunc(r.LESS);break;case Ys:r.depthFunc(r.LEQUAL);break;case Rc:r.depthFunc(r.EQUAL);break;case Cc:r.depthFunc(r.GEQUAL);break;case Pc:r.depthFunc(r.GREATER);break;case Lc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Z=mt}},setLocked:function(mt){I=mt},setClear:function(mt){ut!==mt&&(ft&&(mt=1-mt),r.clearDepth(mt),ut=mt)},reset:function(){I=!1,$=null,Z=null,ut=null,ft=!1}}}function i(){let I=!1,ft=null,$=null,Z=null,ut=null,mt=null,Gt=null,pe=null,Fe=null;return{setTest:function(St){I||(St?rt(r.STENCIL_TEST):Tt(r.STENCIL_TEST))},setMask:function(St){ft!==St&&!I&&(r.stencilMask(St),ft=St)},setFunc:function(St,Pt,Qt){($!==St||Z!==Pt||ut!==Qt)&&(r.stencilFunc(St,Pt,Qt),$=St,Z=Pt,ut=Qt)},setOp:function(St,Pt,Qt){(mt!==St||Gt!==Pt||pe!==Qt)&&(r.stencilOp(St,Pt,Qt),mt=St,Gt=Pt,pe=Qt)},setLocked:function(St){I=St},setClear:function(St){Fe!==St&&(r.clearStencil(St),Fe=St)},reset:function(){I=!1,ft=null,$=null,Z=null,ut=null,mt=null,Gt=null,pe=null,Fe=null}}}const s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],_=null,g=!1,m=null,p=null,y=null,M=null,v=null,A=null,b=null,w=new ue(0,0,0),C=0,S=!1,x=null,P=null,U=null,F=null,z=null;const Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,X=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=X>=1):V.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=X>=2);let it=null,D={};const ht=r.getParameter(r.SCISSOR_BOX),Ut=r.getParameter(r.VIEWPORT),Kt=new we().fromArray(ht),J=new we().fromArray(Ut);function st(I,ft,$,Z){const ut=new Uint8Array(4),mt=r.createTexture();r.bindTexture(I,mt),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Gt=0;Gt<$;Gt++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(ft,0,r.RGBA,1,1,Z,0,r.RGBA,r.UNSIGNED_BYTE,ut):r.texImage2D(ft+Gt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ut);return mt}const dt={};dt[r.TEXTURE_2D]=st(r.TEXTURE_2D,r.TEXTURE_2D,1),dt[r.TEXTURE_CUBE_MAP]=st(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[r.TEXTURE_2D_ARRAY]=st(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),dt[r.TEXTURE_3D]=st(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(r.DEPTH_TEST),o.setFunc(Ys),Ot(!1),k(Tu),rt(r.CULL_FACE),L(pr);function rt(I){h[I]!==!0&&(r.enable(I),h[I]=!0)}function Tt(I){h[I]!==!1&&(r.disable(I),h[I]=!1)}function bt(I,ft){return d[I]!==ft?(r.bindFramebuffer(I,ft),d[I]=ft,I===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ft),I===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ft),!0):!1}function Wt(I,ft){let $=f,Z=!1;if(I){$=u.get(ft),$===void 0&&($=[],u.set(ft,$));const ut=I.textures;if($.length!==ut.length||$[0]!==r.COLOR_ATTACHMENT0){for(let mt=0,Gt=ut.length;mt<Gt;mt++)$[mt]=r.COLOR_ATTACHMENT0+mt;$.length=ut.length,Z=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,Z=!0);Z&&r.drawBuffers($)}function $t(I){return _!==I?(r.useProgram(I),_=I,!0):!1}const et={[Vr]:r.FUNC_ADD,[Nm]:r.FUNC_SUBTRACT,[Om]:r.FUNC_REVERSE_SUBTRACT};et[Fm]=r.MIN,et[Bm]=r.MAX;const tt={[km]:r.ZERO,[zm]:r.ONE,[Hm]:r.SRC_COLOR,[Ec]:r.SRC_ALPHA,[qm]:r.SRC_ALPHA_SATURATE,[Xm]:r.DST_COLOR,[Gm]:r.DST_ALPHA,[Vm]:r.ONE_MINUS_SRC_COLOR,[Tc]:r.ONE_MINUS_SRC_ALPHA,[Ym]:r.ONE_MINUS_DST_COLOR,[Wm]:r.ONE_MINUS_DST_ALPHA,[$m]:r.CONSTANT_COLOR,[Jm]:r.ONE_MINUS_CONSTANT_COLOR,[Km]:r.CONSTANT_ALPHA,[Zm]:r.ONE_MINUS_CONSTANT_ALPHA};function L(I,ft,$,Z,ut,mt,Gt,pe,Fe,St){if(I===pr){g===!0&&(Tt(r.BLEND),g=!1);return}if(g===!1&&(rt(r.BLEND),g=!0),I!==Um){if(I!==m||St!==S){if((p!==Vr||v!==Vr)&&(r.blendEquation(r.FUNC_ADD),p=Vr,v=Vr),St)switch(I){case Os:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wu:r.blendFunc(r.ONE,r.ONE);break;case bu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Au:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Os:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wu:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case bu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Au:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,M=null,A=null,b=null,w.set(0,0,0),C=0,m=I,S=St}return}ut=ut||ft,mt=mt||$,Gt=Gt||Z,(ft!==p||ut!==v)&&(r.blendEquationSeparate(et[ft],et[ut]),p=ft,v=ut),($!==y||Z!==M||mt!==A||Gt!==b)&&(r.blendFuncSeparate(tt[$],tt[Z],tt[mt],tt[Gt]),y=$,M=Z,A=mt,b=Gt),(pe.equals(w)===!1||Fe!==C)&&(r.blendColor(pe.r,pe.g,pe.b,Fe),w.copy(pe),C=Fe),m=I,S=!1}function Zt(I,ft){I.side===bi?Tt(r.CULL_FACE):rt(r.CULL_FACE);let $=I.side===Nn;ft&&($=!$),Ot($),I.blending===Os&&I.transparent===!1?L(pr):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const Z=I.stencilWrite;a.setTest(Z),Z&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ae(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?rt(r.SAMPLE_ALPHA_TO_COVERAGE):Tt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(I){x!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),x=I)}function k(I){I!==Dm?(rt(r.CULL_FACE),I!==P&&(I===Tu?r.cullFace(r.BACK):I===Im?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Tt(r.CULL_FACE),P=I}function yt(I){I!==U&&(H&&r.lineWidth(I),U=I)}function ae(I,ft,$){I?(rt(r.POLYGON_OFFSET_FILL),(F!==ft||z!==$)&&(r.polygonOffset(ft,$),F=ft,z=$)):Tt(r.POLYGON_OFFSET_FILL)}function Rt(I){I?rt(r.SCISSOR_TEST):Tt(r.SCISSOR_TEST)}function R(I){I===void 0&&(I=r.TEXTURE0+Y-1),it!==I&&(r.activeTexture(I),it=I)}function E(I,ft,$){$===void 0&&(it===null?$=r.TEXTURE0+Y-1:$=it);let Z=D[$];Z===void 0&&(Z={type:void 0,texture:void 0},D[$]=Z),(Z.type!==I||Z.texture!==ft)&&(it!==$&&(r.activeTexture($),it=$),r.bindTexture(I,ft||dt[I]),Z.type=I,Z.texture=ft)}function G(){const I=D[it];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ct(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _t(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function qt(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ot(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function lt(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Bt(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ft(I){Kt.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),Kt.copy(I))}function Mt(I){J.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),J.copy(I))}function jt(I,ft){let $=c.get(ft);$===void 0&&($=new WeakMap,c.set(ft,$));let Z=$.get(I);Z===void 0&&(Z=r.getUniformBlockIndex(ft,I.name),$.set(I,Z))}function Vt(I,ft){const Z=c.get(ft).get(I);l.get(ft)!==Z&&(r.uniformBlockBinding(ft,Z,I.__bindingPointIndex),l.set(ft,Z))}function de(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},it=null,D={},d={},u=new WeakMap,f=[],_=null,g=!1,m=null,p=null,y=null,M=null,v=null,A=null,b=null,w=new ue(0,0,0),C=0,S=!1,x=null,P=null,U=null,F=null,z=null,Kt.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:rt,disable:Tt,bindFramebuffer:bt,drawBuffers:Wt,useProgram:$t,setBlending:L,setMaterial:Zt,setFlipSided:Ot,setCullFace:k,setLineWidth:yt,setPolygonOffset:ae,setScissorTest:Rt,activeTexture:R,bindTexture:E,unbindTexture:G,compressedTexImage2D:Q,compressedTexImage3D:j,texImage2D:lt,texImage3D:Bt,updateUBOMapping:jt,uniformBlockBinding:Vt,texStorage2D:qt,texStorage3D:ot,texSubImage2D:K,texSubImage3D:pt,compressedTexSubImage2D:ct,compressedTexSubImage3D:_t,scissor:Ft,viewport:Mt,reset:de}}function rS(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ct,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,E){return f?new OffscreenCanvas(R,E):sl("canvas")}function g(R,E,G){let Q=1;const j=Rt(R);if((j.width>G||j.height>G)&&(Q=G/Math.max(j.width,j.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor(Q*j.width),pt=Math.floor(Q*j.height);d===void 0&&(d=_(K,pt));const ct=E?_(K,pt):d;return ct.width=K,ct.height=pt,ct.getContext("2d").drawImage(R,0,0,K,pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+K+"x"+pt+")."),ct}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(R,E,G,Q,j=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=E;if(E===r.RED&&(G===r.FLOAT&&(K=r.R32F),G===r.HALF_FLOAT&&(K=r.R16F),G===r.UNSIGNED_BYTE&&(K=r.R8)),E===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.R8UI),G===r.UNSIGNED_SHORT&&(K=r.R16UI),G===r.UNSIGNED_INT&&(K=r.R32UI),G===r.BYTE&&(K=r.R8I),G===r.SHORT&&(K=r.R16I),G===r.INT&&(K=r.R32I)),E===r.RG&&(G===r.FLOAT&&(K=r.RG32F),G===r.HALF_FLOAT&&(K=r.RG16F),G===r.UNSIGNED_BYTE&&(K=r.RG8)),E===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.RG8UI),G===r.UNSIGNED_SHORT&&(K=r.RG16UI),G===r.UNSIGNED_INT&&(K=r.RG32UI),G===r.BYTE&&(K=r.RG8I),G===r.SHORT&&(K=r.RG16I),G===r.INT&&(K=r.RG32I)),E===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.RGB8UI),G===r.UNSIGNED_SHORT&&(K=r.RGB16UI),G===r.UNSIGNED_INT&&(K=r.RGB32UI),G===r.BYTE&&(K=r.RGB8I),G===r.SHORT&&(K=r.RGB16I),G===r.INT&&(K=r.RGB32I)),E===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),G===r.UNSIGNED_INT&&(K=r.RGBA32UI),G===r.BYTE&&(K=r.RGBA8I),G===r.SHORT&&(K=r.RGBA16I),G===r.INT&&(K=r.RGBA32I)),E===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),E===r.RGBA){const pt=j?il:_e.getTransfer(Q);G===r.FLOAT&&(K=r.RGBA32F),G===r.HALF_FLOAT&&(K=r.RGBA16F),G===r.UNSIGNED_BYTE&&(K=pt===Me?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function v(R,E){let G;return R?E===null||E===ns||E===Js?G=r.DEPTH24_STENCIL8:E===Xi?G=r.DEPTH32F_STENCIL8:E===Vo&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ns||E===Js?G=r.DEPTH_COMPONENT24:E===Xi?G=r.DEPTH_COMPONENT32F:E===Vo&&(G=r.DEPTH_COMPONENT16),G}function A(R,E){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Si&&R.minFilter!==Ri?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function b(R){const E=R.target;E.removeEventListener("dispose",b),C(E),E.isVideoTexture&&h.delete(E)}function w(R){const E=R.target;E.removeEventListener("dispose",w),x(E)}function C(R){const E=n.get(R);if(E.__webglInit===void 0)return;const G=R.source,Q=u.get(G);if(Q){const j=Q[E.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(R),Object.keys(Q).length===0&&u.delete(G)}n.remove(R)}function S(R){const E=n.get(R);r.deleteTexture(E.__webglTexture);const G=R.source,Q=u.get(G);delete Q[E.__cacheKey],o.memory.textures--}function x(R){const E=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let j=0;j<E.__webglFramebuffer[Q].length;j++)r.deleteFramebuffer(E.__webglFramebuffer[Q][j]);else r.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)r.deleteFramebuffer(E.__webglFramebuffer[Q]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=R.textures;for(let Q=0,j=G.length;Q<j;Q++){const K=n.get(G[Q]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(G[Q])}n.remove(R)}let P=0;function U(){P=0}function F(){const R=P;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function z(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function Y(R,E){const G=n.get(R);if(R.isVideoTexture&&yt(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(G,R,E);return}}e.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+E)}function H(R,E){const G=n.get(R);if(R.version>0&&G.__version!==R.version){J(G,R,E);return}e.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+E)}function X(R,E){const G=n.get(R);if(R.version>0&&G.__version!==R.version){J(G,R,E);return}e.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+E)}function V(R,E){const G=n.get(R);if(R.version>0&&G.__version!==R.version){st(G,R,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+E)}const it={[Uc]:r.REPEAT,[Wr]:r.CLAMP_TO_EDGE,[Nc]:r.MIRRORED_REPEAT},D={[Si]:r.NEAREST,[o_]:r.NEAREST_MIPMAP_NEAREST,[sa]:r.NEAREST_MIPMAP_LINEAR,[Ri]:r.LINEAR,[Rl]:r.LINEAR_MIPMAP_NEAREST,[Xr]:r.LINEAR_MIPMAP_LINEAR},ht={[h_]:r.NEVER,[__]:r.ALWAYS,[u_]:r.LESS,[Fd]:r.LEQUAL,[f_]:r.EQUAL,[m_]:r.GEQUAL,[d_]:r.GREATER,[p_]:r.NOTEQUAL};function Ut(R,E){if(E.type===Xi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ri||E.magFilter===Rl||E.magFilter===sa||E.magFilter===Xr||E.minFilter===Ri||E.minFilter===Rl||E.minFilter===sa||E.minFilter===Xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,it[E.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,it[E.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,it[E.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,D[E.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,D[E.minFilter]),E.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,ht[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Si||E.minFilter!==sa&&E.minFilter!==Xr||E.type===Xi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Kt(R,E){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",b));const Q=E.source;let j=u.get(Q);j===void 0&&(j={},u.set(Q,j));const K=z(E);if(K!==R.__cacheKey){j[K]===void 0&&(j[K]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),j[K].usedTimes++;const pt=j[R.__cacheKey];pt!==void 0&&(j[R.__cacheKey].usedTimes--,pt.usedTimes===0&&S(E)),R.__cacheKey=K,R.__webglTexture=j[K].texture}return G}function J(R,E,G){let Q=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=r.TEXTURE_3D);const j=Kt(R,E),K=E.source;e.bindTexture(Q,R.__webglTexture,r.TEXTURE0+G);const pt=n.get(K);if(K.version!==pt.__version||j===!0){e.activeTexture(r.TEXTURE0+G);const ct=_e.getPrimaries(_e.workingColorSpace),_t=E.colorSpace===lr?null:_e.getPrimaries(E.colorSpace),qt=E.colorSpace===lr||ct===_t?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let ot=g(E.image,!1,i.maxTextureSize);ot=ae(E,ot);const lt=s.convert(E.format,E.colorSpace),Bt=s.convert(E.type);let Ft=M(E.internalFormat,lt,Bt,E.colorSpace,E.isVideoTexture);Ut(Q,E);let Mt;const jt=E.mipmaps,Vt=E.isVideoTexture!==!0,de=pt.__version===void 0||j===!0,I=K.dataReady,ft=A(E,ot);if(E.isDepthTexture)Ft=v(E.format===Ks,E.type),de&&(Vt?e.texStorage2D(r.TEXTURE_2D,1,Ft,ot.width,ot.height):e.texImage2D(r.TEXTURE_2D,0,Ft,ot.width,ot.height,0,lt,Bt,null));else if(E.isDataTexture)if(jt.length>0){Vt&&de&&e.texStorage2D(r.TEXTURE_2D,ft,Ft,jt[0].width,jt[0].height);for(let $=0,Z=jt.length;$<Z;$++)Mt=jt[$],Vt?I&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,Mt.width,Mt.height,lt,Bt,Mt.data):e.texImage2D(r.TEXTURE_2D,$,Ft,Mt.width,Mt.height,0,lt,Bt,Mt.data);E.generateMipmaps=!1}else Vt?(de&&e.texStorage2D(r.TEXTURE_2D,ft,Ft,ot.width,ot.height),I&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ot.width,ot.height,lt,Bt,ot.data)):e.texImage2D(r.TEXTURE_2D,0,Ft,ot.width,ot.height,0,lt,Bt,ot.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Vt&&de&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ft,Ft,jt[0].width,jt[0].height,ot.depth);for(let $=0,Z=jt.length;$<Z;$++)if(Mt=jt[$],E.format!==yi)if(lt!==null)if(Vt){if(I)if(E.layerUpdates.size>0){const ut=af(Mt.width,Mt.height,E.format,E.type);for(const mt of E.layerUpdates){const Gt=Mt.data.subarray(mt*ut/Mt.data.BYTES_PER_ELEMENT,(mt+1)*ut/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,mt,Mt.width,Mt.height,1,lt,Gt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,Mt.width,Mt.height,ot.depth,lt,Mt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,Ft,Mt.width,Mt.height,ot.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?I&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,Mt.width,Mt.height,ot.depth,lt,Bt,Mt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,$,Ft,Mt.width,Mt.height,ot.depth,0,lt,Bt,Mt.data)}else{Vt&&de&&e.texStorage2D(r.TEXTURE_2D,ft,Ft,jt[0].width,jt[0].height);for(let $=0,Z=jt.length;$<Z;$++)Mt=jt[$],E.format!==yi?lt!==null?Vt?I&&e.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,Mt.width,Mt.height,lt,Mt.data):e.compressedTexImage2D(r.TEXTURE_2D,$,Ft,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?I&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,Mt.width,Mt.height,lt,Bt,Mt.data):e.texImage2D(r.TEXTURE_2D,$,Ft,Mt.width,Mt.height,0,lt,Bt,Mt.data)}else if(E.isDataArrayTexture)if(Vt){if(de&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ft,Ft,ot.width,ot.height,ot.depth),I)if(E.layerUpdates.size>0){const $=af(ot.width,ot.height,E.format,E.type);for(const Z of E.layerUpdates){const ut=ot.data.subarray(Z*$/ot.data.BYTES_PER_ELEMENT,(Z+1)*$/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,ot.width,ot.height,1,lt,Bt,ut)}E.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,lt,Bt,ot.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Ft,ot.width,ot.height,ot.depth,0,lt,Bt,ot.data);else if(E.isData3DTexture)Vt?(de&&e.texStorage3D(r.TEXTURE_3D,ft,Ft,ot.width,ot.height,ot.depth),I&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,lt,Bt,ot.data)):e.texImage3D(r.TEXTURE_3D,0,Ft,ot.width,ot.height,ot.depth,0,lt,Bt,ot.data);else if(E.isFramebufferTexture){if(de)if(Vt)e.texStorage2D(r.TEXTURE_2D,ft,Ft,ot.width,ot.height);else{let $=ot.width,Z=ot.height;for(let ut=0;ut<ft;ut++)e.texImage2D(r.TEXTURE_2D,ut,Ft,$,Z,0,lt,Bt,null),$>>=1,Z>>=1}}else if(jt.length>0){if(Vt&&de){const $=Rt(jt[0]);e.texStorage2D(r.TEXTURE_2D,ft,Ft,$.width,$.height)}for(let $=0,Z=jt.length;$<Z;$++)Mt=jt[$],Vt?I&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,lt,Bt,Mt):e.texImage2D(r.TEXTURE_2D,$,Ft,lt,Bt,Mt);E.generateMipmaps=!1}else if(Vt){if(de){const $=Rt(ot);e.texStorage2D(r.TEXTURE_2D,ft,Ft,$.width,$.height)}I&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,lt,Bt,ot)}else e.texImage2D(r.TEXTURE_2D,0,Ft,lt,Bt,ot);m(E)&&p(Q),pt.__version=K.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function st(R,E,G){if(E.image.length!==6)return;const Q=Kt(R,E),j=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+G);const K=n.get(j);if(j.version!==K.__version||Q===!0){e.activeTexture(r.TEXTURE0+G);const pt=_e.getPrimaries(_e.workingColorSpace),ct=E.colorSpace===lr?null:_e.getPrimaries(E.colorSpace),_t=E.colorSpace===lr||pt===ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const qt=E.isCompressedTexture||E.image[0].isCompressedTexture,ot=E.image[0]&&E.image[0].isDataTexture,lt=[];for(let Z=0;Z<6;Z++)!qt&&!ot?lt[Z]=g(E.image[Z],!0,i.maxCubemapSize):lt[Z]=ot?E.image[Z].image:E.image[Z],lt[Z]=ae(E,lt[Z]);const Bt=lt[0],Ft=s.convert(E.format,E.colorSpace),Mt=s.convert(E.type),jt=M(E.internalFormat,Ft,Mt,E.colorSpace),Vt=E.isVideoTexture!==!0,de=K.__version===void 0||Q===!0,I=j.dataReady;let ft=A(E,Bt);Ut(r.TEXTURE_CUBE_MAP,E);let $;if(qt){Vt&&de&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ft,jt,Bt.width,Bt.height);for(let Z=0;Z<6;Z++){$=lt[Z].mipmaps;for(let ut=0;ut<$.length;ut++){const mt=$[ut];E.format!==yi?Ft!==null?Vt?I&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,0,0,mt.width,mt.height,Ft,mt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,jt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,0,0,mt.width,mt.height,Ft,Mt,mt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,jt,mt.width,mt.height,0,Ft,Mt,mt.data)}}}else{if($=E.mipmaps,Vt&&de){$.length>0&&ft++;const Z=Rt(lt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ft,jt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ot){Vt?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,lt[Z].width,lt[Z].height,Ft,Mt,lt[Z].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,jt,lt[Z].width,lt[Z].height,0,Ft,Mt,lt[Z].data);for(let ut=0;ut<$.length;ut++){const Gt=$[ut].image[Z].image;Vt?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,0,0,Gt.width,Gt.height,Ft,Mt,Gt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,jt,Gt.width,Gt.height,0,Ft,Mt,Gt.data)}}else{Vt?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ft,Mt,lt[Z]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,jt,Ft,Mt,lt[Z]);for(let ut=0;ut<$.length;ut++){const mt=$[ut];Vt?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,0,0,Ft,Mt,mt.image[Z]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,jt,Ft,Mt,mt.image[Z])}}}m(E)&&p(r.TEXTURE_CUBE_MAP),K.__version=j.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function dt(R,E,G,Q,j,K){const pt=s.convert(G.format,G.colorSpace),ct=s.convert(G.type),_t=M(G.internalFormat,pt,ct,G.colorSpace),qt=n.get(E),ot=n.get(G);if(ot.__renderTarget=E,!qt.__hasExternalTextures){const lt=Math.max(1,E.width>>K),Bt=Math.max(1,E.height>>K);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?e.texImage3D(j,K,_t,lt,Bt,E.depth,0,pt,ct,null):e.texImage2D(j,K,_t,lt,Bt,0,pt,ct,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),k(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,j,ot.__webglTexture,0,Ot(E)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,j,ot.__webglTexture,K),e.bindFramebuffer(r.FRAMEBUFFER,null)}function rt(R,E,G){if(r.bindRenderbuffer(r.RENDERBUFFER,R),E.depthBuffer){const Q=E.depthTexture,j=Q&&Q.isDepthTexture?Q.type:null,K=v(E.stencilBuffer,j),pt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=Ot(E);k(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ct,K,E.width,E.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,ct,K,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,K,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,pt,r.RENDERBUFFER,R)}else{const Q=E.textures;for(let j=0;j<Q.length;j++){const K=Q[j],pt=s.convert(K.format,K.colorSpace),ct=s.convert(K.type),_t=M(K.internalFormat,pt,ct,K.colorSpace),qt=Ot(E);G&&k(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,qt,_t,E.width,E.height):k(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qt,_t,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,_t,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Tt(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(E.depthTexture);Q.__renderTarget=E,(!Q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);const j=Q.__webglTexture,K=Ot(E);if(E.depthTexture.format===Fs)k(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else if(E.depthTexture.format===Ks)k(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function bt(R){const E=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const Q=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){const j=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",j)};Q.addEventListener("dispose",j),E.__depthDisposeCallback=j}E.__boundDepthTexture=Q}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Tt(E.__webglFramebuffer,R)}else if(G){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=r.createRenderbuffer(),rt(E.__webglDepthbuffer[Q],R,!1);else{const j=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,K)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),rt(E.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,j)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Wt(R,E,G){const Q=n.get(R);E!==void 0&&dt(Q.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&bt(R)}function $t(R){const E=R.texture,G=n.get(R),Q=n.get(E);R.addEventListener("dispose",w);const j=R.textures,K=R.isWebGLCubeRenderTarget===!0,pt=j.length>1;if(pt||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=E.version,o.memory.textures++),K){G.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[ct]=[];for(let _t=0;_t<E.mipmaps.length;_t++)G.__webglFramebuffer[ct][_t]=r.createFramebuffer()}else G.__webglFramebuffer[ct]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let ct=0;ct<E.mipmaps.length;ct++)G.__webglFramebuffer[ct]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(pt)for(let ct=0,_t=j.length;ct<_t;ct++){const qt=n.get(j[ct]);qt.__webglTexture===void 0&&(qt.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&k(R)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ct=0;ct<j.length;ct++){const _t=j[ct];G.__webglColorRenderbuffer[ct]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[ct]);const qt=s.convert(_t.format,_t.colorSpace),ot=s.convert(_t.type),lt=M(_t.internalFormat,qt,ot,_t.colorSpace,R.isXRRenderTarget===!0),Bt=Ot(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Bt,lt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.RENDERBUFFER,G.__webglColorRenderbuffer[ct])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),rt(G.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),Ut(r.TEXTURE_CUBE_MAP,E);for(let ct=0;ct<6;ct++)if(E.mipmaps&&E.mipmaps.length>0)for(let _t=0;_t<E.mipmaps.length;_t++)dt(G.__webglFramebuffer[ct][_t],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,_t);else dt(G.__webglFramebuffer[ct],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(E)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let ct=0,_t=j.length;ct<_t;ct++){const qt=j[ct],ot=n.get(qt);e.bindTexture(r.TEXTURE_2D,ot.__webglTexture),Ut(r.TEXTURE_2D,qt),dt(G.__webglFramebuffer,R,qt,r.COLOR_ATTACHMENT0+ct,r.TEXTURE_2D,0),m(qt)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let ct=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ct=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ct,Q.__webglTexture),Ut(ct,E),E.mipmaps&&E.mipmaps.length>0)for(let _t=0;_t<E.mipmaps.length;_t++)dt(G.__webglFramebuffer[_t],R,E,r.COLOR_ATTACHMENT0,ct,_t);else dt(G.__webglFramebuffer,R,E,r.COLOR_ATTACHMENT0,ct,0);m(E)&&p(ct),e.unbindTexture()}R.depthBuffer&&bt(R)}function et(R){const E=R.textures;for(let G=0,Q=E.length;G<Q;G++){const j=E[G];if(m(j)){const K=y(R),pt=n.get(j).__webglTexture;e.bindTexture(K,pt),p(K),e.unbindTexture()}}}const tt=[],L=[];function Zt(R){if(R.samples>0){if(k(R)===!1){const E=R.textures,G=R.width,Q=R.height;let j=r.COLOR_BUFFER_BIT;const K=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=n.get(R),ct=E.length>1;if(ct)for(let _t=0;_t<E.length;_t++)e.bindFramebuffer(r.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,pt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let _t=0;_t<E.length;_t++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),ct){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,pt.__webglColorRenderbuffer[_t]);const qt=n.get(E[_t]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,qt,0)}r.blitFramebuffer(0,0,G,Q,0,0,G,Q,j,r.NEAREST),l===!0&&(tt.length=0,L.length=0,tt.push(r.COLOR_ATTACHMENT0+_t),R.depthBuffer&&R.resolveDepthBuffer===!1&&(tt.push(K),L.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,L)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,tt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ct)for(let _t=0;_t<E.length;_t++){e.bindFramebuffer(r.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.RENDERBUFFER,pt.__webglColorRenderbuffer[_t]);const qt=n.get(E[_t]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,pt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.TEXTURE_2D,qt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Ot(R){return Math.min(i.maxSamples,R.samples)}function k(R){const E=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function yt(R){const E=o.render.frame;h.get(R)!==E&&(h.set(R,E),R.update())}function ae(R,E){const G=R.colorSpace,Q=R.format,j=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==Zs&&G!==lr&&(_e.getTransfer(G)===Me?(Q!==yi||j!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function Rt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=U,this.setTexture2D=Y,this.setTexture2DArray=H,this.setTexture3D=X,this.setTextureCube=V,this.rebindTextures=Wt,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=k}function sS(r,t){function e(n,i=lr){let s;const o=_e.getTransfer(i);if(n===Ki)return r.UNSIGNED_BYTE;if(n===Nh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Oh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Rd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===bd)return r.BYTE;if(n===Ad)return r.SHORT;if(n===Vo)return r.UNSIGNED_SHORT;if(n===Uh)return r.INT;if(n===ns)return r.UNSIGNED_INT;if(n===Xi)return r.FLOAT;if(n===ea)return r.HALF_FLOAT;if(n===Cd)return r.ALPHA;if(n===Pd)return r.RGB;if(n===yi)return r.RGBA;if(n===Ld)return r.LUMINANCE;if(n===Dd)return r.LUMINANCE_ALPHA;if(n===Fs)return r.DEPTH_COMPONENT;if(n===Ks)return r.DEPTH_STENCIL;if(n===Id)return r.RED;if(n===Fh)return r.RED_INTEGER;if(n===Ud)return r.RG;if(n===Bh)return r.RG_INTEGER;if(n===kh)return r.RGBA_INTEGER;if(n===Va||n===Ga||n===Wa||n===Xa)if(o===Me)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Va)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Va)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ga)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oc||n===Fc||n===Bc||n===kc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Oc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zc||n===Hc||n===Vc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===zc||n===Hc)return o===Me?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Vc)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Gc||n===Wc||n===Xc||n===Yc||n===qc||n===$c||n===Jc||n===Kc||n===Zc||n===jc||n===Qc||n===th||n===eh||n===nh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Gc)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wc)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xc)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yc)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qc)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$c)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jc)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Kc)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zc)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jc)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qc)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===th)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===eh)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nh)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ya||n===ih||n===rh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ya)return o===Me?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ih)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nd||n===sh||n===oh||n===ah)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ya)return s.COMPRESSED_RED_RGTC1_EXT;if(n===sh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ah)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Js?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const oS={type:"move"};class oc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&u>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(oS)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ee;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const aS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class cS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Cn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Sr({vertexShader:aS,fragmentShader:lS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new at(new $r(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hS extends so{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,_=null;const g=new cS,m=e.getContextAttributes();let p=null,y=null;const M=[],v=[],A=new Ct;let b=null;const w=new $n;w.viewport=new we;const C=new $n;C.viewport=new we;const S=[w,C],x=new Cg;let P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let st=M[J];return st===void 0&&(st=new oc,M[J]=st),st.getTargetRaySpace()},this.getControllerGrip=function(J){let st=M[J];return st===void 0&&(st=new oc,M[J]=st),st.getGripSpace()},this.getHand=function(J){let st=M[J];return st===void 0&&(st=new oc,M[J]=st),st.getHandSpace()};function F(J){const st=v.indexOf(J.inputSource);if(st===-1)return;const dt=M[st];dt!==void 0&&(dt.update(J.inputSource,J.frame,c||o),dt.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",Y);for(let J=0;J<M.length;J++){const st=v[J];st!==null&&(v[J]=null,M[J].disconnect(st))}P=null,U=null,g.reset(),t.setRenderTarget(p),f=null,u=null,d=null,i=null,y=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",z),i.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(A),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let dt=null,rt=null,Tt=null;m.depth&&(Tt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=m.stencil?Ks:Fs,rt=m.stencil?Js:ns);const bt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:s};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(bt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new is(u.textureWidth,u.textureHeight,{format:yi,type:Ki,depthTexture:new Jd(u.textureWidth,u.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}else{const dt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,dt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new is(f.framebufferWidth,f.framebufferHeight,{format:yi,type:Ki,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Kt.setContext(i),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y(J){for(let st=0;st<J.removed.length;st++){const dt=J.removed[st],rt=v.indexOf(dt);rt>=0&&(v[rt]=null,M[rt].disconnect(dt))}for(let st=0;st<J.added.length;st++){const dt=J.added[st];let rt=v.indexOf(dt);if(rt===-1){for(let bt=0;bt<M.length;bt++)if(bt>=v.length){v.push(dt),rt=bt;break}else if(v[bt]===null){v[bt]=dt,rt=bt;break}if(rt===-1)break}const Tt=M[rt];Tt&&Tt.connect(dt)}}const H=new N,X=new N;function V(J,st,dt){H.setFromMatrixPosition(st.matrixWorld),X.setFromMatrixPosition(dt.matrixWorld);const rt=H.distanceTo(X),Tt=st.projectionMatrix.elements,bt=dt.projectionMatrix.elements,Wt=Tt[14]/(Tt[10]-1),$t=Tt[14]/(Tt[10]+1),et=(Tt[9]+1)/Tt[5],tt=(Tt[9]-1)/Tt[5],L=(Tt[8]-1)/Tt[0],Zt=(bt[8]+1)/bt[0],Ot=Wt*L,k=Wt*Zt,yt=rt/(-L+Zt),ae=yt*-L;if(st.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ae),J.translateZ(yt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Tt[10]===-1)J.projectionMatrix.copy(st.projectionMatrix),J.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const Rt=Wt+yt,R=$t+yt,E=Ot-ae,G=k+(rt-ae),Q=et*$t/R*Rt,j=tt*$t/R*Rt;J.projectionMatrix.makePerspective(E,G,Q,j,Rt,R),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function it(J,st){st===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(st.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let st=J.near,dt=J.far;g.texture!==null&&(g.depthNear>0&&(st=g.depthNear),g.depthFar>0&&(dt=g.depthFar)),x.near=C.near=w.near=st,x.far=C.far=w.far=dt,(P!==x.near||U!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,U=x.far),w.layers.mask=J.layers.mask|2,C.layers.mask=J.layers.mask|4,x.layers.mask=w.layers.mask|C.layers.mask;const rt=J.parent,Tt=x.cameras;it(x,rt);for(let bt=0;bt<Tt.length;bt++)it(Tt[bt],rt);Tt.length===2?V(x,w,C):x.projectionMatrix.copy(w.projectionMatrix),D(J,x,rt)};function D(J,st,dt){dt===null?J.matrix.copy(st.matrixWorld):(J.matrix.copy(dt.matrixWorld),J.matrix.invert(),J.matrix.multiply(st.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(st.projectionMatrix),J.projectionMatrixInverse.copy(st.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Go*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(x)};let ht=null;function Ut(J,st){if(h=st.getViewerPose(c||o),_=st,h!==null){const dt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let rt=!1;dt.length!==x.cameras.length&&(x.cameras.length=0,rt=!0);for(let bt=0;bt<dt.length;bt++){const Wt=dt[bt];let $t=null;if(f!==null)$t=f.getViewport(Wt);else{const tt=d.getViewSubImage(u,Wt);$t=tt.viewport,bt===0&&(t.setRenderTargetTextures(y,tt.colorTexture,u.ignoreDepthValues?void 0:tt.depthStencilTexture),t.setRenderTarget(y))}let et=S[bt];et===void 0&&(et=new $n,et.layers.enable(bt),et.viewport=new we,S[bt]=et),et.matrix.fromArray(Wt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(Wt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set($t.x,$t.y,$t.width,$t.height),bt===0&&(x.matrix.copy(et.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),rt===!0&&x.cameras.push(et)}const Tt=i.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){const bt=d.getDepthInformation(dt[0]);bt&&bt.isValid&&bt.texture&&g.init(t,bt,i.renderState)}}for(let dt=0;dt<M.length;dt++){const rt=v[dt],Tt=M[dt];rt!==null&&Tt!==void 0&&Tt.update(rt,st,c||o)}ht&&ht(J,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),_=null}const Kt=new np;Kt.setAnimationLoop(Ut),this.setAnimationLoop=function(J){ht=J},this.dispose=function(){}}}const Ir=new Di,uS=new Pe;function fS(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Wd(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),M=y.envMap,v=y.envMapRotation;M&&(m.envMap.value=M,Ir.copy(v),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),m.envMapRotation.value.setFromMatrix4(uS.makeRotationFromEuler(Ir)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function dS(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const v=M.program;n.uniformBlockBinding(y,v)}function c(y,M){let v=i[y.id];v===void 0&&(_(y),v=h(y),i[y.id]=v,y.addEventListener("dispose",m));const A=M.program;n.updateUBOMapping(y,A);const b=t.render.frame;s[y.id]!==b&&(u(y),s[y.id]=b)}function h(y){const M=d();y.__bindingPointIndex=M;const v=r.createBuffer(),A=y.__size,b=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,A,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,v),v}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const M=i[y.id],v=y.uniforms,A=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let b=0,w=v.length;b<w;b++){const C=Array.isArray(v[b])?v[b]:[v[b]];for(let S=0,x=C.length;S<x;S++){const P=C[S];if(f(P,b,S,A)===!0){const U=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let z=0;for(let Y=0;Y<F.length;Y++){const H=F[Y],X=g(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,U+z,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,z),z+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,M,v,A){const b=y.value,w=M+"_"+v;if(A[w]===void 0)return typeof b=="number"||typeof b=="boolean"?A[w]=b:A[w]=b.clone(),!0;{const C=A[w];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return A[w]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function _(y){const M=y.uniforms;let v=0;const A=16;for(let w=0,C=M.length;w<C;w++){const S=Array.isArray(M[w])?M[w]:[M[w]];for(let x=0,P=S.length;x<P;x++){const U=S[x],F=Array.isArray(U.value)?U.value:[U.value];for(let z=0,Y=F.length;z<Y;z++){const H=F[z],X=g(H),V=v%A,it=V%X.boundary,D=V+it;v+=it,D!==0&&A-D<X.storage&&(v+=A-D),U.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=X.storage}}}const b=v%A;return b>0&&(v+=A-b),y.__size=v,y.__cache={},this}function g(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){const M=y.target;M.removeEventListener("dispose",m);const v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function p(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class pS{constructor(t={}){const{canvas:e=I_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const y=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dn,this.toneMapping=mr,this.toneMappingExposure=1;const v=this;let A=!1,b=0,w=0,C=null,S=-1,x=null;const P=new we,U=new we;let F=null;const z=new ue(0);let Y=0,H=e.width,X=e.height,V=1,it=null,D=null;const ht=new we(0,0,H,X),Ut=new we(0,0,H,X);let Kt=!1;const J=new Wh;let st=!1,dt=!1;this.transmissionResolutionScale=1;const rt=new Pe,Tt=new Pe,bt=new N,Wt=new we,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function tt(){return C===null?V:1}let L=n;function Zt(T,B){return e.getContext(T,B)}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ih}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",mt,!1),L===null){const B="webgl2";if(L=Zt(B,T),L===null)throw Zt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ot,k,yt,ae,Rt,R,E,G,Q,j,K,pt,ct,_t,qt,ot,lt,Bt,Ft,Mt,jt,Vt,de,I;function ft(){Ot=new Ex(L),Ot.init(),Vt=new sS(L,Ot),k=new gx(L,Ot,t,Vt),yt=new iS(L,Ot),k.reverseDepthBuffer&&u&&yt.buffers.depth.setReversed(!0),ae=new bx(L),Rt=new Wy,R=new rS(L,Ot,yt,Rt,k,Vt,ae),E=new xx(v),G=new Mx(v),Q=new Ig(L),de=new mx(L,Q),j=new Tx(L,Q,ae,de),K=new Rx(L,j,Q,ae),Ft=new Ax(L,k,R),ot=new vx(Rt),pt=new Gy(v,E,G,Ot,k,de,ot),ct=new fS(v,Rt),_t=new Yy,qt=new jy(Ot),Bt=new px(v,E,G,yt,K,f,l),lt=new eS(v,K,k),I=new dS(L,ae,k,yt),Mt=new _x(L,Ot,ae),jt=new wx(L,Ot,ae),ae.programs=pt.programs,v.capabilities=k,v.extensions=Ot,v.properties=Rt,v.renderLists=_t,v.shadowMap=lt,v.state=yt,v.info=ae}ft();const $=new hS(v,L);this.xr=$,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=Ot.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ot.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(H,X,!1))},this.getSize=function(T){return T.set(H,X)},this.setSize=function(T,B,q=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,X=B,e.width=Math.floor(T*V),e.height=Math.floor(B*V),q===!0&&(e.style.width=T+"px",e.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(H*V,X*V).floor()},this.setDrawingBufferSize=function(T,B,q){H=T,X=B,V=q,e.width=Math.floor(T*q),e.height=Math.floor(B*q),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(ht)},this.setViewport=function(T,B,q,W){T.isVector4?ht.set(T.x,T.y,T.z,T.w):ht.set(T,B,q,W),yt.viewport(P.copy(ht).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(Ut)},this.setScissor=function(T,B,q,W){T.isVector4?Ut.set(T.x,T.y,T.z,T.w):Ut.set(T,B,q,W),yt.scissor(U.copy(Ut).multiplyScalar(V).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(T){yt.setScissorTest(Kt=T)},this.setOpaqueSort=function(T){it=T},this.setTransparentSort=function(T){D=T},this.getClearColor=function(T){return T.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(T=!0,B=!0,q=!0){let W=0;if(T){let O=!1;if(C!==null){const nt=C.texture.format;O=nt===kh||nt===Bh||nt===Fh}if(O){const nt=C.texture.type,vt=nt===Ki||nt===ns||nt===Vo||nt===Js||nt===Nh||nt===Oh,wt=Bt.getClearColor(),Et=Bt.getClearAlpha(),Nt=wt.r,Ht=wt.g,It=wt.b;vt?(_[0]=Nt,_[1]=Ht,_[2]=It,_[3]=Et,L.clearBufferuiv(L.COLOR,0,_)):(g[0]=Nt,g[1]=Ht,g[2]=It,g[3]=Et,L.clearBufferiv(L.COLOR,0,g))}else W|=L.COLOR_BUFFER_BIT}B&&(W|=L.DEPTH_BUFFER_BIT),q&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),Bt.dispose(),_t.dispose(),qt.dispose(),Rt.dispose(),E.dispose(),G.dispose(),K.dispose(),de.dispose(),I.dispose(),pt.dispose(),$.dispose(),$.removeEventListener("sessionstart",gt),$.removeEventListener("sessionend",Yt),Lt.stop()};function Z(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=ae.autoReset,B=lt.enabled,q=lt.autoUpdate,W=lt.needsUpdate,O=lt.type;ft(),ae.autoReset=T,lt.enabled=B,lt.autoUpdate=q,lt.needsUpdate=W,lt.type=O}function mt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Gt(T){const B=T.target;B.removeEventListener("dispose",Gt),pe(B)}function pe(T){Fe(T),Rt.remove(T)}function Fe(T){const B=Rt.get(T).programs;B!==void 0&&(B.forEach(function(q){pt.releaseProgram(q)}),T.isShaderMaterial&&pt.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,q,W,O,nt){B===null&&(B=$t);const vt=O.isMesh&&O.matrixWorld.determinant()<0,wt=Hn(T,B,q,W,O);yt.setMaterial(W,vt);let Et=q.index,Nt=1;if(W.wireframe===!0){if(Et=j.getWireframeAttribute(q),Et===void 0)return;Nt=2}const Ht=q.drawRange,It=q.attributes.position;let Jt=Ht.start*Nt,ve=(Ht.start+Ht.count)*Nt;nt!==null&&(Jt=Math.max(Jt,nt.start*Nt),ve=Math.min(ve,(nt.start+nt.count)*Nt)),Et!==null?(Jt=Math.max(Jt,0),ve=Math.min(ve,Et.count)):It!=null&&(Jt=Math.max(Jt,0),ve=Math.min(ve,It.count));const Ge=ve-Jt;if(Ge<0||Ge===1/0)return;de.setup(O,W,wt,q,Et);let Be,me=Mt;if(Et!==null&&(Be=Q.get(Et),me=jt,me.setIndex(Be)),O.isMesh)W.wireframe===!0?(yt.setLineWidth(W.wireframeLinewidth*tt()),me.setMode(L.LINES)):me.setMode(L.TRIANGLES);else if(O.isLine){let zt=W.linewidth;zt===void 0&&(zt=1),yt.setLineWidth(zt*tt()),O.isLineSegments?me.setMode(L.LINES):O.isLineLoop?me.setMode(L.LINE_LOOP):me.setMode(L.LINE_STRIP)}else O.isPoints?me.setMode(L.POINTS):O.isSprite&&me.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)me.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))me.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const zt=O._multiDrawStarts,ln=O._multiDrawCounts,xe=O._multiDrawCount,pi=Et?Q.get(Et).bytesPerElement:1,ls=Rt.get(W).currentProgram.getUniforms();for(let Vn=0;Vn<xe;Vn++)ls.setValue(L,"_gl_DrawID",Vn),me.render(zt[Vn]/pi,ln[Vn])}else if(O.isInstancedMesh)me.renderInstances(Jt,Ge,O.count);else if(q.isInstancedBufferGeometry){const zt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ln=Math.min(q.instanceCount,zt);me.renderInstances(Jt,Ge,ln)}else me.render(Jt,Ge)};function St(T,B,q){T.transparent===!0&&T.side===bi&&T.forceSinglePass===!1?(T.side=Nn,T.needsUpdate=!0,be(T,B,q),T.side=yr,T.needsUpdate=!0,be(T,B,q),T.side=bi):be(T,B,q)}this.compile=function(T,B,q=null){q===null&&(q=T),p=qt.get(q),p.init(B),M.push(p),q.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),T!==q&&T.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const W=new Set;return T.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const nt=O.material;if(nt)if(Array.isArray(nt))for(let vt=0;vt<nt.length;vt++){const wt=nt[vt];St(wt,q,O),W.add(wt)}else St(nt,q,O),W.add(nt)}),M.pop(),p=null,W},this.compileAsync=function(T,B,q=null){const W=this.compile(T,B,q);return new Promise(O=>{function nt(){if(W.forEach(function(vt){Rt.get(vt).currentProgram.isReady()&&W.delete(vt)}),W.size===0){O(T);return}setTimeout(nt,10)}Ot.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Pt=null;function Qt(T){Pt&&Pt(T)}function gt(){Lt.stop()}function Yt(){Lt.start()}const Lt=new np;Lt.setAnimationLoop(Qt),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(T){Pt=T,$.setAnimationLoop(T),T===null?Lt.stop():Lt.start()},$.addEventListener("sessionstart",gt),$.addEventListener("sessionend",Yt),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(B),B=$.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,B,C),p=qt.get(T,M.length),p.init(B),M.push(p),Tt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),J.setFromProjectionMatrix(Tt),dt=this.localClippingEnabled,st=ot.init(this.clippingPlanes,dt),m=_t.get(T,y.length),m.init(),y.push(m),$.enabled===!0&&$.isPresenting===!0){const nt=v.xr.getDepthSensingMesh();nt!==null&&Xt(nt,B,-1/0,v.sortObjects)}Xt(T,B,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(it,D),et=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,et&&Bt.addToRenderList(m,T),this.info.render.frame++,st===!0&&ot.beginShadows();const q=p.state.shadowsArray;lt.render(q,T,B),st===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,O=m.transmissive;if(p.setupLights(),B.isArrayCamera){const nt=B.cameras;if(O.length>0)for(let vt=0,wt=nt.length;vt<wt;vt++){const Et=nt[vt];le(W,O,T,Et)}et&&Bt.render(T);for(let vt=0,wt=nt.length;vt<wt;vt++){const Et=nt[vt];ze(m,T,Et,Et.viewport)}}else O.length>0&&le(W,O,T,B),et&&Bt.render(T),ze(m,T,B);C!==null&&w===0&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(v,T,B),de.resetDefaultState(),S=-1,x=null,M.pop(),M.length>0?(p=M[M.length-1],st===!0&&ot.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Xt(T,B,q,W){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||J.intersectsSprite(T)){W&&Wt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Tt);const vt=K.update(T),wt=T.material;wt.visible&&m.push(T,vt,wt,q,Wt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||J.intersectsObject(T))){const vt=K.update(T),wt=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Wt.copy(T.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Wt.copy(vt.boundingSphere.center)),Wt.applyMatrix4(T.matrixWorld).applyMatrix4(Tt)),Array.isArray(wt)){const Et=vt.groups;for(let Nt=0,Ht=Et.length;Nt<Ht;Nt++){const It=Et[Nt],Jt=wt[It.materialIndex];Jt&&Jt.visible&&m.push(T,vt,Jt,q,Wt.z,It)}}else wt.visible&&m.push(T,vt,wt,q,Wt.z,null)}}const nt=T.children;for(let vt=0,wt=nt.length;vt<wt;vt++)Xt(nt[vt],B,q,W)}function ze(T,B,q,W){const O=T.opaque,nt=T.transmissive,vt=T.transparent;p.setupLightsView(q),st===!0&&ot.setGlobalState(v.clippingPlanes,q),W&&yt.viewport(P.copy(W)),O.length>0&&Ce(O,B,q),nt.length>0&&Ce(nt,B,q),vt.length>0&&Ce(vt,B,q),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function le(T,B,q,W){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new is(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?ea:Ki,minFilter:Xr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_e.workingColorSpace}));const nt=p.state.transmissionRenderTarget[W.id],vt=W.viewport||P;nt.setSize(vt.z*v.transmissionResolutionScale,vt.w*v.transmissionResolutionScale);const wt=v.getRenderTarget();v.setRenderTarget(nt),v.getClearColor(z),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),et&&Bt.render(q);const Et=v.toneMapping;v.toneMapping=mr;const Nt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),st===!0&&ot.setGlobalState(v.clippingPlanes,W),Ce(T,q,W),R.updateMultisampleRenderTarget(nt),R.updateRenderTargetMipmap(nt),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let It=0,Jt=B.length;It<Jt;It++){const ve=B[It],Ge=ve.object,Be=ve.geometry,me=ve.material,zt=ve.group;if(me.side===bi&&Ge.layers.test(W.layers)){const ln=me.side;me.side=Nn,me.needsUpdate=!0,qe(Ge,q,W,Be,me,zt),me.side=ln,me.needsUpdate=!0,Ht=!0}}Ht===!0&&(R.updateMultisampleRenderTarget(nt),R.updateRenderTargetMipmap(nt))}v.setRenderTarget(wt),v.setClearColor(z,Y),Nt!==void 0&&(W.viewport=Nt),v.toneMapping=Et}function Ce(T,B,q){const W=B.isScene===!0?B.overrideMaterial:null;for(let O=0,nt=T.length;O<nt;O++){const vt=T[O],wt=vt.object,Et=vt.geometry,Nt=W===null?vt.material:W,Ht=vt.group;wt.layers.test(q.layers)&&qe(wt,B,q,Et,Nt,Ht)}}function qe(T,B,q,W,O,nt){T.onBeforeRender(v,B,q,W,O,nt),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(v,B,q,W,T,nt),O.transparent===!0&&O.side===bi&&O.forceSinglePass===!1?(O.side=Nn,O.needsUpdate=!0,v.renderBufferDirect(q,B,W,O,T,nt),O.side=yr,O.needsUpdate=!0,v.renderBufferDirect(q,B,W,O,T,nt),O.side=bi):v.renderBufferDirect(q,B,W,O,T,nt),T.onAfterRender(v,B,q,W,O,nt)}function be(T,B,q){B.isScene!==!0&&(B=$t);const W=Rt.get(T),O=p.state.lights,nt=p.state.shadowsArray,vt=O.state.version,wt=pt.getParameters(T,O.state,nt,B,q),Et=pt.getProgramCacheKey(wt);let Nt=W.programs;W.environment=T.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(T.isMeshStandardMaterial?G:E).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Nt===void 0&&(T.addEventListener("dispose",Gt),Nt=new Map,W.programs=Nt);let Ht=Nt.get(Et);if(Ht!==void 0){if(W.currentProgram===Ht&&W.lightsStateVersion===vt)return ge(T,wt),Ht}else wt.uniforms=pt.getUniforms(T),T.onBeforeCompile(wt,v),Ht=pt.acquireProgram(wt,Et),Nt.set(Et,Ht),W.uniforms=wt.uniforms;const It=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(It.clippingPlanes=ot.uniform),ge(T,wt),W.needsLights=xn(T),W.lightsStateVersion=vt,W.needsLights&&(It.ambientLightColor.value=O.state.ambient,It.lightProbe.value=O.state.probe,It.directionalLights.value=O.state.directional,It.directionalLightShadows.value=O.state.directionalShadow,It.spotLights.value=O.state.spot,It.spotLightShadows.value=O.state.spotShadow,It.rectAreaLights.value=O.state.rectArea,It.ltc_1.value=O.state.rectAreaLTC1,It.ltc_2.value=O.state.rectAreaLTC2,It.pointLights.value=O.state.point,It.pointLightShadows.value=O.state.pointShadow,It.hemisphereLights.value=O.state.hemi,It.directionalShadowMap.value=O.state.directionalShadowMap,It.directionalShadowMatrix.value=O.state.directionalShadowMatrix,It.spotShadowMap.value=O.state.spotShadowMap,It.spotLightMatrix.value=O.state.spotLightMatrix,It.spotLightMap.value=O.state.spotLightMap,It.pointShadowMap.value=O.state.pointShadowMap,It.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Ht,W.uniformsList=null,Ht}function Ae(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=qa.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function ge(T,B){const q=Rt.get(T);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Hn(T,B,q,W,O){B.isScene!==!0&&(B=$t),R.resetTextureUnits();const nt=B.fog,vt=W.isMeshStandardMaterial?B.environment:null,wt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Zs,Et=(W.isMeshStandardMaterial?G:E).get(W.envMap||vt),Nt=W.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ht=!!q.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),It=!!q.morphAttributes.position,Jt=!!q.morphAttributes.normal,ve=!!q.morphAttributes.color;let Ge=mr;W.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ge=v.toneMapping);const Be=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,me=Be!==void 0?Be.length:0,zt=Rt.get(W),ln=p.state.lights;if(st===!0&&(dt===!0||T!==x)){const yn=T===x&&W.id===S;ot.setState(W,T,yn)}let xe=!1;W.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==ln.state.version||zt.outputColorSpace!==wt||O.isBatchedMesh&&zt.batching===!1||!O.isBatchedMesh&&zt.batching===!0||O.isBatchedMesh&&zt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&zt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&zt.instancing===!1||!O.isInstancedMesh&&zt.instancing===!0||O.isSkinnedMesh&&zt.skinning===!1||!O.isSkinnedMesh&&zt.skinning===!0||O.isInstancedMesh&&zt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&zt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&zt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&zt.instancingMorph===!1&&O.morphTexture!==null||zt.envMap!==Et||W.fog===!0&&zt.fog!==nt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==ot.numPlanes||zt.numIntersection!==ot.numIntersection)||zt.vertexAlphas!==Nt||zt.vertexTangents!==Ht||zt.morphTargets!==It||zt.morphNormals!==Jt||zt.morphColors!==ve||zt.toneMapping!==Ge||zt.morphTargetsCount!==me)&&(xe=!0):(xe=!0,zt.__version=W.version);let pi=zt.currentProgram;xe===!0&&(pi=be(W,B,O));let ls=!1,Vn=!1,co=!1;const De=pi.getUniforms(),ri=zt.uniforms;if(yt.useProgram(pi.program)&&(ls=!0,Vn=!0,co=!0),W.id!==S&&(S=W.id,Vn=!0),ls||x!==T){yt.buffers.depth.getReversed()?(rt.copy(T.projectionMatrix),N_(rt),O_(rt),De.setValue(L,"projectionMatrix",rt)):De.setValue(L,"projectionMatrix",T.projectionMatrix),De.setValue(L,"viewMatrix",T.matrixWorldInverse);const Pn=De.map.cameraPosition;Pn!==void 0&&Pn.setValue(L,bt.setFromMatrixPosition(T.matrixWorld)),k.logarithmicDepthBuffer&&De.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&De.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),x!==T&&(x=T,Vn=!0,co=!0)}if(O.isSkinnedMesh){De.setOptional(L,O,"bindMatrix"),De.setOptional(L,O,"bindMatrixInverse");const yn=O.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),De.setValue(L,"boneTexture",yn.boneTexture,R))}O.isBatchedMesh&&(De.setOptional(L,O,"batchingTexture"),De.setValue(L,"batchingTexture",O._matricesTexture,R),De.setOptional(L,O,"batchingIdTexture"),De.setValue(L,"batchingIdTexture",O._indirectTexture,R),De.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&De.setValue(L,"batchingColorTexture",O._colorsTexture,R));const si=q.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&Ft.update(O,q,pi),(Vn||zt.receiveShadow!==O.receiveShadow)&&(zt.receiveShadow=O.receiveShadow,De.setValue(L,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ri.envMap.value=Et,ri.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&B.environment!==null&&(ri.envMapIntensity.value=B.environmentIntensity),Vn&&(De.setValue(L,"toneMappingExposure",v.toneMappingExposure),zt.needsLights&&Le(ri,co),nt&&W.fog===!0&&ct.refreshFogUniforms(ri,nt),ct.refreshMaterialUniforms(ri,W,V,X,p.state.transmissionRenderTarget[T.id]),qa.upload(L,Ae(zt),ri,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(qa.upload(L,Ae(zt),ri,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&De.setValue(L,"center",O.center),De.setValue(L,"modelViewMatrix",O.modelViewMatrix),De.setValue(L,"normalMatrix",O.normalMatrix),De.setValue(L,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const yn=W.uniformsGroups;for(let Pn=0,Al=yn.length;Pn<Al;Pn++){const Ar=yn[Pn];I.update(Ar,pi),I.bind(Ar,pi)}}return pi}function Le(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function xn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,B,q){Rt.get(T.texture).__webglTexture=B,Rt.get(T.depthTexture).__webglTexture=q;const W=Rt.get(T);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=q===void 0,W.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){const q=Rt.get(T);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0};const ii=L.createFramebuffer();this.setRenderTarget=function(T,B=0,q=0){C=T,b=B,w=q;let W=!0,O=null,nt=!1,vt=!1;if(T){const Et=Rt.get(T);if(Et.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(L.FRAMEBUFFER,null),W=!1;else if(Et.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(Et.__hasExternalTextures)R.rebindTextures(T,Rt.get(T.texture).__webglTexture,Rt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const It=T.depthTexture;if(Et.__boundDepthTexture!==It){if(It!==null&&Rt.has(It)&&(T.width!==It.image.width||T.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const Nt=T.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(vt=!0);const Ht=Rt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ht[B])?O=Ht[B][q]:O=Ht[B],nt=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?O=Rt.get(T).__webglMultisampledFramebuffer:Array.isArray(Ht)?O=Ht[q]:O=Ht,P.copy(T.viewport),U.copy(T.scissor),F=T.scissorTest}else P.copy(ht).multiplyScalar(V).floor(),U.copy(Ut).multiplyScalar(V).floor(),F=Kt;if(q!==0&&(O=ii),yt.bindFramebuffer(L.FRAMEBUFFER,O)&&W&&yt.drawBuffers(T,O),yt.viewport(P),yt.scissor(U),yt.setScissorTest(F),nt){const Et=Rt.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,Et.__webglTexture,q)}else if(vt){const Et=Rt.get(T.texture),Nt=B;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Et.__webglTexture,q,Nt)}else if(T!==null&&q!==0){const Et=Rt.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Et.__webglTexture,q)}S=-1},this.readRenderTargetPixels=function(T,B,q,W,O,nt,vt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Rt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&vt!==void 0&&(wt=wt[vt]),wt){yt.bindFramebuffer(L.FRAMEBUFFER,wt);try{const Et=T.texture,Nt=Et.format,Ht=Et.type;if(!k.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!k.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-W&&q>=0&&q<=T.height-O&&L.readPixels(B,q,W,O,Vt.convert(Nt),Vt.convert(Ht),nt)}finally{const Et=C!==null?Rt.get(C).__webglFramebuffer:null;yt.bindFramebuffer(L.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(T,B,q,W,O,nt,vt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Rt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&vt!==void 0&&(wt=wt[vt]),wt){const Et=T.texture,Nt=Et.format,Ht=Et.type;if(!k.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!k.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=T.width-W&&q>=0&&q<=T.height-O){yt.bindFramebuffer(L.FRAMEBUFFER,wt);const It=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,It),L.bufferData(L.PIXEL_PACK_BUFFER,nt.byteLength,L.STREAM_READ),L.readPixels(B,q,W,O,Vt.convert(Nt),Vt.convert(Ht),0);const Jt=C!==null?Rt.get(C).__webglFramebuffer:null;yt.bindFramebuffer(L.FRAMEBUFFER,Jt);const ve=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await U_(L,ve,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,It),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,nt),L.deleteBuffer(It),L.deleteSync(ve),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,B=null,q=0){T.isTexture!==!0&&(Cs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,T=arguments[1]);const W=Math.pow(2,-q),O=Math.floor(T.image.width*W),nt=Math.floor(T.image.height*W),vt=B!==null?B.x:0,wt=B!==null?B.y:0;R.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,vt,wt,O,nt),yt.unbindTexture()};const $e=L.createFramebuffer(),Je=L.createFramebuffer();this.copyTextureToTexture=function(T,B,q=null,W=null,O=0,nt=null){T.isTexture!==!0&&(Cs("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,T=arguments[1],B=arguments[2],nt=arguments[3]||0,q=null),nt===null&&(O!==0?(Cs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),nt=O,O=0):nt=0);let vt,wt,Et,Nt,Ht,It,Jt,ve,Ge;const Be=T.isCompressedTexture?T.mipmaps[nt]:T.image;if(q!==null)vt=q.max.x-q.min.x,wt=q.max.y-q.min.y,Et=q.isBox3?q.max.z-q.min.z:1,Nt=q.min.x,Ht=q.min.y,It=q.isBox3?q.min.z:0;else{const si=Math.pow(2,-O);vt=Math.floor(Be.width*si),wt=Math.floor(Be.height*si),T.isDataArrayTexture?Et=Be.depth:T.isData3DTexture?Et=Math.floor(Be.depth*si):Et=1,Nt=0,Ht=0,It=0}W!==null?(Jt=W.x,ve=W.y,Ge=W.z):(Jt=0,ve=0,Ge=0);const me=Vt.convert(B.format),zt=Vt.convert(B.type);let ln;B.isData3DTexture?(R.setTexture3D(B,0),ln=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(R.setTexture2DArray(B,0),ln=L.TEXTURE_2D_ARRAY):(R.setTexture2D(B,0),ln=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);const xe=L.getParameter(L.UNPACK_ROW_LENGTH),pi=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ls=L.getParameter(L.UNPACK_SKIP_PIXELS),Vn=L.getParameter(L.UNPACK_SKIP_ROWS),co=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Be.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Be.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Nt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ht),L.pixelStorei(L.UNPACK_SKIP_IMAGES,It);const De=T.isDataArrayTexture||T.isData3DTexture,ri=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){const si=Rt.get(T),yn=Rt.get(B),Pn=Rt.get(si.__renderTarget),Al=Rt.get(yn.__renderTarget);yt.bindFramebuffer(L.READ_FRAMEBUFFER,Pn.__webglFramebuffer),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Al.__webglFramebuffer);for(let Ar=0;Ar<Et;Ar++)De&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Rt.get(T).__webglTexture,O,It+Ar),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Rt.get(B).__webglTexture,nt,Ge+Ar)),L.blitFramebuffer(Nt,Ht,vt,wt,Jt,ve,vt,wt,L.DEPTH_BUFFER_BIT,L.NEAREST);yt.bindFramebuffer(L.READ_FRAMEBUFFER,null),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(O!==0||T.isRenderTargetTexture||Rt.has(T)){const si=Rt.get(T),yn=Rt.get(B);yt.bindFramebuffer(L.READ_FRAMEBUFFER,$e),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Je);for(let Pn=0;Pn<Et;Pn++)De?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,si.__webglTexture,O,It+Pn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,si.__webglTexture,O),ri?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,yn.__webglTexture,nt,Ge+Pn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,yn.__webglTexture,nt),O!==0?L.blitFramebuffer(Nt,Ht,vt,wt,Jt,ve,vt,wt,L.COLOR_BUFFER_BIT,L.NEAREST):ri?L.copyTexSubImage3D(ln,nt,Jt,ve,Ge+Pn,Nt,Ht,vt,wt):L.copyTexSubImage2D(ln,nt,Jt,ve,Nt,Ht,vt,wt);yt.bindFramebuffer(L.READ_FRAMEBUFFER,null),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ri?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(ln,nt,Jt,ve,Ge,vt,wt,Et,me,zt,Be.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(ln,nt,Jt,ve,Ge,vt,wt,Et,me,Be.data):L.texSubImage3D(ln,nt,Jt,ve,Ge,vt,wt,Et,me,zt,Be):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,nt,Jt,ve,vt,wt,me,zt,Be.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,nt,Jt,ve,Be.width,Be.height,me,Be.data):L.texSubImage2D(L.TEXTURE_2D,nt,Jt,ve,vt,wt,me,zt,Be);L.pixelStorei(L.UNPACK_ROW_LENGTH,xe),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pi),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ls),L.pixelStorei(L.UNPACK_SKIP_ROWS,Vn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,co),nt===0&&B.generateMipmaps&&L.generateMipmap(ln),yt.unbindTexture()},this.copyTextureToTexture3D=function(T,B,q=null,W=null,O=0){return T.isTexture!==!0&&(Cs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,W=arguments[1]||null,T=arguments[2],B=arguments[3],O=arguments[4]||0),Cs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,B,q,W,O)},this.initRenderTarget=function(T){Rt.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),yt.unbindTexture()},this.resetState=function(){b=0,w=0,C=null,yt.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=_e._getDrawingBufferColorSpace(t),e.unpackColorSpace=_e._getUnpackColorSpace()}}class mS{constructor(){this.group=new Ee,this.waveTimer=0;const t=new kt({color:14660754,roughness:.72}),e=new kt({color:1118483,roughness:.8}),n=new kt({color:592139,roughness:.25}),i=new kt({color:16448250,roughness:.58}),s=new kt({color:592139,roughness:.75}),o=new kt({color:1315864,roughness:.82}),a=new kt({color:16777215,roughness:.5}),l=new kt({color:10741301,roughness:.6}),c=new kt({color:1579035,roughness:.75});this.hips=new Ee,this.hips.position.y=.92,this.group.add(this.hips);const h=new at(new cn(.19,20,16),o);h.scale.set(1.12,.7,.84),h.castShadow=!0,this.hips.add(h),this.torso=new Ee,this.torso.position.y=.06,this.hips.add(this.torso);const d=new at(new ai(.185,.28,12,24),i);d.scale.set(1.18,1,.78),d.position.y=.27,d.castShadow=!0,this.torso.add(d);const u=new at(new ai(.105,.24,8,16),s);u.scale.set(1,1,.45),u.position.set(0,.27,.11),this.torso.add(u);const f=new at(new sn(.068,.078,.12,16),t);f.position.y=.56,this.torso.add(f),this.backpack=new Ee,this.backpack.position.set(0,.3,-.17);const _=new at(new ai(.135,.18,8,16),c);_.scale.set(1.12,1,.68),_.castShadow=!0,this.backpack.add(_),this.torso.add(this.backpack),this.head=new Ee,this.head.position.y=.62,this.torso.add(this.head);const g=new at(new cn(.185,32,24),t);g.scale.set(.94,1.08,.96),g.position.y=.165,g.castShadow=!0,this.head.add(g),[-1,1].forEach(x=>{const P=new at(new cn(.021,12,12),n);P.scale.set(.9,1.25,.7),P.position.set(x*.062,.165,.168);const U=new at(new ai(.008,.036,4,8),e);U.rotation.z=Math.PI/2-x*.08,U.position.set(x*.062,.205,.166);const F=new at(new cn(.034,12,12),t);F.scale.set(.55,1.1,.75),F.position.set(x*.172,.155,-.01),this.head.add(P,U,F)});const m=new at(new cn(.022,10,10),t);m.scale.set(.85,1.1,1.15),m.position.set(0,.135,.182),this.head.add(m);const p=new at(new cn(.194,28,20,0,Math.PI*2,0,Math.PI*.56),e);p.scale.set(.96,1.08,1),p.position.set(0,.19,-.016),p.rotation.x=-.18,p.castShadow=!0,this.head.add(p);const y=new at(new ai(.056,.14,8,14),e);y.rotation.z=Math.PI/2-.1,y.position.set(0,.34,.072),y.scale.set(1,1,.85),this.head.add(y);const M=new at(new cn(.175,20,16),e);M.scale.set(.92,.95,.72),M.position.set(0,.17,-.065),this.head.add(M);const v=x=>{const P=new Ee;P.position.set(x*.245,.46,0),this.torso.add(P);const U=new at(new cn(.066,14,14),i);P.add(U);const F=new at(new ai(.055,.17,8,14),i);F.position.y=-.12,F.castShadow=!0,P.add(F);const z=new Ee;z.position.y=-.24,P.add(z);const Y=new at(new ai(.048,.16,8,14),i);Y.position.y=-.11,Y.castShadow=!0,z.add(Y);const H=new at(new cn(.046,12,12),t);return H.scale.set(.85,1.15,.75),H.position.y=-.23,z.add(H),{shoulder:P,elbow:z}},A=v(-1),b=v(1);this.leftShoulder=A.shoulder,this.leftElbow=A.elbow,this.rightShoulder=b.shoulder,this.rightElbow=b.elbow;const w=x=>{const P=new Ee;P.position.set(x*.105,-.04,0),this.hips.add(P);const U=new at(new ai(.074,.26,8,16),o);U.position.y=-.19,U.castShadow=!0,P.add(U);const F=new Ee;F.position.y=-.4,P.add(F);const z=new at(new ai(.063,.26,8,16),o);z.position.y=-.19,z.castShadow=!0,F.add(z);const Y=new Ee;Y.position.set(0,-.42,.04);const H=new at(new ai(.058,.11,8,14),a);H.rotation.x=Math.PI/2,H.scale.set(1.05,1,.78),H.castShadow=!0;const X=new at(new ce(.125,.028,.22),l);return X.position.y=-.035,Y.add(H,X),F.add(Y),{hip:P,knee:F}},C=w(-1),S=w(1);this.leftHip=C.hip,this.leftKnee=C.knee,this.rightHip=S.hip,this.rightKnee=S.knee}triggerWave(){this.waveTimer=1.8}update(t,e,n,i=.016){this.waveTimer>0&&(this.waveTimer=Math.max(0,this.waveTimer-i));let s=.92,o=0,a=0,l=0,c=0,h=.08,d=-.16,u=0,f=-.08,_=-.16,g=0,m=0,p=0,y=0,M=!0;if(t==="idle")s=.92+Math.sin(e*2)*.012,a=Math.sin(e*.85)*.14,c=Math.sin(e*1.4)*.04,u=-Math.sin(e*1.4)*.04;else if(t==="walk"){const A=Math.sin(n),b=Math.cos(n);s=.92+Math.abs(b)*.05,o=.08,g=A*.6,p=-A*.6,m=Math.max(0,-b)*.52,y=Math.max(0,b)*.52,c=-A*.48,u=A*.48,d=-.32,_=-.32}else if(t==="cycle"){s=.98,o=.3,l=-.2,c=-.86,u=-.86,h=.12,f=-.12,d=-.24,_=-.24;const A=Math.sin(n),b=Math.sin(n+Math.PI);g=-.82+A*.4,p=-.82+b*.4,m=.92-Math.cos(n)*.4,y=.92-Math.cos(n+Math.PI)*.4}else t==="code"&&(M=!1,s=.62,o=.14,a=Math.sin(e*.65)*.12,l=.07,g=-1.45,p=-1.45,m=1.45,y=1.45,c=-.6,u=-.6,h=-.05,f=.05,d=-.92+Math.sin(e*15)*.1,_=-.92+Math.cos(e*17)*.1);this.waveTimer>0&&(u=-2.35,f=-.3+Math.sin(e*13)*.24,_=-.4),this.backpack.visible=M;const v=.14;this.hips.position.y=he.lerp(this.hips.position.y,s,v),this.torso.rotation.x=he.lerp(this.torso.rotation.x,o,v),this.head.rotation.y=he.lerp(this.head.rotation.y,a,v),this.head.rotation.x=he.lerp(this.head.rotation.x,l,v),this.leftShoulder.rotation.x=he.lerp(this.leftShoulder.rotation.x,c,v),this.leftShoulder.rotation.z=he.lerp(this.leftShoulder.rotation.z,h,v),this.leftElbow.rotation.x=he.lerp(this.leftElbow.rotation.x,d,v),this.rightShoulder.rotation.x=he.lerp(this.rightShoulder.rotation.x,u,v),this.rightShoulder.rotation.z=he.lerp(this.rightShoulder.rotation.z,f,v),this.rightElbow.rotation.x=he.lerp(this.rightElbow.rotation.x,_,v),this.leftHip.rotation.x=he.lerp(this.leftHip.rotation.x,g,v),this.leftKnee.rotation.x=he.lerp(this.leftKnee.rotation.x,m,v),this.rightHip.rotation.x=he.lerp(this.rightHip.rotation.x,p,v),this.rightKnee.rotation.x=he.lerp(this.rightKnee.rotation.x,y,v)}}class _S{constructor(){this.group=new Ee,this.wheelRadius=.34;const t=new kt({color:16777215,metalness:.25,roughness:.35}),e=new kt({color:10741301,metalness:.35,roughness:.35}),n=new kt({color:592139,roughness:.85}),i=new kt({color:16777215,metalness:.65,roughness:.25}),s=new kt({color:1118483,roughness:.7}),o=_=>{const g=new Ee;g.position.set(0,this.wheelRadius,_);const m=new at(new ol(this.wheelRadius,.04,12,32),n);m.rotation.y=Math.PI/2,m.castShadow=!0,g.add(m);const p=new at(new ol(this.wheelRadius-.04,.015,8,28),i);p.rotation.y=Math.PI/2,g.add(p);const y=new at(new sn(.035,.035,.1,12),e);y.rotation.z=Math.PI/2,g.add(y);for(let M=0;M<6;M++){const v=new at(new sn(.006,.006,(this.wheelRadius-.04)*2,6),i);v.rotation.x=M/6*Math.PI,g.add(v)}return this.group.add(g),g};this.rearWheel=o(-.56),this.frontWheel=o(.56);const a=(_,g,m=.024,p=t)=>{const y=new N(..._),M=new N(...g),v=new N().subVectors(M,y),A=v.length(),b=new at(new sn(m,m,A,10),p);b.position.copy(y).addScaledVector(v,.5),b.quaternion.setFromUnitVectors(new N(0,1,0),v.normalize()),b.castShadow=!0,this.group.add(b)};a([0,.34,-.56],[0,.36,-.05],.02),a([0,.34,-.56],[0,.78,-.18],.02),a([0,.36,-.05],[0,.82,-.2],.025),a([0,.36,-.05],[0,.76,.38],.026),a([0,.78,-.18],[0,.82,.36],.024),a([0,.86,.34],[0,.34,.56],.024,e);const l=new at(new ce(.16,.06,.26),s);l.position.set(0,.9,-.22),this.group.add(l),a([0,.82,.36],[0,.98,.32],.02,e);const c=new at(new sn(.018,.018,.52,10),e);c.rotation.z=Math.PI/2,c.position.set(0,.99,.32),this.group.add(c);const h=new at(new sn(.026,.026,.11,10),t);h.rotation.z=Math.PI/2,h.position.set(-.24,.99,.32);const d=h.clone();d.position.x=.24,this.group.add(h,d),this.crank=new Ee,this.crank.position.set(0,.36,-.05);const u=new at(new sn(.1,.1,.02,16),e);u.rotation.z=Math.PI/2,this.crank.add(u);const f=new at(new ce(.28,.025,.025),i);this.crank.add(f),this.group.add(this.crank)}setWheelAngle(t){this.frontWheel.rotation.x=t,this.rearWheel.rotation.x=t,this.crank.rotation.x=t*1.35}}function Br(r,t="",e="#a3e635",n="#0c0c0f",i=36){const s=document.createElement("canvas");s.width=768,s.height=384;const o=s.getContext("2d"),a=n.toLowerCase()==="#ffffff";o.fillStyle=n,o.fillRect(0,0,s.width,s.height),o.strokeStyle=a?"rgba(9, 9, 11, 0.16)":"rgba(255, 255, 255, 0.16)",o.lineWidth=3,o.strokeRect(18,18,s.width-36,s.height-36),o.fillStyle=e,o.fillRect(48,52,68,7),o.fillStyle=a?"#09090b":"#ffffff",o.font=`700 ${i}px "Plus Jakarta Sans", system-ui, -apple-system, sans-serif`,o.textAlign="left",o.textBaseline="middle";const l=r.split(" ");let c="",h=t?150:185;for(const u of l){const f=c?`${c} ${u}`:u;o.measureText(f).width>660?(o.fillText(c,48,h),c=u,h+=i*1.25):c=f}c&&o.fillText(c,48,h),t&&(o.fillStyle=a?"#3f6212":e,o.font='600 25px "Plus Jakarta Sans", system-ui, -apple-system, sans-serif',o.fillText(t,48,h+62));const d=new $d(s);return d.colorSpace=Dn,d.anisotropy=4,d}function Df(r="code"){const t=document.createElement("canvas");t.width=512,t.height=320;const e=t.getContext("2d"),n=new $d(t);n.colorSpace=Dn;const i=s=>{if(e.fillStyle="#09090b",e.fillRect(0,0,512,320),e.fillStyle="#141418",e.fillRect(0,0,512,30),["#ffffff","#a3e635","#52525b"].forEach((o,a)=>{e.beginPath(),e.arc(18+a*16,15,4.5,0,Math.PI*2),e.fillStyle=o,e.fill()}),r==="code"){e.fillStyle="#a1a1aa",e.font="12px ui-monospace, monospace",e.fillText("lexai-pipeline.ts — Vishal Kumar",76,19);const o=[{text:'import { StateGraph } from "@langchain/langgraph";',color:"#a3e635"},{text:'import { Anthropic } from "@anthropic-ai/sdk";',color:"#a3e635"},{text:"const cache = createRedisCluster(env.REDIS);",color:"#ffffff"},{text:"export async function draftLegalBrief(id: string) {",color:"#bef264"},{text:"  const refs = await kanoonAPI.verify(id);",color:"#e4e4e7"},{text:"  const brief = await claude.messages.create(...);",color:"#ffffff"},{text:'  await queue.add("pdf-export", { brief });',color:"#a3e635"},{text:"  return { verified: true, latencyMs: 142 };",color:"#bef264"},{text:"}",color:"#ffffff"}];e.font="13px ui-monospace, monospace";const a=Math.floor(s*1.5)%o.length;o.forEach((c,h)=>{const d=58+h*24;h===a&&(e.fillStyle="rgba(163, 230, 53, 0.14)",e.fillRect(14,d-14,484,20)),e.fillStyle="#52525b",e.fillText(String(h+1).padStart(2,"0"),20,d),e.fillStyle=c.color,e.fillText(c.text,46,d)}),e.fillStyle="#141418",e.fillRect(16,268,480,38),e.fillStyle="#a3e635",e.font="12px ui-monospace, monospace";const l=".".repeat(1+Math.floor(s*2.2)%3);e.fillText(`> Build green · 20+ microservices active${l}`,26,291)}else{e.fillStyle="#a1a1aa",e.font="12px ui-monospace, monospace",e.fillText("Architecture & Real-World Impact",76,19);for(let o=0;o<20;o++){const l=(.25+.65*Math.abs(Math.sin(s*2+o*.45)))*115,c=36+o*22,h=175-l;e.fillStyle=o%3===0?"#a3e635":o%3===1?"#ffffff":"#4d7c0f",e.fillRect(c,h,14,l)}e.fillStyle="#ffffff",e.font="bold 17px system-ui, sans-serif",e.fillText("1,700+ Users · 99.98% Uptime · 40% Faster Load",36,224),e.fillStyle="#a3e635",e.font="13px system-ui, sans-serif",e.fillText("Tata Steel Foundation · LexAI · PulseWatch · Moodify",36,256),e.fillStyle="#a1a1aa",e.fillText("React · Next.js · Node.js · PostgreSQL · Redis · LangChain",36,284)}n.needsUpdate=!0};return i(0),{texture:n,update:i}}function gS(r,t,e=1,n=3560212){const i=new Ee;i.position.set(r,0,t),i.scale.setScalar(e);const s=new at(new sn(.11,.16,1.4,10),new kt({color:2565930,roughness:.85}));s.position.y=.7,s.castShadow=!0,i.add(s);const o=new kt({color:n,roughness:.82}),a=new at(new cn(.82,16,14),o);a.position.set(0,1.9,0),a.castShadow=!0;const l=new at(new cn(.58,14,12),o);l.position.set(-.42,1.6,.2),l.castShadow=!0;const c=new at(new cn(.54,14,12),o);return c.position.set(.42,1.65,-.16),c.castShadow=!0,i.add(a,l,c),i}function vS(r,t){const e=new Ee;e.position.set(r,0,t);const n=new at(new sn(.045,.06,3.1,12),new kt({color:2565930,roughness:.5}));n.position.y=1.55,n.castShadow=!0,e.add(n);const i=new at(new sn(.22,.28,.12,12),new kt({color:16777215,roughness:.4}));i.position.y=3.12,e.add(i);const s=new at(new cn(.11,12,12),new Vi({color:10741301}));return s.position.y=3.02,e.add(s),e}function Es(r,t,e,n,i="#0c0c0f"){const s=new Ee;s.position.set(r,0,t);const o=new at(new ce(.42,1.15,.32),new kt({color:16777215,roughness:.55}));o.position.y=.575,o.castShadow=!0,s.add(o);const a=new at(new ce(2.2,1.1,.1),new kt({map:Br(e,n,"#a3e635",i,40),roughness:.45}));return a.position.y=1.7,a.castShadow=!0,s.add(a),s}function xS(r){const t=new Ee;r.add(t);const e=[],n=new at(new $r(180,90),new kt({color:657933,roughness:.94}));n.rotation.x=-Math.PI/2,n.position.set(48,-.02,-4),n.receiveShadow=!0,t.add(n);const i=new at(new ce(128,.06,3.6),new kt({color:1447451,roughness:.85}));i.position.set(48,-.01,0),i.receiveShadow=!0,t.add(i);const s=new kt({color:16777215,roughness:.5});[-1.86,1.86].forEach(et=>{const tt=new at(new ce(128,.07,.1),s);tt.position.set(48,.02,et),t.add(tt)});const o=new Vi({color:10741301});for(let et=-4;et<=96;et+=4.2){const tt=new at(new ce(1.3,.015,.07),o);tt.position.set(et,.022,0),t.add(tt)}t.add(Es(-1.5,-2.5,"VISHAL KUMAR","JAMSHEDPUR · ORIGIN","#0c0c0f")),t.add(Es(6.5,-2.5,"SCHOOL BASICS","PHYSICS · CHEM · MATHS","#ffffff")),t.add(Es(11.5,2.5,"FIRST CODE","BASIC PYTHON & JAVA","#0c0c0f"));const a=new Ee;a.position.set(16.5,0,-4.6);const l=new at(new ce(7.2,3.5,3.8),new kt({color:16448250,roughness:.65}));l.position.y=1.75,l.castShadow=!0,l.receiveShadow=!0,a.add(l);const c=new at(new $h(5.5,1.75,4),new kt({color:1579035,roughness:.72}));c.rotation.y=Math.PI/4,c.scale.set(1.2,1,.75),c.position.y=4.35,c.castShadow=!0,a.add(c);const h=new at(new ce(4.2,1,.16),new kt({map:Br("DAV PUBLIC SCHOOL","PCM · PYTHON & JAVA","#a3e635","#0c0c0f",36)}));h.position.set(0,2.95,1.98),a.add(h);const d=new at(new ce(1.1,1.65,.15),new kt({color:592139}));d.position.set(0,.825,1.9),a.add(d);const u=new Vi({color:10741301});[-2.3,-1.2,1.2,2.3].forEach(et=>{const tt=new at(new ce(.65,.75,.1),u);tt.position.set(et,1.85,1.91),a.add(tt)}),t.add(a),t.add(Es(24.5,-2.5,"GFG CAMPUS MANTRI","200+ DSA PROBLEMS","#0c0c0f")),t.add(Es(30.5,2.5,"GSSoC '26","25+ OPEN SOURCE PRs","#ffffff")),t.add(Es(36.5,-2.5,"GLOBAL FINALIST","50+ COUNTRIES HACKATHON","#0c0c0f"));const f=new Ee;f.position.set(43,0,-5.2);const _=new at(new ce(10.6,5.2,4.4),new kt({color:1579035,roughness:.55}));_.position.y=2.6,_.castShadow=!0,f.add(_);const g=new at(new ce(8.8,3.4,.18),new kt({color:16777215,emissive:10741301,emissiveIntensity:.12,roughness:.25}));g.position.set(0,2.9,2.2),f.add(g);for(let et=-4.2;et<=4.2;et+=2.1){const tt=new at(new ce(.32,5.2,.45),new kt({color:16777215,roughness:.45}));tt.position.set(et,2.6,2.35),tt.castShadow=!0,f.add(tt)}const m=new at(new ce(6.8,1.25,.22),new kt({map:Br("R.V.S. COLLEGE OF ENGG & TECH","B.TECH CSE · 2023 - 2027","#a3e635","#0c0c0f",34)}));m.position.set(0,5.95,2),f.add(m),t.add(f);const p=new Ee;p.position.set(60.5,0,-.4),p.rotation.y=-.52,t.add(p);const y=new at(new ce(6.6,.16,4.8),new kt({color:1315864,roughness:.75}));y.position.set(0,.08,.2),y.receiveShadow=!0,p.add(y);const M=new at(new ce(6.66,.04,4.86),new Vi({color:10741301}));M.position.set(0,.02,.2),p.add(M);const v=new at(new ce(4.2,.03,3),new kt({color:2565930,roughness:.95}));v.position.set(0,.175,.35),v.receiveShadow=!0,p.add(v);const A=new at(new ce(3.2,.1,1.35),new kt({color:16777215,roughness:.4}));A.position.set(0,.92,-.45),A.castShadow=!0,p.add(A),[[-1.45,-1],[1.45,-1],[-1.45,.1],[1.45,.1]].forEach(([et,tt])=>{const L=new at(new ce(.08,.88,.08),new kt({color:592139,roughness:.6}));L.position.set(et,.44,tt),p.add(L)});const b=new Ee;b.position.set(0,.16,.72);const w=new at(new sn(.32,.38,.08,12),new kt({color:2565930}));w.position.y=.05;const C=new at(new sn(.05,.05,.42,10),new kt({color:10741301}));C.position.y=.24;const S=new at(new ce(.62,.09,.58),new kt({color:1579035,roughness:.7}));S.position.y=.44;const x=new at(new ce(.56,.78,.09),new kt({color:1579035,roughness:.7}));x.position.set(0,.85,.25),b.add(w,C,S,x),p.add(b);const P=Df("code"),U=Df("metrics"),F=(et,tt,L,Zt)=>{const Ot=new Ee;Ot.position.set(et,1.48,tt),Ot.rotation.y=L;const k=new at(new ce(1.38,.84,.06),new kt({color:1579035,roughness:.4}));Ot.add(k);const yt=new at(new $r(1.3,.76),new Vi({map:Zt.texture}));yt.position.z=.035,yt.userData={type:"monitor"},e.push(yt),Ot.add(yt);const ae=new at(new sn(.04,.05,.52,8),new kt({color:16777215}));ae.position.y=-.35,Ot.add(ae),p.add(Ot)};F(-.68,-.78,.16,P),F(.72,-.75,-.18,U);const z=new at(new ce(.68,.04,.24),new kt({color:592139,emissive:10741301,emissiveIntensity:.35}));z.position.set(0,.99,-.18),p.add(z);const Y=new at(new sn(.07,.065,.15,14),new kt({color:10741301,roughness:.35}));Y.position.set(1.05,1.05,-.15),p.add(Y);const H=new at(new sn(.11,.08,.16,12),new kt({color:16777215,roughness:.5}));H.position.set(-1.25,1.05,-.2);const X=new at(new cn(.16,12,10),new kt({color:6660877,roughness:.75}));X.position.set(-1.25,1.2,-.2),p.add(H,X);const V=[],it=new Vi({color:16777215,transparent:!0,opacity:.35});for(let et=0;et<3;et++){const tt=new at(new cn(.032,8,8),it);tt.position.set(1.05,1.18+et*.12,-.15),tt.userData={offset:et*.33},p.add(tt),V.push(tt)}const D=new at(new ce(5.6,3.2,.14),new kt({color:1579035,roughness:.8}));D.position.set(0,1.75,-1.65),D.receiveShadow=!0,p.add(D);const ht=new at(new ce(2,.95,.06),new kt({map:Br("SHIP TO REALITY","REACT · NODE · AI","#a3e635","#ffffff",40),roughness:.45}));ht.position.set(0,2.55,-1.55),p.add(ht);const Ut=new Ag(16777215,5,12);Ut.position.set(0,2.7,.5),p.add(Ut);const Kt=[{name:"React / Next.js",pos:[-2.25,2.65,-.8]},{name:"Node / Express",pos:[-1.4,3.45,-1]},{name:"TypeScript",pos:[0,3.65,-.95]},{name:"LangChain / RAG",pos:[1.55,3.4,-.95]},{name:"PostgreSQL / Redis",pos:[2.3,2.6,-.8]}],J=[];Kt.forEach((et,tt)=>{const L=new at(new $r(1.5,.62),new Vi({map:Br(et.name,"PRODUCTION STACK","#a3e635","#0c0c0f",44),side:bi}));L.position.set(...et.pos),L.userData={baseY:et.pos[1],phase:tt*1.1},p.add(L),J.push(L)});const st=[{id:"tsf-ai",title:"TATA STEEL AI",sub:"EN <-> HI TRANSLATOR",bg:"#0c0c0f",x:72.5,z:-2.9},{id:"tsf-sde",title:"TATA STEEL SDE",sub:"1,700+ EMPLOYEES",bg:"#ffffff",x:76.5,z:2.8},{id:"lexai",title:"LEXAI AGENTS",sub:"4 CLAUDE PIPELINES",bg:"#0c0c0f",x:80.5,z:-2.9},{id:"pulsewatch",title:"PULSEWATCH",sub:"REAL-TIME MONITOR",bg:"#ffffff",x:84.5,z:2.8},{id:"moodify",title:"MOODIFY AI",sub:"MEDIAPIPE + GSAP",bg:"#0c0c0f",x:88.5,z:-2.9}],dt=[];st.forEach(et=>{const tt=new Ee;tt.position.set(et.x,0,et.z);const L=new at(new ce(2.2,.28,.85),new kt({color:16777215,roughness:.5}));L.position.y=.14,L.castShadow=!0,tt.add(L);const Zt=new at(new ce(2.7,3,.16),new kt({map:Br(et.title,et.sub,"#a3e635",et.bg,44),roughness:.42}));Zt.position.y=1.8,Zt.castShadow=!0,Zt.userData={type:"monolith",id:et.id},e.push(Zt),tt.add(Zt),t.add(tt),dt.push({group:tt,slab:Zt,id:et.id})});const rt=new Ee;rt.position.set(97,0,0),rt.rotation.y=-.18;const Tt=new at(new ce(5.6,.4,1.4),new kt({color:16777215,roughness:.5}));Tt.position.y=.2,Tt.castShadow=!0,rt.add(Tt),[-2.3,2.3].forEach(et=>{const tt=new at(new ce(.28,3.4,.4),new kt({color:16777215,roughness:.5}));tt.position.set(et,2,0),tt.castShadow=!0,rt.add(tt)});const bt=new at(new ce(4.9,2.5,.22),new kt({map:Br("OPEN FOR OPPORTUNITIES","Ready to put knowledge into the real world.","#a3e635","#0c0c0f",42),roughness:.4}));bt.position.set(0,2.25,0),bt.castShadow=!0,rt.add(bt),t.add(rt),[[-3,-3.5,1,3560212],[3.5,3.4,.9,5078031],[9,-3.6,1.1,4153874],[13.2,-3.4,.85,6660877],[22,3.5,1.05,3560212],[27,-3.4,.95,5078031],[33.5,-3.5,1.15,4153874],[39,3.4,1,6660877],[49,-3.6,1.1,3560212],[53,3.5,.95,5078031],[92.5,3.6,1.05,3560212]].forEach(([et,tt,L,Zt])=>t.add(gS(et,tt,L,Zt)));for(let et=2;et<=94;et+=12)t.add(vS(et,-2.05));const $t=new kt({color:1315864,roughness:.92});for(let et=-8;et<=105;et+=7.5){const tt=3.5+Math.abs(et*17)%10*.75,L=2.8+Math.abs(et*7)%3,Zt=new at(new ce(L,tt,2.4),$t);Zt.position.set(et,tt*.5-.1,-20-Math.abs(et*3)%8),t.add(Zt)}return{world:t,deskGroup:p,chairWorldAnchor:new N(60.5+Math.sin(-.52)*.72,.16,-.4+Math.cos(-.52)*.72),deskRotationY:-.52,interactables:e,monoliths:dt,update(et){P.update(et),U.update(et),J.forEach(tt=>{tt.position.y=tt.userData.baseY+Math.sin(et*1.3+tt.userData.phase)*.08}),V.forEach(tt=>{const L=(et*.55+tt.userData.offset)%1;tt.position.y=1.15+L*.42,tt.position.x=1.05+Math.sin(et*2+tt.userData.offset*6)*.03,tt.scale.setScalar(.7+L*.8)})}}}class yS{constructor(t,e,n={}){this.canvas=t,this.data=e,this.callbacks=n,this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.clock=new Pg,this.raycaster=new Lg,this.pointer=new Ct(0,0),this.smoothPointer=new Ct(0,0),this.targetProgress=0,this.smoothProgress=0,this.lastX=0,this._initRenderer(),this._initScene(),this._initLighting(),this._initStars(),this.world=xS(this.scene),this.character=new mS,this.scene.add(this.character.group),this.bicycle=new _S,this.bicycle.group.position.set(19.5,0,0),this.bicycle.group.rotation.y=Math.PI/2,this.scene.add(this.bicycle.group),this.cameraTargetPos=new N(.4,2,5.6),this.cameraTargetLook=new N(0,1.25,-.4),this.currentLook=new N(0,1.25,-.4),this._bindEvents(),this.callbacks.onReady&&requestAnimationFrame(()=>this.callbacks.onReady()),this._animate()}_initRenderer(){this.renderer=new pS({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Md,this.renderer.toneMapping=Td,this.renderer.toneMappingExposure=1.12}_initScene(){this.scene=new sg,this.skyColors={dawn:new ue(592139),sunset:new ue(723726),studio:new ue(460553)},this.scene.background=this.skyColors.dawn.clone(),this.scene.fog=new Gh(592139,.018),this.camera=new $n(46,this.width/this.height,.1,140),this.camera.position.set(.4,2,5.6)}_initLighting(){const t=new wg(16777215,1579035,.95);this.scene.add(t),this.sunLight=new nf(16777215,2.1),this.sunLight.position.set(12,18,12),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(1024,1024),this.sunLight.shadow.camera.near=1,this.sunLight.shadow.camera.far=60;const e=16;this.sunLight.shadow.camera.left=-e,this.sunLight.shadow.camera.right=e,this.sunLight.shadow.camera.top=e,this.sunLight.shadow.camera.bottom=-e,this.scene.add(this.sunLight),this.scene.add(this.sunLight.target);const n=new nf(10741301,.45);n.position.set(-8,8,-10),this.scene.add(n)}_initStars(){const e=new Float32Array(780);for(let i=0;i<260;i++)e[i*3]=-10+Math.random()*120,e[i*3+1]=1+Math.random()*14,e[i*3+2]=-20+Math.random()*22;const n=new ni;n.setAttribute("position",new Mi(e,3)),this.starsMat=new qd({color:10741301,size:.075,transparent:!0,opacity:.4}),this.stars=new lg(n,this.starsMat),this.scene.add(this.stars)}_bindEvents(){this._onResize=()=>{this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(this.pixelRatio)},this._onPointerMove=t=>{this.pointer.x=t.clientX/this.width*2-1,this.pointer.y=-(t.clientY/this.height)*2+1},this._onClick=t=>{if(t.target.closest("button, a, input, textarea, .hud-interactive, .modal-panel"))return;if(this.raycaster.setFromCamera(this.pointer,this.camera),this.raycaster.intersectObject(this.character.group,!0).length>0){this.character.triggerWave();return}const n=this.raycaster.intersectObjects(this.world.interactables,!1);if(n.length>0){const i=n[0].object.userData;i.type==="monolith"&&this.callbacks.onMonolithClick?this.callbacks.onMonolithClick(i.id):i.type==="monitor"&&this.character.triggerWave()}},window.addEventListener("resize",this._onResize),window.addEventListener("pointermove",this._onPointerMove,{passive:!0}),window.addEventListener("click",this._onClick)}setStoryProgress(t){this.targetProgress=he.clamp(t,0,1)}focusMonolith(t){this.world.monoliths.forEach(e=>{const n=e.id===t;e.group.scale.setScalar(n?1.07:1)})}_updateStoryTimeline(t,e,n){if(t<.48){const d=he.smoothstep(t,.2,.48);this.scene.background.lerpColors(this.skyColors.dawn,this.skyColors.sunset,d)}else{const d=he.smoothstep(t,.48,.72);this.scene.background.lerpColors(this.skyColors.sunset,this.skyColors.studio,d)}this.scene.fog.color.copy(this.scene.background);let i="idle",s=0,o=0,a=0,l=.42,c=0;const h=(d,u)=>he.clamp((t-d)/(u-d),0,1);if(t<.08)i="idle",s=0,l=he.lerp(.45,Math.PI/2,h(.02,.08)),this.bicycle.group.position.set(19.5,0,0),this.bicycle.group.rotation.y=Math.PI/2,this.cameraTargetPos.set(.3,2.05,5.8),this.cameraTargetLook.set(-.2,1.35,-.4);else if(t<.3){const d=h(.08,.3);s=he.lerp(0,19.2,d),i=Math.abs(s-this.lastX)>.002?"walk":"idle",c=s*2.5,l=Math.PI/2,this.bicycle.group.position.set(19.5,0,0),this.bicycle.group.rotation.y=Math.PI/2,this.cameraTargetPos.set(s+1.4,2.35,6.8),this.cameraTargetLook.set(s+.6,1.45,-1.6)}else if(t<.54){const d=h(.3,.54);s=he.lerp(19.5,42,d),i="cycle",l=Math.PI/2,o=.06,this.bicycle.group.position.set(s,0,0),this.bicycle.group.rotation.y=Math.PI/2;const f=(s-19.5)/this.bicycle.wheelRadius;this.bicycle.setWheelAngle(f),c=f*1.35,this.cameraTargetPos.set(s+1.2,2.3,6.9),this.cameraTargetLook.set(s+1.2,1.6,-2)}else if(t<.63){const d=h(.54,.63);s=he.lerp(42,this.world.chairWorldAnchor.x,d),a=he.lerp(0,this.world.chairWorldAnchor.z,d),o=he.lerp(0,this.world.chairWorldAnchor.y,d),i=Math.abs(s-this.lastX)>.002?"walk":"idle",c=s*2.5,l=he.lerp(Math.PI/2,this.world.deskRotationY+Math.PI,he.smoothstep(d,.65,1)),this.bicycle.group.position.set(42.2,0,1.55),this.bicycle.group.rotation.y=Math.PI*.35,this.cameraTargetPos.set(he.lerp(43.2,56.6,d),he.lerp(2.3,2.45,d),he.lerp(6.9,4.6,d)),this.cameraTargetLook.set(he.lerp(43.2,60.2,d),he.lerp(1.6,1.25,d),he.lerp(-2,-.5,d))}else if(t<.74){i="code",s=this.world.chairWorldAnchor.x,o=this.world.chairWorldAnchor.y,a=this.world.chairWorldAnchor.z,l=this.world.deskRotationY+Math.PI,this.bicycle.group.position.set(42.2,0,1.55),this.bicycle.group.rotation.y=Math.PI*.35;const d=h(.63,.74);this.cameraTargetPos.set(56.5+d*1.4,2.45-d*.15,4.55),this.cameraTargetLook.set(60.3,1.28,-.5)}else if(t<.9){i="code",s=this.world.chairWorldAnchor.x,o=this.world.chairWorldAnchor.y,a=this.world.chairWorldAnchor.z,l=this.world.deskRotationY+Math.PI;const d=h(.74,.9),u=he.lerp(71.5,89,d);this.cameraTargetPos.set(u-2,2.8,8.2),this.cameraTargetLook.set(u,1.85,-.3)}else{i="code",s=this.world.chairWorldAnchor.x,o=this.world.chairWorldAnchor.y,a=this.world.chairWorldAnchor.z,l=this.world.deskRotationY+Math.PI;const d=h(.9,1);this.cameraTargetPos.set(he.lerp(88.5,95.6,d),he.lerp(2.8,2.55,d),8.6),this.cameraTargetLook.set(he.lerp(89.5,96.4,d),2.1,0)}this.lastX=s,this.character.group.position.set(s,o,a),this.character.group.rotation.y=he.lerp(this.character.group.rotation.y,l,.16),this.character.update(i,e,c,n),this.sunLight.position.set(this.camera.position.x+10,18,12),this.sunLight.target.position.set(this.camera.position.x,0,-2)}_animate(){this._rafId=requestAnimationFrame(()=>this._animate());const t=Math.min(this.clock.getDelta(),.05),e=this.clock.elapsedTime;this.smoothProgress=he.lerp(this.smoothProgress,this.targetProgress,.085),this.smoothPointer.lerp(this.pointer,.06),this._updateStoryTimeline(this.smoothProgress,e,t),this.world.update(e);const n=new N(this.cameraTargetPos.x+this.smoothPointer.x*.35,this.cameraTargetPos.y+this.smoothPointer.y*.2,this.cameraTargetPos.z);this.camera.position.lerp(n,.08),this.currentLook.lerp(this.cameraTargetLook,.08),this.camera.lookAt(this.currentLook),this.renderer.render(this.scene,this.camera)}dispose(){cancelAnimationFrame(this._rafId),window.removeEventListener("resize",this._onResize),window.removeEventListener("pointermove",this._onPointerMove),window.removeEventListener("click",this._onClick),this.renderer.dispose()}}var If="1.3.27";function ap(r,t,e){return Math.max(r,Math.min(t,e))}function SS(r,t,e){return(1-e)*r+e*t}function MS(r,t,e,n){return SS(r,t,1-Math.exp(-e*n))}function ES(r,t){return(r%t+t)%t}var TS=class{constructor(){Dt(this,"isRunning",!1);Dt(this,"value",0);Dt(this,"from",0);Dt(this,"to",0);Dt(this,"currentTime",0);Dt(this,"lerp");Dt(this,"duration");Dt(this,"easing");Dt(this,"onUpdate")}advance(r){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=ap(0,this.currentTime/this.duration,1);t=n>=1;const i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=MS(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function wS(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var bS=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){Dt(this,"width",0);Dt(this,"height",0);Dt(this,"scrollHeight",0);Dt(this,"scrollWidth",0);Dt(this,"debouncedResize");Dt(this,"wrapperResizeObserver");Dt(this,"contentResizeObserver");Dt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Dt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Dt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=wS(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,t;(r=this.wrapperResizeObserver)==null||r.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},lp=class{constructor(){Dt(this,"events",{})}emit(r,...t){var n;const e=this.events[r]||[];for(let i=0,s=e.length;i<s;i++)(n=e[i])==null||n.call(e,...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}}off(r,t){var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}};const AS=100/6,sr={passive:!1};function Uf(r,t){return r===1?AS:r===2?t:1}var RS=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Dt(this,"touchStart",{x:0,y:0});Dt(this,"lastDelta",{x:0,y:0});Dt(this,"window",{width:0,height:0});Dt(this,"emitter",new lp);Dt(this,"onTouchStart",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Dt(this,"onTouchMove",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Dt(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Dt(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r;const i=Uf(n,this.window.width),s=Uf(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Dt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,sr),this.element.addEventListener("touchstart",this.onTouchStart,sr),this.element.addEventListener("touchmove",this.onTouchMove,sr),this.element.addEventListener("touchend",this.onTouchEnd,sr)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,sr),this.element.removeEventListener("touchstart",this.onTouchStart,sr),this.element.removeEventListener("touchmove",this.onTouchMove,sr),this.element.removeEventListener("touchend",this.onTouchEnd,sr)}};const Nf=r=>Math.min(1,1.001-2**(-10*r));var CS=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:m,virtualScroll:p,overscroll:y=!0,autoRaf:M=!1,anchors:v=!1,autoToggle:A=!1,allowNestedScroll:b=!1,__experimental__naiveDimensions:w=!1,naiveDimensions:C=w,stopInertiaOnNavigate:S=!1,respectReducedMotion:x=!0}={}){Dt(this,"_isScrolling",!1);Dt(this,"_isStopped",!1);Dt(this,"_isLocked",!1);Dt(this,"_preventNextNativeScrollEvent",!1);Dt(this,"_resetVelocityTimeout",null);Dt(this,"_rafId",null);Dt(this,"_isDraggingSelection",!1);Dt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Dt(this,"isTouching");Dt(this,"isIos");Dt(this,"time",0);Dt(this,"userData",{});Dt(this,"lastVelocity",0);Dt(this,"velocity",0);Dt(this,"direction",0);Dt(this,"options");Dt(this,"targetScroll");Dt(this,"animatedScroll");Dt(this,"animate",new TS);Dt(this,"emitter",new lp);Dt(this,"dimensions");Dt(this,"virtualScroll");Dt(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Dt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Dt(this,"onTransitionEnd",r=>{var t;(t=r.propertyName)!=null&&t.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Dt(this,"onClick",r=>{const t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){const n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Dt(this,"onPointerDown",r=>{r.button===1&&this.reset()});Dt(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(_=>{var g,m,p,y,M;return _ instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(_))||((g=_.hasAttribute)==null?void 0:g.call(_,"data-lenis-prevent"))||h==="vertical"&&((m=_.hasAttribute)==null?void 0:m.call(_,"data-lenis-prevent-vertical"))||h==="horizontal"&&((p=_.hasAttribute)==null?void 0:p.call(_,"data-lenis-prevent-horizontal"))||i&&((y=_.hasAttribute)==null?void 0:y.call(_,"data-lenis-prevent-touch"))||s&&((M=_.hasAttribute)==null?void 0:M.call(_,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(_,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const u=i&&this.options.syncTouch,f=i&&n.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Dt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Dt(this,"raf",r=>{const t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=If,window.lenis||(window.lenis={}),window.lenis.version=If,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Nf:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:d,touchMultiplier:f,wheelMultiplier:_,autoResize:g,prevent:m,virtualScroll:p,overscroll:y,autoRaf:M,anchors:v,autoToggle:A,allowNestedScroll:b,naiveDimensions:C,stopInertiaOnNavigate:S,respectReducedMotion:x},this.dimensions=new bS(r,t,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new RS(e,{touchMultiplier:f,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){const t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;const e=r.targetTouches[0]??r.changedTouches[0];if(!e)return!1;const n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;const i=n[0],s=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?e=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=r,f=t;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let _=null;if(typeof u=="string"?(_=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),_||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof Element&&(_=u),_){if(this.options.wrapper!==window){const v=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?v.left:v.top}const g=_.getBoundingClientRect(),m=getComputedStyle(_),p=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),y=getComputedStyle(this.rootElement),M=this.isHorizontal?Number.parseFloat(y.scrollPaddingLeft):Number.parseFloat(y.scrollPaddingTop);u=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(M)?0:M)}}if(typeof u=="number"){if(u+=f,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const _=u-this.animatedScroll;_>this.limit/2?u-=this.limit:_<-this.limit/2&&(u+=this.limit)}}else u=ap(0,u,this.limit);if(u===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d??{},e){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=Nf:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(_,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=_-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=_,this.setScroll(this.scroll),i&&(this.targetScroll=_),g||this.emit(),g&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,o,a,l,c,h,d,u,f,_;if(n-(i.time??0)>2e3){i.time=Date.now();const b=window.getComputedStyle(r);if(i.computedStyle=b,s=["auto","overlay","scroll"].includes(b.overflowX),o=["auto","overlay","scroll"].includes(b.overflowY),c=["auto"].includes(b.overscrollBehaviorX),h=["auto"].includes(b.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;d=r.scrollWidth,u=r.scrollHeight,f=r.clientWidth,_=r.clientHeight,a=d>f,l=u>_,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=u,i.clientWidth=f,i.clientHeight=_,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,u=i.scrollHeight,f=i.clientWidth,_=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const g=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";let m,p,y,M,v,A;if(g==="horizontal")m=Math.round(r.scrollLeft),p=d-f,y=t,M=s,v=a,A=c;else if(g==="vertical")m=Math.round(r.scrollTop),p=u-_,y=e,M=o,v=l,A=h;else return!1;return!A&&(m>=p||m<=0)?!0:(y>0?m<p:m>0)&&M&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?ES(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};function Hi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function cp(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.1
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Qn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Wo={duration:.5,overwrite:!1,delay:0},Zh,un,Ie,ui=1e8,Te=1/ui,uh=Math.PI*2,PS=uh/4,LS=0,hp=Math.sqrt,DS=Math.cos,IS=Math.sin,an=function(t){return typeof t=="string"},ke=function(t){return typeof t=="function"},Zi=function(t){return typeof t=="number"},jh=function(t){return typeof t>"u"},Ii=function(t){return typeof t=="object"},On=function(t){return t!==!1},Qh=function(){return typeof window<"u"},Ca=function(t){return ke(t)||an(t)},up=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},vn=Array.isArray,US=/random\([^)]+\)/g,NS=/,\s*/g,Of=/(?:-?\.?\d|\.)+/gi,fp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Is=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ac=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,dp=/[+-]=-?[.\d]+/,OS=/[^,'"\[\]\s]+/gi,FS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ne,Ei,fh,tu,ti={},al={},pp,mp=function(t){return(al=Qs(t,ti))&&zn},eu=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Xo=function(t,e){return!e&&console.warn(t)},_p=function(t,e){return t&&(ti[t]=e)&&al&&(al[t]=e)||ti},Yo=function(){return 0},BS={suppressEvents:!0,isStart:!0,kill:!1},$a={suppressEvents:!0,kill:!1},kS={suppressEvents:!0},nu={},_r=[],dh={},gp,qn={},lc={},Ff=30,Ja=[],iu="",ru=function(t){var e=t[0],n,i;if(Ii(e)||ke(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ja.length;i--&&!Ja[i].targetTest(e););n=Ja[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new kp(t[i],n)))||t.splice(i,1);return t},Jr=function(t){return t._gsap||ru(fi(t))[0]._gsap},vp=function(t,e,n){return(n=t[e])&&ke(n)?t[e]():jh(n)&&t.getAttribute&&t.getAttribute(e)||n},Fn=function(t,e){return(t=t.split(",")).forEach(e)||t},He=function(t){return Math.round(t*1e5)/1e5||0},Ue=function(t){return Math.round(t*1e7)/1e7||0},ks=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},zS=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ll=function(){var t=_r.length,e=_r.slice(0),n,i;for(dh={},_r.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},su=function(t){return!!(t._initted||t._startAt||t.add)},xp=function(t,e,n,i){_r.length&&!un&&ll(),t.render(e,n,!!(un&&e<0&&su(t))),_r.length&&!un&&ll()},yp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(OS).length<2?e:an(t)?t.trim():t},Sp=function(t){return t},ei=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},HS=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Qs=function(t,e){for(var n in e)t[n]=e[n];return t},Bf=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Ii(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},cl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Lo=function(t){var e=t.parent||Ne,n=t.keyframes?HS(vn(t.keyframes)):ei;if(On(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},VS=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Mp=function(t,e,n,i,s){var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},El=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Mr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Kr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},GS=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ph=function(t,e,n,i){return t._startAt&&(un?t._startAt.revert($a):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},WS=function r(t){return!t||t._ts&&r(t.parent)},kf=function(t){return t._repeat?to(t._tTime,t=t.duration()+t._rDelay)*t:0},to=function(t,e){var n=Math.floor(t=Ue(t/e));return t&&n===t?n-1:n},hl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Tl=function(t){return t._end=Ue(t._start+(t._tDur/Math.abs(t._ts||t._rts||Te)||0))},wl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ue(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Tl(t),n._dirty||Kr(n,t)),t},Ep=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=hl(t.rawTime(),e),(!e._dur||ra(0,e.totalDuration(),n)-e._tTime>Te)&&e.render(n,!0)),Kr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Te}},Ai=function(t,e,n,i){return e.parent&&Mr(e),e._start=Ue((Zi(n)?n:!n&&ul(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:n||t!==Ne?li(t,n,e):t._time)+e._delay),e._end=Ue(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Mp(t,e,"_first","_last",t._sort?"_start":0),ul(e)||(t._recent=e),i||Ep(t,e),t._ts<0&&wl(t,t._tTime),t},Tp=function(t,e){return(ti.ScrollTrigger||eu("scrollTrigger",e))&&ti.ScrollTrigger.create(e,t)},wp=function(t,e,n,i,s){if(au(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!un&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&gp!==Kn.frame)return _r.push(t),t._lazy=[s,i],1},XS=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},ul=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},YS=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&XS(t)&&!(!t._initted&&ul(t))||(t._ts<0||t._dp._ts<0)&&!ul(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=ra(0,t._tDur,e),h=to(l,a),t._yoyo&&h&1&&(o=1-o),h!==to(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||un||i||t._zTime===Te||!e&&t._zTime){if(!t._initted&&wp(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Te:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&ph(t,e,n,!0),t._onUpdate&&!n&&Zn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Zn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Mr(t,1),!n&&!un&&(Zn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},qS=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},eo=function(t,e,n,i){var s=t._repeat,o=Ue(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Ue(o*(s+1)+t._rDelay*s):o,a>0&&!i&&wl(t,t._tTime=t._tDur*a),t.parent&&Tl(t),n||Kr(t.parent,t),t},zf=function(t){return t instanceof In?Kr(t):eo(t,t._dur)},$S={_start:0,endTime:Yo,totalDuration:Yo},li=function r(t,e,n){var i=t.labels,s=t._recent||$S,o=t.duration()>=ui?s.endTime(!1):t._dur,a,l,c;return an(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(vn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Do=function(t,e,n){var i=Zi(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=On(l.vars.inherit)&&l.parent;o.immediateRender=On(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Ye(e[0],o,e[s+1])},br=function(t,e){return t||t===0?e(t):e},ra=function(t,e,n){return n<t?t:n>e?e:n},_n=function(t,e){return!an(t)||!(e=FS.exec(t))?"":e[1]},JS=function(t,e,n){return br(n,function(i){return ra(t,e,i)})},mh=[].slice,bp=function(t,e){return t&&Ii(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ii(t[0]))&&!t.nodeType&&t!==Ei},KS=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return an(i)&&!e||bp(i,1)?(s=n).push.apply(s,fi(i)):n.push(i)})||n},fi=function(t,e,n){return Ie&&!e&&Ie.selector?Ie.selector(t):an(t)&&!n&&(fh||!no())?mh.call((e||tu).querySelectorAll(t),0):vn(t)?KS(t,n):bp(t)?mh.call(t,0):t?[t]:[]},_h=function(t){return t=fi(t)[0]||Xo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return fi(e,n.querySelectorAll?n:n===t?Xo("Invalid scope")||tu.createElement("div"):t)}},Ap=function(t){return t.sort(function(){return .5-Math.random()})},Rp=function(t){if(ke(t))return t;var e=Ii(t)?t:{each:t},n=Zr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,d=i;return an(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],d=i[1]),function(u,f,_){var g=(_||e).length,m=o[g],p,y,M,v,A,b,w,C,S;if(!m){if(S=e.grid==="auto"?0:(e.grid||[1,ui])[1],!S){for(w=-ui;w<(w=_[S++].getBoundingClientRect().left)&&S<g;);S<g&&S--}for(m=o[g]=[],p=l?Math.min(S,g)*h-.5:i%S,y=S===ui?0:l?g*d/S-.5:i/S|0,w=0,C=ui,b=0;b<g;b++)M=b%S-p,v=y-(b/S|0),m[b]=A=c?Math.abs(c==="y"?v:M):hp(M*M+v*v),A>w&&(w=A),A<C&&(C=A);i==="random"&&Ap(m),m.max=w-C,m.min=C,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(S>g?g-1:c?c==="y"?g/S:S:Math.max(S,g/S))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=_n(e.amount||e.each)||0,n=n&&g<0?cM(n):n}return g=(m[u]-m.min)/m.max||0,Ue(m.b+(n?n(g):g)*m.v)+m.u}},gh=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ue(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Zi(n)?0:_n(n))}},Cp=function(t,e){var n=vn(t),i,s;return!n&&Ii(t)&&(i=n=t.radius||ui,t.values?(t=fi(t.values),(s=!Zi(t[0]))&&(i*=i)):t=gh(t.increment)),br(e,n?ke(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ui,h=0,d=t.length,u,f;d--;)s?(u=t[d].x-a,f=t[d].y-l,u=u*u+f*f):u=Math.abs(t[d]-a),u<c&&(c=u,h=d);return h=!i||c<=i?t[h]:o,s||h===o||Zi(o)?h:h+_n(o)}:gh(t))},Pp=function(t,e,n,i){return br(vn(t)?!e:n===!0?!!(n=0):!i,function(){return vn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},ZS=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},jS=function(t,e){return function(n){return t(parseFloat(n))+(e||_n(n))}},QS=function(t,e,n){return Dp(t,e,0,1,n)},Lp=function(t,e,n){return br(n,function(i){return t[~~e(i)]})},tM=function r(t,e,n){var i=e-t;return vn(t)?Lp(t,r(0,t.length),e):br(n,function(s){return(i+(s-t)%i)%i+t})},eM=function r(t,e,n){var i=e-t,s=i*2;return vn(t)?Lp(t,r(0,t.length-1),e):br(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},qo=function(t){return t.replace(US,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(NS);return Pp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Dp=function(t,e,n,i,s){var o=e-t,a=i-n;return br(s,function(l){return n+((l-t)/o*a||0)})},nM=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var o=an(t),a={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(vn(t)&&!vn(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(r(t[c-1],t[c]));d--,s=function(_){_*=d;var g=Math.min(u,~~_);return h[g](_-g)},n=e}else i||(t=Qs(vn(t)?[]:{},t));if(!h){for(l in e)ou.call(a,t,l,"get",e[l]);s=function(_){return hu(_,a)||(o?t.p:t)}}}return br(n,s)},Hf=function(t,e,n){var i=t.labels,s=ui,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Zn=function(t,e,n){var i=t.vars,s=i[e],o=Ie,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&_r.length&&ll(),a&&(Ie=a),h=l?s.apply(c,l):s.call(c),Ie=o,h},yo=function(t){return Mr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!un),t.progress()<1&&Zn(t,"onInterrupt"),t},Us,Ip=[],Up=function(t){if(t)if(t=!t.name&&t.default||t,Qh()||t.headless){var e=t.name,n=ke(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Yo,render:hu,add:ou,kill:xM,modifier:vM,rawVars:0},o={targetTest:0,get:0,getSetter:cu,aliases:{},register:0};if(no(),t!==i){if(qn[e])return;ei(i,ei(cl(t,s),o)),Qs(i.prototype,Qs(s,cl(t,o))),qn[i.prop=e]=i,t.targetTest&&(Ja.push(i),nu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}_p(e,i),t.register&&t.register(zn,i,Bn)}else Ip.push(t)},Re=255,So={aqua:[0,Re,Re],lime:[0,Re,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Re],navy:[0,0,128],white:[Re,Re,Re],olive:[128,128,0],yellow:[Re,Re,0],orange:[Re,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Re,0,0],pink:[Re,192,203],cyan:[0,Re,Re],transparent:[Re,Re,Re,0]},cc=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Re+.5|0},Np=function(t,e,n){var i=t?Zi(t)?[t>>16,t>>8&Re,t&Re]:0:So.black,s,o,a,l,c,h,d,u,f,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),So[t])i=So[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Re,i&Re,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Re,t&Re]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(Of),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=cc(l+1/3,s,o),i[1]=cc(l,s,o),i[2]=cc(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(fp),n&&i.length<4&&(i[3]=1),i}else i=t.match(Of)||So.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/Re,o=i[1]/Re,a=i[2]/Re,d=Math.max(s,o,a),u=Math.min(s,o,a),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===s?(o-a)/f+(o<a?6:0):d===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Op=function(t){var e=[],n=[],i=-1;return t.split(gr).forEach(function(s){var o=s.match(Is)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Vf=function(t,e,n){var i="",s=(t+i).match(gr),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!s)return t;if(s=s.map(function(u){return(u=Np(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=Op(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(gr,"1").split(Is),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(gr),d=c.length-1;a<d;a++)i+=c[a]+s[a];return i+c[d]},gr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in So)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),iM=/hsl[a]?\(/,Fp=function(t){var e=t.join(" "),n;if(gr.lastIndex=0,gr.test(e))return n=iM.test(e),t[1]=Vf(t[1],n),t[0]=Vf(t[0],n,Op(t[1])),!0},$o,Kn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,d,u,f,_=function g(m){var p=r()-i,y=m===!0,M,v,A,b;if((p>t||p<0)&&(n+=p-e),i+=p,A=i-n,M=A-o,(M>0||y)&&(b=++d.frame,u=A-d.time*1e3,d.time=A=A/1e3,o+=M+(M>=s?0:s-M),v=1),y||(l=c(g)),v)for(f=0;f<a.length;f++)a[f](A,u,b,m)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){pp&&(!fh&&Qh()&&(Ei=fh=window,tu=Ei.document||{},ti.gsap=zn,(Ei.gsapVersions||(Ei.gsapVersions=[])).push(zn.version),mp(al||Ei.GreenSockGlobals||!Ei.gsap&&Ei||{}),Ip.forEach(Up)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(m){return setTimeout(m,o-d.time*1e3+1|0)},$o=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),$o=0,c=Yo},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,p,y){var M=p?function(v,A,b,w){m(v,A,b,w),d.remove(M)}:m;return d.remove(m),a[y?"unshift":"push"](M),no(),M},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},d})(),no=function(){return!$o&&Kn.wake()},fe={},rM=/^[\d.\-M][\d.\-,\s]/,sM=/["']/g,oM=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(sM,"").trim():+c,i=l.substr(a+1).trim();return e},aM=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},lM=function(t){var e=(t+"").split("("),n=fe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[oM(e[1])]:aM(t).split(",").map(yp)):fe._CE&&rM.test(t)?fe._CE("",t):n},cM=function(t){return function(e){return 1-t(1-e)}},Zr=function(t,e){return t&&(ke(t)?t:fe[t]||lM(t))||e},as=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Fn(t,function(a){fe[a]=ti[a]=s,fe[o=a.toLowerCase()]=n;for(var l in s)fe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=fe[a+"."+l]=s[l]}),s},Bp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},hc=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/uh*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*IS((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Bp(a);return s=uh/s,l.config=function(c,h){return r(t,c,h)},l},uc=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Bp(n);return i.config=function(s){return r(t,s)},i};Fn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;as(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});fe.Linear.easeNone=fe.none=fe.Linear.easeIn;as("Elastic",hc("in"),hc("out"),hc());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};as("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);as("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});as("Circ",function(r){return-(hp(1-r*r)-1)});as("Sine",function(r){return r===1?1:-DS(r*PS)+1});as("Back",uc("in"),uc("out"),uc());fe.SteppedEase=fe.steps=ti.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Te;return function(a){return((i*ra(0,o,a)|0)+s)*n}}};Wo.ease=fe["quad.out"];Fn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return iu+=r+","+r+"Params,"});var kp=function(t,e){this.id=LS++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:vp,this.set=e?e.getSetter:cu},Jo=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,eo(this,+e.duration,1,1),this.data=e.data,Ie&&(this._ctx=Ie,Ie.data.push(this)),$o||Kn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,eo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(no(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(wl(this,n),!s._dp||s.parent||Ep(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ai(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Te||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),xp(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+kf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+kf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?to(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Te?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?hl(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-Te?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||s>0&&s<a)&&this.totalTime(ra(-Math.abs(this._delay),a,s),i!==!1),Tl(this),GS(this)},t.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{no(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==Te,o;if(s)for(this._tTime-=Te,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+Te){s=!1;break}o=o._next}this.totalTime(i,s)}return this},t.startTime=function(n){if(arguments.length){this._start=Ue(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ai(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(On(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?hl(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=kS);var i=un;return un=n,su(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),un=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,zf(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,zf(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(li(this,n),On(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,On(i)),this._dur||(this._zTime=-Te),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Te:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Te,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Te)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=ke(n)?n:Sp,l=function(){var h=i.then;i.then=null,s&&s(),ke(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){yo(this)},r})();ei(Jo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Te,_prom:0,_ps:!1,_rts:1});var In=(function(r){cp(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=On(n.sortChildren),Ne&&Ai(n.parent||Ne,Hi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Tp(Hi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Do(0,arguments,this),this},e.from=function(i,s,o){return Do(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Do(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,Lo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ye(i,s,li(this,o),1),this},e.call=function(i,s,o){return Ai(this,Ye.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Ye(i,o,li(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,Lo(o).immediateRender=On(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,d){return a.startAt=o,Lo(a).immediateRender=On(a.immediateRender),this.staggerTo(i,s,a,l,c,h,d)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ue(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,_,g,m,p,y,M,v,A,b,w;if(this!==Ne&&h>l&&i>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),u=h,v=this._start,M=this._ts,p=!M,d&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(u=Ue(h%m),h===l?(g=this._repeat,u=c):(A=Ue(h/m),g=~~A,g&&g===A&&(u=c,g--),u>c&&(u=c)),A=to(this._tTime,m),!a&&this._tTime&&A!==g&&this._tTime-A*m-this._dur<=0&&(A=g),b&&g&1&&(u=c-u,w=1),g!==A&&!this._lock){var C=b&&A&1,S=C===(b&&g&1);if(g<A&&(C=!C),a=C?0:h%c?c:h,this._lock=1,this.render(a||(w?0:Ue(g*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Zn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,A=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=qS(this,Ue(a),Ue(u)),y&&(h-=u-(u=y._start))),this._tTime=h,this._time=u,this._act=!!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!s&&!A&&(Zn(this,"onStart"),this._tTime!==h))return this;if(u>=a&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||u>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,s,o),u!==this._time||!this._ts&&!p){y=0,_&&(h+=this._zTime=-Te);break}}f=_}else{f=this._last;for(var x=i<0?i:u;f;){if(_=f._prev,(f._act||x<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(x-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(x-f._start)*f._ts,s,o||un&&su(f)),u!==this._time||!this._ts&&!p){y=0,_&&(h+=this._zTime=x?-Te:Te);break}}f=_}}if(y&&!s&&(this.pause(),y.render(u>=a?0:-Te)._zTime=u>=a?1:-1,this._ts))return this._start=v,Tl(this),this.render(i,s,o);this._onUpdate&&!s&&Zn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Mr(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(Zn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Zi(s)||(s=li(this,s,i)),!(i instanceof Jo)){if(vn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(an(i))return this.addLabel(i,s);if(ke(i))i=Ye.delayedCall(0,i);else return this}return this!==i?Ai(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ui);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ye?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return an(i)?this.removeLabel(i):ke(i)?this.killTweensOf(i):(i.parent===this&&El(this,i),i===this._recent&&(this._recent=this._last),Kr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ue(Kn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=li(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=Ye.delayedCall(0,s||Yo,o);return a.data="isPause",this._hasPause=1,Ai(this,a,li(this,i))},e.removePause=function(i){var s=this._first;for(i=li(this,i);s;)s._start===i&&s.data==="isPause"&&Mr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)cr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=fi(i),l=this._first,c=Zi(s),h;l;)l instanceof Ye?zS(l._targets,a)&&(c?(!cr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=li(o,i),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,_=Ye.to(o,ei({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Te,onStart:function(){if(o.pause(),!f){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&eo(_,m,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,d||[])}},s));return u?_.render(0):_},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,ei({startAt:{time:li(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Hf(this,li(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Hf(this,li(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Te)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ue(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Kr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Kr(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=ui,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ai(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Ue(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;eo(o,o===Ne&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Ne._ts&&(xp(Ne,hl(i,Ne)),gp=Kn.frame),Kn.frame>=Ff){Ff+=Qn.autoSleep||120;var s=Ne._first;if((!s||!s._ts)&&Qn.autoSleep&&Kn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Kn.sleep()}}},t})(Jo);ei(In.prototype,{_lock:0,_hasPause:0,_forcing:0});var hM=function(t,e,n,i,s,o,a){var l=new Bn(this._pt,t,e,0,1,Wp,null,s),c=0,h=0,d,u,f,_,g,m,p,y;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=qo(i)),o&&(y=[n,i],o(y,t,e),n=y[0],i=y[1]),u=n.match(ac)||[];d=ac.exec(i);)_=d[0],g=i.substring(c,d.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==u[h++]&&(m=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?ks(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=ac.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(dp.test(i)||p)&&(l.e=0),this._pt=l,l},ou=function(t,e,n,i,s,o,a,l,c,h){ke(i)&&(i=i(s||0,t,o));var d=t[e],u=n!=="get"?n:ke(d)?c?t[e.indexOf("set")||!ke(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=ke(d)?c?mM:Vp:lu,_;if(an(i)&&(~i.indexOf("random(")&&(i=qo(i)),i.charAt(1)==="="&&(_=ks(u,i)+(_n(u)||0),(_||_===0)&&(i=_))),!h||u!==i||vh)return!isNaN(u*i)&&i!==""?(_=new Bn(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?gM:Gp,0,f),c&&(_.fp=c),a&&_.modifier(a,this,t),this._pt=_):(!d&&!(e in t)&&eu(e,i),hM.call(this,t,e,u,i,f,l||Qn.stringFilter,c))},uM=function(t,e,n,i,s){if(ke(t)&&(t=Io(t,s,e,n,i)),!Ii(t)||t.style&&t.nodeType||vn(t)||up(t))return an(t)?Io(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Io(t[a],s,e,n,i);return o},zp=function(t,e,n,i,s,o){var a,l,c,h;if(qn[t]&&(a=new qn[t]).init(s,a.rawVars?e[t]:uM(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Bn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Us))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},cr,vh,au=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,y=p&&p.data==="nested"?p.vars.targets:m,M=t._overwrite==="auto"&&!Zh,v=t.timeline,A=i.easeReverse||d,b,w,C,S,x,P,U,F,z,Y,H,X,V;if(v&&(!u||!s)&&(s="none"),t._ease=Zr(s,Wo.ease),t._rEase=A&&(Zr(A)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||u&&!i.stagger){if(F=m[0]?Jr(m[0]).harness:0,X=F&&i[F.prop],b=cl(i,nu),g&&(g._zTime<0&&g.progress(1),e<0&&h&&a&&!f?g.render(-1,!0):g.revert(h&&_?$a:BS),g._lazy=0),o){if(Mr(t._startAt=Ye.set(m,ei({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&On(l),startAt:null,delay:0,onUpdate:c&&function(){return Zn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(un||!a&&!f)&&t._startAt.revert($a),a&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(a=!1),C=ei({overwrite:!1,data:"isFromStart",lazy:a&&!g&&On(l),immediateRender:a,stagger:0,parent:p},b),X&&(C[F.prop]=X),Mr(t._startAt=Ye.set(m,C)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(un?t._startAt.revert($a):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Te,Te);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&On(l)||l&&!_,w=0;w<m.length;w++){if(x=m[w],U=x._gsap||ru(m)[w]._gsap,t._ptLookup[w]=Y={},dh[U.id]&&_r.length&&ll(),H=y===m?w:y.indexOf(x),F&&(z=new F).init(x,X||b,t,H,y)!==!1&&(t._pt=S=new Bn(t._pt,x,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(it){Y[it]=S}),z.priority&&(P=1)),!F||X)for(C in b)qn[C]&&(z=zp(C,b,t,H,x,y))?z.priority&&(P=1):Y[C]=S=ou.call(t,x,C,"get",b[C],H,y,0,i.stringFilter);t._op&&t._op[w]&&t.kill(x,t._op[w]),M&&t._pt&&(cr=t,Ne.killTweensOf(x,Y,t.globalTime(e)),V=!t.parent,cr=0),t._pt&&l&&(dh[U.id]=1)}P&&Xp(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!V,u&&e<=0&&v.render(ui,!0,!0)},fM=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return vh=1,t.vars[e]="+=0",au(t,a),vh=0,l?Xo(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=He(n)+_n(d.e)),d.b&&(d.b=h.s+_n(d.b))},dM=function(t,e){var n=t[0]?Jr(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Qs({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},pM=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(vn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Io=function(t,e,n,i,s){return ke(t)?t.call(e,n,i,s):an(t)&&~t.indexOf("random(")?qo(t):t},fl=iu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Hp={};Fn(fl+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Hp[r]=1});fl=fl.split(",");var Ye=(function(r){cp(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Lo(i))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=i.parent||Ne,y=(vn(n)||up(n)?Zi(n[0]):"length"in i)?[n]:fi(n),M,v,A,b,w,C,S,x;if(a._targets=y.length?ru(y):Xo("GSAP target "+n+" not found. https://gsap.com",!Qn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||u||Ca(c)||Ca(h)){i=a.vars;var P=i.easeReverse||i.yoyoEase;if(M=a.timeline=new In({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:y}),M.kill(),M.parent=M._dp=Hi(a),M._start=0,u||Ca(c)||Ca(h)){if(b=y.length,S=u&&Rp(u),Ii(u))for(w in u)~fl.indexOf(w)&&(x||(x={}),x[w]=u[w]);for(v=0;v<b;v++)A=cl(i,Hp),A.stagger=0,P&&(A.easeReverse=P),x&&Qs(A,x),C=y[v],A.duration=+Io(c,Hi(a),v,C,y),A.delay=(+Io(h,Hi(a),v,C,y)||0)-a._delay,!u&&b===1&&A.delay&&(a._delay=h=A.delay,a._start+=h,A.delay=0),M.to(C,A,S?S(v,C,y):0),M._ease=fe.none;M.duration()?c=h=0:a.timeline=0}else if(_){Lo(ei(M.vars.defaults,{ease:"none"})),M._ease=Zr(_.ease||i.ease||"none");var U=0,F,z,Y;if(vn(_))_.forEach(function(H){return M.to(y,H,">")}),M.duration();else{A={};for(w in _)w==="ease"||w==="easeEach"||pM(w,_[w],A,_.easeEach);for(w in A)for(F=A[w].sort(function(H,X){return H.t-X.t}),U=0,v=0;v<F.length;v++)z=F[v],Y={ease:z.e,duration:(z.t-(v?F[v-1].t:0))/100*c},Y[w]=z.v,M.to(y,Y,U),U+=Y.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return f===!0&&!Zh&&(cr=Hi(a),Ne.killTweensOf(y),cr=0),Ai(p,Hi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!_&&a._start===Ue(p._time)&&On(d)&&WS(Hi(a))&&p.data!=="nested")&&(a._tTime=-Te,a.render(Math.max(0,-h)||0)),m&&Tp(Hi(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-Te&&!h?l:i<Te?0:i,u,f,_,g,m,p,y,M;if(!c)YS(this,i,s,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,M=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,s,o);if(u=Ue(d%g),d===l?(_=this._repeat,u=c):(m=Ue(d/g),_=~~m,_&&_===m?(u=c,_--):u>c&&(u=c)),p=this._yoyo&&_&1,p&&(u=c-u),m=to(this._tTime,g),u===a&&!o&&this._initted&&_===m)return this._tTime=d,this;_!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&u!==g&&this._initted&&(this._lock=o=1,this.render(Ue(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(wp(this,h?i:u,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var v=u<a;if(v!==this._inv){var A=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=A?(v?-1:1)/A:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(u/c);if(this._from&&(this.ratio=y=1-y),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!m&&(Zn(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;M&&M.render(i<0?i:M._dur*M._ease(u/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&ph(this,i,s,o),Zn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Zn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&ph(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Mr(this,1),!s&&!(h&&!a)&&(d||a||p)&&(Zn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){$o||Kn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||au(this,c),h=this._ease(c/this._dur),fM(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(wl(this,0),this.parent||Mp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?yo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!un),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,cr&&cr.vars.overwrite!==!0)._first||yo(this),this.parent&&o!==this.timeline.totalDuration()&&eo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?fi(i):a,c=this._ptLookup,h=this._pt,d,u,f,_,g,m,p;if((!s||s==="all")&&VS(a,l))return s==="all"&&(this._pt=0),yo(this);for(d=this._op=this._op||[],s!=="all"&&(an(s)&&(g={},Fn(s,function(y){return g[y]=1}),s=g),s=dM(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){u=c[p],s==="all"?(d[p]=s,_=u,f={}):(f=d[p]=d[p]||{},_=s);for(g in _)m=u&&u[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&El(this,m,"_pt"),delete u[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&yo(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Do(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Do(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Ne.killTweensOf(i,s,o)},t})(Jo);ei(Ye.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Fn("staggerTo,staggerFrom,staggerFromTo",function(r){Ye[r]=function(){var t=new In,e=mh.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var lu=function(t,e,n){return t[e]=n},Vp=function(t,e,n){return t[e](n)},mM=function(t,e,n,i){return t[e](i.fp,n)},_M=function(t,e,n){return t.setAttribute(e,n)},cu=function(t,e){return ke(t[e])?Vp:jh(t[e])&&t.setAttribute?_M:lu},Gp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},gM=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Wp=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},hu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},vM=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},xM=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?El(this,e,"_pt"):e.dep||(n=1),e=i;return!n},yM=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Xp=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Bn=(function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Gp,this.d=l||this,this.set=c||lu,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=yM,this.m=n,this.mt=s,this.tween=i},r})();Fn(iu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return nu[r]=1});ti.TweenMax=ti.TweenLite=Ye;ti.TimelineLite=ti.TimelineMax=In;Ne=new In({sortChildren:!1,defaults:Wo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Qn.stringFilter=Fp;var jr=[],Ka={},SM=[],Gf=0,MM=0,fc=function(t){return(Ka[t]||SM).map(function(e){return e()})},Ko=function(){var t=Date.now(),e=[];t-Gf>2&&(fc("matchMediaInit"),jr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Ei.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),fc("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Gf=t,fc("matchMedia"))},Yp=(function(){function r(e,n){this.selector=n&&_h(n),this.data=[],this._r=[],this.isReverted=!1,this.id=MM++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){ke(n)&&(s=i,i=n,n=ke);var o=this,a=function(){var c=Ie,h=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=_h(s)),Ie=o,d=i.apply(o,arguments),ke(d)&&o._r.push(d),Ie=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===ke?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Ie;Ie=null,n(this),Ie=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ye&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof In?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ye)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=jr.length;o--;)jr[o].id===this.id&&jr.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(Ko):a.removeEventListener("change",Ko)}),this._mqs=null}},t.revert=function(n){this.kill(n||{})},r})(),EM=(function(){function r(e){this.contexts=[],this.scope=e,Ie&&Ie.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Ii(n)||(n={matches:n});var o=new Yp(0,s||this.scope),a=o.conditions={},l,c,h;Ie&&!o.selector&&(o.selector=Ie.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Ei.matchMedia(n[c]),l&&(jr.indexOf(o)<0&&jr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Ko):l.addEventListener("change",Ko),(o._mqs||(o._mqs=[])).push(l)));return h&&i(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),dl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Up(i)})},timeline:function(t){return new In(t)},getTweensOf:function(t,e){return Ne.getTweensOf(t,e)},getProperty:function(t,e,n,i){an(t)&&(t=fi(t)[0]);var s=Jr(t||{}).get,o=n?Sp:yp;return n==="native"&&(n=""),t&&(e?o((qn[e]&&qn[e].get||s)(t,e,n,i)):function(a,l,c){return o((qn[a]&&qn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=fi(t),t.length>1){var i=t.map(function(h){return zn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var d=s;d--;)i[d](h)}}t=t[0]||{};var o=qn[e],a=Jr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;Us._pt=0,d.init(t,n?h+n:h,Us,0,[t]),d.render(1,d),Us._pt&&hu(1,Us)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=zn.to(t,ei((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return Ne.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Zr(t.ease,Wo.ease)),Bf(Wo,t||{})},config:function(t){return Bf(Qn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!qn[a]&&!ti[a]&&Xo(e+" effect requires "+a+" plugin.")}),lc[e]=function(a,l,c){return n(fi(a),ei(l||{},s),c)},o&&(In.prototype[e]=function(a,l,c){return this.add(lc[e](a,Ii(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){fe[t]=Zr(e)},parseEase:function(t,e){return arguments.length?Zr(t,e):fe},getById:function(t){return Ne.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new In(t),i,s;for(n.smoothChildTiming=On(t.smoothChildTiming),Ne.remove(n),n._dp=0,n._time=n._tTime=Ne._time,i=Ne._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Ye&&i.vars.onComplete===i._targets[0]))&&Ai(n,i,i._start-i._delay),i=s;return Ai(Ne,n,0),n},context:function(t,e){return t?new Yp(t,e):Ie},matchMedia:function(t){return new EM(t)},matchMediaRefresh:function(){return jr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Ko()},addEventListener:function(t,e){var n=Ka[t]||(Ka[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Ka[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:tM,wrapYoyo:eM,distribute:Rp,random:Pp,snap:Cp,normalize:QS,getUnit:_n,clamp:JS,splitColor:Np,toArray:fi,selector:_h,mapRange:Dp,pipe:ZS,unitize:jS,interpolate:nM,shuffle:Ap},install:mp,effects:lc,ticker:Kn,updateRoot:In.updateRoot,plugins:qn,globalTimeline:Ne,core:{PropTween:Bn,globals:_p,Tween:Ye,Timeline:In,Animation:Jo,getCache:Jr,_removeLinkedListItem:El,reverting:function(){return un},context:function(t){return t&&Ie&&(Ie.data.push(t),t._ctx=Ie),Ie},suppressOverwrites:function(t){return Zh=t}}};Fn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return dl[r]=Ye[r]});Kn.add(In.updateRoot);Us=dl.to({},{duration:0});var TM=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},wM=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=TM(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},dc=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(an(s)&&(l={},Fn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}wM(a,s)}}}},zn=dl.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)un?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},dc("roundProps",gh),dc("modifiers"),dc("snap",Cp))||dl;Ye.version=In.version=zn.version="3.15.1";pp=1;Qh()&&no();fe.Power0;fe.Power1;fe.Power2;fe.Power3;fe.Power4;fe.Linear;fe.Quad;fe.Cubic;fe.Quart;fe.Quint;fe.Strong;fe.Elastic;fe.Back;fe.SteppedEase;fe.Bounce;fe.Sine;fe.Expo;fe.Circ;/*!
 * CSSPlugin 3.15.1
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Wf,hr,zs,uu,Yr,Xf,fu,bM=function(){return typeof window<"u"},ji={},kr=180/Math.PI,Hs=Math.PI/180,Ts=Math.atan2,Yf=1e8,du=/([A-Z])/g,AM=/(left|right|width|margin|padding|x)/i,RM=/[\s,\(]\S/,Ci={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},xh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},CM=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},PM=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},LM=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},DM=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},qp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},$p=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},IM=function(t,e,n){return t.style[e]=n},UM=function(t,e,n){return t.style.setProperty(e,n)},NM=function(t,e,n){return t._gsap[e]=n},OM=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},FM=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},BM=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Oe="transform",kn=Oe+"Origin",kM=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in ji&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Ci[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Gi(i,a)}):this.tfm[t]=o.x?o[t]:Gi(i,t),t===kn&&(this.tfm.zOrigin=o.zOrigin);else return Ci.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Oe)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(kn,e,"")),t=Oe}(s||e)&&this.props.push(t,e,s[t])},Jp=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},zM=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(du,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=fu(),(!s||!s.isStart)&&!n[Oe]&&(Jp(n),i.zOrigin&&n[kn]&&(n[kn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Kp=function(t,e){var n={target:t,props:[],revert:zM,save:kM};return t._gsap||zn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Zp,yh=function(t,e){var n=hr.createElementNS?hr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):hr.createElement(t);return n&&n.style?n:hr.createElement(t)},jn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(du,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,io(e)||e,1)||""},qf="O,Moz,ms,Ms,Webkit".split(","),io=function(t,e,n){var i=e||Yr,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(qf[o]+t in s););return o<0?null:(o===3?"ms":o>=0?qf[o]:"")+t},Sh=function(){bM()&&window.document&&(Wf=window,hr=Wf.document,zs=hr.documentElement,Yr=yh("div")||{style:{}},yh("div"),Oe=io(Oe),kn=Oe+"Origin",Yr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Zp=!!io("perspective"),fu=zn.core.reverting,uu=1)},$f=function(t){var e=t.ownerSVGElement,n=yh("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),zs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),zs.removeChild(n),s},Jf=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},jp=function(t){var e,n;try{e=t.getBBox()}catch{e=$f(t),n=1}return e&&(e.width||e.height)||n||(e=$f(t)),e&&!e.width&&!e.x&&!e.y?{x:+Jf(t,["x","cx","x1"])||0,y:+Jf(t,["y","cy","y1"])||0,width:0,height:0}:e},Qp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&jp(t))},Er=function(t,e){if(e){var n=t.style,i;e in ji&&e!==kn&&(e=Oe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(du,"-$1").toLowerCase())):n.removeAttribute(e)}},ur=function(t,e,n,i,s,o){var a=new Bn(t._pt,e,n,0,1,o?$p:qp);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Kf={deg:1,rad:1,turn:1},HM={grid:1,flex:1},Tr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Yr.style,l=AM.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",f=i==="%",_,g,m,p;if(i===o||!s||Kf[i]||Kf[o])return s;if(o!=="px"&&!u&&(s=r(t,e,n,"px")),p=t.getCTM&&Qp(t),(f||o==="%")&&(ji[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[h],He(f?s/_*d:s/100*_);if(a[l?"width":"height"]=d+(u?o:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===hr||!g.appendChild)&&(g=hr.body),m=g._gsap,m&&f&&m.width&&l&&m.time===Kn.time&&!m.uncache)return He(s/m.width*d);if(f&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=d+i,_=t[h],y?t.style[e]=y:Er(t,e)}else(f||o==="%")&&!HM[jn(g,"display")]&&(a.position=jn(t,"position")),g===t&&(a.position="static"),g.appendChild(Yr),_=Yr[h],g.removeChild(Yr),a.position="absolute";return l&&f&&(m=Jr(g),m.time=Kn.time,m.width=g[h]),He(u?_*s/d:_&&s?d/_*s:0)},Gi=function(t,e,n,i){var s;return uu||Sh(),e in Ci&&e!=="transform"&&(e=Ci[e],~e.indexOf(",")&&(e=e.split(",")[0])),ji[e]&&e!=="transform"?(s=jo(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:ml(jn(t,kn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=pl[e]&&pl[e](t,e,n)||jn(t,e)||vp(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Tr(t,e,s,n)+n:s},VM=function(t,e,n,i){if(!n||n==="none"){var s=io(e,t,1),o=s&&jn(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=jn(t,"borderTopColor"))}var a=new Bn(this._pt,t.style,e,0,1,Wp),l=0,c=0,h,d,u,f,_,g,m,p,y,M,v,A;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=jn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=jn(t,e)||i,g?t.style[e]=g:Er(t,e)),h=[n,i],Fp(h),n=h[0],i=h[1],u=n.match(Is)||[],A=i.match(Is)||[],A.length){for(;d=Is.exec(i);)m=d[0],y=i.substring(l,d.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),m!==(g=u[c++]||"")&&(f=parseFloat(g)||0,v=g.substr((f+"").length),m.charAt(1)==="="&&(m=ks(f,m)+v),p=parseFloat(m),M=m.substr((p+"").length),l=Is.lastIndex-M.length,M||(M=M||Qn.units[e]||v,l===i.length&&(i+=M,a.e+=M)),v!==M&&(f=Tr(t,e,g,M)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:f,c:p-f,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?$p:qp;return dp.test(i)&&(a.e=0),this._pt=a,a},Zf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},GM=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Zf[n]||n,e[1]=Zf[i]||i,e.join(" ")},WM=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ji[a]&&(l=1,a=a==="transformOrigin"?kn:Oe),Er(n,a);l&&(Er(n,Oe),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",jo(n,1),o.uncache=1,Jp(i)))}},pl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Bn(t._pt,e,n,0,0,WM);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},Zo=[1,0,0,1,0,0],tm={},em=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},jf=function(t){var e=jn(t,Oe);return em(e)?Zo:e.substr(7).match(fp).map(He)},pu=function(t,e){var n=t._gsap||Jr(t),i=t.style,s=jf(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Zo:s):(s===Zo&&!t.offsetParent&&t!==zs&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,zs.appendChild(t)),s=jf(t),l?i.display=l:Er(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):zs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Mh=function(t,e,n,i,s,o){var a=t._gsap,l=s||pu(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,u=a.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],p=l[4],y=l[5],M=e.split(" "),v=parseFloat(M[0])||0,A=parseFloat(M[1])||0,b,w,C,S;n?l!==Zo&&(w=f*m-_*g)&&(C=v*(m/w)+A*(-g/w)+(g*y-m*p)/w,S=v*(-_/w)+A*(f/w)-(f*y-_*p)/w,v=C,A=S):(b=jp(t),v=b.x+(~M[0].indexOf("%")?v/100*b.width:v),A=b.y+(~(M[1]||M[0]).indexOf("%")?A/100*b.height:A)),i||i!==!1&&a.smooth?(p=v-c,y=A-h,a.xOffset=d+(p*f+y*g)-p,a.yOffset=u+(p*_+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=A,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[kn]="0px 0px",o&&(ur(o,a,"xOrigin",c,v),ur(o,a,"yOrigin",h,A),ur(o,a,"xOffset",d,a.xOffset),ur(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+A)},jo=function(t,e){var n=t._gsap||new kp(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=jn(t,kn)||"0",h,d,u,f,_,g,m,p,y,M,v,A,b,w,C,S,x,P,U,F,z,Y,H,X,V,it,D,ht,Ut,Kt,J,st;return h=d=u=g=m=p=y=M=v=0,f=_=1,n.svg=!!(t.getCTM&&Qp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Oe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Oe]!=="none"?l[Oe]:"")),i.scale=i.rotate=i.translate="none"),w=pu(t,n.svg),n.svg&&(n.uncache?(V=t.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",X=""):X=!e&&t.getAttribute("data-svg-origin"),Mh(t,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,w)),A=n.xOrigin||0,b=n.yOrigin||0,w!==Zo&&(P=w[0],U=w[1],F=w[2],z=w[3],h=Y=w[4],d=H=w[5],w.length===6?(f=Math.sqrt(P*P+U*U),_=Math.sqrt(z*z+F*F),g=P||U?Ts(U,P)*kr:0,y=F||z?Ts(F,z)*kr+g:0,y&&(_*=Math.abs(Math.cos(y*Hs))),n.svg&&(h-=A-(A*P+b*F),d-=b-(A*U+b*z))):(st=w[6],Kt=w[7],D=w[8],ht=w[9],Ut=w[10],J=w[11],h=w[12],d=w[13],u=w[14],C=Ts(st,Ut),m=C*kr,C&&(S=Math.cos(-C),x=Math.sin(-C),X=Y*S+D*x,V=H*S+ht*x,it=st*S+Ut*x,D=Y*-x+D*S,ht=H*-x+ht*S,Ut=st*-x+Ut*S,J=Kt*-x+J*S,Y=X,H=V,st=it),C=Ts(-F,Ut),p=C*kr,C&&(S=Math.cos(-C),x=Math.sin(-C),X=P*S-D*x,V=U*S-ht*x,it=F*S-Ut*x,J=z*x+J*S,P=X,U=V,F=it),C=Ts(U,P),g=C*kr,C&&(S=Math.cos(C),x=Math.sin(C),X=P*S+U*x,V=Y*S+H*x,U=U*S-P*x,H=H*S-Y*x,P=X,Y=V),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=He(Math.sqrt(P*P+U*U+F*F)),_=He(Math.sqrt(H*H+st*st)),C=Ts(Y,H),y=Math.abs(C)>2e-4?C*kr:0,v=J?1/(J<0?-J:J):0),n.svg&&(X=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!em(jn(t,Oe)),X&&t.setAttribute("transform",X))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(f*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=He(f),n.scaleY=He(_),n.rotation=He(g)+a,n.rotationX=He(m)+a,n.rotationY=He(p)+a,n.skewX=y+a,n.skewY=M+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[kn]=ml(c)),n.xOffset=n.yOffset=0,n.force3D=Qn.force3D,n.renderTransform=n.svg?YM:Zp?nm:XM,n.uncache=0,n},ml=function(t){return(t=t.split(" "))[0]+" "+t[1]},pc=function(t,e,n){var i=_n(e);return He(parseFloat(e)+parseFloat(Tr(t,"x",n+"px",i)))+i},XM=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,nm(t,e)},Ur="0deg",_o="0px",Nr=") ",nm=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,y=n.target,M=n.zOrigin,v="",A=p==="auto"&&t&&t!==1||p===!0;if(M&&(d!==Ur||h!==Ur)){var b=parseFloat(h)*Hs,w=Math.sin(b),C=Math.cos(b),S;b=parseFloat(d)*Hs,S=Math.cos(b),o=pc(y,o,w*S*-M),a=pc(y,a,-Math.sin(b)*-M),l=pc(y,l,C*S*-M+M)}m!==_o&&(v+="perspective("+m+Nr),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(A||o!==_o||a!==_o||l!==_o)&&(v+=l!==_o||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Nr),c!==Ur&&(v+="rotate("+c+Nr),h!==Ur&&(v+="rotateY("+h+Nr),d!==Ur&&(v+="rotateX("+d+Nr),(u!==Ur||f!==Ur)&&(v+="skew("+u+", "+f+Nr),(_!==1||g!==1)&&(v+="scale("+_+", "+g+Nr),y.style[Oe]=v||"translate(0, 0)"},YM=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,y=n.forceCSS,M=parseFloat(o),v=parseFloat(a),A,b,w,C,S;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Hs,c*=Hs,A=Math.cos(l)*d,b=Math.sin(l)*d,w=Math.sin(l-c)*-u,C=Math.cos(l-c)*u,c&&(h*=Hs,S=Math.tan(c-h),S=Math.sqrt(1+S*S),w*=S,C*=S,h&&(S=Math.tan(h),S=Math.sqrt(1+S*S),A*=S,b*=S)),A=He(A),b=He(b),w=He(w),C=He(C)):(A=d,C=u,b=w=0),(M&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(M=Tr(f,"x",o,"px"),v=Tr(f,"y",a,"px")),(_||g||m||p)&&(M=He(M+_-(_*A+g*w)+m),v=He(v+g-(_*b+g*C)+p)),(i||s)&&(S=f.getBBox(),M=He(M+i/100*S.width),v=He(v+s/100*S.height)),S="matrix("+A+","+b+","+w+","+C+","+M+","+v+")",f.setAttribute("transform",S),y&&(f.style[Oe]=S)},qM=function(t,e,n,i,s){var o=360,a=an(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?kr:1),c=l-i,h=i+c+"deg",d,u;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*Yf)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*Yf)%o-~~(c/o)*o)),t._pt=u=new Bn(t._pt,e,n,i,c,CM),u.e=h,u.u="deg",t._props.push(n),u},Qf=function(t,e){for(var n in e)t[n]=e[n];return t},$M=function(t,e,n){var i=Qf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,u,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Oe]=e,a=jo(n,1),Er(n,Oe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Oe],o[Oe]=e,a=jo(n,1),o[Oe]=c);for(l in ji)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(f=_n(c),_=_n(h),d=f!==_?Tr(n,l,c,_):parseFloat(c),u=parseFloat(h),t._pt=new Bn(t._pt,a,l,d,u-d,xh),t._pt.u=_||0,t._props.push(l));Qf(a,i)};Fn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});pl[t>1?"border"+r:r]=function(a,l,c,h,d){var u,f;if(arguments.length<4)return u=o.map(function(_){return Gi(a,_,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},o.forEach(function(_,g){return f[_]=u[g]=u[g]||u[(g-1)/2|0]}),a.init(l,f,d)}});var im={name:"css",register:Sh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,d,u,f,_,g,m,p,y,M,v,A,b,w,C,S;uu||Sh(),this.styles=this.styles||Kp(t),C=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(qn[g]&&zp(g,e,n,i,t,s)))){if(f=typeof h,_=pl[g],f==="function"&&(h=h.call(n,i,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=qo(h)),_)_(this,t,g,h,n)&&(w=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",gr.lastIndex=0,gr.test(c)||(m=_n(c),p=_n(h),p?m!==p&&(c=Tr(t,g,c,p)+p):m&&(h+=m)),this.add(a,"setProperty",c,h,i,s,0,0,g),o.push(g),C.push(g,0,a[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],an(c)&&~c.indexOf("random(")&&(c=qo(c)),_n(c+"")||c==="auto"||(c+=Qn.units[g]||_n(Gi(t,g))||""),(c+"").charAt(1)==="="&&(c=Gi(t,g))):c=Gi(t,g),u=parseFloat(c),y=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),d=parseFloat(h),g in Ci&&(g==="autoAlpha"&&(u===1&&Gi(t,"visibility")==="hidden"&&d&&(u=0),C.push("visibility",0,a.visibility),ur(this,a,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=Ci[g],~g.indexOf(",")&&(g=g.split(",")[0]))),M=g in ji,M){if(this.styles.save(g),S=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=jn(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var x=t.style.perspective;t.style.perspective=h,h=jn(t,"perspective"),x?t.style.perspective=x:Er(t,"perspective")}d=parseFloat(h)}if(v||(A=t._gsap,A.renderTransform&&!e.parseTransform||jo(t,e.parseTransform),b=e.smoothOrigin!==!1&&A.smooth,v=this._pt=new Bn(this._pt,a,Oe,0,1,A.renderTransform,A,0,-1),v.dep=1),g==="scale")this._pt=new Bn(this._pt,A,"scaleY",A.scaleY,(y?ks(A.scaleY,y+d):d)-A.scaleY||0,xh),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(kn,0,a[kn]),h=GM(h),A.svg?Mh(t,h,0,b,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==A.zOrigin&&ur(this,A,"zOrigin",A.zOrigin,p),ur(this,a,g,ml(c),ml(h)));continue}else if(g==="svgOrigin"){Mh(t,h,1,b,0,this);continue}else if(g in tm){qM(this,A,g,u,y?ks(u,y+h):h);continue}else if(g==="smoothOrigin"){ur(this,A,"smooth",A.smooth,h);continue}else if(g==="force3D"){A[g]=h;continue}else if(g==="transform"){$M(this,h,t);continue}}else g in a||(g=io(g)||g);if(M||(d||d===0)&&(u||u===0)&&!RM.test(h)&&g in a)m=(c+"").substr((u+"").length),d||(d=0),p=_n(h)||(g in Qn.units?Qn.units[g]:m),m!==p&&(u=Tr(t,g,c,p)),this._pt=new Bn(this._pt,M?A:a,g,u,(y?ks(u,y+d):d)-u,!M&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?DM:xh),this._pt.u=p||0,M&&S!==h?(this._pt.b=c,this._pt.e=S,this._pt.r=LM):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=PM);else if(g in a)VM.call(this,t,g,c,y?y+h:h);else if(g in t)this.add(t,g,c||t[g],y?y+h:h,i,s);else if(g!=="parseTransform"){eu(g,h);continue}M||(g in a?C.push(g,0,a[g]):typeof t[g]=="function"?C.push(g,2,t[g]()):C.push(g,1,c||t[g])),o.push(g)}}w&&Xp(this)},render:function(t,e){if(e.tween._time||!fu())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Gi,aliases:Ci,getSetter:function(t,e,n){var i=Ci[e];return i&&i.indexOf(",")<0&&(e=i),e in ji&&e!==kn&&(t._gsap.x||Gi(t,"x"))?n&&Xf===n?e==="scale"?OM:NM:(Xf=n||{})&&(e==="scale"?FM:BM):t.style&&!jh(t.style[e])?IM:~e.indexOf("-")?UM:cu(t,e)},core:{_removeProperty:Er,_getMatrix:pu}};zn.utils.checkPrefix=io;zn.core.getStyleSaver=Kp;(function(r,t,e,n){var i=Fn(r+","+t+","+e,function(s){ji[s]=1});Fn(t,function(s){Qn.units[s]="deg",tm[s]=1}),Ci[i[13]]=r+","+t,Fn(n,function(s){var o=s.split(":");Ci[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Fn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Qn.units[r]="px"});zn.registerPlugin(im);var ar=zn.registerPlugin(im)||zn;ar.core.Tween;function JM(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function KM(r,t,e){return t&&JM(r.prototype,t),r}/*!
 * Observer 3.15.1
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var hn,Za,Un,fr,dr,Vs,rm,zr,Gs,sm,qi,vi,om,am=function(){return hn||typeof window<"u"&&(hn=window.gsap)&&hn.registerPlugin&&hn},lm=1,Ns=[],re=[],Li=[],Uo=Date.now,Eh=function(t,e){return e},ZM=function(){var t=Gs.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,re),i.push.apply(i,Li),re=n,Li=i,Eh=function(o,a){return e[o](a)}},vr=function(t,e){return~Li.indexOf(t)&&Li[Li.indexOf(t)+1][e]},No=function(t){return!!~sm.indexOf(t)},En=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},Sn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Pa="scrollLeft",La="scrollTop",Th=function(){return qi&&qi.isPressed||re.cache++},_l=function(t,e){var n=function i(s){if(s||s===0){lm&&Un.history.scrollRestoration!=="manual"&&(Un.history.scrollRestoration="manual");var o=qi&&qi.isPressed;s=i.v=Math.round(s)||(qi&&qi.iOS?1:0),t(s),i.cacheID=re.cache,o&&Eh("ss",s)}else(e||re.cache!==i.cacheID||Eh("ref"))&&(i.cacheID=re.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Rn={s:Pa,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:_l(function(r){return arguments.length?Un.scrollTo(r,Ze.sc()):Un.pageXOffset||fr[Pa]||dr[Pa]||Vs[Pa]||0})},Ze={s:La,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Rn,sc:_l(function(r){return arguments.length?Un.scrollTo(Rn.sc(),r):Un.pageYOffset||fr[La]||dr[La]||Vs[La]||0})},Ln=function(t,e){return(e&&e._ctx&&e._ctx.selector||hn.utils.toArray)(t)[0]||(typeof t=="string"&&hn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},jM=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},wr=function(t,e){var n=e.s,i=e.sc;No(t)&&(t=fr.scrollingElement||dr);var s=re.indexOf(t),o=i===Ze.sc?1:2;!~s&&(s=re.push(t)-1),re[s+o]||En(t,"scroll",Th);var a=re[s+o],l=a||(re[s+o]=_l(vr(t,n),!0)||(No(t)?i:_l(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=hn.getProperty(t,"scrollBehavior")==="smooth"),l},wh=function(t,e,n){var i=t,s=t,o=Uo(),a=o,l=e||50,c=Math.max(500,l*3),h=function(_,g){var m=Uo();g||m-o>l?(s=i,i=_,a=o,o=m):n?i+=_:i=s+(_-s)/(m-a)*(o-a)},d=function(){s=i=n?0:i,a=o=0},u=function(_){var g=a,m=s,p=Uo();return(_||_===0)&&_!==i&&h(_),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-g)*1e3};return{update:h,reset:d,getVelocity:u}},go=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},td=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},cm=function(){Gs=hn.core.globals().ScrollTrigger,Gs&&Gs.core&&ZM()},hm=function(t){return hn=t||am(),!Za&&hn&&typeof document<"u"&&document.body&&(Un=window,fr=document,dr=fr.documentElement,Vs=fr.body,sm=[Un,fr,dr,Vs],hn.utils.clamp,om=hn.core.context||function(){},zr="onpointerenter"in Vs?"pointer":"mouse",rm=Ve.isTouch=Un.matchMedia&&Un.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Un||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,vi=Ve.eventTypes=("ontouchstart"in dr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in dr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return lm=0},500),Za=1),Gs||cm(),Za};Rn.op=Ze;re.cache=0;var Ve=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Za||hm(hn)||console.warn("Please gsap.registerPlugin(Observer)"),Gs||cm();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,u=n.onStopDelay,f=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,y=n.onDrag,M=n.onPress,v=n.onRelease,A=n.onRight,b=n.onLeft,w=n.onUp,C=n.onDown,S=n.onChangeX,x=n.onChangeY,P=n.onChange,U=n.onToggleX,F=n.onToggleY,z=n.onHover,Y=n.onHoverEnd,H=n.onMove,X=n.ignoreCheck,V=n.isNormalizer,it=n.onGestureStart,D=n.onGestureEnd,ht=n.onWheel,Ut=n.onEnable,Kt=n.onDisable,J=n.onClick,st=n.scrollSpeed,dt=n.capture,rt=n.allowClicks,Tt=n.lockAxis,bt=n.onLockAxis;this.target=a=Ln(a)||dr,this.vars=n,f&&(f=hn.utils.toArray(f)),i=i||1e-9,s=s||0,_=_||1,st=st||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Un.getComputedStyle(Vs).lineHeight)||22);var Wt,$t,et,tt,L,Zt,Ot,k=this,yt=0,ae=0,Rt=n.passive||!h&&n.passive!==!1,R=wr(a,Rn),E=wr(a,Ze),G=R(),Q=E(),j=~o.indexOf("touch")&&!~o.indexOf("pointer")&&vi[0]==="pointerdown",K=No(a),pt=a.ownerDocument||fr,ct=[0,0,0],_t=[0,0,0],qt=0,ot=function(){return qt=Uo()},lt=function(Pt,Qt){return(k.event=Pt)&&f&&jM(Pt.target,f)||Qt&&j&&Pt.pointerType!=="touch"||X&&X(Pt,Qt)},Bt=function(){k._vx.reset(),k._vy.reset(),$t.pause(),d&&d(k)},Ft=function(){var Pt=k.deltaX=td(ct),Qt=k.deltaY=td(_t),gt=Math.abs(Pt)>=i,Yt=Math.abs(Qt)>=i;P&&(gt||Yt)&&P(k,Pt,Qt,ct,_t),gt&&(A&&k.deltaX>0&&A(k),b&&k.deltaX<0&&b(k),S&&S(k),U&&k.deltaX<0!=yt<0&&U(k),yt=k.deltaX,ct[0]=ct[1]=ct[2]=0),Yt&&(C&&k.deltaY>0&&C(k),w&&k.deltaY<0&&w(k),x&&x(k),F&&k.deltaY<0!=ae<0&&F(k),ae=k.deltaY,_t[0]=_t[1]=_t[2]=0),(tt||et)&&(H&&H(k),et&&(m&&et===1&&m(k),y&&y(k),et=0),tt=!1),Zt&&!(Zt=!1)&&bt&&bt(k),L&&(ht(k),L=!1),Wt=0},Mt=function(Pt,Qt,gt){ct[gt]+=Pt,_t[gt]+=Qt,k._vx.update(Pt),k._vy.update(Qt),c?Wt||(Wt=requestAnimationFrame(Ft)):Ft()},jt=function(Pt,Qt){Tt&&!Ot&&(k.axis=Ot=Math.abs(Pt)>Math.abs(Qt)?"x":"y",Zt=!0),Ot!=="y"&&(ct[2]+=Pt,k._vx.update(Pt,!0)),Ot!=="x"&&(_t[2]+=Qt,k._vy.update(Qt,!0)),c?Wt||(Wt=requestAnimationFrame(Ft)):Ft()},Vt=function(Pt){if(!lt(Pt,1)){Pt=go(Pt,h);var Qt=Pt.clientX,gt=Pt.clientY,Yt=Qt-k.x,Lt=gt-k.y,Xt=k.isDragging;k.x=Qt,k.y=gt,(Xt||(Yt||Lt)&&(Math.abs(k.startX-Qt)>=s||Math.abs(k.startY-gt)>=s))&&(et||(et=Xt?2:1),Xt||(k.isDragging=!0),jt(Yt,Lt))}},de=k.onPress=function(St){lt(St,1)||St&&St.button||(k.axis=Ot=null,$t.pause(),k.isPressed=!0,St=go(St),yt=ae=0,k.startX=k.x=St.clientX,k.startY=k.y=St.clientY,k._vx.reset(),k._vy.reset(),En(V?a:pt,vi[1],Vt,Rt,!0),k.deltaX=k.deltaY=0,M&&M(k))},I=k.onRelease=function(St){if(!lt(St,1)){Sn(V?a:pt,vi[1],Vt,!0);var Pt=!isNaN(k.y-k.startY),Qt=k.isDragging,gt=Qt&&(Math.abs(k.x-k.startX)>3||Math.abs(k.y-k.startY)>3),Yt=go(St);!gt&&Pt&&(k._vx.reset(),k._vy.reset(),h&&rt&&hn.delayedCall(.08,function(){if(Uo()-qt>300&&!St.defaultPrevented){if(St.target.click)St.target.click();else if(pt.createEvent){var Lt=pt.createEvent("MouseEvents");Lt.initMouseEvent("click",!0,!0,Un,1,Yt.screenX,Yt.screenY,Yt.clientX,Yt.clientY,!1,!1,!1,!1,0,null),St.target.dispatchEvent(Lt)}}})),k.isDragging=k.isGesturing=k.isPressed=!1,d&&Qt&&!V&&$t.restart(!0),et&&Ft(),p&&Qt&&p(k),v&&v(k,gt)}},ft=function(Pt){return Pt.touches&&Pt.touches.length>1&&(k.isGesturing=!0)&&it(Pt,k.isDragging)},$=function(){return(k.isGesturing=!1)||D(k)},Z=function(Pt){if(!lt(Pt)){var Qt=R(),gt=E();Mt((Qt-G)*st,(gt-Q)*st,1),G=Qt,Q=gt,d&&$t.restart(!0)}},ut=function(Pt){if(!lt(Pt)){Pt=go(Pt,h),ht&&(L=!0);var Qt=(Pt.deltaMode===1?l:Pt.deltaMode===2?Un.innerHeight:1)*_;Mt(Pt.deltaX*Qt,Pt.deltaY*Qt,0),d&&!V&&$t.restart(!0)}},mt=function(Pt){if(!lt(Pt)){var Qt=Pt.clientX,gt=Pt.clientY,Yt=Qt-k.x,Lt=gt-k.y;k.x=Qt,k.y=gt,tt=!0,d&&$t.restart(!0),(Yt||Lt)&&jt(Yt,Lt)}},Gt=function(Pt){k.event=Pt,z(k)},pe=function(Pt){k.event=Pt,Y(k)},Fe=function(Pt){return lt(Pt)||go(Pt,h)&&J(k)};$t=k._dc=hn.delayedCall(u||.25,Bt).pause(),k.deltaX=k.deltaY=0,k._vx=wh(0,50,!0),k._vy=wh(0,50,!0),k.scrollX=R,k.scrollY=E,k.isDragging=k.isGesturing=k.isPressed=!1,om(this),k.enable=function(St){return k.isEnabled||(En(K?pt:a,"scroll",Th),o.indexOf("scroll")>=0&&En(K?pt:a,"scroll",Z,Rt,dt),o.indexOf("wheel")>=0&&En(a,"wheel",ut,Rt,dt),(o.indexOf("touch")>=0&&rm||o.indexOf("pointer")>=0)&&(En(a,vi[0],de,Rt,dt),En(pt,vi[2],I),En(pt,vi[3],I),rt&&En(a,"click",ot,!0,!0),J&&En(a,"click",Fe),it&&En(pt,"gesturestart",ft),D&&En(pt,"gestureend",$),z&&En(a,zr+"enter",Gt),Y&&En(a,zr+"leave",pe),H&&En(a,zr+"move",mt)),k.isEnabled=!0,k.isDragging=k.isGesturing=k.isPressed=tt=et=!1,k._vx.reset(),k._vy.reset(),G=R(),Q=E(),St&&St.type&&de(St),Ut&&Ut(k)),k},k.disable=function(){k.isEnabled&&(Ns.filter(function(St){return St!==k&&No(St.target)}).length||Sn(K?pt:a,"scroll",Th),k.isPressed&&(k._vx.reset(),k._vy.reset(),Sn(V?a:pt,vi[1],Vt,!0)),Sn(K?pt:a,"scroll",Z,dt),Sn(a,"wheel",ut,dt),Sn(a,vi[0],de,dt),Sn(pt,vi[2],I),Sn(pt,vi[3],I),Sn(a,"click",ot,!0),Sn(a,"click",Fe),Sn(pt,"gesturestart",ft),Sn(pt,"gestureend",$),Sn(a,zr+"enter",Gt),Sn(a,zr+"leave",pe),Sn(a,zr+"move",mt),k.isEnabled=k.isPressed=k.isDragging=!1,Kt&&Kt(k))},k.kill=k.revert=function(){k.disable();var St=Ns.indexOf(k);St>=0&&Ns.splice(St,1),qi===k&&(qi=0)},Ns.push(k),V&&No(a)&&(qi=k),k.enable(g)},KM(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Ve.version="3.15.1";Ve.create=function(r){return new Ve(r)};Ve.register=hm;Ve.getAll=function(){return Ns.slice()};Ve.getById=function(r){return Ns.filter(function(t){return t.vars.id===r})[0]};am()&&hn.registerPlugin(Ve);/*!
 * ScrollTrigger 3.15.1
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var At,Ps,ie,Se,Jn,ye,mu,gl,Qo,Oo,Mo,Da,pn,bl,bh,bn,ed,nd,Ls,um,mc,fm,wn,Ah,dm,pm,or,Rh,_u,Ws,gu,xr,Ch,_c,Ia=1,mn=Date.now,gc=mn(),di=0,Eo=0,id=function(t,e,n){var i=Yn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},rd=function(t,e){return e&&(!Yn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},QM=function r(){return Eo&&requestAnimationFrame(r)},sd=function(){return bl=1},od=function(){return bl=0},Ti=function(t){return t},To=function(t){return Math.round(t*1e5)/1e5||0},mm=function(){return typeof window<"u"},_m=function(){return At||mm()&&(At=window.gsap)&&At.registerPlugin&&At},rs=function(t){return!!~mu.indexOf(t)},gm=function(t){return(t==="Height"?gu:ie["inner"+t])||Jn["client"+t]||ye["client"+t]},vm=function(t){return vr(t,"getBoundingClientRect")||(rs(t)?function(){return nl.width=ie.innerWidth,nl.height=gu,nl}:function(){return Wi(t)})},tE=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=vr(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?gm(s):t["client"+s])||0}},eE=function(t,e){return!e||~Li.indexOf(t)?vm(t):function(){return nl}},Pi=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=vr(t,n))?o()-vm(t)()[s]:rs(t)?(Jn[n]||ye[n])-gm(i):t[n]-t["offset"+i])},Ua=function(t,e){for(var n=0;n<Ls.length;n+=3)(!e||~e.indexOf(Ls[n+1]))&&t(Ls[n],Ls[n+1],Ls[n+2])},Yn=function(t){return typeof t=="string"},gn=function(t){return typeof t=="function"},wo=function(t){return typeof t=="number"},Hr=function(t){return typeof t=="object"},vo=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},ws=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},bs=Math.abs,xm="left",ym="top",vu="right",xu="bottom",Qr="width",ts="height",Fo="Right",Bo="Left",ko="Top",zo="Bottom",Xe="padding",ci="margin",ro="Width",yu="Height",Ke="px",hi=function(t){return ie.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},nE=function(t){var e=hi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},ad=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Wi=function(t,e){var n=e&&hi(t)[bh]!=="matrix(1, 0, 0, 1, 0, 0)"&&At.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},vl=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Sm=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},iE=function(t){return function(e){return At.utils.snap(Sm(t),e)}},Su=function(t){var e=At.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},rE=function(t){return function(e,n){return Su(Sm(t))(e,n.direction)}},Na=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},rn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},nn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Oa=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},ld={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Fa={toggleActions:"play",anticipatePin:0},xl={top:0,left:0,center:.5,bottom:1,right:1},ja=function(t,e){if(Yn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in xl?xl[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Ba=function(t,e,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,d=s.fontSize,u=s.indent,f=s.fontWeight,_=Se.createElement("div"),g=rs(n)||vr(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,p=g?ye:n.tagName==="IFRAME"?n.contentDocument.body:n,y=t.indexOf("start")!==-1,M=y?c:h,v="border-color:"+M+";font-size:"+d+";color:"+M+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(v+=(i===Ze?vu:xu)+":"+(o+parseFloat(u))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=y,_.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),_.style.cssText=v,_.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],Qa(_,0,i,y),_},Qa=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+ro]=1,s["border"+a+ro]=0,s[n.p]=e+"px",At.set(t,s)},ne=[],Ph={},ta,cd=function(){return mn()-di>34&&(ta||(ta=requestAnimationFrame(Ji)))},As=function(){(!wn||!wn.isPressed||wn.startX>ye.clientWidth)&&(re.cache++,wn?ta||(ta=requestAnimationFrame(Ji)):Ji(),di||os("scrollStart"),di=mn())},vc=function(){pm=ie.innerWidth,dm=ie.innerHeight},bo=function(t){re.cache++,(t===!0||!pn&&!fm&&!Se.fullscreenElement&&!Se.webkitFullscreenElement&&(!Ah||pm!==ie.innerWidth||Math.abs(ie.innerHeight-dm)>ie.innerHeight*.25))&&gl.restart(!0)},ss={},sE=[],Mm=function r(){return nn(oe,"scrollEnd",r)||qr(!0)},os=function(t){return ss[t]&&ss[t].map(function(e){return e()})||sE},Xn=[],Em=function(t){for(var e=0;e<Xn.length;e+=5)(!t||Xn[e+4]&&Xn[e+4].query===t)&&(Xn[e].style.cssText=Xn[e+1],Xn[e].getBBox&&Xn[e].setAttribute("transform",Xn[e+2]||""),Xn[e+3].uncache=1)},Tm=function(){re.cache++,re.forEach(function(t){return gn(t)&&(t.rec=t())})},Mu=function(t,e){var n;for(bn=0;bn<ne.length;bn++)n=ne[bn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));xr=!0,e&&Em(e),e||os("revert")},wm=function(t,e){re.cache++,(e||!An)&&re.forEach(function(n){return gn(n)&&n.cacheID++&&(n.rec=0)}),Yn(t)&&(_u=t,ie.history.scrollRestoration!==t&&(ie.history.scrollRestoration=t))},An,es=0,hd,oE=function(){if(hd!==es){var t=hd=es;requestAnimationFrame(function(){return t===es&&qr(!0)})}},bm=function(){ye.appendChild(Ws),gu=!wn&&Ws.offsetHeight||ie.innerHeight,ye.removeChild(Ws)},ud=function(t){return Qo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},qr=function(t,e){if(Jn=Se.documentElement,ye=Se.body,mu=[ie,Se,Jn,ye],di&&!t&&!xr){rn(oe,"scrollEnd",Mm);return}bm(),An=oe.isRefreshing=!0,xr||Tm();var n=os("refreshInit");um&&oe.sort(),e||Mu(),re.forEach(function(i){gn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ne.slice(0).forEach(function(i){return i.refresh()}),xr=!1,ne.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Ch=1,ud(!0),ne.forEach(function(i){var s=Pi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),ud(!1),Ch=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),re.forEach(function(i){gn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),wm(_u,1),gl.pause(),es++,An=2,Ji(2),ne.forEach(function(i){return gn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),An=oe.isRefreshing=!1,os("refresh")},Lh=0,tl=1,Ho,Ji=function(t){if(t===2||!An&&!xr){oe.isUpdating=!0,Ho&&Ho.update(0);var e=ne.length,n=mn(),i=n-gc>=50,s=e&&ne[0].scroll();if(tl=Lh>s?-1:1,An||(Lh=s),i&&(di&&!bl&&n-di>200&&(di=0,os("scrollEnd")),Mo=gc,gc=n),tl<0){for(bn=e;bn-- >0;)ne[bn]&&ne[bn].update(0,i);tl=1}else for(bn=0;bn<e;bn++)ne[bn]&&ne[bn].update(0,i);oe.isUpdating=!1}ta=0},Dh=[xm,ym,xu,vu,ci+zo,ci+Fo,ci+ko,ci+Bo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],el=Dh.concat([Qr,ts,"boxSizing","max"+ro,"max"+yu,"position",ci,Xe,Xe+ko,Xe+Fo,Xe+zo,Xe+Bo]),aE=function(t,e,n){Xs(n);var i=t._gsap;if(i.spacerIsNative)Xs(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},xc=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=Dh.length,o=e.style,a=t.style,l;s--;)l=Dh[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[xu]=a[vu]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Qr]=vl(t,Rn)+Ke,o[ts]=vl(t,Ze)+Ke,o[Xe]=a[ci]=a[ym]=a[xm]="0",Xs(i),a[Qr]=a["max"+ro]=n[Qr],a[ts]=a["max"+yu]=n[ts],a[Xe]=n[Xe],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},lE=/([A-Z])/g,Xs=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||At.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(lE,"-$1").toLowerCase())}},ka=function(t){for(var e=el.length,n=t.style,i=[],s=0;s<e;s++)i.push(el[s],n[el[s]]);return i.t=t,i},cE=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},nl={left:0,top:0},fd=function(t,e,n,i,s,o,a,l,c,h,d,u,f,_){gn(t)&&(t=t(l)),Yn(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?ja("0"+t.substr(3),n):0));var g=f?f.time():0,m,p,y;if(f&&f.seek(0),isNaN(t)||(t=+t),wo(t))f&&(t=At.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,t)),a&&Qa(a,n,i,!0);else{gn(e)&&(e=e(l));var M=(t||"0").split(" "),v,A,b,w;y=Ln(e,l)||ye,v=Wi(y)||{},(!v||!v.left&&!v.top)&&hi(y).display==="none"&&(w=y.style.display,y.style.display="block",v=Wi(y),w?y.style.display=w:y.style.removeProperty("display")),A=ja(M[0],v[i.d]),b=ja(M[1]||"0",n),t=v[i.p]-c[i.p]-h+A+s-b,a&&Qa(a,b,i,n-b<20||a._isStart&&b>20),n-=n-b}if(_&&(l[_]=t||-.001,t<0&&(t=0)),o){var C=t+n,S=o._isStart;m="scroll"+i.d2,Qa(o,C,i,S&&C>20||!S&&(d?Math.max(ye[m],Jn[m]):o.parentNode[m])<=C+1),d&&(c=Wi(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Ke))}return f&&y&&(m=Wi(y),f.seek(u),p=Wi(y),f._caScrollDist=m[i.p]-p[i.p],t=t/f._caScrollDist*u),f&&f.seek(g),f?t:Math.round(t)},hE=/(webkit|moz|length|cssText|inset)/i,dd=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===ye){t._stOrig=s.cssText,a=hi(t);for(o in a)!+o&&!hE.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;At.core.getCache(t).uncache=1,e.appendChild(t)}},Am=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},za=function(t,e,n){var i={};i[e.p]="+="+n,At.set(t,i)},pd=function(t,e){var n=wr(t,e),i="_scroll"+e.p2,s=function o(a,l,c,h,d){var u=o.tween,f=l.onComplete,_={};c=c||n();var g=Am(n,c,function(){u.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,u&&u.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){re.cache++,o.tween&&Ji()},l.onComplete=function(){o.tween=0,f&&f.call(u)},u=o.tween=At.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},rn(t,"wheel",n.wheelHandler),oe.isTouch&&rn(t,"touchmove",n.wheelHandler),s},oe=(function(){function r(e,n){Ps||r.register(At)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Rh(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Eo){this.update=this.refresh=this.kill=Ti;return}n=ad(Yn(n)||wo(n)||n.nodeType?{trigger:n}:n,Fa);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,d=s.scrub,u=s.trigger,f=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,y=s.onSnapComplete,M=s.once,v=s.snap,A=s.pinReparent,b=s.pinSpacer,w=s.containerAnimation,C=s.fastScrollEnd,S=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Rn:Ze,P=!d&&d!==0,U=Ln(n.scroller||ie),F=At.core.getCache(U),z=rs(U),Y=("pinType"in n?n.pinType:vr(U,"pinType")||z&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=P&&n.toggleActions.split(" "),V="markers"in n?n.markers:Fa.markers,it=z?0:parseFloat(hi(U)["border"+x.p2+ro])||0,D=this,ht=n.onRefreshInit&&function(){return n.onRefreshInit(D)},Ut=tE(U,z,x),Kt=eE(U,z),J=0,st=0,dt=0,rt=wr(U,x),Tt,bt,Wt,$t,et,tt,L,Zt,Ot,k,yt,ae,Rt,R,E,G,Q,j,K,pt,ct,_t,qt,ot,lt,Bt,Ft,Mt,jt,Vt,de,I,ft,$,Z,ut,mt,Gt,pe;if(D._startClamp=D._endClamp=!1,D._dir=x,m*=45,D.scroller=U,D.scroll=w?w.time.bind(w):rt,$t=rt(),xr&&rt.rec==null&&(rt.rec=$t),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(um=1,n.refreshPriority===-9999&&(Ho=D)),F.tweenScroll=F.tweenScroll||{top:pd(U,Ze),left:pd(U,Rn)},D.tweenTo=Tt=F.tweenScroll[x.p],D.scrubDuration=function(gt){ft=wo(gt)&&gt,ft?I?I.duration(gt):I=At.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ft,paused:!0,onComplete:function(){return p&&p(D)}}):(I&&I.progress(1).kill(),I=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(d),Vt=0,l||(l=i.vars.id)),v&&((!Hr(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in ye.style&&At.set(z?[ye,Jn]:U,{scrollBehavior:"auto"}),re.forEach(function(gt){return gn(gt)&&gt.target===(z?Se.scrollingElement||Jn:U)&&(gt.smooth=!1)}),Wt=gn(v.snapTo)?v.snapTo:v.snapTo==="labels"?iE(i):v.snapTo==="labelsDirectional"?rE(i):v.directional!==!1?function(gt,Yt){return Su(v.snapTo)(gt,mn()-st<500?0:Yt.direction)}:At.utils.snap(v.snapTo),$=v.duration||{min:.1,max:2},$=Hr($)?Oo($.min,$.max):Oo($,$),Z=At.delayedCall(v.delay||ft/2||.1,function(){var gt=rt(),Yt=mn()-st<500,Lt=Tt.tween;if((Yt||Math.abs(D.getVelocity())<10)&&!Lt&&!bl&&J!==gt){var Xt=(gt-tt)/R,ze=i&&!P?i.totalProgress():Xt,le=Yt?0:(ze-de)/(mn()-Mo)*1e3||0,Ce=At.utils.clamp(-Xt,1-Xt,bs(le/2)*le/.185),qe=Xt+(v.inertia===!1?0:Ce),be,Ae,ge=v,Hn=ge.onStart,Le=ge.onInterrupt,xn=ge.onComplete;if(be=Wt(qe,D),wo(be)||(be=qe),Ae=Math.max(0,Math.round(tt+be*R)),gt<=L&&gt>=tt&&Ae!==gt){if(Lt&&!Lt._initted&&Lt.data<=bs(Ae-gt))return;v.inertia===!1&&(Ce=be-Xt),Tt(Ae,{duration:$(bs(Math.max(bs(qe-ze),bs(be-ze))*.185/le/.05||0)),ease:v.ease||"power3",data:bs(Ae-gt),onInterrupt:function(){return Z.restart(!0)&&Le&&ws(D,Le)},onComplete:function(){D.update(),J=rt(),i&&!P&&(I?I.resetTo("totalProgress",be,i._tTime/i._tDur):i.progress(be)),Vt=de=i&&!P?i.totalProgress():D.progress,y&&y(D),xn&&ws(D,xn)}},gt,Ce*R,Ae-gt-Ce*R),Hn&&ws(D,Hn,Tt.tween)}}else D.isActive&&J!==gt&&Z.restart(!0)}).pause()),l&&(Ph[l]=D),u=D.trigger=Ln(u||f!==!0&&f),pe=u&&u._gsap&&u._gsap.stRevert,pe&&(pe=pe(D)),f=f===!0?u:Ln(f),Yn(a)&&(a={targets:u,className:a}),f&&(_===!1||_===ci||(_=!_&&f.parentNode&&f.parentNode.style&&hi(f.parentNode).display==="flex"?!1:Xe),D.pin=f,bt=At.core.getCache(f),bt.spacer?E=bt.pinState:(b&&(b=Ln(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),bt.spacerIsNative=!!b,b&&(bt.spacerState=ka(b))),bt.spacer=j=b||Se.createElement("div"),j.classList.add("pin-spacer"),l&&j.classList.add("pin-spacer-"+l),bt.pinState=E=ka(f)),n.force3D!==!1&&At.set(f,{force3D:!0}),D.spacer=j=bt.spacer,jt=hi(f),ot=jt[_+x.os2],pt=At.getProperty(f),ct=At.quickSetter(f,x.a,Ke),xc(f,j,jt),Q=ka(f)),V){ae=Hr(V)?ad(V,ld):ld,k=Ba("scroller-start",l,U,x,ae,0),yt=Ba("scroller-end",l,U,x,ae,0,k),K=k["offset"+x.op.d2];var Fe=Ln(vr(U,"content")||U);Zt=this.markerStart=Ba("start",l,Fe,x,ae,K,0,w),Ot=this.markerEnd=Ba("end",l,Fe,x,ae,K,0,w),w&&(Gt=At.quickSetter([Zt,Ot],x.a,Ke)),!Y&&!(Li.length&&vr(U,"fixedMarkers")===!0)&&(nE(z?ye:U),At.set([k,yt],{force3D:!0}),Bt=At.quickSetter(k,x.a,Ke),Mt=At.quickSetter(yt,x.a,Ke))}if(w){var St=w.vars.onUpdate,Pt=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){D.update(0,0,1),St&&St.apply(w,Pt||[])})}if(D.previous=function(){return ne[ne.indexOf(D)-1]},D.next=function(){return ne[ne.indexOf(D)+1]},D.revert=function(gt,Yt){if(!Yt)return D.kill(!0);var Lt=gt!==!1||!D.enabled,Xt=pn;Lt!==D.isReverted&&(Lt&&(ut=Math.max(rt(),D.scroll.rec||0),dt=D.progress,mt=i&&i.progress()),Zt&&[Zt,Ot,k,yt].forEach(function(ze){return ze.style.display=Lt?"none":"block"}),Lt&&(pn=D,D.update(Lt)),f&&(!A||!D.isActive)&&(Lt?aE(f,j,E):xc(f,j,hi(f),lt)),Lt||D.update(Lt),pn=Xt,D.isReverted=Lt)},D.refresh=function(gt,Yt,Lt,Xt){if(!((pn||!D.enabled)&&!Yt)){if(f&&gt&&di){rn(r,"scrollEnd",Mm);return}!An&&ht&&ht(D),pn=D,Tt.tween&&!Lt&&(Tt.tween.kill(),Tt.tween=0),I&&I.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Jt){return Jt.vars.immediateRender&&Jt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var ze=Ut(),le=Kt(),Ce=w?w.duration():Pi(U,x),qe=R<=.01||!R,be=0,Ae=Xt||0,ge=Hr(Lt)?Lt.end:n.end,Hn=n.endTrigger||u,Le=Hr(Lt)?Lt.start:n.start||(n.start===0||!u?0:f?"0 0":"0 100%"),xn=D.pinnedContainer=n.pinnedContainer&&Ln(n.pinnedContainer,D),ii=u&&Math.max(0,ne.indexOf(D))||0,$e=ii,Je,T,B,q,W,O,nt,vt,wt,Et,Nt,Ht,It;for(V&&Hr(Lt)&&(Ht=At.getProperty(k,x.p),It=At.getProperty(yt,x.p));$e-- >0;)O=ne[$e],O.end||O.refresh(0,1)||(pn=D),nt=O.pin,nt&&(nt===u||nt===f||nt===xn)&&!O.isReverted&&(Et||(Et=[]),Et.unshift(O),O.revert(!0,!0)),O!==ne[$e]&&(ii--,$e--);for(gn(Le)&&(Le=Le(D)),Le=id(Le,"start",D),tt=fd(Le,u,ze,x,rt(),Zt,k,D,le,it,Y,Ce,w,D._startClamp&&"_startClamp")||(f?-.001:0),gn(ge)&&(ge=ge(D)),Yn(ge)&&!ge.indexOf("+=")&&(~ge.indexOf(" ")?ge=(Yn(Le)?Le.split(" ")[0]:"")+ge:(be=ja(ge.substr(2),ze),ge=Yn(Le)?Le:(w?At.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,tt):tt)+be,Hn=u)),ge=id(ge,"end",D),L=Math.max(tt,fd(ge||(Hn?"100% 0":Ce),Hn,ze,x,rt()+be,Ot,yt,D,le,it,Y,Ce,w,D._endClamp&&"_endClamp"))||-.001,be=0,$e=ii;$e--;)O=ne[$e]||{},nt=O.pin,nt&&O.start-O._pinPush<=tt&&!w&&O.end>0&&(Je=O.end-(D._startClamp?Math.max(0,O.start):O.start),(nt===u&&O.start-O._pinPush<tt||nt===xn)&&isNaN(Le)&&(be+=Je*(1-O.progress)),nt===f&&(Ae+=Je));if(tt+=be,L+=be,D._startClamp&&(D._startClamp+=be),D._endClamp&&!An&&(D._endClamp=L||-.001,L=Math.min(L,Pi(U,x))),R=L-tt||(tt-=.01)&&.001,qe&&(dt=At.utils.clamp(0,1,At.utils.normalize(tt,L,ut))),D._pinPush=Ae,Zt&&be&&(Je={},Je[x.a]="+="+be,xn&&(Je[x.p]="-="+rt()),At.set([Zt,Ot],Je)),f&&!(Ch&&D.end>=Pi(U,x)))Je=hi(f),q=x===Ze,B=rt(),_t=parseFloat(pt(x.a))+Ae,!Ce&&L>1&&(Nt=(z?Se.scrollingElement||Jn:U).style,Nt={style:Nt,value:Nt["overflow"+x.a.toUpperCase()]},z&&hi(ye)["overflow"+x.a.toUpperCase()]!=="scroll"&&(Nt.style["overflow"+x.a.toUpperCase()]="scroll")),xc(f,j,Je),Q=ka(f),T=Wi(f,!0),vt=Y&&wr(U,q?Rn:Ze)(),_?(lt=[_+x.os2,R+Ae+Ke],lt.t=j,$e=_===Xe?vl(f,x)+R+Ae:0,$e&&(lt.push(x.d,$e+Ke),j.style.flexBasis!=="auto"&&(j.style.flexBasis=$e+Ke)),Xs(lt),xn&&ne.forEach(function(Jt){Jt.pin===xn&&Jt.vars.pinSpacing!==!1&&(Jt._subPinOffset=!0)}),Y&&rt(ut)):($e=vl(f,x),$e&&j.style.flexBasis!=="auto"&&(j.style.flexBasis=$e+Ke)),Y&&(W={top:T.top+(q?B-tt:vt)+Ke,left:T.left+(q?vt:B-tt)+Ke,boxSizing:"border-box",position:"fixed"},W[Qr]=W["max"+ro]=Math.ceil(T.width)+Ke,W[ts]=W["max"+yu]=Math.ceil(T.height)+Ke,W[ci]=W[ci+ko]=W[ci+Fo]=W[ci+zo]=W[ci+Bo]="0",W[Xe]=Je[Xe],W[Xe+ko]=Je[Xe+ko],W[Xe+Fo]=Je[Xe+Fo],W[Xe+zo]=Je[Xe+zo],W[Xe+Bo]=Je[Xe+Bo],G=cE(E,W,A),An&&rt(0)),i?(wt=i._initted,mc(1),i.render(i.duration(),!0,!0),qt=pt(x.a)-_t+R+Ae,Ft=Math.abs(R-qt)>1,Y&&Ft&&G.splice(G.length-2,2),i.render(0,!0,!0),wt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),mc(0)):qt=R,Nt&&(Nt.value?Nt.style["overflow"+x.a.toUpperCase()]=Nt.value:Nt.style.removeProperty("overflow-"+x.a));else if(u&&rt()&&!w)for(T=u.parentNode;T&&T!==ye;)T._pinOffset&&(tt-=T._pinOffset,L-=T._pinOffset),T=T.parentNode;Et&&Et.forEach(function(Jt){return Jt.revert(!1,!0)}),D.start=tt,D.end=L,$t=et=An?ut:rt(),!w&&!An&&!xr&&($t<ut&&rt(ut),D.scroll.rec=0),D.revert(!1,!0),st=mn(),Z&&(J=-1,Z.restart(!0)),pn=0,i&&P&&(i._initted||mt)&&i.progress()!==mt&&i.progress(mt||0,!0).render(i.time(),!0,!0),(qe||dt!==D.progress||w||g||i&&!i._initted)&&(i&&!P&&(i._initted||dt||i.vars.immediateRender!==!1)&&i.totalProgress(w&&tt<-.001&&!dt?At.utils.normalize(tt,L,0):dt,!0),D.progress=qe||($t-tt)/R===dt?0:dt),f&&_&&(j._pinOffset=Math.round(D.progress*qt)),I&&I.invalidate(),isNaN(Ht)||(Ht-=At.getProperty(k,x.p),It-=At.getProperty(yt,x.p),za(k,x,Ht),za(Zt,x,Ht-(Xt||0)),za(yt,x,It),za(Ot,x,It-(Xt||0))),qe&&!An&&D.update(),h&&!An&&!Rt&&(Rt=!0,h(D),Rt=!1)}},D.getVelocity=function(){return(rt()-et)/(mn()-Mo)*1e3||0},D.endAnimation=function(){vo(D.callbackAnimation),i&&(I?I.progress(1):i.paused()?P||vo(i,D.direction<0,1):vo(i,i.reversed()))},D.labelToScroll=function(gt){return i&&i.labels&&(tt||D.refresh()||tt)+i.labels[gt]/i.duration()*R||0},D.getTrailing=function(gt){var Yt=ne.indexOf(D),Lt=D.direction>0?ne.slice(0,Yt).reverse():ne.slice(Yt+1);return(Yn(gt)?Lt.filter(function(Xt){return Xt.vars.preventOverlaps===gt}):Lt).filter(function(Xt){return D.direction>0?Xt.end<=tt:Xt.start>=L})},D.update=function(gt,Yt,Lt){if(!(w&&!Lt&&!gt)){var Xt=An===!0?ut:D.scroll(),ze=gt?0:(Xt-tt)/R,le=ze<0?0:ze>1?1:ze||0,Ce=D.progress,qe,be,Ae,ge,Hn,Le,xn,ii;if(Yt&&(et=$t,$t=w?rt():Xt,v&&(de=Vt,Vt=i&&!P?i.totalProgress():le)),m&&f&&!pn&&!Ia&&di&&(!le&&tt<Xt+(Xt-et)/(mn()-Mo)*m?le=1e-4:le===1&&L>Xt+(Xt-et)/(mn()-Mo)*m&&(le=.9999)),le!==Ce&&D.enabled){if(qe=D.isActive=!!le&&le<1,be=!!Ce&&Ce<1,Le=qe!==be,Hn=Le||!!le!=!!Ce,D.direction=le>Ce?1:-1,D.progress=le,Hn&&!pn&&(Ae=le&&!Ce?0:le===1?1:Ce===1?2:3,P&&(ge=!Le&&X[Ae+1]!=="none"&&X[Ae+1]||X[Ae],ii=i&&(ge==="complete"||ge==="reset"||ge in i))),S&&(Le||ii)&&(ii||d||!i)&&(gn(S)?S(D):D.getTrailing(S).forEach(function(B){return B.endAnimation()})),P||(I&&!pn&&!Ia?(I._dp._time-I._start!==I._time&&I.render(I._dp._time-I._start),I.resetTo?I.resetTo("totalProgress",le,i._tTime/i._tDur):(I.vars.totalProgress=le,I.invalidate().restart())):i&&i.totalProgress(le,!!(pn&&(st||gt)))),f){if(gt&&_&&(j.style[_+x.os2]=ot),!Y)ct(To(_t+qt*le));else if(Hn){if(xn=!gt&&le>Ce&&L+1>Xt&&Xt+1>=Pi(U,x),A)if(!gt&&(qe||xn)){var $e=Wi(f,!0),Je=Xt-tt;dd(f,ye,$e.top+(x===Ze?Je:0)+Ke,$e.left+(x===Ze?0:Je)+Ke)}else dd(f,j);Xs(qe||xn?G:Q),Ft&&le<1&&qe||ct(_t+(le===1&&!xn?qt:0))}}v&&!Tt.tween&&!pn&&!Ia&&Z.restart(!0),a&&(Le||M&&le&&(le<1||!_c))&&Qo(a.targets).forEach(function(B){return B.classList[qe||M?"add":"remove"](a.className)}),o&&!P&&!gt&&o(D),Hn&&!pn?(P&&(ii&&(ge==="complete"?i.pause().totalProgress(1):ge==="reset"?i.restart(!0).pause():ge==="restart"?i.restart(!0):i[ge]()),o&&o(D)),(Le||!_c)&&(c&&Le&&ws(D,c),H[Ae]&&ws(D,H[Ae]),M&&(le===1?D.kill(!1,1):H[Ae]=0),Le||(Ae=le===1?1:3,H[Ae]&&ws(D,H[Ae]))),C&&!qe&&Math.abs(D.getVelocity())>(wo(C)?C:2500)&&(vo(D.callbackAnimation),I?I.progress(1):vo(i,ge==="reverse"?1:!le,1))):P&&o&&!pn&&o(D)}if(Mt){var T=w?Xt/w.duration()*(w._caScrollDist||0):Xt;Bt(T+(k._isFlipped?1:0)),Mt(T)}Gt&&Gt(-Xt/w.duration()*(w._caScrollDist||0))}},D.enable=function(gt,Yt){D.enabled||(D.enabled=!0,rn(U,"resize",bo),z||rn(U,"scroll",As),ht&&rn(r,"refreshInit",ht),gt!==!1&&(D.progress=dt=0,$t=et=J=rt()),Yt!==!1&&D.refresh())},D.getTween=function(gt){return gt&&Tt?Tt.tween:I},D.setPositions=function(gt,Yt,Lt,Xt){if(w){var ze=w.scrollTrigger,le=w.duration(),Ce=ze.end-ze.start;gt=ze.start+Ce*gt/le,Yt=ze.start+Ce*Yt/le}D.refresh(!1,!1,{start:rd(gt,Lt&&!!D._startClamp),end:rd(Yt,Lt&&!!D._endClamp)},Xt),D.update()},D.adjustPinSpacing=function(gt){if(lt&&gt){var Yt=lt.indexOf(x.d)+1;lt[Yt]=parseFloat(lt[Yt])+gt+Ke,lt[1]=parseFloat(lt[1])+gt+Ke,Xs(lt)}},D.disable=function(gt,Yt){if(gt!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,Yt||I&&I.pause(),ut=0,bt&&(bt.uncache=1),ht&&nn(r,"refreshInit",ht),Z&&(Z.pause(),Tt.tween&&Tt.tween.kill()&&(Tt.tween=0)),!z)){for(var Lt=ne.length;Lt--;)if(ne[Lt].scroller===U&&ne[Lt]!==D)return;nn(U,"resize",bo),z||nn(U,"scroll",As)}},D.kill=function(gt,Yt){D.disable(gt,Yt),I&&!Yt&&I.kill(),l&&delete Ph[l];var Lt=ne.indexOf(D);Lt>=0&&ne.splice(Lt,1),Lt===bn&&tl>0&&bn--,Lt=0,ne.forEach(function(Xt){return Xt.scroller===D.scroller&&(Lt=1)}),Lt||An||xr||(D.scroll.rec=0),i&&(i.scrollTrigger=null,gt&&i.revert({kill:!1}),Yt||i.kill()),Zt&&[Zt,Ot,k,yt].forEach(function(Xt){return Xt.parentNode&&Xt.parentNode.removeChild(Xt)}),Ho===D&&(Ho=0),f&&(bt&&(bt.uncache=1),Lt=0,ne.forEach(function(Xt){return Xt.pin===f&&Lt++}),Lt||(bt.spacer=0)),n.onKill&&n.onKill(D)},ne.push(D),D.enable(!1,!1),pe&&pe(D),i&&i.add&&!R){var Qt=D.update;D.update=function(){D.update=Qt,re.cache++,tt||L||D.refresh()},At.delayedCall(.01,D.update),R=.01,tt=L=0}else D.refresh();f&&oE()},r.register=function(n){return Ps||(At=n||_m(),mm()&&window.document&&r.enable(),Ps=Eo),Ps},r.defaults=function(n){if(n)for(var i in n)Fa[i]=n[i];return Fa},r.disable=function(n,i){Eo=0,ne.forEach(function(o){return o[i?"kill":"disable"](n)}),nn(ie,"wheel",As),nn(Se,"scroll",As),clearInterval(Da),nn(Se,"touchcancel",Ti),nn(ye,"touchstart",Ti),Na(nn,Se,"pointerdown,touchstart,mousedown",sd),Na(nn,Se,"pointerup,touchend,mouseup",od),gl.kill(),Ua(nn);for(var s=0;s<re.length;s+=3)Oa(nn,re[s],re[s+1]),Oa(nn,re[s],re[s+2])},r.enable=function(){if(ie=window,Se=document,Jn=Se.documentElement,ye=Se.body,At){if(Qo=At.utils.toArray,Oo=At.utils.clamp,Rh=At.core.context||Ti,mc=At.core.suppressOverwrites||Ti,_u=ie.history.scrollRestoration||"auto",Lh=ie.pageYOffset||0,At.core.globals("ScrollTrigger",r),ye){Eo=1,Ws=document.createElement("div"),Ws.style.height="100vh",Ws.style.position="absolute",bm(),QM(),Ve.register(At),r.isTouch=Ve.isTouch,or=Ve.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ah=Ve.isTouch===1,rn(ie,"wheel",As),mu=[ie,Se,Jn,ye],At.matchMedia?(r.matchMedia=function(h){var d=At.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},At.addEventListener("matchMediaInit",function(){Tm(),Mu()}),At.addEventListener("matchMediaRevert",function(){return Em()}),At.addEventListener("matchMedia",function(){qr(0,1),os("matchMedia")}),At.matchMedia().add("(orientation: portrait)",function(){return vc(),vc})):console.warn("Requires GSAP 3.11.0 or later"),vc(),rn(Se,"scroll",As);var n=ye.hasAttribute("style"),i=ye.style,s=i.borderTopStyle,o=At.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Wi(ye),Ze.m=Math.round(a.top+Ze.sc())||0,Rn.m=Math.round(a.left+Rn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(ye.setAttribute("style",""),ye.removeAttribute("style")),Da=setInterval(cd,250),At.delayedCall(.5,function(){return Ia=0}),rn(Se,"touchcancel",Ti),rn(ye,"touchstart",Ti),Na(rn,Se,"pointerdown,touchstart,mousedown",sd),Na(rn,Se,"pointerup,touchend,mouseup",od),bh=At.utils.checkPrefix("transform"),el.push(bh),Ps=mn(),gl=At.delayedCall(.2,qr).pause(),Ls=[Se,"visibilitychange",function(){var h=ie.innerWidth,d=ie.innerHeight;Se.hidden?(ed=h,nd=d):(ed!==h||nd!==d)&&bo()},Se,"DOMContentLoaded",qr,ie,"load",qr,ie,"resize",bo],Ua(rn),ne.forEach(function(h){return h.enable(0,1)}),l=0;l<re.length;l+=3)Oa(nn,re[l],re[l+1]),Oa(nn,re[l],re[l+2])}else if(Se){var c=function h(){r.enable(),Se.removeEventListener("DOMContentLoaded",h)};Se.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(_c=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Da)||(Da=i)&&setInterval(cd,i),"ignoreMobileResize"in n&&(Ah=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ua(nn)||Ua(rn,n.autoRefreshEvents||"none"),fm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Ln(n),o=re.indexOf(s),a=rs(s);~o&&re.splice(o,a?6:2),i&&(a?Li.unshift(ie,i,ye,i,Jn,i):Li.unshift(s,i))},r.clearMatchMedia=function(n){ne.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Yn(n)?Ln(n):n).getBoundingClientRect(),a=o[s?Qr:ts]*i||0;return s?o.right-a>0&&o.left+a<ie.innerWidth:o.bottom-a>0&&o.top+a<ie.innerHeight},r.positionInViewport=function(n,i,s){Yn(n)&&(n=Ln(n));var o=n.getBoundingClientRect(),a=o[s?Qr:ts],l=i==null?a/2:i in xl?xl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ie.innerWidth:(o.top+l)/ie.innerHeight},r.killAll=function(n){if(ne.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ss.killAll||[];ss={},i.forEach(function(s){return s()})}},r})();oe.version="3.15.1";oe.saveStyles=function(r){return r?Qo(r).forEach(function(t){if(t&&t.style){var e=Xn.indexOf(t);e>=0&&Xn.splice(e,5),Xn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),At.core.getCache(t),Rh())}}):Xn};oe.revert=function(r,t){return Mu(!r,t)};oe.create=function(r,t){return new oe(r,t)};oe.refresh=function(r){return r?bo(!0):(Ps||oe.register())&&qr(!0)};oe.update=function(r){return++re.cache&&Ji(r===!0?2:0)};oe.clearScrollMemory=wm;oe.maxScroll=function(r,t){return Pi(r,t?Rn:Ze)};oe.getScrollFunc=function(r,t){return wr(Ln(r),t?Rn:Ze)};oe.getById=function(r){return Ph[r]};oe.getAll=function(){return ne.filter(function(r){return r.vars.id!=="ScrollSmoother"})};oe.isScrolling=function(){return!!di};oe.snapDirectional=Su;oe.addEventListener=function(r,t){var e=ss[r]||(ss[r]=[]);~e.indexOf(t)||e.push(t)};oe.removeEventListener=function(r,t){var e=ss[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};oe.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var d=[],u=[],f=At.delayedCall(i,function(){h(d,u),d=[],u=[]}).pause();return function(_){d.length||f.restart(!0),d.push(_.trigger),u.push(_),s<=d.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&gn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return gn(s)&&(s=s(),rn(oe,"refresh",function(){return s=t.batchMax()})),Qo(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(oe.create(c))}),e};var md=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},yc=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ve.isTouch?" pinch-zoom":""):"none",t===Jn&&r(ye,e)},Ha={auto:1,scroll:1},uE=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||At.core.getCache(s),a=mn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==ye&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Ha[(l=hi(s)).overflowY]||Ha[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!rs(s)&&(Ha[(l=hi(s)).overflowY]||Ha[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Rm=function(t,e,n,i){return Ve.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&uE,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&rn(Se,Ve.eventTypes[0],gd,!1,!0)},onDisable:function(){return nn(Se,Ve.eventTypes[0],gd,!0)}})},fE=/(input|label|select|textarea)/i,_d,gd=function(t){var e=fE.test(t.target.tagName);(e||_d)&&(t._gsapAllow=!0,_d=e)},dE=function(t){Hr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=Ln(t.target)||Jn,h=At.core.globals().ScrollSmoother,d=h&&h.get(),u=or&&(t.content&&Ln(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=wr(c,Ze),_=wr(c,Rn),g=1,m=(Ve.isTouch&&ie.visualViewport?ie.visualViewport.scale*ie.visualViewport.width:ie.outerWidth)/ie.innerWidth,p=0,y=gn(i)?function(){return i(a)}:function(){return i||2.8},M,v,A=Rm(c,t.type,!0,s),b=function(){return v=!1},w=Ti,C=Ti,S=function(){l=Pi(c,Ze),C=Oo(or?1:0,l),n&&(w=Oo(0,Pi(c,Rn))),M=es},x=function(){u._gsap.y=To(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},P=function(){if(v){requestAnimationFrame(b);var V=To(a.deltaY/2),it=C(f.v-V);if(u&&it!==f.v+f.offset){f.offset=it-f.v;var D=To((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",u._gsap.y=D+"px",f.cacheID=re.cache,Ji()}return!0}f.offset&&x(),v=!0},U,F,z,Y,H=function(){S(),U.isActive()&&U.vars.scrollY>l&&(f()>l?U.progress(1)&&f(l):U.resetTo("scrollY",l))};return u&&At.set(u,{y:"+=0"}),t.ignoreCheck=function(X){return or&&X.type==="touchmove"&&P()||g>1.05&&X.type!=="touchstart"||a.isGesturing||X.touches&&X.touches.length>1},t.onPress=function(){v=!1;var X=g;g=To((ie.visualViewport&&ie.visualViewport.scale||1)/m),U.pause(),X!==g&&yc(c,g>1.01?!0:n?!1:"x"),F=_(),z=f(),S(),M=es},t.onRelease=t.onGestureStart=function(X,V){if(f.offset&&x(),!V)Y.restart(!0);else{re.cache++;var it=y(),D,ht;n&&(D=_(),ht=D+it*.05*-X.velocityX/.227,it*=md(_,D,ht,Pi(c,Rn)),U.vars.scrollX=w(ht)),D=f(),ht=D+it*.05*-X.velocityY/.227,it*=md(f,D,ht,Pi(c,Ze)),U.vars.scrollY=C(ht),U.invalidate().duration(it).play(.01),(or&&U.vars.scrollY>=l||D>=l-1)&&At.to({},{onUpdate:H,duration:it})}o&&o(X)},t.onWheel=function(){U._ts&&U.pause(),mn()-p>1e3&&(M=0,p=mn())},t.onChange=function(X,V,it,D,ht){if(es!==M&&S(),V&&n&&_(w(D[2]===V?F+(X.startX-X.x):_()+V-D[1])),it){f.offset&&x();var Ut=ht[2]===it,Kt=Ut?z+X.startY-X.y:f()+it-ht[1],J=C(Kt);Ut&&Kt!==J&&(z+=J-Kt),f(J)}(it||V)&&Ji()},t.onEnable=function(){yc(c,n?!1:"x"),oe.addEventListener("refresh",H),rn(ie,"resize",H),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=_.smooth=!1),A.enable()},t.onDisable=function(){yc(c,!0),nn(ie,"resize",H),oe.removeEventListener("refresh",H),A.kill()},t.lockAxis=t.lockAxis!==!1,a=new Ve(t),a.iOS=or,or&&!f()&&f(1),or&&At.ticker.add(Ti),Y=a._dc,U=At.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Am(f,f(),function(){return U.pause()})},onUpdate:Ji,onComplete:Y.vars.onComplete}),a};oe.sort=function(r){if(gn(r))return ne.sort(r);var t=ie.pageYOffset||0;return oe.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ie.innerHeight}),ne.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};oe.observe=function(r){return new Ve(r)};oe.normalizeScroll=function(r){if(typeof r>"u")return wn;if(r===!0&&wn)return wn.enable();if(r===!1){wn&&wn.kill(),wn=r;return}var t=r instanceof Ve?r:dE(r);return wn&&wn.target===t.target&&wn.kill(),rs(t.target)&&(wn=t),t};oe.core={_getVelocityProp:wh,_inputObserver:Rm,_scrollers:re,_proxies:Li,bridge:{ss:function(){di||os("scrollStart"),di=mn()},ref:function(){return pn}}};_m()&&At.registerPlugin(oe);ar.registerPlugin(oe);function pE(r,t){const e=window.matchMedia("(prefers-reduced-motion: reduce)").matches,n=new CS({duration:e?0:1.15,easing:u=>Math.min(1,1.001-Math.pow(2,-10*u)),smoothWheel:!e,touchMultiplier:1.4});n.on("scroll",oe.update),ar.ticker.add(u=>{n.raf(u*1e3)}),ar.ticker.lagSmoothing(0),oe.create({trigger:"#story-track",start:"top top",end:"bottom bottom",scrub:!0,onUpdate:u=>{r.setStoryProgress(u.progress),t&&t(u.progress)}}),ar.to("#scroll-progress-bar",{scaleX:1,ease:"none",scrollTrigger:{trigger:"#story-track",start:"top top",end:"bottom bottom",scrub:!0}}),e||ar.utils.toArray(".story-panel").forEach(u=>{ar.fromTo(u,{y:26,opacity:0},{y:0,opacity:1,duration:.75,ease:"power3.out",scrollTrigger:{trigger:u,start:"top 85%",once:!0}})});let i=!1,s=null;const o=()=>{if(!i)return;i=!1,s&&s.kill();const u=document.getElementById("autoplay-btn");u&&(u.textContent="▶ Auto-Play Journey")};window.addEventListener("wheel",o,{passive:!0}),window.addEventListener("touchstart",o,{passive:!0});const a=()=>{const u=document.getElementById("autoplay-btn");if(i){o();return}i=!0,u&&(u.textContent="❚❚ Pause Journey");const f=document.documentElement.scrollHeight-window.innerHeight,_=window.scrollY,m=26*Math.max(.05,1-_/Math.max(f,1)),p={y:_};s=ar.to(p,{y:f,duration:m,ease:"none",onUpdate:()=>{window.scrollTo(0,p.y)},onComplete:()=>{i=!1,u&&(u.textContent="▶ Replay Journey")}})},l=u=>{o();const f=document.getElementById(`chapter-${u}`);f&&n.scrollTo(f,{offset:-60})},c=window.matchMedia("(pointer: fine)").matches,h=document.getElementById("cursor-dot"),d=document.getElementById("cursor-ring");if(c&&h&&d&&!e){let u=window.innerWidth/2,f=window.innerHeight/2,_=u,g=f;window.addEventListener("pointermove",p=>{u=p.clientX,f=p.clientY,h.style.transform=`translate3d(${u}px, ${f}px, 0)`},{passive:!0});const m=()=>{_+=(u-_)*.16,g+=(f-g)*.16,d.style.transform=`translate3d(${_}px, ${g}px, 0)`,requestAnimationFrame(m)};requestAnimationFrame(m),document.addEventListener("pointerover",p=>{const y=p.target.closest("a, button, input, textarea, .project-box");d.classList.toggle("is-active",!!y)})}return{lenis:n,scrollToChapter:l,toggleAutoPlay:a}}function Cm(r){const t=[];return r.liveUrl&&t.push(`<a href="${r.liveUrl}" target="_blank" rel="noopener noreferrer" class="action-link action-live" style="background:${r.accent}">Live Demo ↗</a>`),r.githubUrl&&t.push(`<a href="${r.githubUrl}" target="_blank" rel="noopener noreferrer" class="action-link action-code">GitHub ↗</a>`),r.frontendUrl&&t.push(`<a href="${r.frontendUrl}" target="_blank" rel="noopener noreferrer" class="action-link action-live" style="background:${r.accent}">Frontend Repo ↗</a>`),r.backendUrl&&t.push(`<a href="${r.backendUrl}" target="_blank" rel="noopener noreferrer" class="action-link action-code">Backend Repo ↗</a>`),t.join("")}function mE(r,t){document.getElementById("brand-name").textContent=r.profile.name,document.getElementById("brand-role").textContent=r.profile.tagline;const e=document.getElementById("chapter-counter"),n=document.getElementById("scroll-cue"),i=document.getElementById("contact-jump-btn");i&&i.addEventListener("click",()=>{t.onSelectChapter&&t.onSelectChapter("contact")});const s=document.getElementById("brand-wordmark");s&&s.addEventListener("click",u=>{u.preventDefault(),t.onSelectChapter&&t.onSelectChapter("origin")});const o=document.getElementById("chapter-scrubber");o.innerHTML="",r.chapters.forEach((u,f)=>{const _=document.createElement("button");_.type="button",_.className=`chapter-pill hud-interactive ${f===0?"is-active":""}`,_.dataset.chapterId=u.id,_.innerHTML=`<span class="pill-idx">${u.index}</span><span>${u.navLabel}</span>`,_.addEventListener("click",()=>{t.onSelectChapter&&t.onSelectChapter(u.id)}),o.appendChild(_)});const a=document.getElementById("story-track");a.innerHTML="",r.chapters.forEach(u=>{const f=document.createElement("section");f.id=`chapter-${u.id}`,f.className="story-chapter";let _="";u.id==="college"?_=`
        <div class="achievements-mini">
          ${r.achievements.map(g=>`
            <div class="mini-item">
              <div class="mini-meta">${g.org} · ${g.date}</div>
              <div class="mini-title">${g.title}</div>
              <div class="mini-detail">${g.detail}</div>
            </div>
          `).join("")}
        </div>
      `:u.id==="setup"?_=`
        <div class="skills-clusters">
          ${r.skills.map(g=>`
            <div class="skill-cluster">
              <div class="cluster-label" style="color:${g.color}">${g.group}</div>
              <div class="cluster-pills">
                ${g.items.map(m=>`<span class="stack-pill">${m}</span>`).join("")}
              </div>
            </div>
          `).join("")}
        </div>
      `:u.id==="impact"?_=`
        <div class="impact-tabs" role="tablist">
          <button type="button" class="impact-tab is-active" data-tab="projects">
            Projects (${r.projects.length})
          </button>
          <button type="button" class="impact-tab" data-tab="experiences">
            Internships (${r.experiences.length})
          </button>
        </div>

        <div id="tab-projects" class="impact-list">
          ${r.projects.map(g=>`
            <article class="project-box hud-interactive" data-monolith-id="${g.id}">
              <div class="project-box-head">
                <span class="project-num" style="color:${g.accent}">${g.index}</span>
                <span class="project-date">${g.period}</span>
              </div>
              <h3 class="project-box-title">${g.title}</h3>
              <p class="project-box-summary">${g.summary}</p>
              <div class="project-box-stack">
                ${g.stack.map(m=>`<span class="stack-pill">${m}</span>`).join("")}
              </div>
              <div class="project-box-actions">
                ${Cm(g)}
                <button
                  type="button"
                  class="action-link action-details"
                  data-inspect-id="${g.id}"
                >
                  Case Study →
                </button>
              </div>
            </article>
          `).join("")}
        </div>

        <div id="tab-experiences" class="impact-list" style="display:none">
          ${r.experiences.map(g=>`
            <article class="project-box hud-interactive" data-monolith-id="${g.id}">
              <div class="project-box-head">
                <span class="project-num" style="color:${g.accent}">${g.company}</span>
                <span class="project-date">${g.period}</span>
              </div>
              <h3 class="project-box-title">${g.role}</h3>
              <p class="project-box-summary">${g.summary}</p>
              <div class="project-box-actions">
                <span class="location-pill">${g.location}</span>
                <button
                  type="button"
                  class="action-link action-details"
                  data-inspect-id="${g.id}"
                >
                  Full Impact →
                </button>
              </div>
            </article>
          `).join("")}
        </div>
      `:u.id==="contact"&&(_=`
        <div class="contact-card-box">
          <div class="contact-row">
            <span class="contact-label">Email</span>
            <span class="contact-val">${r.profile.email}</span>
            <button type="button" id="copy-email-btn" class="mini-copy-btn hud-interactive">Copy</button>
          </div>
          <div class="contact-row">
            <span class="contact-label">Phone</span>
            <span class="contact-val">${r.profile.phone}</span>
          </div>
          <div class="social-pills">
            ${r.profile.links.map(g=>`<a href="${g.href}" target="_blank" rel="noopener noreferrer" class="social-pill hud-interactive">${g.label} ↗</a>`).join("")}
          </div>
          <form id="contact-form" class="quick-form hud-interactive">
            <input name="name" type="text" placeholder="Your Name" required />
            <input name="email" type="email" placeholder="Your Email" required />
            <textarea name="message" rows="3" placeholder="Share a role, project, or opportunity..." required></textarea>
            <button type="submit" class="btn-primary-story">Send Message</button>
          </form>
        </div>
      `),f.innerHTML=`
      <article class="story-panel ${u.id==="impact"?"story-panel-wide":""} hud-interactive">
        <span class="panel-watermark" aria-hidden="true">${u.index}</span>
        <div class="panel-eyebrow">${u.eyebrow}</div>
        <h2 class="panel-title">${u.title}</h2>
        <div class="panel-subtitle">${u.subtitle}</div>
        <p class="panel-desc">${u.description}</p>
        ${u.highlights&&u.highlights.length>0?`<div class="panel-highlights">${u.highlights.map(g=>`<span class="highlight-chip">${g}</span>`).join("")}</div>`:""}
        ${_}
      </article>
    `,a.appendChild(f)}),document.querySelectorAll(".impact-tab").forEach(u=>{u.addEventListener("click",()=>{document.querySelectorAll(".impact-tab").forEach(_=>_.classList.remove("is-active")),u.classList.add("is-active");const f=u.dataset.tab;document.getElementById("tab-projects").style.display=f==="projects"?"flex":"none",document.getElementById("tab-experiences").style.display=f==="experiences"?"flex":"none"})});const l=document.getElementById("autoplay-btn");l&&t.onToggleAutoPlay&&l.addEventListener("click",t.onToggleAutoPlay),document.querySelectorAll("[data-monolith-id]").forEach(u=>{u.addEventListener("pointerenter",()=>{t.onFocusMonolith&&t.onFocusMonolith(u.dataset.monolithId)})}),document.querySelectorAll("[data-inspect-id]").forEach(u=>{u.addEventListener("click",()=>{vd(r,u.dataset.inspectId)})});const c=document.getElementById("copy-email-btn");c&&c.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(r.profile.email),Mc(`Copied ${r.profile.email}`)}catch{Mc(r.profile.email)}});const h=document.getElementById("contact-form");h&&h.addEventListener("submit",u=>{u.preventDefault();const f=new FormData(h);Mc(`Thanks ${f.get("name")||""}! Message noted for ${r.profile.name}.`),h.reset()});const d=document.getElementById("detail-modal");return document.getElementById("modal-close-btn").addEventListener("click",Sc),d.addEventListener("click",u=>{u.target===d&&Sc()}),window.addEventListener("keydown",u=>{u.key==="Escape"&&Sc()}),{updateActiveChapter(u){let f=0;[0,.12,.32,.56,.74,.9].forEach((g,m)=>{u>=g&&(f=m)}),document.querySelectorAll(".chapter-pill").forEach((g,m)=>{g.classList.toggle("is-active",m===f)}),e&&(e.textContent=`${String(f+1).padStart(2,"0")} / 06`),n&&n.classList.toggle("is-hidden",u>.035)},openModalById(u){vd(r,u)}}}function vd(r,t){const e=document.getElementById("detail-modal"),n=r.experiences.find(o=>o.id===t),i=r.projects.find(o=>o.id===t),s=document.getElementById("modal-links");if(n)document.getElementById("modal-kicker").textContent=`INTERNSHIP // ${n.period}`,document.getElementById("modal-title").textContent=n.role,document.getElementById("modal-sub").textContent=`${n.company} — ${n.location}`,document.getElementById("modal-summary").textContent=n.summary,document.getElementById("modal-metrics").innerHTML="",document.getElementById("modal-list").innerHTML=n.points.map(o=>`<li>${o}</li>`).join(""),document.getElementById("modal-stack").innerHTML="",s.innerHTML="";else if(i)document.getElementById("modal-kicker").textContent=`PROJECT ${i.index} // ${i.period}`,document.getElementById("modal-title").textContent=i.title,document.getElementById("modal-sub").textContent="Engineering Architecture & Outcomes",document.getElementById("modal-summary").textContent=i.summary,document.getElementById("modal-metrics").innerHTML=i.metrics.map(o=>`<span class="modal-pill">${o}</span>`).join(""),document.getElementById("modal-list").innerHTML=i.highlights.map(o=>`<li>${o}</li>`).join(""),document.getElementById("modal-stack").innerHTML=i.stack.map(o=>`<span class="stack-pill">${o}</span>`).join(""),s.innerHTML=Cm(i);else return;e.classList.add("is-open"),e.setAttribute("aria-hidden","false")}function Sc(){const r=document.getElementById("detail-modal");r.classList.remove("is-open"),r.setAttribute("aria-hidden","true")}let xd;function Mc(r){const t=document.getElementById("toast-notification");t.textContent=r,t.classList.add("is-visible"),clearTimeout(xd),xd=setTimeout(()=>t.classList.remove("is-visible"),3e3)}function _E(r){const t=document.getElementById("preloader"),e=document.getElementById("preloader-bar"),n=document.getElementById("preloader-percent"),i=document.getElementById("preloader-stage"),s=[{at:0,text:"Building 3D world & architectural path..."},{at:38,text:"Preparing bicycle & campus landmarks..."},{at:72,text:"Booting developer studio monitors..."},{at:95,text:"Ready to begin journey."}];let o=0,a=!1;const l=setInterval(()=>{o=Math.min(a?100:88,o+(a?6:3)),e&&(e.style.width=`${o}%`),n&&(n.textContent=`${String(o).padStart(2,"0")}%`);const d=[...s].reverse().find(u=>o>=u.at);i&&d&&(i.textContent=d.text),o>=100&&a&&(clearInterval(l),setTimeout(()=>{t&&t.classList.add("is-hidden")},280))},32);return{markSceneReady(){a=!0}}}function yd(){const r=document.getElementById("story-canvas"),t=_E();let e=null,n=null,i=null;i=mE(Eu,{onSelectChapter:s=>{n&&n.scrollToChapter(s)},onToggleAutoPlay:()=>{n&&n.toggleAutoPlay()},onFocusMonolith:s=>{e&&e.focusMonolith(s)}}),e=new yS(r,Eu,{onReady:()=>{t.markSceneReady()},onMonolithClick:s=>{i&&i.openModalById(s)}}),n=pE(e,s=>{i&&i.updateActiveChapter(s)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",yd):yd();
