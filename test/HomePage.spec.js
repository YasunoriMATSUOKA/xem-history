import { mount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'

import HomePage from '~/pages/index.vue'
const localVue = createLocalVue()
localVue.use(Buefy)

describe('HomePage', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(HomePage, { localVue })
    expect(wrapper.vm).toBeTruthy()
  })
})
