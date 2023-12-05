import {clsx, type ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";
import {UserInfo} from "@/Lib/src/state/state";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function enumToSentenceCase(enumValue: string) {
    // Split the input string by underscores
    const words = enumValue.split("_");

    // Capitalize the first letter of each word and convert the rest to lowercase
    const sentenceCaseWords = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    // Join the words back together with a space between them
    return sentenceCaseWords.join(" ");
}

export const getStatusBadgeVariant = (status: string) => {
    switch (status) {
        case "IN_PROGRESS":
            return "blue";
        case "FINISHED":
            return "green";
        case "NOT_STARTED":
            return "yellow";
    }
};


export const getUserTypeBadgeVariant = (status: string) => {
    switch (status) {
        case "CREW_MEMBER":
            return "blue";
        case "SUPERVISOR":
            return "green";
    }
};

export function formatPhoneNumber(phoneNumber: string) {
    // Remove all non-digit characters
    const cleanedNumber = phoneNumber.replace(/\D/g, '');

    // Check if the number starts with '0', if yes, replace it with '+61'
    if (cleanedNumber.startsWith('0')) {
        return `+61${cleanedNumber.slice(1)}`;
    }

    // Check if the number doesn't start with '+61', add it at the beginning
    if (!cleanedNumber.startsWith('+61')) {
        return `+61${cleanedNumber}`;
    }

    return cleanedNumber;
}

interface hasRoleProps {
    userInfo: UserInfo;
    role: string;
}

export const hasRole = (userInfo: UserInfo | null, role: string) => {
    if (!userInfo) return false;
    if (userInfo.role === role) return true;
    if (userInfo.role === "ADMIN") return true;
}
