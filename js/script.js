function convert() {
	let amount = parseFloat(document.getElementById("amount").value);
	let from = document.getElementById("from").value;
	let to = document.getElementById("to").value;
	let rate = getRate(from, to);
	let converted = amount * rate;
	document.getElementById("result").innerHTML = amount + " " + from + " = " + converted.toFixed(2) + " " + to;
}

function getRate(from, to) {
	// This is where you would call an API or get the exchange rate from a database
	// For the purpose of this example, we'll use some arbitrary rates
	let rates = {
		"USD": {"USD": 1.00, "EUR": 0.93, "JPY": 130.57, "GBP": 0.82, "CAD": 1.38},
		"EUR": {"USD": 1.08, "EUR": 1.00, "JPY": 140.36, "GBP": 0.88, "CAD": 1.48},
		"JPY": {"USD": 0.0077, "EUR": 0.0071, "JPY": 1.00, "GBP": 0.0063, "CAD": 0.011},
		"GBP": {"USD": 1.22, "EUR": 1.14, "JPY": 159.66, "GBP": 1.00, "CAD": 0.0063},
    "CAD": {"USD": 0.73, "EUR": 0.68, "JPY": 94.83, "GBP": 0.59, "CAD": 1}
	};
	return rates[from][to];
}
