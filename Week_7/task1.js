// Vue.component('component1', {
//     template: '<div> This is component 1</div>',
// });

// Vue.component('component2', {
//     template: '<div>{{message}}</div>',
//     data: function () {
//         return {
//             message: 'This is component 2 as a function'
//         };
//     },
// });
Vue.component('global', {
    template: '<div>This is a global component</div>',
});
var component1 = {
    template: '<div><global></global>I have placed the global component in component 1</div>',
};

var component2 = {
    template: '<div><component1></component1> I have placed component 1, which contains the global component into component 2</div>',
};

var app = new Vue({
    el: '#app',
    data: {
        text: 'hello world',
    },
    components: {
        component1,
        component2,
    },
});