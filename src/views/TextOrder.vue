<template>
    <div class="container-fluid">
        Commander du texte
        <MakeOrder></MakeOrder>
    </div>
</template>

<script>
import MakeOrder from '../components/MakeOrder.vue';
export default {
    name: 'TextOrder',
    components: {
        MakeOrder,
    },

}
</script>
<style scoped>

</style>