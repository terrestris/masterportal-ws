# Übungsaufgaben

> :exclamation:  
> Startpunkt ist der `basic` Branch in der Entwicklungsumgebung:
> Im Masterportal Folder (cloned Bitbucket-Repository) muss vorher ein `npm i` ausgeführt wurden sein.
> Dann wird das Entwicklungssetup gestartet mit `npm run start`.
> Das Starten dauert einige Zeit, es werden einige Warnings angezeigt, die aber getrost ignoriert werden können.

**Aufg. 1** Konfigurieren Sie das Messen-Tool so, dass für das Messen der Fläche stets auch Dezimeter angezeigt werden.

<!--sec data-title="Hint" data-id="section0" data-show=true  data-collapse=true ces-->

Schauen Sie in der `config.json.md` nach `Portalconfig.menu.tool.measure`

<!--endsec-->

**Aufg. 2** Definieren Sie einen neuen WMS-Layer in der `services.json` und integrieren Sie diese der Anwendung.
- Basis-Url: `https://ows.terrestris.de/osm/service`
- Er soll initial Sichtbar sein
- Kachelgröße 512x512 Pixel
- Kein `GetFeatureInfo`

<!--sec data-title="Hint" data-id="section1" data-show=true  data-collapse=true ces-->

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

<!--endsec-->


**Aufg. 3** Definieren Sie einen WMTS Layer mit der Basis-URL `https://tiles.geoservice.dlr.de/service/wmts?SERVICE=WMTS&REQUEST=GetCapabilities`. Integrieren SIe diesen in das Portal.


<!--sec data-title="Hint" data-id="section2" data-show=true  data-collapse=true ces-->
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

<!--endsec-->


**Aufg. 4** Ändern Sie das Logo der Anwendung in folgendes Bild: `https://www.fossgis.de/logos/FOSSGIS@2x.png`

**Aufg. 5** Ändern Sie den Titel der Webseite (taucht oben in der Browser Leiste auf).

<!--sec data-title="Hint" data-id="section3" data-show=true  data-collapse=true ces-->

`index.html` --> <title>

<!--endsec-->

**Aufg. 6** Fügen Sie die Map-Control `Overview Map` dem Portal hinzu. Dies soll initial eingeblendet sein. Wählen Sie den Layer aus Aufgabe 1 für die Overview Map aus.


<!--sec data-title="Hint" data-id="section4" data-show=true  data-collapse=true ces-->
```json
{
    "overviewMap": {
        "resolution": 305.7487246381551,
        "layerId": "1000",
        "isInitOpen": true
    }
}
```
<!--endsec-->
