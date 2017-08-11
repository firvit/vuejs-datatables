import DataTable from './components/Datatable.vue'

Datatable.install = function (Vue, options) {
    Vue.component('datatable', DataTable)
};
