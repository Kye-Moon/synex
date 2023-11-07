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

import ActionsDropMenu from './ActionsDropMenu'
import {EditIcon} from "lucide-react";

const meta: Meta<typeof ActionsDropMenu> = {
  component: ActionsDropMenu,
}

export default meta

type Story = StoryObj<typeof ActionsDropMenu>

export const Primary: Story = {
  args: {
    actions: [
      {
        label: 'Edit',
        icon: <EditIcon className={'h-4 text-primary/50'} />,
      },
      {
        label: 'Delete',
      }
      ]
  }
}
