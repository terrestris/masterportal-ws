"use strict";(self.webpackChunkmasterportal_ws_2=self.webpackChunkmasterportal_ws_2||[]).push([[236],{3292:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"devsetup/README","title":"Dev Setup","description":"Repository und Entwicklungssetup \ud83d\udc68\u200d\ud83d\udcbb","source":"@site/docs/devsetup/README.md","sourceDirName":"devsetup","slug":"/devsetup/","permalink":"/masterportal-ws/devsetup/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7,"title":"Dev Setup"},"sidebar":"tutorialSidebar","previous":{"title":"npm","permalink":"/masterportal-ws/basics/npm"},"next":{"title":"\xdcbungsaufgaben","permalink":"/masterportal-ws/exercises/"}}');var i=s(4848),t=s(8453);const l={sidebar_position:7,title:"Dev Setup"},d=void 0,c={},o=[{value:"Repository und Entwicklungssetup \ud83d\udc68\u200d\ud83d\udcbb",id:"repository-und-entwicklungssetup-",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"repository-und-entwicklungssetup-",children:"Repository und Entwicklungssetup \ud83d\udc68\u200d\ud83d\udcbb"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\xd6ffnen Sie das Terminal und f\xfchren Sie den Befehl ",(0,i.jsx)(n.code,{children:"pwd"})," aus."]}),"\n",(0,i.jsxs)(n.li,{children:["Sie sollten sich im Pfad ",(0,i.jsx)(n.code,{children:"/home/user"})," befinden."]}),"\n",(0,i.jsxs)(n.li,{children:["F\xfchren Sie den Befehl ",(0,i.jsx)(n.code,{children:"git clone https://geowerkstatt@bitbucket.org/geowerkstatt-hamburg/masterportal.git"})," aus, um das Masterportal Repository auf Ihre Festplatte zu kopieren. Navigieren Sie anschlie\xdfend in das neue Verzeichnis per Befehl: ",(0,i.jsx)(n.code,{children:"cd masterportal"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Wie in vielen modernen Javascript Projekte, wird auch f\xfcr das Masterportal ein ",(0,i.jsx)(n.a,{href:"https://github.com/nodejs/node",children:"Node.js"})," Framework zur Entwicklung genutzt. Mithilfe des Paketsmanager ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/",children:"npm"})," werden s\xe4mtliche Bibliotheken und Abh\xe4ngigkeiten gemanaged und installiert, wie beispielsweise ",(0,i.jsx)(n.a,{href:"https://github.com/webpack/webpack",children:"webpack"}),", der als ",(0,i.jsx)(n.em,{children:"module bundler"})," fungiert."]}),"\n",(0,i.jsxs)(n.p,{children:["Eine ausf\xfchrliche Beschreibung dieser Entwicklungstools- und Frameworks w\xfcrde den Rahmen dieses Workshops sprengen, die ben\xf6tigsten Infos werden im Rahmen dieses Workshops gegeben. Eine kurzen \xdcberblick \xfcber npm ist ",(0,i.jsx)(n.a,{href:"/masterportal-ws/basics/npm",children:"hier"})," zu finden."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["F\xfchren Sie ",(0,i.jsx)(n.code,{children:"node -v"}),", um die installierte Version von ",(0,i.jsx)(n.code,{children:"node"})," auszugeben.\nFalls ",(0,i.jsx)(n.code,{children:"node"})," nicht installiert ist, oder die Version < ",(0,i.jsx)(n.code,{children:"18.16.0"})," oder > ",(0,i.jsx)(n.code,{children:"20.12.0"})," ist, folgende Schritte ausf\xfchren:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash"})}),"\n",(0,i.jsx)(n.li,{children:"Terminal Fenster schlie\xdfen und erneut \xf6ffnen."}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"nvm install v20.12.2"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Es soll auf der Version ",(0,i.jsx)(n.code,{children:"3.8.0"})," gearbeitet werden, hierzu sind folgend Befehle auszuf\xfchren:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"git fetch origin"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"git checkout v3.8.0"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Installieren Sie alle ben\xf6tigten Abh\xe4ngigkeiten des Masterportals-Projekts: ",(0,i.jsx)(n.code,{children:"npm ci"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Starten Sie anschlie\xdfend den Entwicklungsserver: ",(0,i.jsx)(n.code,{children:"npm run start"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Nun wird der Masterportal-Quellcode kompiliert und ",(0,i.jsx)(n.code,{children:"webpack"})," erstellt den ",(0,i.jsx)(n.em,{children:"dev build"}),", der anschlie\xdfend - sobald die Nachricht ",(0,i.jsx)(n.code,{children:"Compiled successfully"})," im Terminal erscheint, im Browser unter der Adresse ",(0,i.jsx)(n.code,{children:"localhost:9001/portal/basic"})," aufgerufen werden kann."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["M\xf6glicherweise tauchen viele Logs mit der Nachricht ",(0,i.jsx)(n.code,{children:"ENOSPC: System limit for number of file watchers reached"})," auf. In diesem Fall ",(0,i.jsx)(n.code,{children:"Strg+C"})," dr\xfccken um den Dev-Server zu stoppen. Dann ",(0,i.jsx)(n.code,{children:"echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p"})," ausf\xfchren und anschlie\xdfend den Dev-Server wieder starten mit ",(0,i.jsx)(n.code,{children:"npm run start"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Startansicht des Portals basic.",src:s(7177).A+"",width:"1273",height:"901"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2139\ufe0f",(0,i.jsx)(n.br,{}),"\n","Weiterf\xfchrende Infos:",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"https://bitbucket.org/geowerkstatt-hamburg/masterportal/src/lts/docs/Dev/",children:"https://bitbucket.org/geowerkstatt-hamburg/masterportal/src/lts/docs/Dev/"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},7177:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/mp_startview-a91dbda719d9a80672e09b0293c13c48.png"},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var r=s(6540);const i={},t=r.createContext(i);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);