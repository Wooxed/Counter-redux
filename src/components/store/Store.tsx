import {combineReducers, legacy_createStore} from 'redux'
import {counterReducer} from "../reducers/counter-reducers";
// @ts-ignore
// import {store} from "./Store";
export {}

const saveToLocalStorage = (state: AppRootStateType) => {
    try {
        const serialisedState = JSON.stringify(state)
        localStorage.setItem('stableState', serialisedState)
    } catch (e) {
        console.warn(e)
    }
}

const loadFromLocalStorage = () => {
    try {
        const serialisedState = localStorage.getItem('stableState')
        if (serialisedState === null) return undefined
        return JSON.parse(serialisedState)
    } catch (e) {
        console.warn(e)
        return undefined
    }
}

export const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = legacy_createStore(rootReducer, loadFromLocalStorage())
store.subscribe(()=> saveToLocalStorage(store.getState()))

export type AppRootStateType = ReturnType<typeof rootReducer>

// window.store = store