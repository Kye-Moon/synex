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

import type {Meta, StoryObj} from '@storybook/react'

import DropSelect from './DropSelect'

const meta: Meta<typeof DropSelect> = {
  component: DropSelect,
}

export default meta

type Story = StoryObj<typeof DropSelect>

export const Primary: Story = {
  args: {
    placeholder: 'Select',
    defaultValue: '1',
    onChange: () => {
    },
    options: [
      {
        value: '1',
        label: 'Option 1',
      },
      {
        value: '2',
        label: 'Option 2',
      }],
  }
}
