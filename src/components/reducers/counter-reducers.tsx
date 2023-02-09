
export type ErrorType = '' | 'Incorrect value!' | 'Input value and press SET'

const INCREMENT_VALUE = 'INCREMENT_VALUE'

const SET_EDIT_MODE = 'SET_EDIT_MODE'
const SET_START_VALUE  = 'SET_START_VALUE'
const SET_MAX_VALUE = 'SET_MAX_VALUE'
const SET_ERROR = 'SET_ERROR'
const SET_VALUE = 'SET_VALUE'

export type SetValueAT = {
    type: 'SET_VALUE'
    value: number
}
export type SetErrorAT = {
    type: 'SET_ERROR'
    error: ErrorType
}
export type IncrementAT = {
    type: typeof INCREMENT_VALUE
    value: number
}
export type SetEditModeAT = {
    type: typeof SET_EDIT_MODE
    isEditMode: boolean
}
export type SetStartValueAT = {
    type: typeof SET_START_VALUE
    startValue: number
}
export type SetMaxValueAT = {
    type: typeof SET_MAX_VALUE
    maxValue: number
}

export type ActionType = IncrementAT | SetEditModeAT | SetStartValueAT | SetMaxValueAT | SetErrorAT | SetValueAT

export type InitialStateType = {
    value: number
    startValue: number
    maxValue: number
    isEditMode: boolean
    error: string
}
const InitialState: InitialStateType = {
    value: 0,
    startValue: 0,
    maxValue: 5,
    isEditMode: false,
    error: ''
}
export const counterReducer = (state = InitialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "INCREMENT_VALUE":
            return {...state, value: action.value + 1}
        case "SET_EDIT_MODE":
            return {...state, isEditMode: action.isEditMode}
        case "SET_START_VALUE":
            return {...state, startValue: action.startValue}
        case "SET_MAX_VALUE":
            return {...state, maxValue: action.maxValue}
        case "SET_ERROR":
            return {...state, error: action.error}
        case "SET_VALUE":
            return {...state, value: action.value}
        default:
            return state
    }
}

export const incValueAC = (value: number): IncrementAT => ({type: INCREMENT_VALUE, value})
export const setEditModeAC = (isEditMode: boolean): SetEditModeAT => ({type: SET_EDIT_MODE, isEditMode})
export const setStartValueAC = (startValue: number): SetStartValueAT => ({type: SET_START_VALUE, startValue})
export const setMaxValueAC = (maxValue: number): SetMaxValueAT => ({type: SET_MAX_VALUE, maxValue})
export const setErrorAC = (error: ErrorType): SetErrorAT => ({type: SET_ERROR, error})
export const setValueAC = (value: number): SetValueAT => ({type: SET_VALUE, value})