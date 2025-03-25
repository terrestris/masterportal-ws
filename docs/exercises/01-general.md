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

</details>
