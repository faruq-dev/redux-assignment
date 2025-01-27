import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../features/filter/filterSlice";

export default function Search(){
    const [input, setInput] = useState('');
    // console.log(input);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(input) {
            dispatch(setSearchTerm(input))
        }
    }, [dispatch, input]);

    const handleSearch = (e) => {
        e.preventDefault();
        setInput(e.target.value)
    }
    return (
        <div >
            <input
                className="outline-none border-none mr-2"
                type="search"
                name="search"
                placeholder="Search"
                value={input}
                onChange={ handleSearch }
            />
        </div>
    )
}