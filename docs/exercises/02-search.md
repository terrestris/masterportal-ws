# Konfiguration der Suche 🔍

Es lassen sich verschiedene [SearchInterfaces](https://www.masterportal.org/mkdocs/doc/v3.15.2/User/Portal-Config/config.json/#portalconfigmenusearchbarsearchinterfaces) anbinden, diese lassen sich beliebig konfigurieren!

Sinnvoll ist häufig:
  - `visibleVector`
  - `topicTree`
  - `komoot` / `nominatim`
  - `specialWfs`

**Aufgabe 1:** Es sollen alle sichtbaren Vektorlayer durchsucht werden können. Man soll die Krankenhäuser in Münster anhand des Namens (Attribut: `NAME`) durchsuchen können.

<details>

<summary>Hinweis</summary>

Stichwort für die Hilfe:
- searchField (config.json / services.json)

</details>

**Aufgabe 2:** Beim Klick auf einen Suchtreffer der obigen Suche, soll auf das Ergebnis gezoomt werden und das **GetFeatureInfo** Fenster geöffnet werden.

<details>

<summary>Hinweis</summary>

Result Events: https://www.masterportal.org/mkdocs/doc/v3.15.2/User/Portal-Config/config.json/#portalconfigmenusearchbarsearchinterfacesresultevents

</details>

**Aufgabe 3:** Es soll eine Konfiguration für ein Gazeetteer erstellt werden. Hierfür nutzen wir die [Komoot API](https://photon.komoot.io/), die einen schnellen Zugriff auf OSM Daten ermöglicht.  

Definieren Sie zunächst folgenden Block in der `rest-services-internet.json` (falls nicht bereits vorhanden).

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
    "lat": 51.9,
    "lon": 7.6
    },
    "startZoomLevel": 9,
    "placeholder": "Suche nach: - Adressen"
},
```
<!-- **Aufgabe 4:** Es sollen nur Straßen durchsucht werden, fügen Sie einen entsprechenden Parameter hinzu.

<details>

<summary>Hinweis</summary>

Schauen Sie in der `config.json.md` im Abschnitt `Portalconfig.searchBar.komoot` nach Filterung für OSM Tags. Weitere Infos: https://github.com/komoot/photon.

</details> -->


## Weitere SearchInterfaces / Such Tools

### WFS Search

- eigenständiges Tool, z.B. sinnvoll für Flurstücksuchen
- WFS 2.0: `storedQuery`. [Hilfreiche Informationen](https://www.weichand.de/2011/11/30/wfs-2-0-abfragen-queries/)
- siehe Rechtes Menü auf https://geoportal.meckenheim.de

### ElasticSearch

- Backend notwendig
- Sehr performante **indizierte** Suche
- Anwendungsfälle: Mehrere Suchtöpfe, deren Ergebnisse zeitgleich kommen sollen (Scoring möglich)

### SpecialWFS

- WFS Suche mit der zentralen Searchbar (kein eigenständiges Tool)
- Vorteil: Der zu durchsuchende Layer muss nicht im Layerbaum sein.
