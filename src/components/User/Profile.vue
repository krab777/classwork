<template>
    <div id="user-profile"> <!--Обязательный корневой элемент-->
       <!--  <h1>User Profile</h1>
        <p><strong>Name</strong> {{ user.name }}</p>
        <p><strong>Surname</strong> {{ user.surname }}</p>

        <h3>About Me</h3>
        <p>{{ user.aboutMe | readMore(100, '...') }}</p>

        <div v-if="!showForm">
            <button @click="showForm = !showForm">Edit</button>
        </div>
        <div v-else>
            <profile-form :user="user" @save-user="saveUser($event)" @cancel="showForm = false"></profile-form>
        </div> -->

        <div><b>Id of user:</b> {{ id }}</div>
        <!-- <div>Name of user {{ name }}</div> -->
        <div><b>Email of user:</b> {{ email }}</div>

        <!-- <h4><strong>{{ $route.query.friend }}</strong></h4> -->

        <button @click="back" class="bg-blue-500">Back</button>
    </div>
</template>

<script>
    // import ProfileForm from "./ProfileForm";

    export default {
        // components: {ProfileForm},
        name: "Profile",
        data() {
            return {
                // showForm: false
                id: this.$route.params['id']
            }
        },
        methods: {
            back() {
                this.$router.push('/users')
            }
        },
        filters: {
            readMore(text, length, suffix) {
                return text.substring(0, length) + suffix;
            }
        },
        watch: {
            $route(to) {
                this.$router.push('/user')
                this.id = to.params['id']
            }
        },
        computed: {
            email() {
                return this.$store.getters.getUserEmail(this.id)
            }
        }
    }
</script>

<style scoped>

</style>