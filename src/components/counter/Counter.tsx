import React, {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CounterChanged} from "../counterChanged/CounterChanged";
import {CounterWindow} from "../counterWindow/CounterWindow";
import {
    incValueAC,
    InitialStateType, setEditModeAC,
    setErrorAC,
    setMaxValueAC,
    setStartValueAC,
    setValueAC
} from "../reducers/counter-reducers";
import {AppRootStateType} from "../store/Store";
import s from './Counter.module.css'


export const Counter = () => {

    let counter = useSelector<AppRootStateType, InitialStateType>(state => state.counter)
    const dispatch = useDispatch()

    const increment = () => {
        dispatch(incValueAC(counter.value))
    }

    const resetValue = () => {
        dispatch(setValueAC(counter.startValue))
    }

    const setEditMode = () => {
        dispatch(setEditModeAC(!counter.isEditMode))
        dispatch(setValueAC(counter.value = counter.startValue))
    }
    const setStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setStartValueAC(counter.startValue = e.currentTarget.valueAsNumber))
        dispatch(setEditModeAC(counter.isEditMode = true))
        setError()
    }
    const setMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValueAC(e.currentTarget.valueAsNumber))
        dispatch(setEditModeAC(counter.isEditMode = true))
        setError()
    }
    const setError = () => {
        dispatch(setErrorAC('Input value and press SET'))
    }
    return (
        <div className={s.CounterApp}>
            {counter.isEditMode
                ? <CounterChanged startValue={counter.startValue}
                                  maxValue={counter.maxValue}
                                  setMaxValue={setMaxValue}
                                  setStartValue={setStartValue}
                                  setEditMode={setEditMode}/>
                : <CounterWindow value={counter.value}
                                 startValue={counter.startValue}
                                 maxValue={counter.maxValue}
                                 increment={increment}
                                 resetValue={resetValue}
                                 setEditMode={setEditMode}
                />
            }
        </div>
    )
}