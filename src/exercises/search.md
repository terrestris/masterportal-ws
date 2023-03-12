# Konfiguration der Suche

**Aufgabe 10:** Es soll eine Konfiguration für ein Gazeetteer erstellt werden. Hierfür nutzen wir die [Komoot API](https://photon.komoot.io/), die einen schnellen Zugriff auf OSM Daten ermöglicht.  

Definieren Sie zunächst folgenden Block in der `rest-services-internet.json`.

```json
{
    "id" : "1",
    "name" : "Komoot Photon Suche",
    "url" : "https://photon.komoot.io/api/?",
    "typ" : "WFS"
  },
```

Anschließend muss in der `config.json` im Block `searchbar` folgender Block definiert werden:

```json
    "searchBar": {
        "komoot": {
        "minChars": 3,
        "serviceId": "1",
        "limit": 20,
        "lang": "de",
        "lat": 52.3879,
        "lon": 13.0582,
        "bbox": "13.13, 52.27, 13.64, 52.70"
        },
        "startZoomLevel": 9,
        "placeholder": "Suche nach: - Adressen"
    },
```

Es sollen nur Straßen durchsucht werden, fügen Sie einen entsprechenden Parameter hinzu.  

<!--sec data-title="Hint" data-id="section10hint" data-show=true  data-collapse=true ces-->

Schauen Sie in der `config.json.md` im Abschnitt `Portalconfig.searchBar.komoot` nach Filterung für OSM Tags. Weiter Infos: https://github.com/komoot/photon.

<!--endsec-->

**Aufgabe 11:**

Der eingebundene WFS soll durchsuchbar sein. Hierfür soll das Attribut `zae` verwendet werden.

<!--sec data-title="Hint" data-id="section11hint" data-show=true  data-collapse=true ces-->

In der Layer-Konfiguration muss der Parameter `searchField` hinzugefügt werden.  
Falls nicht bereits vorhanden, muss noch in der `searchConfig` `visibleVector` ergänzt werden.  
⚠️ `visibleWFS` ist deprecated, ab dem nächsten Major Update wird nur noch `visibleVector` unterstützt.  

<!--endsec-->