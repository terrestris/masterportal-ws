# Addons

Mittels eines Addons lässt sich die Funktionalität des Masterportals beliebig erweitern, ohne dass der **Core** verändert werden muss. Es lassen sich eigenständige `Tools` und `GfiThemes` entwickeln, die zu Beginn der Laufzeit importiert werden und fortan wie eigenständige Module funktionieren.  

Es empfiehlt sich, die  [Vue.js devtools](https://github.com/vuejs/devtools) zu installieren. Diese bieten u.a. einen Live-Zugriff auf den Store.  

Im Rahmen dieses Workshops soll ein kleines Addon entwickelt werden, das mit der `OpenLayers` Karte des Masterportals interagiert und dieser ein [Cloud Optimized GeoTIFF](https://www.cogeo.org/) hinzufügt.

Die folgenden Schritte basieren auf im wesentlichen auf den folgenden Beispielen:

* [Masterportal VueAddon](https://bitbucket.org/geowerkstatt-hamburg/masterportal/src/a84def2884cd4573b8c0bfdeeb4fc0ec76d2fe72/doc/addOnsVue.md)
* [Cloud Optimized GeoTIFF (COG)](https://openlayers.org/en/latest/examples/cog.html)


- Legen Sie im Verzeichnis `addons` die Datei `addonsConf.json` an. Diese soll den Namen des neuen Addons erhalten. Wir nennen es `COG-Importer`.  

{% label %}addonsConf.json{% endlabel %}
```json
{
  "cogImporter": {
    "type": "tool",
    "vue": true
  }
}
```

- Erstellen Sie im selben Verzeichnis einen Ordner mit dem Namen des Addons.

- Erstellen Sie eine `index.js` in diesem Verzeichnis mit folgenden Inhalt:

{% label %}index.js{% endlabel %}
```js
import CogImporterComponent from "./components/CogImporter.vue";
import Store from "./store/index";
import deLocale from "./locales/de/additional.json";
import enLocale from "./locales/en/additional.json";

export default {
    component: CogImporterComponent,
    store: Store,
    locales: {
        de: deLocale,
        en: enLocale
    }
};
```

Erstellen Sie dann einen Ordner namens `components` und erstellen Sie die folgende Datei `CogImporter.vue`:

{% label %}CogImporter.vue{% endlabel %}
```js
<script>
import ToolTemplate from "../../../src/modules/tools/ToolTemplate.vue";
import {mapGetters, mapMutations} from "vuex";
import getters from "../store/getters";
import mutations from "../store/mutations";
import GeoTIFF from 'ol/source/GeoTIFF';
import TileLayer from 'ol/layer/WebGLTile';
import mapCollection from "../../../src/core/maps/mapCollection.js";

export default {
    name: "CogImporter",
    components: {
        ToolTemplate
    },
    data () {
        return {
            cogList: [
                2016,
                2020
            ],
            cogSelected: undefined
        }
    },
    computed: {
        ...mapGetters("Tools/CogImporter", Object.keys(getters))
    },
    created () {
        this.$on("close", this.close);
    },
    methods: {
        ...mapMutations("Tools/CogImporter", Object.keys(mutations)),
        /**
         * Closes this tool window by setting active to false
         * @returns {void}
         */
        close () {
            this.setActive(false);

            // TODO replace trigger when Menu is migrated
            const model = Radio.request("ModelList", "getModelByAttributes", {id: "cogImporter"});

            if (model) {
                model.set("isActive", false);
            }
        },
        /**
         * translates the given key, checkes if the key exists and throws a console warning if not
         * @param {String} key the key to translate
         * @param {Object} [options=null] for interpolation, formating and plurals
         * @returns {String} the translation or the key itself on error
         */
        translate (key, options = null) {
            if (key === "additional:" + this.$t(key)) {
                console.warn("the key " + JSON.stringify(key) + " is unknown to the additional translation");
            }

            return this.$t(key, options);
        },
        makeStyle (year) {
            const bandNumber = year === 2020 ? 1 : 2;
            return {
                color: [
                    'interpolate',
                    ['linear'],
                    ['band', bandNumber],
                    0, [0, 0, 0, 0],
                    10, [4, 135, 29],
                    20, [137, 222, 137],
                    30, [14, 10, 214],
                    40, [229, 109, 109],
                    50, [180, 180, 77],
                    60, [231, 231, 25],
                    255, [0, 0, 0, 0]
                ],
            }
        },
        addLayer () {
            if (!this.cogSelected) {
                console.error("please");
                return;
            }
            const source = new GeoTIFF({
                            normalize: false, // keep original indices
                            sources: [
                                {
                                    url: 'https://data.mundialis.de/geodata/lulc-germany/classification_2020/classification_map_germany_2020_v02.tif',
                                },
                                {
                                    url: "https://data.mundialis.de/geodata/lulc-germany/classification_2016/classification_map_germany_2016_v0_1.tif"
                                }
                            ]
                        });
            source.on("error", function () {
                debugger
            })
            const layer = new TileLayer({
                name: "COG",
                style: this.makeStyle(this.cogSelected),
                source: source
            });
            const map = mapCollection.getMap("2D");
            map.addLayer(layer);
        },

        removeLayer () {
            const map = mapCollection.getMap("2D");
            const cogLayer = map.getAllLayers().find(layer => layer.get("name") === "COG");

            if (cogLayer) {
                map.removeLayer(cogLayer);
            }
            else {
                console.error("Cannot find COG layer.");
            }
        }
    }
};
</script>

<template lang="html">
    <ToolTemplate
        :title="$t(`additional:modules.tools.cogImporter.title`)"
        :icon="icon"
        :active="active"
        :render-to-window="renderToWindow"
        :resizable-window="resizableWindow"
        :deactivate-gfi="deactivateGFI"
        class="cog-importer"
    >
        <template
            v-if="active"
            #toolBody
        >
        <div>
            Landcover classification map of Germany<br/>
            Provided by <a href="https://mundialis.de">mundialis</a>.<br/>
            <a href="https://data.mundialis.de/geonetwork/srv/ger/catalog.search#/metadata/9246503f-6adf-460b-a31e-73a649182d07">Link metadata</a>
        </div>
            <form
                id="cog-form"
                @submit.prevent="addLayer"
            >
                <select aria-label="Select COG" v-model="cogSelected">
                    <option disabled selected value="">Please choose</option>
                    <option v-for="cog in cogList" :value="cog">
                        {{ cog }}
                    </option>
                </select>
                <input
                    type="submit"
                    :value="$t('additional:modules.tools.cogImporter.addLayer')"
                />
            </form>
            <button
                @click="removeLayer">
                {{ $t('additional:modules.tools.cogImporter.removeLayer') }}
            </button>
        </template>
    </ToolTemplate>
</template>

<style lang="scss">
</style>
```

### Vue.js Info

[Vue.js lifecycle Hooks](https://vuejs.org/guide/essentials/lifecycle.html#registering-lifecycle-hooks)
