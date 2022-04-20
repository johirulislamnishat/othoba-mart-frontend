import { useContext } from 'react'
import { Context } from './../context/ContextProvider';


const useProvider = () => {
  return (
    useContext(Context)
  )
}

export default useProvider