// import store from '../store/store-settings';
import { Notify } from 'quasar'

const routes = [{
    path: '/main',
    component: () =>
        import ('layouts/Layout.vue'),
    children: [{
            path: '/friends',
            component: () =>
                import ('pages/PageFriend.vue')
        },
        // {
        //     path: '/todo',
        //     component: () =>
        //         import ('pages/PageTodo.vue'),

        // },
        {
            path: '/listening',
            component: () =>
                import ('pages/PageListening.vue'),

        },
        // {
        //     path: '/settings/help',
        //     component: () =>
        //         import ('pages/PageHelp.vue')
        // },
        {
            path: '/auth',
            component: () =>
                import ('pages/PageAuth.vue')
        },
    ]

}]


// function requireAuth(to, from, next) {
//     console.log("a", store.state.userRole)

//     function proceed() {
//         if (store.state.userRole == 'Admin') {
//             next();
//         } else {

//             Notify.create('Only Admin can view this page')
//             next('/task');
//         }
//     }
//     proceed()
//         // body...
// }
// Always leave this as last one


export default routes