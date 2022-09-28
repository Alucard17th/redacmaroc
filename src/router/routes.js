import Home from '../views/Home.vue'
import APropos from '../views/APropos.vue'
import Services from '../views/Services.vue'
import Prix from '../views/Prix.vue'
import Order from '../views/TextOrder.vue'
import Fonctionnement from '../views/Fonctionnement.vue'


 const routes = [
    {
        path: '/', 
        component : Home
    },
    {
        path: '/apropos', 
        component : APropos
    },
    {
        path: '/services', 
        component : Services
    },
    {
        path: '/prix', 
        component : Prix
    },
    {
        path: '/fonctionnement', 
        component : Fonctionnement
    },
    {
        path: '/order', 
        component : Order
    }
];

export default routes;