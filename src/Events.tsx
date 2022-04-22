import React from 'react'

const Events: React.FC = () => {
    const [value, setValue] = React.useState<string>('');

    const inputRef = React.useRef<HTMLInputElement>(null)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const clickHandler = (e: React.MouseEvent) => {
        console.log(inputRef.current?.value);
    }
    return (
        <div>
            <input type="text" value={value} onChange={handleChange} placeholder="Управляемый"/>
            <input type="text" ref={inputRef}/>
            <button onClick={clickHandler}>Click</button>
            <div style={{ width: '200px', height: '200px', background: 'red' }}></div>
            <div style={{width: '200px', height: '200px', background: 'red', marginTop: '15px'}}></div>
        </div>
    );
}

export default Events