import { createStore } from 'redux'
import reducer from './reduser'

const store = createStore(reducer)

// dev mode
window.store = store

export default store