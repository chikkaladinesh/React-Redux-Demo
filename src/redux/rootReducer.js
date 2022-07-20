import { useReducer } from 'react'
import { combineReducers } from 'redux'
import chickenReducer from './chicken/chickenReducer'
import eggReducer from 'eggReducer'
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
    egg: eggReducer,
    chicken: chickenReducer,
    user: userReducer
}
)

export default rootReducer