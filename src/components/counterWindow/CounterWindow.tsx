import {Button} from "../button/Button";
import s from './CounterWindow.module.css'

type CounterWindowPropsType = {
    value: number
    startValue: number
    maxValue: number
    increment: () => void
    resetValue: () => void
    setEditMode: () => void
}

export const CounterWindow = (props: CounterWindowPropsType) => {
    const numberFullClass = props.value >= props.maxValue ? s.numberFull : s.number
    const disabledSet = props.startValue >= props.maxValue ? props.startValue < 0 : props.maxValue === props.value
    const displayWindow = () => {
        return <div className={numberFullClass}>
            {props.value}
        </div>
    }
    return (
        <div className={s.CounterWindow}>
            {displayWindow()}
            <div className={s.buttons}>
                <Button title={'INC'}
                        onClick={props.increment}
                        disabled={disabledSet}/>
                <Button title={'RESET'}
                        onClick={props.resetValue}
                        disabled={false}/>
                <Button title={'SET'}
                        onClick={props.setEditMode}
                        disabled={false}/>
            </div>
        </div>
    )


}