import { curry, apply } from 'ramda';

const debounce_ = curry((timeMs, fn) => () => {
console.log("TCL: fn", fn)
console.log("TCL: timeMs", timeMs)

	let timeout;

	return (...args) => {
        
        const later = () => {
			timeout = null;

            
				apply(fn, args);
			
		};

		const callNow = !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, timeMs);

		if (callNow) {
			apply(fn, args);
		}

		return timeout;
	};
});

export const debounce = debounce_;
