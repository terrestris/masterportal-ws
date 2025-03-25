"use strict";(self.webpackChunkmasterportal_ws_2=self.webpackChunkmasterportal_ws_2||[]).push([[357],{4404:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"further/customConfig/README","title":"Erweiterte Konfiguration","description":"1. UseCase","source":"@site/docs/further/customConfig/README.md","sourceDirName":"further/customConfig","slug":"/further/customConfig/","permalink":"/masterportal-ws/further/customConfig/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":19,"frontMatter":{"sidebar_position":19},"sidebar":"tutorialSidebar","previous":{"title":"Weiteres","permalink":"/masterportal-ws/further/"}}');var t=r(4848),i=r(8453);const d={sidebar_position:19},l="Erweiterte Konfiguration",c={},o=[{value:"1. UseCase",id:"1-usecase",level:2},{value:"2. UseCase",id:"2-usecase",level:2}];function a(e){const n={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"erweiterte-konfiguration",children:"Erweiterte Konfiguration"})}),"\n",(0,t.jsx)(n.h2,{id:"1-usecase",children:"1. UseCase"}),"\n",(0,t.jsxs)(n.p,{children:["Ich m\xf6chte die Hauptfarben des Portals anpassen! Die Buttons sollen nicht rot, sondern blau sein - da dies besser zu unserem StyleGuide passt. ","\ud83d\udcd8"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\xdcberlegung"}),":"]}),"\n",(0,t.jsxs)(n.p,{children:["Es gibt im Ordner ",(0,t.jsx)(n.code,{children:"mastercode/2_30_0/css"})," eine ",(0,t.jsx)(n.code,{children:"masterportal.css"}),". Kann ich nicht einfach hier den Farbwert \xfcberschreiben? ","\u2753"]}),"\n",(0,t.jsxs)(n.p,{children:["\u26a0\ufe0f","  Woher wei\xdf man, welche CSS-Properties alle angepasst werden? Die css Datei > 2.500 Zeilen und > 300.000 Zeichen!"]}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\ude15"," Keine gute Idee! Bei einem Update kann sich die Datei \xe4ndern - und man muss alle Anpassungen \xfcberpr\xfcfen / erneut durchf\xfchren.."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Daher:"})}),"\n",(0,t.jsxs)(n.p,{children:["Wir passen eine zentrale Farbvariable an im Development Modus und bauen hinterher unser Portal neu! ","\ud83d\udd1d"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\xd6ffnen Sie im Code-Editor die Datei ",(0,t.jsx)(n.code,{children:"variables.scss"}),". Hier befinden sich s\xe4mtliche Farbwerte, aus denen die einzelnen Oberfl\xe4chenelemente referenziert werden (Buttons, Hintergr\xfcnde von Schaltfl\xe4chen etc.)."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Suchen sie nach dem Key ",(0,t.jsx)(n.code,{children:"$primary"})," (Tipp: Zeile 94 ","\ud83d\ude01"," )."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Passen Sie den Wert an. Zum Beispiel auf Hellblau: ",(0,t.jsx)(n.code,{children:"#0087e0"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Webpack erkennt, dass Sie eine \xc4nderung vorgenommen haben und kompiliert den Code erneut. Das Ergebnis ist sofort sichtbar unter ",(0,t.jsx)(n.code,{children:"localhost:9001/portal/basic"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\ude15"," Jetzt sind die Map-Controls blau, aber was ist mit den Tool-Buttons? Ich meine explizit das Tool Datei-Import."]}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Passen Sie die folgenden Variablen an:",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"$secondary_focus: #0087e0;"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"$accent: #0087e0;"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"$accent_hover: darken($accent, 5%);"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Betrachten Sie das Ergebnis:\n",(0,t.jsx)(n.img,{alt:"Custom Control/Button Color",src:r(5401).A+"",width:"388",height:"348"}),"\nNun ist der Footer noch blassgrau. Ich m\xf6chte diesen gerne ebenfall blau haben."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u26a0\ufe0f ",(0,t.jsx)(n.strong,{children:"Warning"}),"\n\xc4ndern Sie nicht zu viele Farbwerte.\nDie EntwicklerInnen des Masterportals und des Oberfl\xe4chen-Frameworks (Bootstrap) haben sich bei der Wahl der Farben viele Gedanken gemacht.\nEs werden auch extra barrierearme color schemes verwendet, dies sollte bedacht werden.\nEs sollte auch immer betrachtet werden, welche Farbwerte voneinander abh\xe4ngen!",(0,t.jsx)(n.br,{}),"\n","Goldene Regel: Nach jeder \xc4nderung, ausf\xfchrlich das Portal testen!"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"2-usecase",children:"2. UseCase"}),"\n",(0,t.jsxs)(n.p,{children:["Der MapMarker beim GFI ist sch\xf6n und hat einen hohen Wiedererkennungswert. Trotzdem brauche ich f\xfcr ein Spezial-Portal einen Custom-Marker Style. ","\ud83d\ude4f"," Was kann ich tun?"]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Schauen Sie in der ",(0,t.jsx)(n.code,{children:"config.js.md"})," nach dem Stichwort ",(0,t.jsx)(n.code,{children:"mapMarker"}),". Sie finden dort folgende Erl\xe4uterungen:"]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Default"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"pointStyleId"}),(0,t.jsx)(n.td,{children:"no"}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'"defaultMapMarkerPoint"'})}),(0,t.jsxs)(n.td,{children:["StyleId to refer to a ",(0,t.jsx)(n.code,{children:"style.json"})," point style. If not set, the ",(0,t.jsx)(n.code,{children:"img/mapMarker.svg"})," is used."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"polygonStyleId"}),(0,t.jsx)(n.td,{children:"no"}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'"defaultMapMarkerPolygon"'})}),(0,t.jsxs)(n.td,{children:["StyleId to refer to a ",(0,t.jsx)(n.code,{children:"style.json"})," polygon style."]})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "mapMarker": {\n    "pointStyleId": "customMapMarkerPoint",\n    "polygonStyleId": "customMapMarkerPolygon"\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Aha! ","\u261d"]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Definieren Sie in der ",(0,t.jsx)(n.code,{children:"style.json"})," einen Punkt Stil mit 3 Farbigen Kreisen:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'  {\n    "styleId": "custom-point",\n    "rules": [\n      {\n        "style":\n        {\n          "circleRadius" : 10,\n          "circleFillColor": [0, 132, 255, 1],\n          "circleStrokeColor": [255, 102, 0, 1],\n          "circleStrokeWidth": 5\n        }\n      }\n    ]\n  }\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Weisen Sie in der ",(0,t.jsx)(n.code,{children:"config.js"})," dem Property ",(0,t.jsx)(n.code,{children:"pointStyleId"})," den neuen Stil ",(0,t.jsx)(n.code,{children:"custom-point"})," zu."]}),"\n",(0,t.jsxs)(n.li,{children:["Hier muss das Dev-Setup ggf. neugestartet werden (Strg+C, dann erneut ",(0,t.jsx)(n.code,{children:"npm run start"}),"), um den Effekt zu sehen."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},5401:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/button_color-03fc6a3ae24fabde0a1a3e720a2cb4a3.png"},8453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>l});var s=r(6540);const t={},i=s.createContext(t);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);