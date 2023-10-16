// Kileia Riley

function difficulty(distance, elevation)
{
    if (distance <= 4 || elevation <= 500)
    return ("Rating: Easy")
    if (distance <= 8 || elevation <= 1500)
    return ("Rating: Moderate")
    if (distance <= 12 || elevation <=3000)
    return ("Rating: Hard")
    if (distance > 12 || elevation > 3000)
    return ("Rating: Challenging")
} 