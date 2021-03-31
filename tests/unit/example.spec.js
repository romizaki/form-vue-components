import { shallowMount, mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Display from '../../src/components/Display.vue'
import RadioButton from '../../src/components/RadioButton.vue'
import sinon from 'sinon'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('Display.vue', () => {
  it('Should render text correctly', async () => {
    const spy = sinon.spy()
    const wrapper = mount(Display, {
      propsData: {
        textField: spy
      }
    })
    expect(wrapper.text()).toContain('Radio Button 1')
    expect(wrapper.text()).toContain('Radio Button 2')
    expect(wrapper.text()).toContain('Radio Button 3')
    await wrapper.find('button').trigger('click')
    // console.log(spy())
    // spy.should.have.been.calledWidth('submit')
  })
})

describe('RadioButton.vue', () => {
  it('Should render element correctly', () => {
    const wrapper = shallowMount(RadioButton)
    console.log(wrapper.text(), '<<<<')
    expect(wrapper.text())
  })
})
