<template>
    <button class="m-button" :class=`icon-${iconPosition}` @click="$emit('click')">
        <m-icon v-if="icon && !loading" :name="icon"></m-icon>
        <m-icon v-if="loading" class="loading" name="loading"></m-icon>
        <slot></slot>
    </button>
</template>
<script>
    export default {
        name: 'MButton',
        props: {
            icon: {},
            loading: {
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    return value === "left" || value === "right"
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    @keyframes spin {
        0% {
            transform: rotate(0deg)
        }
        100% {
            transform: rotate(360deg)
        }
    }

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
                margin-right: 0;
                margin-left: 0.3em;
            }
        }

        .loading {
            animation: spin 5s infinite linear;
        }
    }


</style>