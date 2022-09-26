import Header from "./components/Header/Header";
import NewFavModal from "./components/NewFavModal/NewFavModal";
import Main from './components/Main/Main'
import { useEffect, useState } from "react";
import Loading from './components/UI/Loading/Loading'
import Notification from "./components/UI/Notification/Notification";
import { useDispatch, useSelector } from 'react-redux'
import { fetchDataFavourites } from "./store/favourites-action";
import { uiActions } from "./store/slices/ui-slice";

function Paragraph (props) {
  return (<p className="text-center text-7xl text-purple-900 mt-10 font-bold">{props.children}</p>)
}

/* TODO
* Notification 
* obnovlenie
*/

function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [typeOfFavourites, setTypeOfFavourites] = useState('Movie')
  const uiState = useSelector(state => state.ui)
  const favourites = useSelector(state => state.favourites.items)
  let isEmpty = favourites.length === 0
  const typeChosed = (type) => {
    setTypeOfFavourites(type)
  }
  useEffect(() => {
    setLoading(true)
    dispatch(fetchDataFavourites(typeOfFavourites))
    setTimeout(() => {
      dispatch(uiActions.setNotification({
        status: "close",
        title: "",
        message: "",
      }))
    }, 2000)
    setLoading(false)
  }, [typeOfFavourites, dispatch])

  return (
    <>
      {!uiState.modalIsOpen && uiState.notification && <Notification 
      title={uiState.notification.title} 
      message={uiState.notification.message}
      status={uiState.notification.status}/>}
      <Header onChangeTypes={typeChosed} />
      {!loading && !isEmpty && <Main data={favourites}/>}
      {loading && <Loading />}
      {isEmpty && <Paragraph>Favourite is empty</Paragraph>}
      {uiState.modalIsOpen && <NewFavModal />}
    </>
  );
}

export default App;
