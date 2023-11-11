import React, {createContext, useState} from "react";

interface VariationsContext {
	open: boolean;
	setOpen: (open: boolean) => void;
	value: string;
	setValue: (value: string) => void;
}

const VariationsContext = createContext<VariationsContext | undefined>(undefined);

interface VariationsProviderProps {
	children: React.ReactNode;
}

function VariationsProvider({children}: VariationsProviderProps): React.ReactNode {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState("");

	return (
		<VariationsContext.Provider value={{open, setOpen, value, setValue}}>
			{children}
		</VariationsContext.Provider>
	);
}

function useVariationTable() {
	const context = React.useContext(VariationsContext);
	if (context === undefined) {
		throw new Error("useVariations must be used within a VariationsProvider");
	}
	return context;
}
