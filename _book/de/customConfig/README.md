# Custom Konfiguration

## 1. UseCase

Ich möchte die Hauptfarben des Portals anpassen! Die Buttons sollen nicht rot, sondern blau sein - da dies besser zu unserem StyleGuide passt. :blue_book:



**Überlegung**: Es gibt im Ordner `mastercode/2_17_1/css` eine `masterportal.css`. Kann ich nicht einfach hier den Farbwert überschreiben? :question:

:warning:  Woher weiß man, welche CSS-Properties alle angepasst werden? Die css Datei > 2.500 Zeilen und > 300.000 Zeichen!

:confused: Keine gute Idee! Bei einem Update kann sich die Datei ändern - und man muss alle Anpassungen überprüfen / erneut durchführen..



**Daher:**

Wir passen eine zentrale Farbvariable an im Development Modus und bauen hinterher unser Portal neu! :top:

1. Öffnen Sie im Code-Editor die Datei `variables.scss`. Hier befinden sich sämtliche Farbwerte, aus denen die einzelnen Oberflächenelemente referenziert werden (Buttons, Hintergründe von Schaltflächen etc.).

2. Suchen sie nach dem Key `$primary` (Tipp: Zeile 24 :simple_smile:).

3. Passen Sie den Wert an. Zum Beispiel auf Hellblau: `#0087e0`.

4. Webpack erkennt, dass Sie eine Änderung vorgenommen haben und kompiliert den Code erneut. Das Ergebnis ist sofort sichtbar unter
`localhost:9001/portal/basic`.

:confused: Jetzt sind die Map-Controls blau, aber was ist mit den Tool-Buttons? Ich meine explizit das Tool Datei-Import.

5. Passen Sie die folgenden Variablen an:
`$secondary_focus: #0087e0;`
`$accent: #0087e0;`
`$accent_hover: darken($accent, 5%);`

6. Betrachten Sie das Ergebnis:
![Custom Control/Button Color](../assets/button_color.png)
Nun ist der Footer noch blassgrau. Ich möchte diesen gerne ebenfall blau haben.
7. Öffnen Sie im Code-Editor die Datei `Footer.vue` und schauen Sie sich den Style Block (ab Zeile 126) an.

**Erläuterung**: Es wird hier die `css/mixins.scss` importiert, die wiederum die `variables.scss` importiert. Sämtliche dort angegebene Variablen sind hier im Style-Block verfügbar.  
Ändern Sie den Value von `backgroundColor` auf `$primary`.

> :warning: **Warning**
> Ändern Sie nicht zu viele Farbwerte.
> Die EntwicklerInnen des Masterportals und die EntwicklerInnen der Oberflächen-Frameworks (Bootstrap) haben sich bei der Wahl der Farben viele Gedanken gemacht.  
> Es sollte auch immer betrachtet werden, welche Farbwerte voneinander abhängen!  
> Goldene Regel: Nach jeder Änderung, ausführlich das Portal testen!




## 2. UseCase

Der MapMarker beim GFI ist schön und hat einen hohen Wiedererkennungswert. Trotzdem brauche ich für ein Spezial-Portal einen Custom-Marker Style. :pray: Was kann ich tun? 

1. Schauen Sie in der `config.js.md` nach dem Stichwort `mapMarker`. Sie finden dort folgende Erläuterungen:

|Name|Required|Type|Default|Description|
|----|--------|----|-------|-----------|
|pointStyleId|no|String|`"defaultMapMarkerPoint"`|StyleId to refer to a `style.json` point style. If not set, the `img/mapMarker.svg` is used.|
|polygonStyleId|no|String|`"defaultMapMarkerPolygon"`|StyleId to refer to a `style.json` polygon style.|

**Example:**

```json
{
    "mapMarker": {
        "pointStyleId": "customMapMarkerPoint",
        "polygonStyleId": "customMapMarkerPolygon"
    }
}
```

Aha! :point_up:  

1. Definieren Sie in der `style.json` einen Punkt Stil mit 3 Farbigen Kreisen:
```json
  {
    "styleId": "custom-point",
    "rules": [
      {
        "style":
        {
          "circleRadius" : 10,
          "circleFillColor": [0, 132, 255, 1],
          "circleStrokeColor": [255, 102, 0, 1],
          "circleStrokeWidth": 5
        }
      }
    ]
  }
```
2. Weisen Sie in der `config.js` dem Property `pointStyleId` den neuen Stil `custom-point` zu.

## 3. UseCase

Ich hab auf der FOSSGIS 2022 in einigen Vorträgen vom `Cloud-Optimized-GeoTIFF` gehört und finde es interessant.  
Nun habe ich gesehen, dass [OpenLayers bereits mit dem Format umgehen kann](https://openlayers.org/en/latest/examples/cog.html). Wie bekomme ich das in mein Masterportal? :eyes:  

:fire: Über ein Addon..

