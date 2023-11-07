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

import PageHeadingWithMetaAndActions from './PageHeadingWithMetaAndActions'

const meta: Meta<typeof PageHeadingWithMetaAndActions> = {
  component: PageHeadingWithMetaAndActions,
}

export default meta

type Story = StoryObj<typeof PageHeadingWithMetaAndActions>

export const Primary: Story = {
  args: {
    pageHeading: 'Page Heading',
    actions: [
      {
        text: 'New Project',
        onClick: () => console.log('New Project'),
      },
      {
        text: 'New Project',
        onClick: () => console.log('New Project'),
        buttonVariant: 'outline',
      }
      ],
  }
}
