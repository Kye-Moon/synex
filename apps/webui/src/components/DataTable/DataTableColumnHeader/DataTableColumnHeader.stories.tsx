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

import DataTableColumnHeader from './DataTableColumnHeader'
import {Column} from "@tanstack/react-table"
import {projectsTableColumns} from "src/components/ProjectsTable/ProjectsTableColumns";

const meta: Meta<typeof DataTableColumnHeader> = {
  component: DataTableColumnHeader,
}

export default meta

type Story = StoryObj<typeof DataTableColumnHeader>
export const Primary: Story = {
  args: {
    //@ts-ignore
    column: {
      getCanSort: () => true,
      getIsSorted: () => false,
    },
    title: 'Name',
  }
}
