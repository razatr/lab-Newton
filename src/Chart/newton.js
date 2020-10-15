function f(x) {
    return (Math.sin(x) * Math.sqrt(x) + 1)
}

function dividedDifferences(arr) {
    if (arr.length > 2) {
        return (dividedDifferences(arr.slice(1)) - dividedDifferences(arr.slice(0, arr.length - 1))) / (arr[arr.length - 1] - arr[0])
    }
    if (arr.length === 2)
        return (f(arr[1]) - f(arr[0])) / (arr[1] - arr[0])
}

function polynomial(x, points) {
    let res = f(points[0])
    let multiplier = 1

    for (let i = 1; i < points.length; i++) {
        multiplier *= x - points[i - 1]
        res += dividedDifferences(points.slice(0, i + 1)) * multiplier
    }

    return res
}

export const func = []

for (let i = 0; i < 128; i++) {
    let x = i / 20
    func.push({
        x: x,
        y: f(x)
    })
}


export const getNewton = (points) => {
    const newton = []

    for (let i = 0; i < 128; i++) {
        let x = i / 20
        newton.push({
            x: x,
            y: polynomial(x, points)
        })
    }

    return newton
}
