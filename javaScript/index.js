var percentage_buttons = document.querySelectorAll(".tip-percentage");
var custom_percentage = document.querySelector("#custom-percentage");
var tip_pp_text = document.querySelector(".tip-amt-pp");
var total_amt_pp_text = document.querySelector(".total-amt-pp");
var people_input = document.querySelector("#no-of-people");
var reset_button = document.querySelector(".reset");
var initial_balance = document.querySelector("#initial-bill");



default_state();




reset_button.addEventListener("click", function() {
	tip_pp_text.textContent = "\u20B9" + "0.00";
	total_amt_pp_text.textContent = "\u20B9" + "0.00";
	document.querySelector("#initial-bill").value = "";
	document.querySelector("#no-of-people").value = "";
	custom_percentage.value = "";
	reset_button.disabled = true;
	reset_button.classList.add("reset-inactive");
	reset_button.style.cursor = "default";

});

custom_percentage.addEventListener("keyup", function(event) {
	console.log(event);
	let tip = Number(custom_percentage.value.replace(/\D/g, ""));
	tipCalculator(tip);
});

percentage_buttons.forEach((p_button) => {
	p_button.addEventListener("click", function(event) {
		let tip = Number(p_button.textContent.replace(/\D/g, ""));
		console.log(tip);
		tipCalculator(tip);
		custom_percentage.value = "";



	});
});

function tipCalculator(tip) {
	let initial_bal = Number(
		document.querySelector("#initial-bill").value.replace(/\D/g, "")
	);
	let no_of_people = Number(
		document.querySelector("#no-of-people").value.replace(/\D/g, "")
	);

	if (initial_bal == 0 || no_of_people == 0) {
		tip_pp_text.textContent = "\u20B9" + "0.00";
		total_amt_pp_text.textContent = "\u20B9" + "0.00";
	} else {
		let tip_amt = (tip / 100) * initial_bal;

		let tip_per_person = (tip_amt / no_of_people).toFixed(2);

		document.querySelector(".tip-amt-pp").textContent =
			"\u20B9" + tip_per_person;

		let total_amt = initial_bal + tip;

		let total_amt_per_person = (total_amt / no_of_people).toFixed(2);
		document.querySelector(".total-amt-pp").textContent =
			"\u20B9" + total_amt_per_person;


	}
}


people_input.addEventListener("keyup", function(event) {
	let cbz = document.querySelector(".cant-be-zero");
	let nofp = document.querySelector(".no-of-people");
	let value = Number(
		document.querySelector("#no-of-people").value.replace(/\D/g, "")
	);
	let string_value = document
		.querySelector("#no-of-people")
		.value.replace(/\D/g, "");

	if (value == 0) {
		cbz.classList.add("error-text");
        cbz.style.display="inline";
		nofp.classList.add("error-div");
	}
	if (string_value != 0 || string_value == "") {
		cbz.classList.remove("error-text");
		nofp.classList.remove("error-div");
        cbz.style.display="none";

	}
});

initial_balance.addEventListener("keyup", function() {
	reset_button.disabled = false;
	reset_button.classList.remove("reset-inactive");
	reset_button.style.cursor = "pointer";
})


function default_state() {
	people_input.value = "";
	initial_balance.value = "";
	reset_button.disabled = true;
	reset_button.classList.add("reset-inactive")
	reset_button.style.cursor = "default";
}