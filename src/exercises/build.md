# Masterportal Production-Build erstellen

**Aufg. 12:** Erstellen Sie einen `Prodcution-Build`.

`npm run build`

`Pfad zum Ordner mit Portalen ausgehend von "[...]/masterportal/":` Enter drücken.

### Was passiert hier?

- JS-Code wird transpiliert und kompiliert
- `bundle` des Quell-Codes und der `assets` (z.B. Grafiken, CSS, Übersetungsdateien)

Schauen Sie danach on den Ordner `dist/masterportalCode/2_30_0`.  
Hier landet der fertige Production-Build.

### Wozu brauche ich das?

Man kann den gebauten Code auch hier herunter laden: https://bitbucket.org/geowerkstatt-hamburg/masterportal/downloads/.  
Wenn Sie das Masterportal in einem Projekt einsetzen, das zum einen individuelle Erweiterungen hat und in dem Pipelines eingesetzt werden, kann es Vorteile haben, den `build` selbst zu erstellen. Beispielsweise können somit `Addons` hinzugefügt werden.  
