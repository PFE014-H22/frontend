/**
 * Clamps a middle value within a range of values between a defined minimum bound and a maximum bound.
 *
 * @param preferredValue The number to clamp.
 * @param minimumBound The minimum acceptable value.
 * @param maximumBound The maximum acceptable value.
 * @returns The upper bound if the preferred number is higher than the maximum acceptable value.
 * @returns The lower bound if the preferred number is lower than the minimum acceptable value.
 * @returns The preferred value if in between the upper bound and the lower bound.
 */
export const clamp = (
	preferredValue: number,
	minimumBound: number,
	maximumBound: number,
) => {
	return Math.max(minimumBound, Math.min(preferredValue, maximumBound));
};
