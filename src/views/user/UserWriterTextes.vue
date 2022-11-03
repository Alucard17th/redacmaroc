<template>
    <div class="container-fluid">
        Dashboard de l'utilisateur
        <UserTextes></UserTextes>
    </div>
</template>

<script>
import UserTextes from '../../components/user/UserTextes.vue';
export default {
    name: 'UserOrders',
    components: {
        UserTextes,
    },

}
</script>
<style scoped>

</style>