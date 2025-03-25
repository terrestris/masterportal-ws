# Konfiguration von Werkzeugen

**Aufg. 7:** Konfigurieren Sie das Messen-Tool so, dass für das Messen der Fläche stets auch Dezimeter angezeigt werden. Zudem sollen nautische Seemeilen auswählbar sein.

<!--sec data-title="Hint" data-id="section7hint" data-show=true  data-collapse=true ces-->

Schauen Sie in der `config.json.md` nach `Portalconfig.menu.tool.measure`!

<!--endsec-->

<!--sec data-title="Lösung" data-id="section7solution" data-show=true  data-collapse=true ces-->

Ändern Sie die Konfiguration für das Messen-Werkzeug in der `config.json` wie folgt:

```json
    "measure": {
        "name": "translate#common:menu.tools.measure",
        "measurementAccuracy": "decimeter",
        "lineStringUnits": ["m", "km", "nm"]
    }
```

**Info:** Wenn der Name mit einem `translate#` beginnt, folgt da hinter der Key in den Übersetzungsdateien `i18n`. In mehrsprachigen Modulen sollte dies immer der Fall sein, da ansonsten der Name des Tools im Portal nicht übersetzt wird.


<!--endsec-->

**Aufg. 8:** Fügen Sie die Map-Control `Overview Map` dem Portal hinzu. Dies soll initial eingeblendet sein. Wählen Sie den Layer aus Aufgabe 1 für die Overview Map aus.

<!--sec data-title="Hint" data-id="section8hint" data-show=true  data-collapse=true ces-->

Schauen Sie in der `config.json.md` nach `Portalconfig.controls.overviewMap`!

<!--endsec-->

<!--sec data-title="Lösung" data-id="section8solution" data-show=true  data-collapse=true ces-->

Ändern Sie die Konfiguration für die `overviewMap` Control folgendermaßen:

```json
    "overviewMap": {
        "layerId": "1000",
        "isInitOpen": true
    }
```

<!--endsec-->

**Aufg. 9:** Konfigurieren Sie das Messen-Tool so, dass für das Messen der Fläche stets auch Dezimeter angezeigt werden. Zudem sollen nautische Seemeilen auswählbar sein.

<!--sec data-title="Hint" data-id="section9hint" data-show=true  data-collapse=true ces-->

Schauen Sie in der `config.json.md` nach `Portalconfig.menu.tool.measure`!

<!--endsec-->

<!--sec data-title="Lösung" data-id="section9solution" data-show=true  data-collapse=true ces-->

Ändern Sie die Konfiguration für das Messen-Werkzeug in der `config.json` wie folgt:

```json
    "measure": {
        "name": "translate#common:menu.tools.measure",
        "measurementAccuracy": "decimeter",
        "lineStringUnits": ["m", "km", "nm"]
    }
```