<template>
    <div id="app">
        <router-link exact active-class="font-bold" to="/">Home</router-link>

        <router-link exact active-class="font-bold" to="/users">Users list</router-link>

        <router-link active-class="font-bold" to="/users/1">Users1</router-link>

        <router-link active-class="font-bold" to="/users/2">Users2</router-link>

        <router-view></router-view> 
    </div>
</template>

<script>
    import Notifier from './mixins/notifier'

    export default {
        name: 'app',
        mixins: [Notifier],
        components: {
            // HelloWorld, UserProfile, Notification
        },
        data() {
            return {
                user: {
                    name: 'John',
                    surname: 'Doe',
                    aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                }
            }
        },
        methods: {

        }
    }
</script>

<style src="./assets/css/tailwind.css">
    
</style>
