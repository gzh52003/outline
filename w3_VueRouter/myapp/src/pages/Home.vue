<template>
    <div>
        Home
    </div>
</template>
<script>
export default {
    beforeDestroy(){
        console.log('beforeDestroy')
    },
    destroyed(){
        console.log('destroyed')
    }
}
</script>