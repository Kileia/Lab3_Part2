// Kileia Riley
//10-19-23

function activity(type)
{
    let trail1 = "Skinner Butte and South Bank - Easy (1.6 mi) <br>";
    let trail2 = "Ribbon Trail to Old Trail - Moderate (3.1 mi) <br>";
    let trail3 = "Ridgeline Trail - Hard (12.0 mi) <br>";
    let trail4 = "Elk Trail - Easy (1.6 mi) <br>";
    let trail5 = "Corvallis to Coast - Hard (65.8 mi) <br>";
    let trail6 = "Goodman Creek Trail - Moderate (8.0 mi) <br>";
    switch (type) {
        case "Hiking":
        case "hiking":
            return trail1 + trail2 + trail3;
            break;
        case "Bike Touring":
        case "bike touring":
            return trail5;
            break;
        case "Horseback Riding":
        case "horseback riding":
            return trail4;
            break;
        case "Mountain Biking":
        case "mountain biking":
            return trail6
            break;
        default:
            return "Unknown Activity"
            break;
    }
}