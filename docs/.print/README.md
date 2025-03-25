# Print 🖨️

Im Masterportal können [MapFish Print](https://mapfish.github.io/mapfish-print-doc/index.html) Servlets angebunden werden. MapFish Print ist eine etablierte JAVA-Software zum Erstellen von Map-Reports. Es werden Jasper Reports Templates unterstützt, hierzu gibt es einen GUI-Editor: [Link zur Community Edition](https://community.jaspersoft.com/files/file/41-jaspersoft-community-edition/).

## Features

- Druck von Raster- und Vektorkarten
- Nordpfeil
- Maßstabsleiste
- Koordinatengitter
- Legendendruck
- Tabellendruck
- Grafiken in Bildern
- Hinzufügen freier Layoutlemente (Boxen, Schriftzüge etc.)
- ...
💁‍♂️ [Beispielkonfigurationen](https://github.com/mapfish/mapfish-print/tree/master/examples/src/test/resources/examples)

## Installation des Print Servlets

- Download des WAR-Files, Serve via Tomcat oder Jetty
- Docker: [Offizelles Image mit vielen Konfigurationsparamtern](https://mapfish.github.io/mapfish-print-doc/docker.html)

### Minimal Beispiel Mapfish Print Docker Service

**Voraussetzung:** Print Templates

**Quickstart:** 
```
docker run --rm --name "mapfish-print" -p 8080:8080 -v `pwd`/print_templates/default:/usr/local/tomcat/webapps/ROOT/print-apps/ camptocamp/mapfish_print:3.30
```

**Erläuterung des Befehls:**  

- Es wird ein neuer Container mit den Namen `mapfish-print` (`--name`) auf Basis des Images `camptocamp/mapfish_print:3.30` gestartet.
- Der Port 8080 des Containers wird auf den lokalen Port 8080 gemappt (`-p`)
- Der Container wird beim Beenden automatisch entfernt entfernt (`--rm`).
- Es wird das Verzeichnis `print_templates/default` im aktellen Pfad gemounted (`-v`). Dies wird im Container in den Pfad `/usr/local/tomcat/webapps/ROOT/print-apps` gemounted.

**Service in einem docker compose File:**
```yaml
  print:
    image: camptocamp/mapfish_print:3.30
    container_name: print
    volumes:
      - ./print_templates/default:/usr/local/tomcat/webapps/ROOT/print-apps:Z
    ports:
      - 8080:8080
```

## Konfiguration MapFish Print

1. Ein MapFish Print Servlet kann mehrere Print Apps haben. In den meisten Fällen reicht eine Print App, diese wird standardmäßig `default` genannt.
2. In der Printapp befindet sich die Konfigurationsdatei config.yaml, diese kann auch eine JSON Datei sein.
3. In der config.yaml werden verschiedene Templates konfiguriert, z.B. für DIN A4 Querformat oder DINA4 Hochformat:

```yaml
templates:
  A4 Querformat: !template
    reportTemplate: a4_landscape.jrxml
    attributes:
      title: !string
        default: "Countries"
      map: !map
        maxDpi: 400
        width: 786
        height: 539
        zoomLevels: !zoomLevels
          scales: [250, 500, 1000, 2500, 5000, 10000, 25000, 50000, 100000]
      northArrowDef: !northArrow
        size: 25
        default:
          backgroundColor: "rgba(214, 214, 214, 0)"
      scalebar: !scalebar
        width: 195
        height: 20
        createSubReport: true
        default:
          backgroundColor: "rgba(214, 214, 214, 0)"
          align: "center"
          barBgColor: "rgba(255, 255, 255, 255)"
          fontSize: 7
          barSize: 3
          color: "rgba(0, 0, 0, 255)"
          geodetic: false
          intervals: 4
          lineWidth: 1
          unit: "m"
      showLegend: !boolean
        default: false
      legend: !jsonDatasource {}
    processors:
      - !reportBuilder
        directory: "."
      - !createMap {}
      - !createNorthArrow
        inputMapper:
          northArrowDef: northArrow
      - !createScalebar {}
```

4. Der Key `reportTemplate` verweist auf ein konkretes Template, z.B. `a4_portrait.jrxml`. Diese liegt in diesem Fall imselben Ordner wie die `config.yaml`.
5. Darüber hinaus können hier Geodaten abgelegt werden, die für Testdrucke genutzt werden können (ausführbar auf der Startseite bzw. Landingpage des Druck-Servlets).
6. Schriftarten und weitere Assets, wie etwa Grafiken für Logos, können in Unterordnern oder auch direkt auf der Ebene der Templates ablegt werden.

## Defintion eines Druck Templates

Die Templates sind in `jrxml` verfasst und können wie jedes XML mit jedem Texteditor editiert werden. Eine Software mit GUI zur Verwaltung und Bearbeitung der Templates kann als Community-Edition heruntergeladen weden: [Link zur Community Edition](https://community.jaspersoft.com/files/file/41-jaspersoft-community-edition/).

Aus Zeitgründen wird in diesem Workshop nicht genauer auf die Templates eingegangen.  
📪 Meldet euch gern bei den Workshop-Leitern, wenn ihr mehr Infos oder generell mehr Input hierzu benötigt.

## Konfiguration im Masterportal

### rest-services.json

```json
  {
    "id": "print",
    "name": "Print Service Test",
    "url": "http://localhost:8080/print/",
    "typ": "Print"
  }
```

### config.json

```json
    "print": {
    "name": "translate#common:menu.tools.print",
    "printServiceId": "print",
    "printAppId": "default",
    "filename": "Süderbrarup Ausdruck ${dd-MM-yyyy-HH-ss}",
    "title": "Mein Titel",
    "onlyDesktop": false
    }
```

**Vollständige Konfigurationsparameter** (`doc/config.json.md`):

|Name|Required|Type|Default|Description|Expert|
|----|--------|----|-------|-----------|------|
|mapfishServiceId|yes|String||_Deprecated in 3.0.0._ Print service id. Resolved using the **[rest-services.json](rest-services.json.md)** file.|false|
|printServiceId|yes|String||Print service id. Resolved using the **[rest-services.json](rest-services.json.md)** file.|false|
|printService|no|String|"mapfish"|Flag determining which print service is in use. `plotservice` activates the *High Resolution PlotService*, if the parameter is not set, *Mapfish 3* is used.|false|
|printAppCapabilities|no|String|"capabilities.json"|path for the configuration of the print service|false|
|currentLayoutName|no|String|""|Defines which layout is the default layout on opening the print tool, e.g. "A4 portrait format". If the given layout is not available oder none is provided, the first layout mentioned in the Capabilities is used.|false|
|printAppId|no|String|"master"|Print service print app id. This tells the print service which template(s) to use.|false|
|filename|no|String|"report"|Print result file name.|false|
|title|no|String|"PrintResult"|Document title appearing as header.|false|
|titleLength|no|Number|45|The length of the title characters.|false|
|isLegendSelected|no|Boolean|false|Defines whether a checkbox to print the legend is offered. Only used for print services supporting legend printing (Mapfish Print 3).|false|
|legendText|no|String|"Mit Legende"|Descriptive text for the legend print checkbox.|false|
|dpiForPdf|no|Number|200|DPI resolution for the map in the PDF file.|false|
|capabilitiesFilter|no|**[capabilitiesFilter](#markdown-header-portalconfigmenutoolprintcapabilitiesfilter)**||Filter for the response of the configured print service. Possible keys are layouts and outputFormats.|false|
|defaultCapabilitiesFilter|no|**[capabilitiesFilter](#markdown-header-portalconfigmenutoolprintcapabilitiesfilter)**||If there is no key set in capabilitiesFilter, the key from this object is taken.|false|
|useProxy|no|Boolean|false|_Deprecated in the next major release. [GDI-DE](https://www.gdi-de.org/en) recommends setting CORS headers on the required services instead of using proxies._ Defines whether a service URL should be requested via proxy. For this, dots in the URL are replaced with underscores.|false|
|printMapMarker|no|Boolean|false|If set to true, map markers visible in the print image section will be printed. They may obstruct the view to interesting information.|false|
|overviewmapLayerId|no|String||Allows using a different layer for the overview map element. If no Id is specified, the first layer of the selected baselayer maps is used.|false|
|layoutOrder|no|String[]||Defines the order in which the layouts should be shown in the dropdown. Only to be used in combination with the print service 'plotservice'.|false|
|isPrintDrawnGeoms|no|Boolean|false|Flag if it's possible to print geometries created by the Draw or Measure tool. Only to be used in combination with the print service 'plotservice'.|false|
|showInvisibleLayerInfo|no|Boolean|true|Defines whether an infobox is shown when layers will not be printed because they are invisible due to scale.|false|
