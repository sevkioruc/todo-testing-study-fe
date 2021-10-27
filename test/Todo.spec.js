import Todo from '../src/components/Todo.vue'
import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'

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
			const button = container.querySelector('button')
			expect(button).toBeInTheDocument()
		})

		it('has clear todo input button', () => {
			render(Todo)
			const button = screen.queryByText('X')
			expect(button).toBeInTheDocument()
		})
	})
})
