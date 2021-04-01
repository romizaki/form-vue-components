import { shallowMount, mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Display from '../../src/components/Display.vue'
import RadioButton from '../../src/components/RadioButton.vue'
import Home from '../../src/views/Home.vue'
import About from '../../src/views/About.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('Home.vue', () => {
  it('Should render page correctly', () => {
    const wrapper = shallowMount(Home)
    expect(wrapper.exists()).toBe(true)
  })
})

describe('Home.vue', () => {
  it('Should render text correctly', async () => {
    const wrapper = mount(Home)
    expect(wrapper.text()).toContain('Hello World!')
  })
})

describe('About.vue', () => {
  it('Should render page correctly', () => {
    const wrapper = shallowMount(About)
    expect(wrapper.exists()).toBe(true)
  })
})

describe('About.vue', () => {
  it('Should render text correctly', async () => {
    const wrapper = mount(About)
    expect(wrapper.text()).toContain('This is an about')
    expect(wrapper.text()).toContain('Lorem ipsum')
  })
})

describe('Display.vue', () => {
  it('Should render component correctly', () => {
    const wrapper = shallowMount(Display)
    expect(wrapper.exists()).toBe(true)
  })
})

describe('RadioButton.vue', () => {
  it('Should render component correctly', () => {
    const wrapper = shallowMount(RadioButton)
    expect(wrapper.exists()).toBe(true)
  })
})

describe('Display.vue', () => {
  it('Should render text correctly', async () => {
    const wrapper = mount(Display)
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
    expect(wrapper.text())
  })
})
