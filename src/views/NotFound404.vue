<template>
    <div>
        <h1>404</h1>
        <h3>This page is NotFound！</h3>
        <b-button @click="GoBack">Go Back</b-button>
    </div>
</template>

<script>

export default {
    methods: {
        GoBack: function () {
            this.$router.push({
                name: 'Home'
            })
        }
    }
};
    
</script>

<style lang="scss">

</style>