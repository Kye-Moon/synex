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

import type { Meta, StoryObj } from "@storybook/react";
import JobList from "@/Components/Dashboard/JobListSection/JobList/JobList";

const meta: Meta<typeof JobList> = {
	component: JobList,
};

export default meta;

type Story = StoryObj<typeof JobList>;

export const Primary: Story = {};
