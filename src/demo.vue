<template>
    <div class="app">
        <div class="btWrap">
            <m-button>按钮</m-button>
            <m-button icon="setting" icon-position="right">按钮</m-button>
            <m-button icon="setting" :loading="loadingDemo" @click="loadingDemo = true">按钮</m-button>

            <m-button-group>
                <m-button icon="left">上一页</m-button>
                <m-button>目录</m-button>
                <m-button icon="right" icon-position="right">下一页</m-button>
            </m-button-group>
            <pre>
              {{buttonData}}
            </pre>
        </div>

        <div class="inpWrap">
            <m-input v-model="inputMessage"></m-input>
            <m-button @click="inputMessage += '1'">+1</m-button>
            {{inputMessage}}
            <m-input value="测试汉字2" disabled></m-input>
            <m-input value="测试汉字3" readonly></m-input>
            <m-input value="测试汉字4" error="错啦"></m-input>
            <m-input value="测试汉字5" info="对啦"></m-input>
            <pre>
              {{inputData}}
       </pre>
        </div>

        <div class="gridWrap">
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
            </m-row>
            <pre>
              {{gridData}}
       </pre>
    </div>
    </div>
</template>
<script>

    export default {
        data() {
            return  {
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

        }
    }
</script>
<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }
    .app{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .gridWrap{
        width: 100vw;
    }
    .gridDemos{
        height: 30px;
        background: powderblue;
        border-radius: 4px;
        border: 1px solid;
    }
    pre{
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>