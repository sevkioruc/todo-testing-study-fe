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
	})
})
