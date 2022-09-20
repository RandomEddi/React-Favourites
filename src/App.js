import Header from "./components/Header/Header";
import NewFavModal from "./components/NewFavModal/NewFavModal";
import Main from './components/Main/Main'
import axios from "axios";
import { useEffect, useState, useCallback, useContext } from "react";
import Loading from './components/UI/Loading/Loading'
import AddFavouriteContext from "./store/context/add-favourite-context";
const url = 'https://react-favourites-default-rtdb.firebaseio.com/favourites'

function App() {
  const ctxModal = useContext(AddFavouriteContext).isModalOpen
  const [loading, setLoading] = useState(false)
  const [favourites, setFavourites] = useState([])
  const [error, setError] = useState(null)
  const [isEmpty, setIsEmpty] = useState(false)
  const [typeOfFavourites, setTypeOfFavourites] = useState('Movie')
  
  const typeChosed = (type) => {
    setTypeOfFavourites(type)
  }
  

  const getRequest = useCallback(async () => {
    setError(null)
    setLoading(true)
    setIsEmpty(false)
    try {
      const response = await axios.get(url + '.json')
      const data = response.data
      let loadedData = []

      for (let item in data) {
        if (data[item].type === typeOfFavourites) {
          loadedData.push({
            id: item,
            title: data[item].title,
            rating: data[item].rating,
            url: data[item].url,
          })
        }
      }
      setFavourites(loadedData.sort((a, b) => b.rating - a.rating))
      if (loadedData.length < 1) {
        setIsEmpty(true)
      } 
    } catch (error) {
      console.log('something went wrong')
      setError(error)
    }
    setLoading(false)
  }
  , [typeOfFavourites])

  useEffect(() => {getRequest()}, [getRequest])

  const deleteHandler = (id) => {
    axios.delete(url + '/' + id + '.json')
  }

  return (
    <>
    <Header onChangeTypes={typeChosed} />
    {!loading && !error && !isEmpty && <Main data={favourites} onDelete={deleteHandler}/>}
    {loading && <Loading />}
    {error && <p className="text-center text-7xl text-purple-900 mt-10 font-bold">Something went wrong</p>}
    {isEmpty && <p className="text-center text-7xl text-purple-900 mt-10 font-bold">Favourite is empty</p>}
    <NewFavModal />
    </>
  );
}

export default App;
