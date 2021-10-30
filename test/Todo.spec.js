import Todo from '../src/components/Todo.vue'
import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('Todo', () => {
	describe('Layout', () => {
		it('has Todo header', () => {
			render(Todo)
			const header = screen.queryByRole('heading', { name: 'Todos' })
			expect(header).toBeInTheDocument()
		})

		it('has todo input', () => {
			const { container } = render(Todo)
			const input = container.querySelector('input')
			expect(input).toBeInTheDocument()
		})

		it('has add todo button', () => {
			const { container } = render(Todo)
			const button = screen.queryByText('Create')
			expect(button).toBeInTheDocument()
		})

		it('has clear todo input button', () => {
			render(Todo)
			const button = screen.queryByText('X')
			expect(button).toBeInTheDocument()
		})

		it('dissables the add todo button initially', () => {
			render(Todo)
			const button = screen.queryByText('Create')
			expect(button).toBeDisabled()
		})
	})
	describe('Interactions', () => {
		it('enables the add todo button when the todo field is filled', async () => {
			render(Todo)
			const button = screen.queryByText('Create')
			const todoInput = screen.getByTestId('todo-input')
			await userEvent.type(todoInput, 'Anything..')
			expect(button).toBeEnabled()
		})
	})
})
