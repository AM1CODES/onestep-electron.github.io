(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),c=a(96),s=a(22),i=a(94),o=a(95),u=a(83),m=a.n(u);t.default=function(){const[e,t]=Object(n.useState)(null),[a,u]=Object(n.useState)(null),d=Object(l.k)();Object(n.useEffect)((()=>{const e=Object(o.b)("token");t(e||"")})),Object(n.useEffect)((()=>{if(""==e)d.replace("/signup");else{const t=JSON.parse(localStorage.getItem("userData"));t?u(t):i.a.get("/",{headers:{Authorization:`bearer ${e}`}}).then((({data:e})=>{u({...e.data})})).catch((e=>{console.log(e)}))}}),[e]),Object(n.useEffect)((()=>{const e=JSON.parse(localStorage.getItem("userData"));a&&!e&&localStorage.setItem("userData",JSON.stringify(a))}),[a]);const v=Object(s.default)(),{siteConfig:E={}}=v;return r.a.createElement(c.a,{title:`Hello from ${E.title}`,description:"Description will go into a meta tag in <head />"},r.a.createElement("main",{className:m.a.main},e&&a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome back, ",r.a.createElement("span",{className:m.a.username},a.username,"!")),r.a.createElement("h4",null,"Your Email ID: ",a.email),r.a.createElement("div",null,r.a.createElement("button",{className:m.a.logoutButton,onClick:()=>{Object(o.a)("token"),t("")}},"Logout"))),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",null,"Here's how you're doing."),r.a.createElement("div",{className:m.a.section},r.a.createElement("div",{className:m.a.card},r.a.createElement("div",{className:m.a.title},"Basic"),r.a.createElement("div",null,r.a.createElement("div",null,"Progress: ",a.track.basic.progress),r.a.createElement("div",null,"Quizzes Solved: ",a.track.basic.quizScore,"/",a.track.basic.totalQuizAnswered))),r.a.createElement("div",{className:m.a.card},r.a.createElement("div",{className:m.a.title},"Intermediate"),r.a.createElement("div",null,r.a.createElement("div",null,"Progress: ",a.track.intermediate.progress),r.a.createElement("div",null,"Quizzes Solved: ",a.track.intermediate.quizScore,"/",a.track.intermediate.totalQuizAnswered))),r.a.createElement("div",{className:m.a.card},r.a.createElement("div",{className:m.a.title},"Advanced"),r.a.createElement("div",null,r.a.createElement("div",null,"Progress: ",a.track.advanced.progress),r.a.createElement("div",null,"Quizzes Solved: ",a.track.advanced.quizScore,"/",a.track.advanced.totalQuizAnswered)))))))))}},94:function(e,t,a){"use strict";var n=a(101),r=a.n(n);t.a=r.a.create({baseURL:"https://onestep-server.herokuapp.com/"})},95:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return l}));const n=(e,t)=>{let a="";var n=new Date;n.setTime(n.getTime()+2592e5),a="; expires="+n.toUTCString(),document.cookie=e+"="+(t||"")+a+"; path=/"},r=e=>{for(var t=e+"=",a=document.cookie.split(";"),n=0;n<a.length;n++){for(var r=a[n];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return null},l=e=>{document.cookie=e+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"}}}]);