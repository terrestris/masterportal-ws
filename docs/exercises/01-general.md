# Allgemeine Konfiguration


**Aufgabe 1:** Ändern Sie den initialen Kartenausschnitt auf Münster.

<details>

<summary>Lösung</summary>

```json
"mapView": {
    "startCenter": [
        405347,5757331
    ],
    "extent": [
        393694,5748043,421390,5769119
    ]
}
```

</details>

😳 Die Karte bleibt grau! Woran kann das liegen?

**Aufgabe 2:** Definieren Sie einen BaseLayer (z.B.: Basemap.DE).

<details>

<summary>Lösung</summary>


```json
  {
    "id": "basemap-wms",
    "typ": "WMS",
    "name": "Basemap DE",
    "url": "https://sgx.geodatenzentrum.de/wms_basemapde",
    "layers": "de_basemapde_web_raster_farbe",
    "isBaseLayer": true,
    "format": "image/png",
    "version": "1.3.0",
    "singleTile": false,
    "tilesize": 512,
    "transparent": true,
    "transparency": 0,
    "gfiAttributes": "ignore",
    "gfiTheme": "default",
    "legend": true
  },
```

</details>

**Aufgabe 3:** Binden Sie einen WFS Layer ein, der die Krankenhäuser in Münster darstellt.

<details>

<summary>Lösung</summary>

```json
  {
    "id": "hospital",
    "url": "https://www.stadt-muenster.de/ows/mapserv706/poiserv",
    "name": "Krankenhäuser",
    "typ": "WFS",
    "featureType": "krankenhaeuser",
    "version": "2.0.0",
    "featureNS": "http://mapserver.gis.umn.edu/mapserver",
    "featurePrefix": "ms",
    "gfiAttributes": "showAll",
    "layerAttribution": "nicht vorhanden",
    "searchField": "NAME"
  },
```

</details>

**Aufgabe 4:** Legen Sie den Stil fest für den WFS Layer (Krankenhaus Icons).

<details>

<summary>Hinweis</summary>

Schauen Sie in der `style_v3.json` nach einem Stil der den Begriff `krankenhaus` enthält!

</details>

<details>

<summary>Lösung</summary>

```json
  {
    "id": "hospital",
    "url": "https://www.stadt-muenster.de/ows/mapserv706/poiserv",
    "name": "Krankenhäuser",
    "typ": "WFS",
    "featureType": "krankenhaeuser",
    "version": "2.0.0",
    "featureNS": "http://mapserver.gis.umn.edu/mapserver",
    "featurePrefix": "ms",
    "gfiAttributes": "showAll",
    "layerAttribution": "nicht vorhanden",
    "searchField": "NAME",
    "styleId": "1711"
  },
```

Falls der Stil nicht in der `style_v3.json` zu finden ist:

```json
  {
    "styleId": "1711",
    "rules": [
      {
        "style": {
          "type": "icon",
          "clusterType": "icon",
          "imageName": "krankenhaus.png",
          "imageScale": 0.7,
          "clusterImageName": "krankenhaus.png",
          "clusterTextOffsetX": 30,
          "clusterTextOffsetY": 0,
          "clusterTextFillColor": [
            0,
            0,
            255,
            1
          ]
        }
      }
    ]
  }
```

</details>

**Bonus:** 🎁

Erstellen Sie eine Konfiguration für den das Tool LayerSlider, um verschiedene Zeitpunkte direkt miteinander zu vergleichen.

<details>

<summary>Lösung</summary>

**Konfiguration der Layer:**

```json
{
  "id": "sentinel2-time-2018",
  "name": "Sentinel-2 Mosaik 2018",
  "url": "https://sgx.geodatenzentrum.de/wms_sentinel2_de?time=2018",
  "typ": "WMS",
  "layers": "rgb",
  "version": "1.1.0",
  "tilesize": 512
},
{
  "id": "sentinel2-time-2019",
  "name": "Sentinel-2 Mosaik 2019",
  "url": "https://sgx.geodatenzentrum.de/wms_sentinel2_de?time=2019",
  "typ": "WMS",
  "layers": "rgb",
  "version": "1.1.0",
  "tilesize": 512
}
```

**Konfiguration des Tools:**

```json
{
    "type": "layerSlider",
    "icon": "bi-hourglass-split",
    "timeInterval": 2000,
    "layerIds": [
        {
            "title": "2018",
            "layerId": "sentinel2-time-2018"
        },
        {
            "title": "2019",
            "layerId": "sentinel2-time-2019"
        }
    ]
}
```

</details>

🎁🎁 Fügen Sie weitere Zeitpunkte hinzu! DOP oder Sentinel-2 Quellen.
