// PAGES
import Home from '../views/Home.vue'
import APropos from '../views/APropos.vue'
import Services from '../views/Services.vue'
import Prix from '../views/Prix.vue'
import Order from '../views/TextOrder.vue'
import Fonctionnement from '../views/Fonctionnement.vue'
import UserProfile from '../views/user/UserProfile.vue'
import UserDashboard from '../views/user/UserDashboard.vue'
import UserTest from '../views/user/UserTest.vue'
import AdminPage from '../views/admin/AdminPage.vue'

// COMPONENTS
import AdminDashboard from '../components/admin/AdminDashboard.vue'
import OrdersTable from '../components/admin/OrdersTable.vue'
import TestsTable from '../components/admin/TestsTable.vue'


function guardMyroute(to, from, next)
{
 var isAuthenticated= false;
 var authUser = JSON.parse(localStorage.getItem('currentUz'))
//this is just an example. You will have to find a better or 
// centralised way to handle you localstorage data handling 
console.log("CURRENT USAR : ")
console.log(authUser.role)
if(authUser.role === "Admin")
  isAuthenticated = true;
 else
  isAuthenticated= false;


 if(isAuthenticated) 
 {
  next(); // allow to enter route
 } 
 else
 {
  next('/services'); // go to '/login';
 }
}

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/apropos',
        component: APropos
    },
    {
        path: '/services',
        component: Services
    },
    {
        path: '/prix',
        component: Prix
    },
    {
        path: '/fonctionnement',
        component: Fonctionnement
    },
    {
        path: '/order',
        component: Order
    },
    {
        path: '/user-profile',
        component: UserProfile
    },
    {
        path: '/user-dashboard',
        component: UserDashboard
    },
    {
        path: '/user-test',
        component: UserTest
    },
    {
        path: '/admin',
        component: AdminPage,
        redirect: '/admin-dashboard',
        children: [
            { path: "/admin-dashboard", component: AdminDashboard, meta: { layout: 'LayoutAdmin' }, },
            { path: "/all-orders", component: OrdersTable, meta: { layout: 'LayoutAdmin' }, },
            { path: "/all-tests", component: TestsTable, meta: { layout: 'LayoutAdmin' }, }
        ],
        beforeEnter: guardMyroute,
        meta: { layout: 'LayoutAdmin' },
    },
    // {
    //     path: '/not-allowed',
    //     component: UserTest
    // },
];

export default routes;