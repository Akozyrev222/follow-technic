import {InputType} from "../State";
import {useState} from "react";


type InputPropsType = {
    input: InputType
}

export const Input = (props: InputPropsType) => {
    let [changeInput, setChangeInput] = useState('')
    let onChangeHandler = (e: string) => {
        setChangeInput(e)
    }
    return (
        <div>
            {props.input.h3.map(h =>
                    <div>
                        <h3>{h}</h3>
                        <input
                            type={h==='Фамилия'|| h==='Техника'? 'textbox': 'date'}
                            onChange={onChangeHandler()}
                        />
                    </div>
            )}
            <button>ADD</button>
        </div>
    )
}