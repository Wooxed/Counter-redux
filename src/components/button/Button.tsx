import React, {MouseEventHandler} from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    title: string
    onClick: MouseEventHandler<HTMLButtonElement>
    disabled: boolean | undefined
}
export const Button = (props: ButtonPropsType) => {
    return (
            <button className={props.disabled ? s.disabled : s.button}
                    disabled={props.disabled}
                    onClick={props.onClick}>
                {props.title}
            </button>
    )
};