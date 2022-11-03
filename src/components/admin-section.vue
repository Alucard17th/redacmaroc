<template>

   
        <b-container fluid class="pl-0 pr-0">
    Dashboard ADMIN
    <b-row>

      <b-col cols="2">
        <b-list-group>
          <b-list-group-item :class="{ active: isActive === 1 }" @click="isActive =1"><router-link to="/all-users">Users</router-link></b-list-group-item>
          <b-list-group-item :class="{ active: isActive === 2 }" @click="isActive =2"><router-link to="/all-orders">Orders</router-link></b-list-group-item>
          <b-list-group-item :class="{ active: isActive === 3 }" @click="isActive =3"><router-link to="/all-tests">Tests</router-link></b-list-group-item>
        </b-list-group>
      </b-col>

      <b-col cols="10"><router-view></router-view></b-col>

    </b-row>
  </b-container>
   

</template>
    
<script>

export default {
    name: 'adminSection',

    components: {

    },
    data() {
        return {

        }
    },

    computed: {

    },
    methods: {

    }
}
</script>
    
<style>

</style>