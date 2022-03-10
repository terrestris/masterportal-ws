## Repository und Entwicklungssetup

1. Öffnen Sie das Terminal und führen Sie den Befehl `pwd` aus.
2. Sie sollten sich im Pfad `/home/user` befinden.
3. Führen Sie den Befehl `git clone https://hblitza@bitbucket.org/geowerkstatt-hamburg/masterportal.git` aus, um das Masterportal Repository auf Ihre Festplatte zu kopieren. Navigieren Sie anschließend in das neue Verzeichnis per Befehl: `cd masterportal`.

Wie in vielen modernen Javascript Projekte, wird auch für das Masterportal ein [Node.js](https://github.com/nodejs/node) Framework zur Entwicklung genutzt. Mithilfe des Paketsmanager [npm](https://www.npmjs.com/) werden sämtliche Bibliotheken und Abhängigkeiten gemanaged und installiert, wie beispielsweise [webpack](https://github.com/webpack/webpack), der als *module bundler* fungiert.

Eine ausführliche Beschreibung dieser Entwicklungstools- und Frameworks würde den Rahmen dieses Workshops sprengen, die benötigsten Infos werden im Rahmen dieses Workshops gegeben. Eine kurzen Überblick über npm ist [hier](../basics/npm.md) zu finden.

1. Führen Sie `node -v`, um die installierte Version von `node` auszugeben.
2. Es wird `node` in der Version 16.13.2 für diesen Workshop benötigt.
3. Falls Sie eine ältere Version installiert haben, führen Sie folgende Schritte aus:
    1. `wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`
    2. Dies installiert den `node version manager`.
    3. `nvm install 16.3.2`
    4. `nvm use v16.13.2`
    5. Prüfen Sie nun erneut per `node -v` die `node` version.
4. Es soll auf der Version `2.17.1` gearbeitet werden, hierzu sind folgend Befehle auszuführen:
    - `git fetch origin`
    - `git checkout v2.17.1`
5. Installieren Sie alle benötigten Abhängigkeiten des Masterportals-Projekts: `npm i`.
6. Starten Sie anschließend den Entwicklungsserver: `npm run start`.
7. Nun wird der Masterportal-Quellcode kompiliert und `webpack` erstellt den *dev build*, der anschließend im Browser unter der Adresse `localhost:9001/portal/basic` aufgerufen werden kann.