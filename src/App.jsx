import './App.css'
import Search from './components/Search'
import Pagination from './components/Pagination'
import Stories from './components/Stories'



function App() {

  return (
    <>
      <h1 className="text-center text-sm sm:text-lg md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-6">
        API through searching and showing the data
      </h1>
      <Search />
      <Pagination />
      <Stories />
    </>
  )
}

export default App
