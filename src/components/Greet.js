//it is a functional component
import React from 'react';

 export const Greet = (props) => {
    console.log('props is object with key value pairs of attr from parent');
    console.log(props);
    return (
    <div>
        <h1>GREET functional COMP {props.name}</h1>
        {props.children}
    </div>
    )
}

// export default Greet; //WITH DEFALUT NAME WE WE CAN IMPORT IN APP.JS WIHT ANY OTHER NAME LIKE import MyComp from './components/Greet.js';

