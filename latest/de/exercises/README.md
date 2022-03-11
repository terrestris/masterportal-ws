# Übungsaufgaben

> :exclamation: Startpunkt ist der `basic` Branch in der Entwicklungsumgebung:  
> Im Masterportal Folder (cloned Bitbucket-Repository) muss vorher ein `npm i` ausgeführt wurden sein.
> Dann wird das Entwicklungssetup gestartet per `npm run start`.
> Das Starten dauert einige Zeit, es werden einige Warnings angezeigt, die aber getrost ignoriert werden können.  
> Sobald der Log `

**Aufg. 1** Konfigurieren Sie das Messen-Tool so, dass für das Messen der Fläche stets auch Dezimeter angezeigt werden.

<!--sec data-title="Hint" data-id="section0hint" data-show=true  data-collapse=true ces-->

Schauen Sie in der `config.json.md` nach `Portalconfig.menu.tool.measure`!

<!--endsec-->

<!--sec data-title="Lösung" data-id="section0solution" data-show=true  data-collapse=true ces-->

Ändern Sie die Konfiguration für das Messen-Werkzeug in der `config.json` wie folgt:

```json
    "measure": {
        "name": "translate#common:menu.tools.measure",
        "measurementAccuracy": "decimeter"
    }
```

**Info:** Wenn der Name mit einem `translate#` beginnt, folgt da hinter der Key in den Übersetzungsdateien `i18n`. In mehrsprachigen Modulen sollte dies immer der Fall sein, da ansonsten der Name des Tools im Portal nicht übersetzt wird.


<!--endsec-->

**Aufg. 2** Definieren Sie einen neuen WMS-Layer in der `services.json` und integrieren Sie diese der Anwendung.
- Basis-Url: `https://ows.terrestris.de/osm/service`
- Er soll initial sichtbar sein
- Kachelgröße 512x512 Pixel
- Kein `GetFeatureInfo`

<!--sec data-title="Hint" data-id="section1hint" data-show=true  data-collapse=true ces-->

Schauen Sie sich eine existierende WMS-Konfiguration an. Zum Beispiel die ID 452 (Digitale Orthophotos (belaubt) Hamburg). Kopieren Sie diesen Block und Ändern Sie die ensprechenden Parameter.
Ferner kann die Dokumentation der [services.json](https://bitbucket.org/geowerkstatt-hamburg/masterportal/src/v2.17.1/doc/services.json.md) hinzugezogen werden.

<!--endsec-->

<!--sec data-title="Lösung" data-id="section1solution" data-show=true  data-collapse=true ces-->

Eintrag in der `services.json`:

```json
    {
        "id": "1000",
        "name": "OSM WMS",
        "url": "https://ows.terrestris.de/osm/service",
        "typ": "WMS",
        "layers": "OSM-WMS",
        "format": "image/png",
        "version": "1.3.0",
        "singleTile": false,
        "transparent": false,
        "tilesize": "512",
        "minScale": "0",
        "maxScale": "1000000",
        "visibility": true,
        "gfiAttributes": "ignore"
    },
```

<!--endsec-->

Eintrag in der `config.json`

```json
"Themenconfig": {
		"Hintergrundkarten": {
			"Layer": [
        {
          "id": "1000"
        },
```


**Aufg. 3** Definieren Sie einen WMTS Layer mit der Basis-URL `https://tiles.geoservice.dlr.de/service/wmts?SERVICE=WMTS&REQUEST=GetCapabilities`. Integrieren SIe diesen in das Portal.


<!--sec data-title="Hint" data-id="section2hint" data-show=true  data-collapse=true ces-->

Werfen Sie einen erneuten Blick in die [services.json](https://bitbucket.org/geowerkstatt-hamburg/masterportal/src/v2.17.1/doc/services.json.md) Dokumentation. Es werden für den WMTS Layertyp zwei Beispiele genannt.

<!--endsec-->

<!--sec data-title="Lösung" data-id="section2solution" data-show=true  data-collapse=true ces-->

Definieren Sie den Layer wie folgt:

```json
    {
        "id": "2020",
        "name": "EOC Basemap",
        "capabilitiesUrl": "https://tiles.geoservice.dlr.de/service/wmts?SERVICE=WMTS&REQUEST=GetCapabilities",
        "typ": "WMTS",
        "layers": "eoc:basemap",
        "optionsFromCapabilities": true
    },
```

Fügen Sie anschließend die ID in die Themenkonfiguration ein (siehe Aufg. 2).

<!--endsec-->

**Aufg. 4** Ändern Sie das Logo der Anwendung in folgendes Bild um: `https://www.fossgis.de/logos/FOSSGIS@2x.png`


<!--sec data-title="Hint" data-id="section3hint" data-show=true  data-collapse=true ces-->

Schauen Sie in der `config.json.md` nach `Portalconfig.portalTitle`!

<!--endsec-->

<!--sec data-title="Lösung" data-id="section3solution" data-show=true  data-collapse=true ces-->

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

**Aufg. 5** Ändern Sie den Titel der Webseite (taucht oben in der Browser Leiste auf).

<!--sec data-title="Hint" data-id="section4hint" data-show=true  data-collapse=true ces-->

Werfen Sie einen Blick in die `index.html` im Portalordner `basic`. Es gibt einen <title> Tag.

<!--endsec-->

<!--sec data-title="Lösung" data-id="section4solution" data-show=true  data-collapse=true ces-->

Passen Sie die Zeile 10 in der `index.html` an:

```html

<title>FOSSGIS Portal</title> <!-- enter your own Portal Title for the website at this -->

```

<!--endsec-->

**Aufg. 6** Fügen Sie die Map-Control `Overview Map` dem Portal hinzu. Dies soll initial eingeblendet sein. Wählen Sie den Layer aus Aufgabe 1 für die Overview Map aus.

<!--sec data-title="Hint" data-id="section5hint" data-show=true  data-collapse=true ces-->

Schauen Sie in der `config.json.md` nach `Portalconfig.controls.overviewMap`!

<!--endsec-->

<!--sec data-title="Lösung" data-id="section5solution" data-show=true  data-collapse=true ces-->

Ändern Sie die Konfiguration für die `overviewMap` Control folgendermaßen:

```json
    "overviewMap": {
        "layerId": "1000",
        "isInitOpen": true
    }
```

<!--endsec-->
