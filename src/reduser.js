const h = Math.PI / 7

const points = [
    0.5 * h,
    2.5 * h,
    6.5 * h,
    4.5 * h,
    1.5 * h
]

export default (state = points, action) => {

    const { type } = action

    switch (type) {
        case 'ADD_POINT':
            const newState = state.slice()
            newState.push(action.payload.point)
            return newState
        case 'DELETE_POINT':
            return state.filter(item => item !== action.payload.point)
        default:
            return state
    }
}