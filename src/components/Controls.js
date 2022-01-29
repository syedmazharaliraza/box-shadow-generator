import { useState,useEffect } from 'react';


function Controls(props) {
    const [horizontal, setHorizontal] = useState(10);
    const [vertical, setVertical] = useState(10);
    const [blur, setBlur] = useState(10);
    const [spread, setSpread] = useState(10);
    const [color, setColor] = useState('#000000');
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        props.valuesInputHandler({
            horizontal,
            vertical,
            blur,
            spread,
            color,
            checked
        });
    }, [checked,horizontal,vertical,blur,spread,color]);
    
    
    const onChangeHandler = (setFunction,event) => {
        if (setFunction === setChecked) {
            setChecked((prevVal) => !prevVal);
        }
        else {
            setFunction(event.target.value);
        }
    };


    return (
        <>
            <label htmlFor="horizontal">Horizontal value</label>
            <input type="range" id="horizontal" min="-200" max="200" value={horizontal} onChange={onChangeHandler.bind(this, setHorizontal)} />

            <label htmlFor="vertical">Vertical value</label>
            <input type="range" id="vertical" min="-200" max="200" value={vertical} onChange={onChangeHandler.bind(this, setVertical)} />

            <label htmlFor="blur">Blur value</label>
            <input type="range" id="blur" min="0" max="200" value={blur} onChange={onChangeHandler.bind(this, setBlur)} />

            <label htmlFor="spread">Spread value</label>
            <input type="range" id="spread" min="-200" max="200" value={spread} onChange={onChangeHandler.bind(this, setSpread)} />

            <label htmlFor="color">Colour</label>
            <input type="color" id="color" value={color} onChange={onChangeHandler.bind(this, setColor)} />

            <div className="switch">
                <label>
                    Outline
                    <input type="checkbox" checked={checked} onChange={onChangeHandler.bind(this,setChecked)} />
                    <span className="lever"></span>
                    Inset
                </label>
            </div>
        </>
    )
}

export default Controls;
