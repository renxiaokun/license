import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import searchUser from './views/nav1/searchUser.vue'
import addUser from './views/nav1/addUser.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import GetAuthorization from './views/nav2/GetAuthorization.vue';
import IssueList from './views/nav2/IssueList.vue';
import Survey from './views/Stsyme/Survey.vue'
import echarts from './views/charts/echarts.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true, //只有一个节点
        children: [
            {
                path: '/Survey',
                component: Survey,
                name: '系统概况'
            }
        ]
        },
    {
        path: '/',
        component: Home,
        name: '用户管理',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/searchUser', component: searchUser, name: '搜索用户'},
            { path: '/addUser', component: addUser, name: '添加用户'},
            { path: '/table', component: Table, name: 'Table'},
            { path: '/form', component: Form, name: 'Form',hidden:true},
            { path: '/user', component: user, name: '列表' ,hidden:true},
        ]
    },
    {
        path: '/',
        component: Home,
        name: '授权管理',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page4', component: Page4, name: '页面4', hidden:true},
            { path: '/page5', component: Page5, name: '页面5' ,hidden:true},
            { path: '/GetAuthorization', component: GetAuthorization, name: '获取授权'},
            { path: '/IssueList', component: IssueList, name: '发放清单'},
        ]
    },

    {
        path: '/',
        component: Home,
        name: 'Charts',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/echarts', component: echarts, name: 'echarts' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;