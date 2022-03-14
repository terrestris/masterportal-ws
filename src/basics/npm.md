# npm
[npm](http://npmjs.com) ist der Paketmanager für Node.js (eine JavaScript-Laufzeitumgebung) und die weltweit größte Software-Registry (mehr als 600k Pakete) mit ca. 3 Milliarden Downloads pro Woche.

![npm Logo](../assets/npm_logo.png)

npm kann genutzt werden, um ...

* Pakete an Anwendungen anpassen oder diese so einbinden, wie sie sind.

* Eigenständige Tools herunterladen.

* Pakete ohne Herunterladen mit npx ausführen.

* Code mit jedem npm-User teilen, überall.

* Code für bestimmte Entwickler beschränken.

* Virtuelle Teams (orgs) bilden.

* Mehrere Versionen von Code und Code-Abhängigkeiten verwalten.

* Anwendungen einfach aktualisieren, wenn der zugrunde liegende Code aktualisiert wird.

* Andere Entwickler finden, die an ähnlichen Problemen arbeiten.


### package.json

Der Befehl `npm init` in Ihrem Projektordner öffnet einen interaktiven Dialog zur Erstellung eines npm-Projekts. Das Ergebnis ist die `package.json` mit allen wichtigen Einstellungen, Skripten und Abhängigkeiten Ihres Projekts.
```
{
  "name": "name_of_your_package",
  "version": "1.0.0",
  "description": "This is just a test",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "http://github.com/yourname/name_of_your_package.git"
  },
  "author": "your_name",
  "license": "ISC"
}
```

Weitere Infos hier: [npm docs](https://docs.npmjs.com/).

### Installieren von packages mittels npm

Der einfachste Weg, neue Pakete zu intallieren, ist die Nutzung der [CLI](https://docs.npmjs.com/cli/npm):

`npm install packagename`

Das installierte Paket ist anschließend im Subfolder `node_modules` zu finden.

# Node version manager NVM
* bash script um mehrere node Versionen zu verwalten
* Siehe [hier](https://github.com/creationix/nvm)

```
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
nvm i v8
```
