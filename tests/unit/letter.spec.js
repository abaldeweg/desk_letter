import { mount, createLocalVue } from '@vue/test-utils'
import Letter from './../../src/components/letter/Letter'
import VueCompositionApi from '@vue/composition-api'
import components from '@baldeweg/components'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)
localVue.use(components)

describe('Letter', () => {
  it('renders the article', () => {
    const $t = () => {}
    const wrapper = mount(Letter, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('article').exists()).toBeTruthy()
  })
})
