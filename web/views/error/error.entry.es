/**
 * Created by mason on 2016/7/30.
 */
import Vue from 'vue';
var vm = new Vue({
    el: '#app',
    data: {
        msg: 'Hello JSX'
    },
    methods: {
        hello() {
            alert('Hello Vue 2.0')
        }
    }
});