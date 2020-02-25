<template>
    <div class="m-button-group">
        <slot></slot>
    </div>
</template>
<script>
    export default {}
</script>
<style lang="scss">
    .m-button-group{
        display: inline-flex;
        vertical-align: middle;
        border-radius: var(--border-radius);
        & .m-button{
            border-radius: 0;
            margin-left: -1px;
            &:first-child{
                border-radius:var(--border-radius) 0 0 var(--border-radius) ;
            }
            &:last-child{
                border-radius: 0 var(--border-radius) var(--border-radius) 0;
            }
            &:hover{
                z-index: 1;
            }
        }
    }
</style>