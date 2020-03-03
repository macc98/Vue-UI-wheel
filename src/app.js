import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './buttonGroup'
import Input from './input'
import Row from './row'
import Col from './col'

Vue.component('m-button', Button);
Vue.component('m-icon',Icon);
Vue.component('m-button-group',ButtonGroup);
Vue.component('m-input',Input);
Vue.component('m-row',Row);
Vue.component('m-col',Col);

new Vue({
    el: '#app',
    data:{
        loadingDemo:false,
        inputMessage: '',
        buttonData:`            
        <m-button>按钮</m-button>
        <m-button icon="setting" icon-position="right">按钮</m-button>
        <m-button icon="setting" :loading="loadingDemo" @click="loadingDemo = true">按钮</m-button>

        <m-button-group>
            <m-button icon="left">上一页</m-button>
            <m-button>目录</m-button>
            <m-button icon="right" icon-position="right">下一页</m-button>
        </m-button-group>`,
        inputData: `
        <m-input v-model="inputMessage"></m-input>
        <button @click="inputMessage += '1'">+1</button>
         {{inputMessage}}
        <m-input value="测试汉字2" disabled></m-input>
        <m-input value="测试汉字3" readonly></m-input>
        <m-input value="测试汉字4" error="错啦"></m-input>
        <m-input value="测试汉字5" info="对啦"></m-input>`,
        gridData:`    
        <m-row gutter="10">
            <m-col span="8"><div class="gridDemos"></div></m-col>
            <m-col span="8"><div class="gridDemos"></div></m-col>
            <m-col span="8"><div class="gridDemos"></div></m-col>
        </m-row>
        <m-row gutter="10">
            <m-col span="6"><div class="gridDemos"></div></m-col>
            <m-col span="6"><div class="gridDemos"></div></m-col>
            <m-col span="6" offset="6"><div class="gridDemos"></div></m-col>
        </m-row>
        <m-row gutter="10">
            <m-col span="6"><div class="gridDemos"></div></m-col>
            <m-col span="10"><div class="gridDemos"></div></m-col>
            <m-col span="6"><div class="gridDemos"></div></m-col>
            <m-col span="4"><div class="gridDemos"></div></m-col>
        </m-row>`
    }
});
