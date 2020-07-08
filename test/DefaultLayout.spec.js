import { mount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'

import DefaultLayout from '@/layouts/default.vue'
const localVue = createLocalVue()
localVue.use(Buefy)

describe('DefaultLayout', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(DefaultLayout, { localVue })
    expect(wrapper.vm).toBeTruthy()
  })
})
