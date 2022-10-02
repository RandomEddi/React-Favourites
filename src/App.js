import Header from "./components/Header/Header";
import NewFavModal from "./components/NewFavModal/NewFavModal";
import Main from './components/Main/Main'
import { useEffect, useState } from "react";
import Loading from './components/UI/Loading/Loading'
import Notification from "./components/UI/Notification/Notification";
import { useDispatch, useSelector } from 'react-redux'
import { fetchDataFavourites } from "./store/favourites-action";
import { uiActions } from "./store/slices/ui-slice";
import Paragraph from "./components/UI/Paragraph/Paragraph";

function App() {
  const dispatch = useDispatch()
  const [typeOfFavourites, setTypeOfFavourites] = useState('Movie')
  const favourites = useSelector(state => state.favourites.items)
  const typeChosed = (type) => {
    setTypeOfFavourites(type)
  }
  let isEmpty = favourites.length === 0
  
  useEffect(() => {
    dispatch(fetchDataFavourites())
    setTimeout(() => {
      dispatch(uiActions.setNotification({
        status: "close",
        title: "",
        message: "",
      }))
    }, 1000)
  }, [dispatch])

  return (
    <>
      <Notification />
      <Header onChangeTypes={typeChosed} />
      {!isEmpty && <Main typeOfFavourites={typeOfFavourites} data={favourites}/>}
      <Loading />
      {isEmpty && <Paragraph>Favourite is empty</Paragraph>}
      <NewFavModal />
    </>
  );
}

export default App;
