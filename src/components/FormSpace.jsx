import { useState } from 'react';
import verbs from '../verbs.js';
import './FormSpace.css';


function FormSpace ({currentDefinition}) {
    const [inputs, setInputs] = useState('');
    const [definition, setCheckedDefinition] = useState('');
    const [boxClass, setBoxClass] = useState('');

    //Handle user input change
    const handleInputChange = (event) => {
        setInputs(event.target.value);
    };


    const handleCheckAnswer = (event) => {
        event.preventDefault();

        if (inputs.toLowerCase() === currentDefinition.toLowerCase()){
            setBoxClass('correct-box');
            setCheckedDefinition('Correct');
        }
        else {
            setBoxClass('wrong-box')
            setCheckedDefinition('Wrong');
        }
    };

    


    return (
        <form onSubmit={handleCheckAnswer}>
            <label>Guess your answer here: </label>
            <input 
                type='text'
                placeholder='Type your answer here'
                value={inputs}
                onChange={handleInputChange}
                className={boxClass}
            > 
            </input>
            <button type='submit'>Check Answer</button>

        </form>
    );
}

export default FormSpace;