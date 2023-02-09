import {ChangeEvent} from "react";
import {Button} from "../button/Button";
import s from './CounterChanged.module.css'

type CounterChangedPropsType = {
    startValue: number
    maxValue: number
    setMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    setStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    setEditMode: () => void

}

export const CounterChanged = (props: CounterChangedPropsType) => {
    const enableSet = props.maxValue > props.startValue && props.startValue >= 0
    const finalInputClass = enableSet ? s.defaultInput : s.errorInput

    return (
        <div className={s.CounterChanged}>
            <div className={s.setInput}>
                <div className={s.setValue}>
                    <h2>max value:</h2>
                    <input className={s.defaultInput}
                           key={'MAX_VALUE'}
                           value={props.maxValue}
                           onChange={props.setMaxValue}
                           type={'number'}
                    />
                </div>
                <div className={s.setValue}>
                    <h2>start value:</h2>
                    <input className={finalInputClass}
                           key={'START_VALUE'}
                           value={props.startValue}
                           onChange={props.setStartValue}
                           type={'number'}
                    />
                </div>
            </div>
            <div className={'number' ? s.buttons : s.disabled}>
                <Button key={'setValue'} title={'set'} onClick={props.setEditMode} disabled={!enableSet}
                />
            </div>
        </div>
    )


}