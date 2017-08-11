Datatable.install = function (Vue, options) {
    // 2. добавление глобального объекта
    Vue.directive('datatable', {
        bind (el, binding, vnode, oldVnode) {
            console.log(el);
            console.log(binding);
            console.log(vnode);
            console.log(oldVnode);
        }
        // ...
    })
};
