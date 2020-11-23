import {useState} from "react";

const useToggle = (initalVal = false) => {
    const[state, setState] = useState(initalVal);
    const toggle = () => {
        setState(!state);
    };

    return [state, toggle];
}

export default useToggle;