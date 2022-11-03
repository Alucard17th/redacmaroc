<template>
    <div class="container-fluid">
        Dashboard de l'utilisateur
        <userOrders></userOrders>
    </div>
</template>

<script>
import userOrders from '../../components/user/UserOrders.vue';
export default {
    name: 'UserOrders',
    components: {
        userOrders,
    },

}
</script>
<style scoped>

</style>