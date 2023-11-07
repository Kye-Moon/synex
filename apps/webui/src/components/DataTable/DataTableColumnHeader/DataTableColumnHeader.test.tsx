import { render } from '@redwoodjs/testing/web'

import DataTableColumnHeader from './DataTableColumnHeader'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DataTableColumnHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DataTableColumnHeader />)
    }).not.toThrow()
  })
})
