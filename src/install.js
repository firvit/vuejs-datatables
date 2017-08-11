'use strict';

import DataTable from './components/Datatable.vue'

exports.install = function (Vue, options) {
    Vue.component('datatable', DataTable)
};