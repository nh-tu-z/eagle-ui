import { useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../reducers/rootReducer'

export const store = configureStore({
    reducer: rootReducer
})