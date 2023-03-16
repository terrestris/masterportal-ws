# Hinzufügen neuer Layer

**Aufg. 4:** Definieren Sie einen neuen WMS-Layer in der `services.json` und integrieren Sie diese der Anwendung.
- Basis-Url: `https://sgx.geodatenzentrum.de/wms_basemapde?`
- Er soll initial sichtbar sein
- Kachelgröße 512x512 Pixel
- Kein `GetFeatureInfo`
- Legende soll angezeigt werden

<!--sec data-title="Hint" data-id="section4hint" data-show=true  data-collapse=true ces-->

Schauen Sie sich eine existierende WMS-Konfiguration an. Zum Beispiel die ID 452 (Digitale Orthophotos (belaubt) Hamburg). Kopieren Sie diesen Block und ändern Sie die ensprechenden Parameter. Einige können zunächst ausgelassen werden, z.B. `Dataset` (für Metadaten).  
Ferner kann die Dokumentation der [services.json](https://bitbucket.org/geowerkstatt-hamburg/masterportal/src/v2.17.1/doc/services.json.md) hinzugezogen werden.

<!--endsec-->

<!--sec data-title="Lösung" data-id="section4solution" data-show=true  data-collapse=true ces-->

Eintrag in der `services.json`:

```json
  {
    "id": "1000",
    "name": "basemap.de Web Raster bunt",
    "url": "https://sgx.geodatenzentrum.de/wms_basemapde",
    "typ": "WMS",
    "layers": "de_basemapde_web_raster_farbe",
    "format": "image/png",
    "version": "1.3.0",
    "singleTile": false,
    "transparent": true,
    "gfiAttributes": "ignore",
    "tilesize": "512",
    "layerAttribution": "© basemap.de / BKG 2023",
    "legend": true
},
```

Eintrag in der `config.json`

```json
"Themenconfig": {
		"Hintergrundkarten": {
			"Layer": [
        {
          "id": "1000",
          "visibility": true
        },
```

<!--endsec-->


**Aufg. 5:** Definieren Sie einen WMTS Layer mit der Basis-URL `https://tiles.geoservice.dlr.de/service/wmts?SERVICE=WMTS&REQUEST=GetCapabilities`. Integrieren Sie diesen in das Portal.


<!--sec data-title="Hint" data-id="section5hint" data-show=true  data-collapse=true ces-->

Werfen Sie einen erneuten Blick in die [services.json](https://bitbucket.org/geowerkstatt-hamburg/masterportal/src/v2.30.0/doc/services.json.md) Dokumentation. Es werden für den WMTS Layertyp zwei Beispiele genannt.

<!--endsec-->

<!--sec data-title="Lösung" data-id="section5solution" data-show=true  data-collapse=true ces-->

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

🕵🏽‍♂️ Wie bereits erwähnt unterstützt das Masterportal weitere Layerstandards wie WFS, Sensor Things API, OGC Feature API etc. Sie können jederzeit Layerkonfigurationen aus anderen Portal anschauen (z.B. https://geoportal.de). Dazu öffnen Sie vor dem Start des Portals die Dev-Tools (F12) und suchen im Netzwerktab nach `services.json`/`services-internet.json`.

**Aufg. 6:** Fügen Sie zunächst folgenden WFS layer hinzu:

```json
  {
    "id": "2000",
    "name": "ALKIS Flurstücke",
    "url": "https://fbinter.stadt-berlin.de/fb/wfs/data/senstadt/s_wfs_alkis",
    "typ": "WFS",
    "featureType": "s_wfs_alkis",
    "version": "2.0.0",
    "featureNS": "fis",
    "layerAttribution": "nicht vorhanden",
    "legend": true,
    "gfiAttributes": {
      "zae": "Zähler Flurstücksnummer",
      "nen": "Nenner Flurstücksnummer",
      "fln": "Flurnummer",
      "afl": "Amtliche Fläche",
      "gmk": "Gemarkung",
      "bezeich": "Bezeichnung",
      "fsko": "fsko",
      "namgen": "Gemeinde",
      "statusdat": "Status",
      "gdz": "Gemeindezugehörigkeit"
    },
    "minScale": "500",
    "maxScale": "5000"
    ]
  },
```

Es sollen verknüpfte Metadaten angezeigt werden.  
Nehmen Sie folgenden CSW: https://fbinter.stadt-berlin.de/fb/csw und folgende Metadaten ID: 8519978f-6fa3-39e1-9616-4e4cfb340b09. Für den Link zum Metadatenkatalog wählen sie folgende Basis-URL: https://gdi.berlin.de/geonetwork/srv/ger/catalog.search#/metadata/.

<!--sec data-title="Lösung" data-id="section6solution" data-show=true  data-collapse=true ces-->

Definieren Sie den Layer wie folgt:

```json
    {
    "datasets": [
      {
        "csw_url": "https://fbinter.stadt-berlin.de/fb/csw",
        "md_id": "8519978f-6fa3-39e1-9616-4e4cfb340b09",
        "show_doc_url": "https://gdi.berlin.de/geonetwork/srv/ger/catalog.search#/metadata/"
      }
    },
```

Fügen Sie anschließend die ID in die Themenkonfiguration ein (siehe Aufg. 2).

<!--endsec-->

Fügen Sie den Layer den Fachdaten hinzu (`config.json`).
