import VueRouter from 'vue-router'
import UsersList from './components/User/List'
import Home from './components/Home'
import UserProfile from './components/User/Profile'
// import Component404 from './components/Support/component404'


export default new VueRouter ({
	routes: [
		{
			path: '',
			component: Home
		},
		{
			path: '/users',
			component: UsersList
		},
		{
			path: '/users/:id',
			component: UserProfile,
			name: 'userProfile',
			// beforeEnter: (to, from, next) => {
			// 	if (to === '/user/2') {
			// 		next(true)
			// 	} else {
			// 		next(false)
			// 	}
			// }
		},
		// {
		// 	path: '*',
		// 	component: component404
		// }
	],
	mode: 'history'
})