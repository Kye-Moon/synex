import { render } from '@redwoodjs/testing/web'

import DataTablePagination from './DataTablePagination'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DataTablePagination', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DataTablePagination />)
    }).not.toThrow()
  })
})
