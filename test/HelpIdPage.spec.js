import { mount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'

import HelpIdPage from '~/pages/help/_id.vue'
const localVue = createLocalVue()
localVue.use(Buefy)

describe('HelpIdPage', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(HelpIdPage, { localVue })
    expect(wrapper.vm).toBeTruthy()
  })
})
