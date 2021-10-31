import TodoCreate from '../src/components/TodoCreate.vue'
import { render, screen, waitFor } from '@testing-library/vue'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { setupServer } from 'msw/node'
import { rest } from 'msw'

describe('Todo', () => {
	describe('Layout', () => {
		it('has Todo header', () => {
			render(TodoCreate)
			const header = screen.queryByRole('heading', { name: 'Todos' })
			expect(header).toBeInTheDocument()
		})

		it('has todo input', () => {
			const { container } = render(TodoCreate)
			const input = container.querySelector('input')
			expect(input).toBeInTheDocument()
		})

		it('has add todo button', () => {
			const { container } = render(TodoCreate)
			const button = screen.queryByText('Create')
			expect(button).toBeInTheDocument()
		})

		it('dissables the add todo button initially', () => {
			render(TodoCreate)
			const button = screen.queryByText('Create')
			expect(button).toBeDisabled()
		})
	})
	describe('Interactions', () => {
		let requestBody
		let counter = 0
		let todoInput;

		const server = setupServer(
			rest.post('/v1/todo', (req, res, ctx) => {
				requestBody = req.body
				counter += 1
				return res(ctx.status(200))
			})
		)

		const setup = async () => {
			render(TodoCreate)
			todoInput = screen.getByTestId('todo-input')
			await userEvent.type(todoInput, 'Anything..')
		}

		beforeAll(() => server.listen())

		beforeEach(() => { counter = 0 })

		afterAll(() => server.close())


		it('enables the add todo button when the todo field is filled', async () => {
			await setup()
			const button = screen.queryByText('Create')

			expect(button).toBeEnabled()
		})

		it('sends todo to backend after clicking create button', async () => {
			await setup()
			const button = screen.queryByText('Create')

			await userEvent.click(button)

			expect(requestBody).toEqual({ content: 'Anything..' })
		})

		it('displays spinner while the api request in progress', async () => {
			await setup()
			const button = screen.queryByText('Create')

			await userEvent.click(button)

			const spinner = screen.queryByRole('status')

			expect(spinner).toBeInTheDocument()
		})

		it('does not display spinner when api request ended', async () => {
			await setup()
			const button = screen.queryByText('Create')

			await userEvent.click(button)

			const spinner = screen.queryByRole('status')

			await waitFor(() => {
				expect(spinner).not.toBeInTheDocument()
			}, { timeout: 10000 })
		})

		it('does not allow clicking to create button when there is an ongoing api call', async () => {
			await setup()
			const button = screen.queryByText('Create')

			await userEvent.click(button)
			await userEvent.click(button)

			expect(counter).toBe(1)
		})

		it('input must be cleared after the create todo', async () => {
			await setup()
			const button = screen.queryByText('Create')

			await userEvent.click(button)

			await waitFor(() => {
				expect(todoInput).toHaveValue('')
			}, { timeout: 10000 })
		})
	})
})
