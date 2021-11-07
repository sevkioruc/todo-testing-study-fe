import Vue from 'vue';
import VueRouter from 'vue-router';
import TodoDetail from '../components/TodoDetail'

Vue.use(VueRouter);

export const router = new VueRouter({
	routes: [
		{
			path: 'todo/:id',
			component: TodoDetail
		}
	],
	mode: 'history'
})
