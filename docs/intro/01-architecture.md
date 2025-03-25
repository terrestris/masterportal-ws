---
sidebar_position: 2
title: Architektur
---

## Paradigmen

- OpenSource (MIT)
- Standardbasiert (OGC Standards, Rest APIs)
- Modular und konfigurabel
  - 12 Daten-Schnittstellen
  - > 30 Tools
- Responsiv
- Rein clientseitig
- Gut dokumentiert für NutzerInnen und Devs: `coding conventions`, `linting`, etc.
- Nutzung weit verbreiteter und *well maintained* Bibliotheken (z.B. OpenLayers, Vue.js, Vuex)

<div class="cite">
    Motto: "Konfigurieren statt Programmieren"
</div>

--> Schlanker Core. Zentrale Funktionen in den Bibliotheken [masterportalApi](https://bitbucket.org/geowerkstatt-hamburg/masterportalapi) und [mpConfigparser](https://bitbucket.org/geowerkstatt-hamburg/mpconfigparser/src/master/). Erweiterungen durch Addons möglich.

[![Architektur](./img/core-api-addon_paths.svg)](./img/core-api-addon_paths.svg)

## Addon Typen


| Typ           | Definition in addons.conf  | Beschreibung                                                 |
|-----------------|--------------------------|--------------------------------------------------------------|
| Tools           | "type": "tool             | Neues Werkzeug im Menü                                       |
| GFI Themes      | "type": "gfiTheme"        | Custom GetFeatureInfo Theme                                  |
| Controls        | "type": "control"         | Custom Control                                               |
| Javascript      | "type": "javascript"      | Erweiterungen, die nicht als klassisches Tool geöffnet werden|
| SearchInterface | "type": "searchInterface" | Custom SuchBackend inkl. Custom Actions                      |

### Links
- https://www.masterportal.org/features/features
- https://bitbucket.org/geowerkstatt-hamburg/addons/src/dev_vue/
- https://github.com/terrestris/masterportal-addons
