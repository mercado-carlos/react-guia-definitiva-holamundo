import React, { useState } from 'react';

const App = () => {
    const [value, setValue] = useState('');

    const handleChange = (e: any) => {
        setValue(e.target.value);
    };

    return (
        <div>
            {value.length < 5 ? <span>Longitud minima de 5</span> : null}
            <input
                type="text"
                name="normal"
                value={value}
                onChange={handleChange}
            />
        </div>
    );
};

export default App;
