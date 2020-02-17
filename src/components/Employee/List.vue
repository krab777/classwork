<template>
    <div id="List">
        <h1 class="bg-red-400">Employee list</h1>

        <h2> 1111 </h2>
          
        <ul>
          <li v-for="employ in employees" :key="employ.id">{{ employ.employee_name }}</li>
        </ul>       
    </div>
</template>

<script>
    // import {mapState} from 'vuex'
    import axios from 'axios'
    export default {
        name: "List",
        
        created() {
            this.getEpmloyer()
        },
        data() {
            return {
              employees: []
            }
        },
        methods: {
          getEpmloyer() {
            // this.$http.get('http://dummy.restapiexample.com/api/v1/employees')
            // .then(res => res.json())
            // .then(employees => {
            //      /*eslint-disable no-console*/  
            //     console.log(employees);
            //     /* eslint-enable no-console */
            //     this.employees = employees.data
            //   })              
       
            axios
              .get('http://dummy.restapiexample.com/api/v1/employees')

              .then(employees => {
                this.employees = employees.data.data
              })   
          },

          
          crateEmployee() {

          }

        },        
        computed:{
            
        }
    }
</script>

<style scoped>

</style>