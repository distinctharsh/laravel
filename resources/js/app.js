require('./bootstrap');

import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify);
import FirstVue from './components/FirstVue.vue';

new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    components: {
        FirstVue,
    },
})
export default app;