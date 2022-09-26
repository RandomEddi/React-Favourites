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
  return <p className="text-center text-7xl text-purple-900 mt-10 font-bold">{props.children}</p>
}

function App() {
  const dispatch = useDispatch()
  const [typeOfFavourites, setTypeOfFavourites] = useState('Movie')
  const loading = useSelector(state => state.ui.loading)
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
    }, 2000)
  }, [dispatch])
  console.log(favourites)
  return (
    <>
      <Notification />
      <Header onChangeTypes={typeChosed} />
      {!loading && !isEmpty && <Main typeOfFavourites={typeOfFavourites} data={favourites}/>}
      {loading && <Loading />}
      {isEmpty && !loading && <Paragraph>Favourite is empty</Paragraph>}
      <NewFavModal />
    </>
  );
}

export default App;
