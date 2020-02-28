<template>
    <div class="m-button-group">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:'MButtonGroup',
        mounted() {
            for (let node of this.$el.children) {
                let name = node.nodeName.toLowerCase()
                if (name !== 'button') {
                    console.log(`m-button-group的子元素应该是m-button，当前:${name}`)
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .m-button-group {
        display: inline-flex;
        vertical-align: middle;

        > .m-button {
            border-radius: 0;

            &:not(:first-child) {
                margin-left: -1px;
            }

            &:first-child {
                border-radius: var(--border-radius) 0 0 var(--border-radius);
            }

            &:last-child {
                border-radius: 0 var(--border-radius) var(--border-radius) 0;
            }

            &:hover {
                z-index: 1;
            }
        }
    }
</style>