# Übungsaufgaben Addon

**Aufgabe 1:** Integrieren Sie das `SimpleLineChart` Addon in ihr Dev-Setup. Der erste Schritt ist der [Download des Addon-Codes](https://github.com/terrestris/masterportal-addons/archive/refs/heads/main.zip). Der Ordner `simpleLineChart` muss in den Ordner `masterportal/addons` kopiert werden.

**Aufgabe 2:** Integrieren Sie das `TourGuide` Addon in ihr Dev-Setup. Hierzu muss der Ordner `tourGuide` aus dem obigen ZIP-File in den Addon Ordner extrahier werden. Starten Sie anschließend das Dev Setup neu, damit die Addons verfügbar sind.

**Aufgabe 3:** Registrieren Sie die Addons in der `addonsConf.json`.

<details>

<summary>Lösung</summary>

```json
{
    "simpleLineChart": {
        "type": "gfiTheme"
    },
    "tourGuide": {
        "type": "javascript"
    }
}
```

</details>

**Aufgabe 3:** Nehmen Sie die Konfiguration des Addons in der `config.js` vor.

<details>

<summary>Lösung</summary>

```js
addons: ["simpleLineChart", "tourGuide"]
```

</details>

**Aufgabe 4:** Konfigurieren Sie einen Layer, der das custom GFI Addon verwendet:

📣  Für den DWD Geoserver muss zunächst ein Proxy eingerichtet werden:

- Erstellen sie eine `proxyconf.json` im Ordner `devtools` mit folgenden Inhalt:

```
{
    "/dwd": {
        "target": "https://cdc.dwd.de/geoserver",
        "changeOrigin": true,
        "pathRewrite": {
            "^/dwd": ""
          }
    }
}
```
- Starten Sie den lokalen Dev-Server des Masterportals neu!  

- Anschließend kann der folgende Layer definiert werden werden:

```
  {
    "id": "obs_deu_p1m_t2m",
    "name": "Lufttemperatur Monatsmittel",
    "url": "https://cdc.dwd.de/geoserver/ows",
    "layers": "OBS_DEU_P1M_T2M",
    "typ": "WMS",
    "format": "image/png",
    "version": "1.3.0",
    "singleTile": false,
    "transparent": true,
    "tilesize": 256,
    "gutter": 0,
    "gfiAttributes": "showAll",
    "layerAttribution": "nicht vorhanden",
    "legendURL": "ignore",
    "gfiTheme": {
      "name": "simpleLineChart",
      "params": {
        "wfs": {
          "url": "https://localhost:9001/dwd/ows",
          "featureType": "CDC:OBS_DEU_P1M_T2M",
          "label": "Temp. °C",
          "attributes": {
            "timestamp": "ZEITSTEMPEL",
            "value": "WERT"
          }
        }
      }
    }
  },
```

**Aufgabe 5:** Testen Sie das erste Addon, in dem Sie den Layer in der `config.json` referenzieren, im Portal anschalten und einen GFI Request auslösen. Dazu navigieren Sie rund 20km nördlich von Münster. Dort ist eine Messtation.

**Aufgabe 6:** Erstellen Sie eine exemplarische Konfiguration für das `TourGuide` Addon. Dies wird in die `config.js` Ihres Portals integriert (Auf derselben Ebene der anderen Parameter, wie z.B. `language`).

```js
    tourGuide: {
        steps: [
          {
            element: "#search-bar",
            title: "Allgemeines",
            intro: {
              de: `
                              <p>Es müssen mindestens drei Buchstaben in die Suchmaske eingegeben werden (1), um Vorschläge zu erhalten. Die "Trefferkategorie " (2) und die Anzahl der gefundenen Suchergebnisse (3) werden angezeigt. Es werden maximal fünf Vorschläge zufällig angezeigt (4), aber mehr Vorschläge werden mit "Alle anzeigen" (5) angezeigt.</p>
                              <img width="600px" src="./resources/img/tour_1.png" alt="Suche" />
                          `,
              en: `
                              <h2>General</h2>
                              <p>At least three letters must be entered in the search mask (1) in order to receive suggestions. The ‘Hit category ’ (2) and the number of search results found (3) are displayed. A maximum of five suggestions are displayed randomly (4), but more suggestions are displayed with ‘Show all’ (5).</p>
                              <img width="600px" src="./resources/img/tour_1.png" alt="Suche" />
                          `
            },
            buttons: ["next", "cancel"],
          }
        ]
      }
```

**Aufgabe 7:** Fügen Sie einen Custom Menü-Eintrag hinzu, der den TourGuide startet (z.B. im `MainMenu`).

```json
{
    "type": "customMenuElement",
    "name": "Hilfe",
    "execute":{
        "action": "TourGuide/startTour"
    }
}
```

**Aufgabe 8:** Testen Sie das TourGuide Addon und fügen Sie mindestens 2 neue Schritte hinzu. Dokumentation: https://github.com/terrestris/masterportal-addons/blob/main/tourGuide/README.md.
