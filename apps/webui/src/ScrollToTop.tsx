import {useEffect} from "react";
import {useRouter} from "@tanstack/react-router";

export default function ScrollToTop() {
	const {state} = useRouter();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [state.location.pathname]);

	return null;
}
