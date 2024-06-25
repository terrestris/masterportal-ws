# Dokumentation

Die Dokumentation für die Administration und Konfiguration des Masterportals ist in Markdown geschrieben (Ordner `doc`).  

## Markdown nach HTML (docs "bauen")

1. Im Masterportal repo `npm run buildMdDocs` aufrufen.
2. Die Markdowns werden dann in den Ordner `docHtml` geschrieben und können bequem in einem Webbrowser betrachtet werden.
3. `cd docHtml` und `python3 -m http.server` ausführen.
4. Nun werden die Docs unter http://localhost:8000 ausgeliefert. (z.B. http://localhost:8000/config.json.html)

## Alternativen

- https://www.masterportal.org/dokumentation
- https://bitbucket.org/geowerkstatt-hamburg/masterportal/src/latest/
- Oder mit einem Editor (z.B. Visual Studio Code) die Markdowns rendern (Strg+Shift+v)
