import { render } from '../test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

test('should set [data-app] attribute on outer most div', () => {
  const { container } = render(HelloWorld)

  expect(container).toHaveAttribute('data-app', 'true')
})
