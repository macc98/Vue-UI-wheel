import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './buttonGroup'
import Input from './input'
import Row from './row'
import Col from './col'
import Demo from './demo'

Vue.component('m-button', Button);
Vue.component('m-icon',Icon);
Vue.component('m-button-group',ButtonGroup);
Vue.component('m-input',Input);
Vue.component('m-row',Row);
Vue.component('m-col',Col);
Vue.component('m-demo',Demo);

new Vue({
    el: '#app',

});
