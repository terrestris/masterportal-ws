"use strict";(self.webpackChunkmasterportal_ws_2=self.webpackChunkmasterportal_ws_2||[]).push([[987],{2101:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"basics/npm","title":"npm","description":"npm ist der Paketmanager f\xfcr Node.js (eine JavaScript-Laufzeitumgebung) und die weltweit gr\xf6\xdfte Software-Registry (mehr als 600k Pakete) mit ca. 3 Milliarden Downloads pro Woche.","source":"@site/docs/basics/npm.md","sourceDirName":"basics","slug":"/basics/npm","permalink":"/masterportal-ws/basics/npm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Basiswissen","permalink":"/masterportal-ws/basics/"},"next":{"title":"Dev Setup","permalink":"/masterportal-ws/devsetup/"}}');var r=i(4848),t=i(8453);const a={},l="npm",c={},d=[{value:"package.json",id:"packagejson",level:3},{value:"Installieren von packages mittels npm",id:"installieren-von-packages-mittels-npm",level:3}];function o(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"npm",children:"npm"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"http://npmjs.com",children:"npm"})," ist der Paketmanager f\xfcr Node.js (eine JavaScript-Laufzeitumgebung) und die weltweit gr\xf6\xdfte Software-Registry (mehr als 600k Pakete) mit ca. 3 Milliarden Downloads pro Woche."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"npm Logo",src:i(9943).A+"",width:"540",height:"210"})}),"\n",(0,r.jsx)(n.p,{children:"npm kann genutzt werden, um ..."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Pakete an Anwendungen anpassen oder diese so einbinden, wie sie sind."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Eigenst\xe4ndige Tools herunterladen."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Pakete ohne Herunterladen mit npx ausf\xfchren."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Code mit jedem npm-User teilen, \xfcberall."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Code f\xfcr bestimmte Entwickler beschr\xe4nken."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Virtuelle Teams (orgs) bilden."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Mehrere Versionen von Code und Code-Abh\xe4ngigkeiten verwalten."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Anwendungen einfach aktualisieren, wenn der zugrunde liegende Code aktualisiert wird."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Andere Entwickler finden, die an \xe4hnlichen Problemen arbeiten."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"packagejson",children:"package.json"}),"\n",(0,r.jsxs)(n.p,{children:["Der Befehl ",(0,r.jsx)(n.code,{children:"npm init"})," in Ihrem Projektordner \xf6ffnet einen interaktiven Dialog zur Erstellung eines npm-Projekts. Das Ergebnis ist die ",(0,r.jsx)(n.code,{children:"package.json"})," mit allen wichtigen Einstellungen, Skripten und Abh\xe4ngigkeiten Ihres Projekts."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n  "name": "name_of_your_package",\n  "version": "1.0.0",\n  "description": "This is just a test",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "repository": {\n    "type": "git",\n    "url": "http://github.com/yourname/name_of_your_package.git"\n  },\n  "author": "your_name",\n  "license": "ISC"\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Weitere Infos hier: ",(0,r.jsx)(n.a,{href:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json",children:"npm docs package.json"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"installieren-von-packages-mittels-npm",children:"Installieren von packages mittels npm"}),"\n",(0,r.jsxs)(n.p,{children:["Der einfachste Weg, neue Pakete zu intallieren, ist die Nutzung der ",(0,r.jsx)(n.a,{href:"https://docs.npmjs.com/cli/npm",children:"CLI"}),":"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"npm install packagename"})}),"\n",(0,r.jsxs)(n.p,{children:["Das installierte Paket ist anschlie\xdfend im Subfolder ",(0,r.jsx)(n.code,{children:"node_modules"})," zu finden."]}),"\n",(0,r.jsx)(n.h1,{id:"node-version-manager-nvm",children:"Node version manager NVM"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"bash script um mehrere node Versionen zu verwalten"}),"\n",(0,r.jsxs)(n.li,{children:["Siehe ",(0,r.jsx)(n.a,{href:"https://github.com/creationix/nvm",children:"hier"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash\nnvm i v8\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var s=i(6540);const r={},t=s.createContext(r);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(t.Provider,{value:n},e.children)}},9943:(e,n,i)=>{i.d(n,{A:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhwAAADSAgMAAAB87fECAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEUAAADLODf///8EXxL6AAAAAXRSTlMAQObYZgAAAAFiS0dEAmYLfGQAAAAHdElNRQfhCAkCAi0o2YxVAAAAwElEQVR42u3asRGAIAxAURr3s7FxPxumtLHihMt5QS3er0PyBqBs/6hwcHBwcHBwcHBwcHBwcHCkO/Y66rimhkM1tKqzmYODg4ODg4ODg4ODg4ODY7qjOdxxNG+frOLg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4OCY7Aj9M+Dg4ODg4ODg4ODg4ODg4PjKEev+cEYcHBwcHBwcHBwcHBwcHByJjlDLcMda3oqDg4ODg4ODg4ODg4ODgyPSCV7wh+HNgMmcAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA4LTA5VDAyOjAyOjQ0KzAwOjAw39Y9SwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wOC0wOVQwMjowMjo0NCswMDowMK6LhfcAAAAASUVORK5CYII="}}]);