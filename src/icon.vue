<template>
    <svg  class="icon" aria-hidden="true">
        <use :xlink:href=`#i-${name}`></use>
    </svg>
</template>
<script>
    import './icon-font'
    export default {
        props:['name']
    }
</script>
<style lang="scss">
    .icon {
        height: 1em;
        width: 1em;
        margin-right: 0.3em;
    }

</style>
