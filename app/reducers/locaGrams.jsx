import axios from 'axios'

const GET_GRAMS = 'GET_GRAMS'
const GET_COORDS = 'GET_COORDS'

const initialState = {
	grams: [],
	coords: {}
}

const reducer = (state = initialState, action) => {
	const newState = Object.assign({}, state)

	switch (action.type) {
		case GET_GRAMS:
			newState.grams = action.grams
			break
		case GET_COORDS:
			newState.coords = action.coords
			break
		default:
			return state
	}

	return newState
}

export const getLocaGrams = grams => ({
	type: GET_GRAMS, grams
})

export const getCoords = coords => ({
	type: GET_COORDS, coords
})

export default reducer
