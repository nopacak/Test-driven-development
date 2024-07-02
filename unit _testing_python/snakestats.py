def mean(vals):
    if len(vals) == 0:
        raise ValueError("Cannot compute the mean of an empty list")
    sum = 0.0
    for i in range(len(vals)):
        sum += vals[i]
    return sum / len(vals)


def getMax(vals):
    if not vals:
        raise ValueError("Cannot get the maximum of an empty list")
    maxSeen = vals[0]
    for i in range(1, len(vals)):
        if vals[i] > maxSeen:
            maxSeen = vals[i]
    return maxSeen
