# Übungsaufgaben Druck

**Aufgabe 1:** Starten Sie nach Anleitung vorheriger Folie einen lokalen Mapfish Print Server als Docker Container. Mounten Sie eine vorbereitete Print-App von terrestris: https://github.com/terrestris/masterportal-ws/print_templates

**Aufgabe 2:** Starten Sie ihr Dev-Setup (wenn noch nicht geschehen) und nehmen Sie eine exemplarische Konfiguration für das Druck-Template vor.

**Aufgabe 3:** Editieren Sie das Druck-Template, so dass das Logo ihrer Institution / Firma angezeigt wird.

**🍰 Bonus Aufgabe 4:**  Konfigurieren Sie einen Filter, sodass nur ein einziges Layout für das Format PDF im Druck-Tool des Masterportals erscheint.

<!--sec data-title="Hint" data-id="section4hint" data-show=true  data-collapse=true ces-->

```json
{
    "capabilitiesFilter": {
        "layouts": ["A4 Hochformat"],
        "outputFormats": ["PDF"]
    }
}
```

<!--endsec-->
