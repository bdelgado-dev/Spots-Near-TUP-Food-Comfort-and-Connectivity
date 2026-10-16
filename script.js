
const guideName = "Spots Near TUP: Food, Comfort, and Connectivity";
const currentYear = new Date().getFullYear();

let runningCount = 0;

// Display the guide name if the element exists.
const guideNameElement = document.getElementById("guide-name");

if (guideNameElement) {
    guideNameElement.textContent = guideName;
}

// Count the reviewed places on the current page.
const reviewedPlaces = document.querySelectorAll(".place-card").length;
runningCount = reviewedPlaces;

// Display the computed count if the element exists.
const placeCountElement = document.getElementById("place-count");

if (placeCountElement) {
    placeCountElement.textContent = runningCount;
}

// Update the copyright if the element exists.
const copyrightElement = document.getElementById("copyright");

if (copyrightElement) {
    copyrightElement.textContent =
        `© ${currentYear} ${guideName} • Eat • Chill • Connect`;
}

// Log three labelled values.
console.log("Guide Name:", guideName);
console.log("Current Year:", currentYear);
console.log("Reviewed Places:", runningCount);
