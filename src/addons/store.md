## Addon Store

Im Masterportal wird der `state manager` [Vuex](https://vuex.vuejs.org/) verwendet.  
Bei komplexen Anwendungen ist es sehr hilfreich einen zentralen Store zu haben, über den sämtliche Module inkl. aller Tools und Addons kommunizieren. Wenn unser Addon Infos aus der `Map-Component` erhalten möchte, beispielsweise um einen Layer hinzuzufügen, funktioniert dies über Vuex. Ein einfaches Beispiel erfolgt im Laufe dieser Addon-Entwicklung.

- Legen Sie im Pfad addons/cogImporter einen Ordner namens `store` an.

- Legen Sie eine `index.js` mit folgendem Inhalt an:


{% label %}index.js{% endlabel %}
```js
import GenericTool from "../../../src/modules/tools/indexTools";
import composeModules from "../../../src/app-store/utils/composeModules";
import getters from "./getters";
import mutations from "./mutations";
import state from "./state";

export default composeModules([GenericTool, {
    namespaced: true,
    state,
    mutations,
    getters
}]);
```

- Legen Sie die folgenden Dateien an:

Zunächst den State des Addons:

{% label %}state.js{% endlabel %}
```js
/**
 * User type definition
 * @typedef {Object} cogImporterState
 * @property {Boolean} active if true, CogImporter will be rendered
 * @property {String} id id of the CogImporter component
 * @property {String} icon icon next to title (config-param)
 * @property {Boolean} renderToWindow if true, tool is rendered in a window, else in sidebar (config-param)
 * @property {Boolean} resizableWindow if true, window is resizable (config-param)
 * @property {Boolean} isVisibleInMenu if true, tool is selectable in menu (config-param)
 * @property {Boolean} deactivateGFI flag if tool should deactivate gfi (config-param)
 */
const state = {
    active: false,
    id: "cogImporter",
    // defaults for config.json parameters
    name: "translate#additional:modules.tools.cogImporter.title",
    icon: "bi-wrench",
    renderToWindow: true,
    resizableWindow: true,
    isVisibleInMenu: true,
    deactivateGFI: true
};

export default state;
```

Anschließend die `getters` und `mutations`:

{% label %}getters.js{% endlabel %}
```js
import {generateSimpleGetters} from ".../../../src/app-store/utils/generators";
import state from "./state";

const getters = {
    ...generateSimpleGetters(state)
};

export default getters;
```

{% label %}mutations.js{% endlabel %}
```js
import {generateSimpleMutations} from "../../../src/app-store/utils/generators";
import state from "./state";

const mutations = {
    /**
     * Creates from every state-key a setter.
     * For example, given a state object {key: value}, an object
     * {setKey:   (state, payload) => *   state[key] = payload * }
     * will be returned.
     */
    ...generateSimpleMutations(state)
};

export default mutations;
```
