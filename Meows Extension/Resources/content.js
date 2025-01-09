browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
	console.log("Received response: ", response);
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
	console.log("Received request: ", request);
});

if (location.host.includes("tagram.com")) {
	const observer = new MutationObserver((mutations) => {
		mutations.forEach((mutation) => {
			if (mutation.type === "childList") {
				const newDivs = document.querySelectorAll("div._aagw");
				newDivs.forEach((div) => {
					div.remove();
				});
			}
		});
	});
	observer.observe(document.body, { childList: true, subtree: true });

	console.log("Observer started: All divs with class '_aagw' will be removed dynamically.");
}




