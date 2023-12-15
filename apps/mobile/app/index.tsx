import { Redirect } from "expo-router";
import React from "react";
export default function Index() {
    console.log("Index");
    return <Redirect href="/(application)/(home)/variations" />;
}
