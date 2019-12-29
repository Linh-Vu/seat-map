export const getTypeStyle = (type, status) => {
	if (!status) {
		return 'seat-unavailable';
	}

	switch (type) {
		case 2:
			return 'seat-vip';
		case 3:
			return 'seat-deluxe';
		default:
			return 'seat-standard';
	}
};