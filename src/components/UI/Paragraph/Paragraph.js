import React from 'react'
import { useSelector } from 'react-redux'

const Paragraph = (props) => {
  const loading = useSelector(state => state.ui.loading)
  return !loading && <p className="text-center text-7xl text-purple-900 mt-10 font-bold">{props.children}</p>
}
export default Paragraph