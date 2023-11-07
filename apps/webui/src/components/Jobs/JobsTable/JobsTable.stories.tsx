import type { Meta, StoryObj } from "@storybook/react";

import JobsTable from "@/Components/Jobs/JobsTable/JobsTable";

const meta: Meta<typeof JobsTable> = {
	component: JobsTable,
};

export default meta;

type Story = StoryObj<typeof JobsTable>;

export const Primary: Story = {};
