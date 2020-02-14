<template>
    <div id="home" class="bg-green-400">
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
               
            }
        },
        computed: {
            title() {
                // return this.$store.state.title
                return this.$store.getters.title

            }
        },
        created() {
            
        }
    }
</script>

<style scoped>

</style>