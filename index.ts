function formatNumber(num: number, divisor: number, suffix: string): string {
	const sign = num < 0 ? '-' : '';
	const absNum = Math.abs(num);
	return sign + (absNum / divisor).toFixed(1) + suffix;
}

export default function prettyNums(num: number): string {
	const absNum = Math.abs(num);
	if (absNum < 1e3) return num.toString();
	if (absNum >= 1e3 && absNum < 1e6) return formatNumber(num, 1e3, 'K');
	if (absNum >= 1e6 && absNum < 1e9) return formatNumber(num, 1e6, 'M');
	if (absNum >= 1e9 && absNum < 1e12) return formatNumber(num, 1e9, 'B');
	return formatNumber(num, 1e12, 's');
}
