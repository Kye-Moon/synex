import { render } from '@redwoodjs/testing/web'

import LoadingButton from './LoadingButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LoadingButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoadingButton />)
    }).not.toThrow()
  })
})
