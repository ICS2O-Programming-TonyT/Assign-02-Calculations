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
		"USD": {"USD": 1.00, "EUR": 0.85, "JPY": 109.94, "GBP": 0.72},
		"EUR": {"USD": 1.18, "EUR": 1.00, "JPY": 129.70, "GBP": 0.85},
		"JPY": {"USD": 0.0091, "EUR": 0.0077, "JPY": 1.00, "GBP": 0.0065},
		"GBP": {"USD": 1.39, "EUR": 1.18, "JPY": 153.22, "GBP": 1.00}
	};
	return rates[from][to];
}
