;(function () {
    import Vue from 'vue'
    import DataTable from './components/Datatable.vue'

    Datatable.config = {};
    Datatable.install = function (Vue, options) {
        Vue.component('datatable', DataTable)
    };


    if (typeof exports == "object") {
        module.exports = Datatable
    } else if (typeof define == "function" && define.amd) {
        define([], function () {
            return Datatable
        })
    } else if (window.Vue) {
        window.Datatable = Datatable
        Vue.use(Datatable)
    }
})();