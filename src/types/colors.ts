/**
 * Must either be a valid tailwind background color or a custom color in hexadecimal.
 * You can read the tailwind docs (https://tailwindcss.com/docs/text-color) for more information.
 */
export type BackgroundColor =
	| `bg-[#${string}]`
	| `bg-${string}`
	| `bg-${string}-${number}`;

/**
 * Must either be a valid tailwind text color or a custom color in hexadecimal.
 * You can read the tailwind docs (https://tailwindcss.com/docs/text-color) for more information.
 */
export type TextColor =
	| `text-[#${string}]`
	| `text-${string}`
	| `text-${string}-${number}`;
