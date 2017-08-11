'use strict';

import DataTable from './components/datatable.js'

exports.install = function (Vue, options) {
    Vue.component('datatable', DataTable)
};