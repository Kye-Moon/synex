import { Tabs, TabsList, TabsTrigger } from "@/Primitives/Tabs";
import React from "react";

export default function VariationActionTypeFilterTabs() {
	return (
		<>
			<Tabs defaultValue="action" className="w-[400px]">
				<TabsList className="grid w-full grid-cols-3">
					<TabsTrigger value="action">To Action</TabsTrigger>
					<TabsTrigger value="confirmed">Confirmed</TabsTrigger>
					<TabsTrigger value="ignored">Ignored </TabsTrigger>
				</TabsList>
			</Tabs>
		</>
	);
}
