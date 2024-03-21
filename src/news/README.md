# Neue Features 📜 📢

Im Changelog werden detailiert sämtliche Änderungen neuer Releases gelistet. Es werden kontinuierlich Bugfixes und Sicherheitspatches bereitgstellt, zudem kommen neue Features hinzu.

[Link zum Changelog](https://bitbucket.org/geowerkstatt-hamburg/masterportal/src/dev/CHANGELOG.md)

## Neue Features der letzten Releases 🔔

- Print: An option "Improve scaling resolution" is implemented for 3d Layers to supply an improved and better resolution.
- Added translations for Sensor Theme.
- Added square as geometryType for drawingTool.
- New Parameter sldVersion for legend configuration to define a Styled Layer Descriptor for the GetLegendGraphic requests.
- possibility to keep more than one tool open at the same time
- Add additional wfs and wms layer param 'gfiThemeSettings' to provide the possibility of additional gfiTheme settings.
- New Tool 3D-Modeler has been added to draw/import 3D models into the 3D map.
- WebGL render pipeline supports now also VectorTile layers.
- Printing is now for 3d supported.
- dded new module login button that allows the user to login with an OIDC IDM. The resulting auth token is added to all service requests (can be configured).
- urls in gfiAttributes can now be custimized and shown as html tags (e.g. a, img, iframe) with custom properties

## Beispiel für einen Breaking Change
- **v2.34.0**  The Virtual City Planner tool (virtualcityPLANNER) has been removed

## Roadmap 
- Es wird derzeit viel am 3.0.0 Release gearbeitet. Erste stabile Version Mitte 2024
- Support und Bugfixes bis Ende 2024
