const countValue  = document.querySelector('#moving-text');

const increment = () =>{
    // get value from UI
        let value = parseInt(countValue.innerText);
        // update the value
        value = value +1;
    // set value into UI
        countValue.innerText = value ;
}

const decrement = () =>{
    // get value from UI
    let value = parseInt(countValue.innerText);
    // update the value
    value = value -1;
// set value into UI
    countValue.innerText = value ;
    
}