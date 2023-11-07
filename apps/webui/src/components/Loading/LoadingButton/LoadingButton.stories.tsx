// Pass props to your component by passing an `args` object to your story
//
// ```jsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import LoadingButton from './LoadingButton'

const meta: Meta<typeof LoadingButton> = {
  component: LoadingButton,
}

export default meta

type Story = StoryObj<typeof LoadingButton>

export const Primary: Story = {
  args: {
    label: 'Button',
    loadingStatus: false,
    type: 'button',
    variant: 'default',
  }
}
