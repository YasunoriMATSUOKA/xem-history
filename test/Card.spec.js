import { mount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'

import Card from '@/components/Card.vue'
const localVue = createLocalVue()
localVue.use(Buefy)

describe('Card', () => {
  test('is a Vue instance', () => {
    const props = {
      title: 'Home',
      icon: 'home',
    }
    const wrapper = mount(Card, {
      localVue,
      propsData: props,
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
