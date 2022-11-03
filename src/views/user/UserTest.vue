<template>
    <div class="container-fluid">
        Dashboard de l'utilisateur
        <UserTestPost></UserTestPost>
    </div>
</template>

<script>
import UserTestPost from '../../components/user/UserTestPost.vue';
export default {
    name: 'UserTest',
    components: {
        UserTestPost,
    },

}
</script>
<style scoped>

</style>