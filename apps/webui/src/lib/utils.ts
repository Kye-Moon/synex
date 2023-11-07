import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function enumToSentenceCase(enumValue) {
	// Split the input string by underscores
	const words = enumValue.split("_");

	// Capitalize the first letter of each word and convert the rest to lowercase
	const sentenceCaseWords = words.map((word) => {
		return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
	});

	// Join the words back together with a space between them
	return sentenceCaseWords.join(" ");
}
