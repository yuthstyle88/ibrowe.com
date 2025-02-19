(function() {
	const GHOST_FRONTEND_DOMAIN = 'https://newsletter.brave.app';
	const responseClasses = { error: "-error", success: "-success" };

	function show_response(response, resp_key, widget_instance) {
		const form = widget_instance.querySelector(".widget");
		Object.values(responseClasses).forEach(respClass => form.classList.remove(respClass));
		form.classList.add(responseClasses[resp_key]);
		const response_field = widget_instance.getElementsByClassName("response");
		const response_field_inner = response_field[0];
		response_field_inner.className = "";
		response_field_inner.className += "response " + resp_key + "__message";
		response_field_inner.textContent = response;
		return;
	}
	function stripHTML(text) {
		const regex = /(<([^>]+)>)/gi;
		return text.replace(regex, "");
	}
	function isValidEmailAddress(emailAddress) {
		const pattern =
		/^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
		return pattern.test(emailAddress);
	}

	document.addEventListener("DOMContentLoaded", function (event) {
		const widgetInstance = document.querySelector(".subscription-widget");
		if (widgetInstance !== null && typeof window.widget_loaded === "undefined") {
			const form = widgetInstance.querySelector(".widget");
			const input = widgetInstance.querySelector(".form-input");
			const submitBtn = widgetInstance.querySelector(".submit-btn");

			input.addEventListener("input", function() {
				Object.values(responseClasses).forEach(respClass => form.classList.remove(respClass));
				submitBtn.disabled = false;
				submitBtn.dataset.theme = "light";
			})

			submitBtn.addEventListener("click", async function(event) {
				event.preventDefault();
				submitBtn.disabled = true;
				submitBtn.dataset.theme = "";
				const emailInput = document.querySelector("input[name='email']");
				const email = stripHTML(emailInput.value);

				if (!isValidEmailAddress(email)) {
					show_response("Invalid Email address", "error", widgetInstance);
				} else {
					const url = `${GHOST_FRONTEND_DOMAIN}/members/api/send-magic-link/`;
					
					try {
						// Get integrity token
						const result = await fetch(`${GHOST_FRONTEND_DOMAIN}/members/api/integrity-token/`, {
							headers: {
								'app-pragma': 'no-cache',
								'x-ghost-version': '5.98'
							},
							method: 'GET'
						});
						const integrityToken = await result.text();

						const payload = {
							email,
							name: email,
							integrityToken: integrityToken,
							"newsletters": [
								{
									"name": "Brave Ads"
								}
							]
						};

						// Send subscription request
						const response = await fetch(url, {
							method: 'POST',
							mode: 'cors',
							headers: { 'Content-Type': 'application/json' },
							body: JSON.stringify(payload)
						});

						if (response.status === 201) {
							show_response("Check your inbox to confirm your subscription.", "success", widgetInstance);
						} else {
							throw new Error();
						}
					} catch (error) {
						console.error('Failed to complete subscription:', error);
						show_response("An error occurred while submitting the email.", "error", widgetInstance);
						submitBtn.disabled = false;
						submitBtn.dataset.theme = "light";
					}
				}
			});
		}
	});
})();