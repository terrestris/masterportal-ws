# Übungsaufgaben Addon

**Aufgabe 1:** Integrieren Sie das `SimpleLineChart` Addon in ihr Dev-Setup. Der erste Schritt ist der [Download des Addon-Codes](https://github.com/terrestris/masterportal-addons/tree/main/simpleLineChart). Dieser muss in den Ordner `addons` kopiert werden (`addons/simleLineChart`). Starten Sie anschließend das Dev Setup neu, damit das Addon verfügbar ist.

**Aufgabe 2:** Definieren Sie das Addon in der `addonsConf.json`.

<detail>

<summary>Lösung</summary>

```json
{
    "simpleLineChart": {
        "type": "gfiTheme"
    }
}
```

</detail>

**Aufgabe 3:** Nehmen Sie die Konfiguration des Addons in der `config.js` vor.

<detail>

<summary>Lösung</summary>

```js
addons: ["simpleLineChart"]
```

</detail>

**Aufgabe 4:** Konfigurieren Sie einen Layer, der das custom GFI Addon verwendet:

📣  Für den DWD Geoserver muss zunächst ein Proxy eingerichtet werden:

- Erstellen sie eine `proxyconf.json` im Ordner `devsetup` mit folgenden Inhalt:

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

**Aufgabe 5:** Testen Sie das Addon, in dem Sie den Layer in der `config.json` referenzieren, im Portal anschalten und einen GFI Request auslösen.
