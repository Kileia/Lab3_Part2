// Kileia Riley
function calculate(credits, outState)
{
    let overCredits = credits - 16;
    if (outState === "no") {
        if (credits <= 16) {
        return "In-state tuition: $" + credits * 100;
    } else {
        return "In-state tuition: $" + 16 * 100 + " - Hit max credits: " + overCredits;
    } }
    if (outState === "yes") {
        if (credits <= 16) {
        return "Out of state tuition: $" + credits * 200
    } else {
        return "Out of state tuition: $" + 16 * 200 + " - Hit max credits: " + overCredits;
    } }
}