import {Tabs, TabsList, TabsTrigger} from "@/Primitives/Tabs";
import React from "react";

export default function VariationActionTypeFilterTabs() {
    return (
        <Tabs defaultValue="action" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="action">Active</TabsTrigger>
                <TabsTrigger value="ignored">Archived </TabsTrigger>
            </TabsList>
        </Tabs>
    );
}
