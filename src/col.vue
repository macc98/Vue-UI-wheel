<template>
    <div class="col" :class="[span && `col-${span}` , offset && `offset-${offset}`]"
         :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}">
        <div style="border: 1px solid red;height: 50px;">
            <slot></slot>
        </div>

    </div>
</template>
<script>
    export default {
        data(){
            return{
                gutter:0
            }
        },
        props:{
            span:{
                type:[String,Number],
            },
            offset:{
                type:[String,Number]
            },

        }
    }
</script>
<style lang="scss" scoped>

    .col{
        width:50%;

        $class: offset-;
        @for $n from 1 through 24{
            &.#{$class}#{$n}{
                margin-left: ($n/24) * 100%;
            }
        }

        $class: col-;
        @for $n from 1 through 24{
            &.#{$class}#{$n}{
                width: ($n/24) * 100%;
            }
        }
    }
</style>