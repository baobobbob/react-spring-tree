import { mount } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import { Demo } from '../__stories__/demo.story'
jest.useFakeTimers()

function timer(time: number) {
  setTimeout(() => '', time)
  jest.advanceTimersByTime(time)
}

describe('Test react-spring-tree', () => {
  it('Snapshot', () => {
    const component = renderer.create(<Demo />)
    const json = component.toJSON()
    expect(json).toMatchSnapshot()
  })

  it('Render', () => {
    const component = mount(<Demo />)
    timer(300)
    expect(component.find('.TreeNode').length).toEqual(6)
  })
})
