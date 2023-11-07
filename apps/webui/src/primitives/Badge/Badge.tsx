import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/Lib/utils";

/**
 * Style Variants for the Badge component
 */
const badgeVariants = cva(
	"inline-flex items-center rounded-md  font-medium ring-1 ring-inset ring-gray-500/10",
	{
		variants: {
			variant: {
				default: "bg-gray-50 text-gray-600 ring-gray-500/10",
				red: "bg-red-50 text-red-600 ring-red-500/10",
				yellow: "bg-yellow-50 text-yellow-600 ring-yellow-500/10",
				green: "bg-green-50 text-green-600 ring-green-500/10",
				blue: "bg-blue-50 text-blue-600 ring-blue-500/10",
				purple: "bg-indigo-50 text-indigo-600 ring-indigo-500/10",
				pink: "bg-pink-50 text-pink-600 ring-pink-500/10",
			},
			size: {
				sm: "px-2 py-1 text-xs",
				lg: "px-4 py-2 text-md",
			},
			defaultVariants: {
				variant: "default",
				size: "sm",
			},
		},
	}
);

/**
 * Badge props  - extends React.ButtonHTMLAttributes<HTMLSpanElement> and VariantProps<typeof badgeVariants>
 */
export interface BadgeProps
	extends React.ButtonHTMLAttributes<HTMLSpanElement>,
		VariantProps<typeof badgeVariants> {
	text?: string;
}

/**
 * Badge component - used for displaying a badge with text
 * @param variant - color variant
 * @param size - size variant
 * @param props - other props
 * @param ref - ref
 * @constructor
 */
const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(({ variant, size, ...props }, ref) => {
	return (
		<span className={cn(badgeVariants({ variant, size }))} ref={ref} {...props}>
			{props.text}
		</span>
	);
});

Badge.displayName = "Badge";
export default Badge;
export { badgeVariants };
