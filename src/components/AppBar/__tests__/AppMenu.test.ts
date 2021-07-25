import { fireEvent, render, waitFor } from 'test-utils'
import AppMenu from '../AppMenu.vue'

describe('AppMenu.vue', () => {
  test('should render navigation', async () => {
    const { getByRole } = await render(AppMenu)

    const menuElement = getByRole('menu')

    expect(menuElement).toBeInTheDocument()
    expect(menuElement.children.length).toBeGreaterThan(0)
  })

  test('should have active class on active menu', async () => {
    const { getAllByRole } = await render(AppMenu)
    const activeClass = 'app-menu-item--active'

    const menuItems = getAllByRole('menuitem')
    expect(menuItems[0]).toHaveClass(activeClass)

    await fireEvent.click(menuItems[1])

    waitFor(() => expect(menuItems[1]).toHaveClass(activeClass))
  })
})
