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

import DataTablePagination from './DataTablePagination'

const meta: Meta<typeof DataTablePagination> = {
  component: DataTablePagination,
}

export default meta

type Story = StoryObj<typeof DataTablePagination>

export const Primary: Story = {
  args: {
    table: {
      //@ts-ignore
      getState: () => ({
        pagination: {
          pageIndex: 0,
          pageSize: 10,
        }
      }),
      getPageCount: () => 10,
      getCanPreviousPage: () => true,
      getCanNextPage: () => true,
      previousPage: () => {},
      nextPage: () => {},
    }
  }
}
