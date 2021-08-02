import { render, fireEvent } from 'test-utils'
import CTAButton from '../CTAButton.vue'

describe('CTAButton component', () => {
  test('should render text passed by slot', async () => {
    const text = 'Inicie agora a sua busca'

    const { getByRole } = await render(CTAButton, {
      propsData: { text },
    })

    expect(getByRole('button')).toHaveTextContent(text)
  })

  test('should emit click event', async () => {
    const onClick = jest.fn()

    const { getByRole } = await render(CTAButton, {
      listeners: { click: onClick },
    })

    await fireEvent.click(getByRole('button'))

    expect(onClick).toHaveBeenCalled()
  })
})
