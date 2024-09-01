import React, {useState, useEffect} from 'react';

const ListItems = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addItem = () => {
        if (!inputValue) {
            return;
        }
        
        setItems([...items, inputValue]);
        setInputValue('');
    };

    useEffect(() => {
        console.log("The ListItems component has been updated");
    }, []);

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter item name"
            />
            <button onClick={addItem}>Add</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListItems;