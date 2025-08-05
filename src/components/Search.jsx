import React from 'react'
import { useGlobalContext } from '../Context'

const Search = () => {
  const {query, searchPost} = useGlobalContext();
  return (
    <div  className="w-full flex justify-center mt-6 px-4">
        <form onSubmit={(e) => e.preventDefault()}
           className="w-full max-w-md">
          <div >
            <input type="text"
            placeholder='search here'
            value={query}
            onChange={(e) => searchPost(e.target.value)}
            className="w-full p-3 pl-4 pr-10 border border-gray-300 rounded-xl shadow-sm 
            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
            transition"
            />
          </div>
        </form>
    </div>
  )
}

export default Search