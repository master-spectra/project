export const filter = () => {
	const array = [0, 52, 8, 72, 66];

	for (let i = 0; i < array.length; i++) {
		if (array[i] > array[--i] && array[i] < array[++i]) {
			console.log(true);
		};
	};
};

filter();