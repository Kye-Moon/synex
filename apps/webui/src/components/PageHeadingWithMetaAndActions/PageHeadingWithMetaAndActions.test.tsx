import { render } from '@redwoodjs/testing/web'

import PageHeadingWithMetaAndActions from './PageHeadingWithMetaAndActions'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PageHeadingWithMetaAndActions', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PageHeadingWithMetaAndActions />)
    }).not.toThrow()
  })
})
