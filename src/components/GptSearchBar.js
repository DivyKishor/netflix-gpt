import React, { useRef } from "react";
import { CiSearch } from "react-icons/ci";
import openai from "../utils/openAI";
import { API_OPTIONS } from "../utils/constants";
import autocomplete from 'autocompleter';
import { addGptMovies } from "../utils/gptSlice";
import { useDispatch } from "react-redux";

const GptSearchBar = ({onSearch}) => {
  const searchText = useRef(null);
  const dispatch = useDispatch();


// const input = searchText;
// console.log(input);
// autocomplete({
//     input: input,
//     fetch: function(text, update) {
//         text = text.toLowerCase();
//         // you can also use AJAX requests instead of preloaded data
//         const getAutoComplete = fetch('https://api.themoviedb.org/3/search/keyword?query='+text+'&page=1', API_OPTIONS);
//         const autocompleteData = getAutoComplete.json();
//         //const suggestions = countries.filter(n => n.label.toLowerCase().startsWith(text))
//         const suggestions = autocompleteData.results;
//         update(suggestions);
//     },
//     onSelect: function(item) {
//         input.value = item.label;
//     }
// });

  const handleGPTSearchClick = async (e) => {
    e.preventDefault();
    const gptQuery =
      "Act as a Movie Recomendation system and suggest some movies for the query:" +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like the example given ahead. Example Result: Gadar,Sholay,Don,Jab,Chhichhore";
    //make an api call to open ai gpt and get the response
    //console.log(gptQuery);
    const getResults = await fetch('https://api.themoviedb.org/3/search/movie?query='+searchText.current.value+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
    const data = await getResults.json();
    //console.log(data);
    onSearch(data.results);
    dispatch(addGptMovies(data.results));
    // const getResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    //searchText.current.value = "";
    //console.log(getResults);
  };

  return (
    <div className="pt-[50%] md:pt-[10%] flex justify-center">
      <form
        onSubmit={handleGPTSearchClick}
        className="md:w-1/2 w-full bg-black flex rounded-lg"
      >
        <input
          ref={searchText}
          id={searchText}
          type="text"
          className="m-2 p-2 text-center w-full bg-gray-700 text-white rounded-lg"
          placeholder="What would you like to watch today?"
        />
        <button className="m-2 p-2 text-white text-3xl">
          <CiSearch />
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
