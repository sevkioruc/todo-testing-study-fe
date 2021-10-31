import TodoList from '../src/components/TodoList.vue'
import { render, screen, waitFor } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { setupServer } from 'msw/node'
import { rest } from 'msw'

fdescribe('TodoList', () => {
	const response = {
		todos: [
			{ id: 1, content: 'Todo1' },
			{ id: 2, content: 'Todo2' },
			{ id: 3, content: 'Todo3' }
		]
	}

	const server = setupServer(
		rest.get('/v1/todo', (req, res, ctx) => {
			return res(ctx.status(200), ctx.json(response))
		})
	)

	beforeAll(() => server.listen())
	afterAll(() => server.close())

	it('displays three todos in list', async () => {
		render(TodoList)
		const todos = await screen.findAllByText(/Todo/)

		expect(todos.length).toBe(3)
	})

})
