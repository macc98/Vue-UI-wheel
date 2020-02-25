<template>
    <button class="m-button" :class=`icon-${iconPosition}`>
        <svg v-if="icon" class="icon" aria-hidden="true">
            <use :xlink:href=`#i-${icon}`></use>
        </svg>
        <slot></slot>
    </button>
</template>
<script>
    export default {
        props: {
            icon:{},
            iconPosition:{
                type:String,
                default:'left',
                validator(value){
                    return value==="left"||value==="right"
                }
            }
        }
    }
</script>
<style lang="scss">
    .m-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;

        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            background-color: var(--button-active-bg);
        }

        &:focus {
            outline: none;
        }

        &.icon-right {
            > .icon {
                order: 2;
                margin-right: 0em;
                margin-left: 0.3em;
            }
        }
    }

    .icon {
        height: 1em;
        width: 1em;
        margin-right: 0.3em;
    }

</style>