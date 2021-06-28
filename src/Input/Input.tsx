import {InputType} from "../State";
import {useState} from "react";


type InputPropsType = {
    input: InputType
}

export const Input = (props: InputPropsType) => {
    let [changeInput, setChangeInput] = useState('')
    return (
        <div>
            {props.input.h3.map(h =>
                    <div>
                        <h3>{h}</h3>
                        <input
                            value={changeInput}
                            type={h==='Фамилия'|| h==='Техника'? 'textbox': 'date'}
                            onChange={()=>{setChangeInput)}}
                        />
                    </div>
            )}
            <button>ADD</button>
        </div>
    )
}