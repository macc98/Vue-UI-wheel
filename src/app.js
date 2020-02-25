import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './buttonGroup'

Vue.component('m-button', Button)
Vue.component('m-icon',Icon)
Vue.component('m-button-group',ButtonGroup)

new Vue({
    el: '#app',
    data:{
        loading1:false
    }
})