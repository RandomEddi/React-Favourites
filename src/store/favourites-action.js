import { favouriteActions } from "./slices/favourites-slice"
import axios from 'axios'
import { uiActions } from "./slices/ui-slice"

const url = 'https://react-favourites-default-rtdb.firebaseio.com/favourites'

export const fetchDataFavourites = () => {
  return async(dispatch) => {
    const fetchData = async () => {
      dispatch(uiActions.setLoadingTrue())
      const response = await axios.get(url + '.json')
      const data = await response.data
      let loadedData = []

      for (let item in data) {
          loadedData.push({
            id: item,
            type: data[item].type,
            title: data[item].title,
            rating: data[item].rating,
            url: data[item].url,
          })
      }
      dispatch(uiActions.setLoadingFalse())
      if (loadedData && loadedData.length < 1) {
        return []
      }
      return loadedData
    }
    try {
      const endedData = await fetchData()
      
      dispatch(favouriteActions.replaceFavourites({
        items: endedData
      }))
      dispatch(uiActions.setNotification({
        status: "success",
        title: "Successfully!",
        message: 'Data successfully fetched!'
      }))
    } catch (e) {
      console.log('Something went wrong!')
      dispatch(uiActions.setNotification({
        status: "error",
        title: "Error...",
        message: 'Fetch data went wrong!'
      }))
    }
  }
}

export const deleteFavourite = (id) => {
  return dispatch => {
    try {
      axios.delete(url + '/' + id + '.json')
      dispatch(favouriteActions.deleteFavourite({id}))
      dispatch(uiActions.setNotification({
        status: "success",
        title: "Successfully!",
        message: 'Deletion Successful!'
      }))
    } catch {
      dispatch(uiActions.setNotification({
        status: "error",
        title: "Error...",
        message: 'Deletion went wrong!'
      }))
    }
  }
}

export const addFavourite = (item) => {
  return dispatch => {
    try {
      axios.post(url + '.json', item).then(res => {
        dispatch(favouriteActions.addFavourite(
          {item: {
          rating: item.rating,
          title: item.title,
          type: item.type,
          url: item.url,
          id: res.data.name
        }}
        ))
      })
      dispatch(uiActions.setNotification({
        status: "success",
        title: "Successfully!",
        message: 'Adding favourite successfully!'
      })) 
    } catch {
      dispatch(uiActions.setNotification({
        status: "error",
        title: "Error...",
        message: 'Adding favourite went wrong!'
      }))
    }
  }
}