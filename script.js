
const guideName = "Spots Near TUP: Food, Comfort, and Connectivity";
const currentYear = new Date().getFullYear();

let runningCount = 0;

// Display the guide name if the element exists.
const guideNameElement = document.getElementById("guide-name");

if (guideNameElement) {
    guideNameElement.textContent = guideName;
}

// Count the reviewed places.
const reviewedPlaces = document.querySelectorAll(".place-card").length;
runningCount = reviewedPlaces;

const placeCountElement = document.getElementById("place-count");

if (placeCountElement) {
    placeCountElement.textContent = runningCount;
}

// Update the copyright.
const copyrightElement = document.getElementById("copyright");

if (copyrightElement) {
    copyrightElement.textContent =
        `© ${currentYear} ${guideName} • Eat • Chill • Connect`;
}

// RATING LABEL
const placeRating = 4.5;
let ratingLabel;

if (placeRating >= 4) {
    ratingLabel = "Highly recommended";
} else if (placeRating >= 2.5) {
    ratingLabel = "Worth a visit";
} else {
    ratingLabel = "Only if you're nearby";
}

document.getElementById("rating-result").textContent = ratingLabel;

// BUDGET AND AVAILABILITY
const priceLevel = 2;
const budgetLimit = 2;
const isOpen = true;

const isWithinBudget = priceLevel <= budgetLimit && isOpen === true;

const budgetMessage = isWithinBudget
    ? "Good option right now"
    : "Maybe another time";

document.getElementById("budget-result").textContent = budgetMessage;

// DISTANCE NOTE
const isWalkingDistance = true;

const distanceMessage = isWalkingDistance === true
    ? "Walking distance"
    : "Better to commute";

document.getElementById("distance-result").textContent = distanceMessage;

// CONSOLE OUTPUT
console.log("Guide Name:", guideName);
console.log("Current Year:", currentYear);
console.log("Reviewed Places:", runningCount);
console.log("Rating Label:", ratingLabel);
console.log("Budget and Availability:", budgetMessage);
console.log("Distance:", distanceMessage);
