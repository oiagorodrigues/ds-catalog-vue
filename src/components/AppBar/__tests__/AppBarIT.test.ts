import { CreateElement } from 'vue'
import { render, fireEvent, waitFor, resizeWindow } from 'test-utils'
import App from '@/App.vue'

const mockedHomePage = 'Home Page'
const mockedAdminPage = 'Admin Page'

jest.mock('@/views/Home.vue', () => ({
  name: 'HomePage',
  render: (h: CreateElement) => h('h1', mockedHomePage),
}))

jest.mock('@/views/Admin.vue', () => ({
  name: 'AdminPage',
  render: (h: CreateElement) => h('h1', mockedAdminPage),
}))

afterEach(async () => {
  await resizeWindow(1400)
})

describe('AppBar Integration Tests', () => {
  describe('on higher screens', () => {
    it('should render/interact w/ correct app menu', async () => {
      const { getByLabelText, queryByText, getByText } = await render(App)

      const menu = getByLabelText(/menu principal desktop/i)

      expect(menu).toBeVisible()
      expect(menu.children.length).toBeGreaterThan(0)

      expect(queryByText(mockedHomePage)).toBeInTheDocument()
      expect(queryByText(mockedAdminPage)).not.toBeInTheDocument()

      const storeMenu = getByText(/admin/i)
      await fireEvent.click(storeMenu)

      await waitFor(() => {
        expect(queryByText(mockedHomePage)).not.toBeInTheDocument()
        expect(queryByText(mockedAdminPage)).toBeInTheDocument()
      })
    })
  })

  describe('on mobile', () => {
    it('should render/interact w/ correct app menu', async () => {
      await resizeWindow(300)
      const { getByText, queryByText, getByLabelText, getByRole } =
        await render(App)

      const menuActivator = getByRole('button', { name: /abrir menu/i })
      await fireEvent.touch(menuActivator)

      await waitFor(async () => {
        const menu = getByLabelText(/menu principal mobile/i)
        expect(menu).toBeVisible()
        expect(menu.children.length).toBeGreaterThan(0)

        expect(queryByText(mockedHomePage)).toBeInTheDocument()
        expect(queryByText(mockedAdminPage)).not.toBeInTheDocument()

        await fireEvent.click(getByText(/admin/i))

        await waitFor(() => {
          expect(queryByText(mockedHomePage)).not.toBeInTheDocument()
          expect(queryByText(mockedAdminPage)).toBeInTheDocument()
        })
      })
    })
  })
})
