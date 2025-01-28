import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../features/filter/filterSlice";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const navigate = useNavigate(); //This will navigate to the Homepage when someone start searching from any page
  const [input, setInput] = useState("");
  // console.log(input);
  const dispatch = useDispatch();

  useEffect(() => {
    const handler = setTimeout(() => {
      if (input) {
        dispatch(setSearchTerm(input));
        navigate("/");
        console.log(input);
      };
    }, 500);

    // return () => {
    //   clearTimeout(handler);
    // }
  }, [dispatch, input, navigate]);

  const handleSearch = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  return (
    <div>
      <input
        className="outline-none border-none mr-2"
        type="search"
        name="search"
        placeholder="Search"
        value={input}
        onChange={handleSearch}
      />
    </div>
  );
}
