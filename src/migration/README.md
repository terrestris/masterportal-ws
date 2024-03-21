# Migration

Es wird ein Tool bereitgestellt, dass Konfigurationen von v2 nach v3 migriert.

⌚ 🚧 Der Status ist noch **Work in Progress**, es wird bis zum Release der finalen v3 Version noch angepasst.

1. Checken Sie den Tag v3.0.0-beta2 aus: `git checkout v3.0.0-beta2`.
2. Ändern Sie `node` Version auf `18.16.0`: `nvm use 18.16.0`
3. Installieren Sie die dependencies: `npm i`
4. Starten Sie das Kommandozeilen Tool mittels `npm run migrateConf`.
5. Geben Sie interaktiv den Source und Destination Path der Portalkonfiguration an.

Drawbacks: Es werden nicht alle Tools migriert, zum Teil weil diese in v3 nicht mehr verfügbar sind oder die noch nicht vom Migrationsskript abgedeckt werden
