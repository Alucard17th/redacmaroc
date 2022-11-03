<template>
  <b-container fluid class="pl-0 pr-0 min-vh-100">
    <b-row>
      
      <b-col cols="2" class="sidebar-border">
        <b-list-group>
          <!-- <b-list-group-item :class="{ active: isActive === 1 }" @click="isActive =1"><router-link to="/all-users">Users</router-link></b-list-group-item> -->
          <b-list-group-item :class="{ active: isActive === 1 }" @click="isActive =1" to="/admin-dashboard">Dashboard</b-list-group-item>
          <b-list-group-item :class="{ active: isActive === 2 }" @click="isActive =2" to="/all-orders">Orders</b-list-group-item>
          <b-list-group-item :class="{ active: isActive === 3 }" @click="isActive =3" to="/all-tests">Tests</b-list-group-item>
        </b-list-group>
      </b-col>
      
      <b-col class="mt-3 mb-3 " cols="10"><router-view></router-view></b-col>

    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'AdminPage',
  components: {
  },
  data() {
    return {
      isActive: 1,
    }
  }
}
</script>

<style scoped>
.active a{
  color:#fff
}
.sidebar-border{
  border-right: 1px solid #dee2e6 ;
}
</style>