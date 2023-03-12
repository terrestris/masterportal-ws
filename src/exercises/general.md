# Allgemeine Konfiguration


**Aufg. 1:** Ändern Sie das Logo der Anwendung in folgendes Bild um: `https://www.fossgis.de/logos/FOSSGIS@2x.png`. Ändern Sie den Titel des Portals zu `FOSSGIS Testportal` und wählen Sie geeignete Werte für `Link` und `Tooltip`.


<!--sec data-title="Hint" data-id="section1hint" data-show=true  data-collapse=true ces-->

Schauen Sie in der `config.json.md` nach `Portalconfig.portalTitle`!

<!--endsec-->

<!--sec data-title="Lösung" data-id="section1solution" data-show=true  data-collapse=true ces-->

Definieren Sie in der `config.json` im Block `Portalconfig` den folgenden Block:

```json
    "portalTitle": {
        "title": "FOSSGIS Testportal",
        "logo": "https://www.fossgis.de/logos/FOSSGIS@2x.png",
        "link": "https://www.fossgis.de",
        "toolTip": "FOSSGIS Logo"
    }
```

<!--endsec-->

**Aufg. 2:** Ändern Sie den Titel der Webseite (taucht oben in der Browser Leiste auf).

<!--sec data-title="Hint" data-id="section2hint" data-show=true  data-collapse=true ces-->

Werfen Sie einen Blick in die `index.html` im Portalordner `basic`. Es gibt einen <title> Tag.

<!--endsec-->

<!--sec data-title="Lösung" data-id="section2solution" data-show=true  data-collapse=true ces-->

Passen Sie die Zeile 10 in der `index.html` an:

```html

<title>FOSSGIS Portal</title> <!-- enter your own Portal Title for the website at this -->

```

<!--endsec-->

**Aufg. 3:** Konfigurieren Sie die Definition für das projizierte Koordinatensystem UTM für die Zone 33N.
Dies soll standardmäßig genutzt werden, wenn das Portal aufgerufen wird.

<!--sec data-title="Hint" data-id="section3hint" data-show=true  data-collapse=true ces-->

Werfen Sie einen Blick in die `config.js` im Portalordner `basic`. Was steht im Block `namedProjections`?

<!--endsec-->

<!--sec data-title="Lösung" data-id="section3solution" data-show=true  data-collapse=true ces-->

Wir benötigen die proj.4 Defintion von UTM 33N. Diese kann mittels QGIS oder hier herausgefunden werden: https://epsg.io/25833.  
Anschließend folgendes Element im `Array` (Liste) namedProjection hinzufügen (Komma nach dem ersten Listenelement nicht vergessen!):

```js
["EPSG:25833", "+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"]
```

Dann muss in der `config.json` im Block `mapView` der Wert `epsg` auf `ESPG:25833` gesetzt werden.

Zuletzt müssen noch die Startkoordinate und der Extent angepasst werden:

```js
      "startCenter": [
        389932,
        5819658
      ],
      "extent": [
        369149,
        5806271,
        411602,
        5838442
      ],
```

<!--endsec-->

😳 Die Karte bleibt grau! Woran kann das liegen?
