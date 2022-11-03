<template>
    <div class="container-fluid">
        Dashboard de l'utilisateur
        <UserDashboard></UserDashboard>
    </div>
</template>

<script>
import UserDashboard from '../../components/user/UserDashboard.vue';
export default {
    name: 'UserMainDashboard',
    components: {
        UserDashboard,
    },

}
</script>
<style scoped>

</style>