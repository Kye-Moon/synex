import { render } from '@redwoodjs/testing/web'

import DropMenu from './DropMenu'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DropMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DropMenu />)
    }).not.toThrow()
  })
})
