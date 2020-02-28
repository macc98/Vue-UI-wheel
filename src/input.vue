<template>
    <div class="wrap">
        <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
               :class="{'error':error,'info':info}">
        <template v-if="error">
            <Icon name="error" class="icon-error"></Icon>
            <span class="errorMessage">{{error}}</span>
        </template>
        <template v-if="info">
            <Icon name="info" class="icon-info"></Icon>
            <span class="infoMessage">{{info}}</span>
        </template>
    </div>
</template>
<script>
    import Icon from './icon'

    export default {
        name: 'MInput',
        components: {Icon},
        props: {
            value: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String
            },
            info: {
                type: String
            }
        }
    }
</script>
<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-hover-color: #666;
    $border-radius: 4px;
    $font-size: 14px;
    $box-shadow: 0px 0px 3px 0px #666;
    $background: #eee;
    $error-color: #F1453D;
    $info-color: green;
    .wrap {
        display: inline-flex;
        font-size: $font-size;
        align-items: center;

        > :not(:last-child) {
            margin-right: 0.5em;
        }

        > input {
            height: $height;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            padding: 0 8px;

            &:hover {
                border-color: $border-hover-color;
            }

            &:focus {
                outline: none;
                box-shadow: inset $box-shadow;
            }

            &[disabled], &[readonly] {
                background: $background;
                cursor: not-allowed;
            }

            &.error {
                border-color: $error-color;

                &:focus {
                    box-shadow: inset 0 0 3px 0 $error-color;
                }
            }

            &.info {
                border-color: $info-color;

                &:focus {
                    box-shadow: inset 0 0 3 0 $info-color;
                }
            }
        }

        & .icon-error {
            fill: $error-color;
            font-size: 0.8em;
        }

        & .errorMessage {
            color: $error-color;
            font-size: 0.8em;
        }

        & .icon-info {
            fill: $info-color;
            font-size: 0.8em;
        }

        & .infoMessage {
            color: $info-color;
            font-size: 0.8em;
        }

    }


</style>
