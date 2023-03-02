# Portalkonfiguration

## config.js

Hier werden sämtliche Konfigurationen vorgenommen, die nicht direkt auf UI-Elementen oder Layern bezogen sind:

- Pfade zu Backends und weiteren Konfigurationsdateien
- Projektionsdefinitionen im Portal
- Liste an Addons
- Proxy Einstellungen
- Footer
- mousehover

[Link zur vollständigen Dokumentation](https://bitbucket.org/geowerkstatt-hamburg/masterportal/src/6801563147d77d25faa5b798e320d15e4489a807/doc/config.js.md)

## config.json

Die `config.json` enthält die gesamte Konfiguration der Portal-Oberfläche. In ihr wird definiert, welche Elemente sich wo in der Menüleiste befinden, wo das initiale Kartenzentrum liegen soll und welche Layer geladen werden sollen. Des weiteren wird die Liste der Tools und Addons definiert und die dazugehörige Start-Konfiguration festgelegt.

### Portalconfig

* Titel & Logo (portalTitle)
* Art der Themenauswahl (treeType)
* Starteinstellungen der Kartenansicht (mapView)
* Schaltflächen auf der Kartenansicht sowie mögliche Interaktionen (controls)
* Menüeinträge sowie Vorhandenheit jeweiliger Tools und deren Reihenfolge (menu)
* Typ und Eigenschaften des genutzten Suchdienstes (searchBar)
* Löschbarkeit von Themen (layersRemovable)

Beispiel aus der `basic` Portalkonfiguration:

```json
"Portalconfig": {
    "treeType": "light",
    "searchBar": {
        "komoot": {
            "minChars": 3,
            "serviceId": "11",
            "limit": 20,
            "lang": "de",
            "lat": 53.6,
            "lon": 10.0,
            "bbox": "9.6,53.3,10.4,53.8"
        },
        "visibleVector": {
            "layerTypes": [
                "WFS"
            ]
        },
        "tree": {},
        "startZoomLevel": 9,
        "placeholder": "Suche nach: - Adresse - Aktiven WFS"
    },
    "mapView": {
        "backgroundImage": "./resources/img/backgroundCanvas.jpeg",
        "startCenter": [
            561210,
            5932600
        ],
        "extent": [
            510000.0,
            5850000.0,
            625000.4,
            6000000.0
        ],
        "startZoomLevel": 1
    },
    "menu": {
        "tree": {
            "name": "Themen"
        },
        "tools": {
            "name": "Werkzeuge",
            "children": {
                "gfi": {
                    "name": "Informationen abfragen",
                    "active": true
                },
                "coordToolkit": {
                    "name": "Koordinaten"
                },
                "measure": {
                    "name": "Strecke / Fläche messen"
                },
                "draw": {
                    "name": "Zeichnen / Schreiben"
                },
                "fileImport": {
                    "name": "Datei Import"
                },
                "saveSelection": {
                    "name": "Auswahl speichern"
                }
            }
        },
        "legend": {
            "name": "Legende"
        },
        "info": {
            "name": "Informationen",
            "children": {
                "staticlinks": [
                    {
                        "name": "Masterportal",
                        "url": "https://masterportal.org"
                    }
                ]
            }
        }
    },
    "controls": {
        "zoom": true,
        "orientation": {
            "zoomMode": "once"
        },
        "attributions": true,
        "mousePosition": true
    }
}
```

### Themenconfig

Die Themenconfig definiert, welche Inhalte an welcher Stelle im Themenbaum vorkommen.  
Die Struktur ist abhängig von der Art des Themenbaums (ob flache Hierachie oder Aufsplittung on Fach- und Hintergrundkarten).  
Zudem können mehrdimensionale Daten (Time und 3D) separat definiert werden.

Ein Minimal-Beispiel (`treetype: custom`):

```json
{
  "Themenconfig": {
    "Hintergrundkarten": {
      "Layer": [
        {
          "id": "452"
        },
        {
          "id": "432"
        }
      ]
    },
    "Fachdaten": {
      "Ordner": [
        {
          "Titel": "Fahrrad",
          "Layer": [
            {
              "id": "10882"
            }
          ]
        }
      ]
    }
  }
}
```

[Link zur vollständigen Dokumentation](https://bitbucket.org/geowerkstatt-hamburg/masterportal/src/6801563147d77d25faa5b798e320d15e4489a807/doc/config.json.md)