export const addPoint = (point) => ({
    type: 'ADD_POINT',
    payload: {
        point
    }
})

export const deletePoint = (point) => ({
    type: 'DELETE_POINT',
    payload: {
        point
    }
})