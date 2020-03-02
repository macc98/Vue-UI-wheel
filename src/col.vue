<template>
    <div class="col" :class="colClass" :style="colStyle">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                gutter: 0
            }
        },
        computed: {
            colStyle() {
                let gutter = this.gutter
                return {paddingLeft: gutter / 2 + 'px', paddingRight: gutter / 2 + 'px'}
            },
            colClass() {
                let {span, offset} = this
                return [span && `col-${span}`, offset && `offset-${offset}`]
            }
        },
        props: {
            span: {
                type: [String, Number],
            },
            offset: {
                type: [String, Number]
            },

        }
    }
</script>
<style lang="scss" scoped>
    .col {
        width: 50%;
        $class: offset-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                margin-left: ($n/24) * 100%;
            }
        }

        $class: col-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                width: ($n/24) * 100%;
            }
        }
    }
</style>