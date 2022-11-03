<template>
    <div class="container-fluid">
        Profil de l'utilisateur
        <UserAccount></UserAccount>
    </div>
</template>

<script>
import UserAccount from '../../components/user/UserAccount.vue';
export default {
    name: 'TextOrder',
    components: {
        UserAccount,
    },

}
</script>
<style scoped>

</style>