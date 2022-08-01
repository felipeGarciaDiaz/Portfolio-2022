//API FOR VALIDATION OF USEFUL FORMS

var validator = {
	
	name: (data) => data.length <= 100 && data.length >= 5 && /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/.test(data),
	//anything in range and allows names with reguular letters, unique symbols outside the standard keyboard used in names, dashes, and commas.
	
	email: (data) => /\S+@\S+\.\S+/.test(data),
	//email@somewhere.com
	
	message: (data) => data.length <= 4000 && data.length >= 25,
	//anything in range
	
	phone: (data) => /^[\+]?\d{2,}?[(]?\d{2,}[)]?[-\s\.]?\d{2,}?[-\s\.]?\d{2,}[-\s\.]?\d{0,9}$/im.test(data) || data === "",
	//000.000.0000 0000000000 000 000 0000 000-000-0000 (000)-000-0000 etc
	
};

module.exports = {
	validator,
};
