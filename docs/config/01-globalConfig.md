# Globale Konfiguration

## services.json

Dies ist die zentrale Konfiguration für sämtliche Layer (WMS, WFS, WMTS, SensorThings-API, GeoJSON and weitere)
die in dem Portal dargestellt werden sollen. Sie wird in den jeweiligen Portalkonfigurationen (`config.js`)
referenziert. Es kann auch auf einen API-Endpunkt verwiesen werden, der die `services.json` Datei generiert - etwa
über einen [UDP Manager](https://bitbucket.org/geowerkstatt-hamburg/udp-manager/src).

Jeder Layertyp benötigt unterschiedliche Parameter, wobei einige stets obligatorisch und andere optional sind. 

### WMS
Ein Beispiel für einen **WMS-Layer**:

```json
{
  "id" : "8",
  "name" : "Aerial View DOP 10",
  "url" : "https://geodienste.hamburg.de/HH_WMS_DOP10",
  "typ" : "WMS",
  "layers" : "1",
  "format" : "image/jpeg",
  "version" : "1.3.0",
  "singleTile" : false,
  "transparent" : true,
  "tilesize" : "512",
  "gutter" : "0",
  "minScale" : "0",
  "maxScale" : "1000000",
  "gfiAttributes" : "ignore",
  "layerAttribution" : "nicht vorhanden",
  "legend" : false,
  "layerSequence": 1,
  "datasets": [
    {
      "md_id": "25DB0242-D6A3-48E2-BAE4-359FB28491BA",
      "rs_id": "HMDK/25DB0242-D6A3-48E2-BAE4-359FB28491BA",
      "md_name": "Digitale Orthophotos 10cm - FHHNET",
      "bbox": "461468.97,5916367.23,587010.91,5980347.76",
      "kategorie_opendata": [
        "Sonstiges"
      ],
      "kategorie_inspire": [
        "nicht INSPIRE-identifiziert"
      ],
      "kategorie_organisation": "Landesbetrieb Geoinformation und Vermessung"
    }
  ]
}
```

Hier sind zahlreiche Parameter angegeben, die den Layer optimal definieren. Beispielsweise bewirkt
die `gfiAttributes: false` Parametereinstellung, dass keine Sachdatenabfrage (GetFeatureInfo)
ausgeführt wird. `tilesize" : "512"` sorgt dafür, dass die Kacheln des WMS in einer Größe von
512x512 Pixeln abgefragt werden (default 256px).

> **Hinweis**
>
> Die Parameter bedingen sich teilweise gegenseitig bzw. sind voneinander abhängig. Bei ungewünschten Verhalten der Layer sollte die vollständige Dokumentation ausführlich studiert werden.  
> Ein Beispiel: `singleTile: true` hat zur Folge, dass der Ausschnitt als einzelne Kachel vom WMS abgefragt wird. `tileSize` hat dann natürlich keinen Effekt mehr.


### WMTS
Ein Beispiel, das nur wenige Konfigurationsparameter bedarf ist ein `WMTS`, wenn der Parameter `optionsFromCapabilities` gesetzt ist:

```json
{
  "id": "2020",
  "name": "EOC Basemap",
  "capabilitiesUrl": "https://tiles.geoservice.dlr.de/service/wmts?SERVICE=WMTS&REQUEST=GetCapabilities",
  "typ": "WMTS",
  "layers": "eoc:basemap",
  "optionsFromCapabilities": true
}
```

Hier muss berücksichtigt werden, dass die Kacheln in der Projektion des ersten TileGrid angefragt werden,
dass im Capabilities auftaucht (zumeist EPSG:3857). OpenLayers übernimmt im Client die
[Reprojektion der Kacheln](https://openlayers.org/en/latest/examples/reprojection.html) in die aktuelle Kartenprojektion.

[Link zur vollständigen Dokumentation](https://www.masterportal.org/mkdocs/doc/v3.8.0/User/Global-Config/services.json/)


## rest-services.json

Hier werden alle Services definiert, die nicht direkt für die visuelle Darstellung von Daten benötigt werden:

* Print services (MapFish)
* Metadata sources (CSW HMDK)
* BKG geocoding service
* Gazetteer URL
* WPS
* Email Services

```json
[
  {
    "id": "1",
    "name": "CSW HMDK Summary",
    "url": "http://metaver.de/csw?service=CSW&version=2.0.2&request=GetRecordById&typeNames=csw:Record&elementsetname=summary",
    "typ": "CSW"
  },
  {
    "id": "mapfish-terrestris",
    "name": "Testserver Print",
    "url": "https://10.133.7.xx/print/",
    "typ": "Print"
  },
  {
    "id" : "11",
    "name" : "Komoot Photon Suche",
    "url" : "https://photon.komoot.io/api/?",
    "typ" : "WFS"
  },
  {
    "id" : "80002",
    "name" : "Email Service by PHP",
    "url" : "https://geoportal-hamburg.de/smtp/sendmail.php",
    "typ" : "EmailService"
  }
]
```

[Link zur vollständigen Dokumentation](https://www.masterportal.org/mkdocs/doc/v3.8.0/User/Global-Config/rest-services.json/)

## style.json

Vektordaten wie WFS und GeoJSON werden clientseitig gestyled (gegenüber WMS und WMTS, die serverseitig gestyled werden).  
Das Masterportal liest hierzu die `style.json` aus, in der x-beliebige Stile im Masterportal-eigenen Stil-Format definiert
werden. Bei der Konfiguration von Vektorlayern kann einem Layer ein bestimmter Stil zugewiesen werden, zudem können diese
Stile für dynamisch hinzugefügte Layer (während der Laufzeit) sowie für Standard-Layer, bspw. `MapMarker`, verwendet werden.

Jeder Stil beginnt mit einer `styleID` und darauffolgend mit der Definition von Stilregeln.

```json
{
  "styleId": "blue-point",
  "rules": [
    {
      "style": {
        "circleRadius" : 6,
        "circleStrokeColor": [51, 102, 255, 1],
        "circleStrokeWidth": 2,
        "circleFillColor": [51, 102, 255, 1]
      }
    }
  ]
},
```

Einer Stilregel können `conditions` hinzugefügt werden, die letztendlich attributives Styling ermöglichen:

```json
{
  "styleId": "blue-point",
  "rules": [
    {
      "conditions": {
        "properties": [
          {
            "attrName": "housenumber",
            "value": [0, 100]
          }
        ]
      },
      "style": {
        "circleRadius" : 6,
        "circleStrokeColor": [51, 102, 255, 1],
        "circleStrokeWidth": 2,
        "circleFillColor": [51, 102, 255, 1]
      }
    }
  ]
},
```

[Link zur vollständigen Beschreibung der Conditions](https://www.masterportal.org/mkdocs/doc/v3.8.0/User/Global-Config/style.json/#conditions)

[Link zur vollständigen Stil-Dokumentation](https://www.masterportal.org/mkdocs/doc/v3.8.0/User/Global-Config/style.json)
