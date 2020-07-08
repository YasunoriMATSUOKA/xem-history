import { mount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'

import HelpPage from '~/pages/help/index.vue'
const localVue = createLocalVue()
localVue.use(Buefy)

describe('HelpPage', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(HelpPage, { localVue })
    expect(wrapper.vm).toBeTruthy()
  })
})
