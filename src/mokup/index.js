const lines = [
	{ key: 'a', name: 'A' },
	{ key: 'b', name: 'B' },
	{ key: 'c', name: 'C' },
	{ key: 'd', name: 'D' },
	{ key: 'e', name: 'E' },
	{ key: 'f', name: 'F' },
	{ key: 'g', name: 'G' },
	{ key: 'h', name: 'H' },
	{ key: 'i', name: 'I' },
	{ key: 'k', name: 'K' },
];
const columns = [
	{ key: '1', name: '1' },
	{ key: '2', name: '2' },
	{ key: '3', name: '3' },
	{ key: '4', name: '4' },
	{ key: '5', name: '5' },
	{ key: '6', name: '6' },
	{ key: '7', name: '7' },
	{ key: '8', name: '8' },
	{ key: '9', name: '9' },
	{ key: '10', name: '10' },
];

const types = {
	standard: {
		name: 'Standard',
		price: 100000,
		key: 1,
		color: 'rgba(255, 255, 255, 0.8)',
	},
	vip: {
		name: 'VIP',
		price: 150000,
		key: 2,
		color: '#FFFF00',
	},
	deluxe: {
		name: 'Deluxe',
		price: 200000,
		key: 3,
		color: '#8A2BE2',
	}
};

const status = {
	available: 1,
	booked: 0,
};

const generateSeat = () => {
	const seats = [];

	lines.forEach((line, lineI) => {
		columns.forEach((col, colI) => {
			const seat = {
				position: [lineI, colI],
				type: ['f', 'g', 'h'].includes(line.key) ? types.vip : line.key === 'k' ? types.deluxe : types.standard,
				colName: col.name,
				name: `${line.name}-${col.name}`,
				id: parseFloat(`${lineI}${colI}`),
				status: colI === 5 && lineI === 5 ? status.booked : status.available,
			};

			seats.push(seat);
		})
	});

	return seats;
};

export { generateSeat, types, status, lines, columns };
