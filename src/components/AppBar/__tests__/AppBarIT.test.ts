import { render, fireEvent, screen, waitFor, resizeWindow } from 'test-utils'
import App from '@/App.vue'

jest.mock('@/views/Home.vue', () => ({
  name: 'HomePage',
  render: (h: any) => h('h1', 'Home Page'),
}))

jest.mock('@/views/Store.vue', () => ({
  name: 'StorePage',
  render: (h: any) => h('h1', 'Store Page'),
}))

jest.mock('@/views/Admin.vue', () => ({
  name: 'AdminPage',
  render: (h: any) => h('h1', 'Admin Page'),
}))

afterEach(async () => {
  jest.resetAllMocks()
  await resizeWindow(1400)
})

describe('AppBar Integration Tests', () => {
  it('should render correct app menu on desktop', async () => {
    await render(App)

    const menu = screen.getByRole('menu')

    expect(menu).toHaveAttribute('aria-label', 'Menu Principal Desktop')
    expect(menu).toBeVisible()
    expect(menu.children.length).toBeGreaterThan(0)
  })

  it('should render correct app menu on mobile', async () => {
    await resizeWindow(300)
    await render(App)

    const menuActivator = screen.getByRole('button', { name: /abrir menu/i })
    await fireEvent.click(menuActivator)

    const menu = screen.getByTestId('appMenuMobile')
    expect(menu).toHaveAttribute('role', 'menu')
    expect(menu).toHaveAttribute('aria-label', 'Menu Principal Mobile')
    expect(menu.children.length).toBeGreaterThan(0)
  })

  it('should change route when clicking on a menu item', async () => {
    await render(App)

    expect(screen.queryByText('Home Page')).toBeInTheDocument()
    expect(screen.queryByText('Store Page')).not.toBeInTheDocument()
    expect(screen.queryByText('Admin Page')).not.toBeInTheDocument()

    const storeMenu = screen.getByRole('menuitem', { name: /admin/i })
    await fireEvent.click(storeMenu)

    await waitFor(() => {
      expect(screen.queryByText('Store Page')).not.toBeInTheDocument()
      expect(screen.queryByText('Home Page')).not.toBeInTheDocument()
      expect(screen.queryByText('Admin Page')).toBeInTheDocument()
    })
  })
})
