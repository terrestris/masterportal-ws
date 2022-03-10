# Übersetzungsdateien

Analog zu den `i18n` Dateien im Core, gibt es für jedes Addon entsprechende `json` Dateien.

- Legen Sie einen Ordner namens `locales` im Pfad des Addons an.

- Legen Sie einen Ordner `de` an und fügen Sie folgende Datei ein:

{% label %}additional.json{% endlabel %}
```json
{
    "modules": {
        "tools": {
            "cogImporter": {
                "title": "COG Importieren",
                "addLayer": "Hinzufügen",
                "removeLayer": "Entfernen"
            }
        }
    }
}
```

- Legen Sie einen Ordner `en` an und fügen Sie folgende Datei ein:


{% label %}additional.json{% endlabel %}
```json
{
    "modules": {
        "tools": {
            "cogImporter": {
                "title": "Import COG",
                "addLayer": "Add",
                "removeLayer": "Remove"
            }
        }
    }
}
```
