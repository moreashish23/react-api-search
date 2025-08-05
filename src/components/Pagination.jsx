import React from 'react'
import { useGlobalContext } from '../Context'

const Pagination = () => {
  const {page, nbPages, getPrevPage, getNextPage} = useGlobalContext();
  return (
    <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center mt-6">
        <button 
        onClick={() => getPrevPage()}
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50">
          PREV
        </button>
        <p className="text-gray-700 font-semibold">
          Page <span className="text-indigo-600">{page + 1}</span> of <span className="text-indigo-600">{nbPages}</span>
        </p>
        <button 
        onClick={() => getNextPage()}
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50">
          NEXT
        </button>
    </div>
  )
}

export default Pagination