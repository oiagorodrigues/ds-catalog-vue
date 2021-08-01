import { render } from 'test-utils'
import AppBar from '../AppBar.vue'

describe('AppBar.vue', () => {
  test('should render app logo', async () => {
    const { getByText } = await render(AppBar)
    expect(getByText('DS Catalog')).toBeInTheDocument()
  })

  test('should have a visible menu', async () => {
    const { getByRole } = await render(AppBar)
    expect(getByRole('menu')).toBeVisible()
  })
})
