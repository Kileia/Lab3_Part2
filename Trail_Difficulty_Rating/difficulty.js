// Kileia Riley
//10-19-23

function difficulty(distance, elevation)
{
    if (distance <= 4 && elevation <= 500)
        return ("Rating: Easy")
    else if (distance <= 8 && elevation <= 1500)
        return ("Rating: Moderate")
    else if (distance <= 12 && elevation <=3000)
        return ("Rating: Hard")
    else if (distance > 12 && elevation > 3000)
        return ("Rating: Challenging")
} 