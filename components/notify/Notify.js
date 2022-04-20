import useProvider from '../hooks/useProvider'
import Notification from './Notification'

const Notify = () => {
  const { state: {notify}, dispatch } = useProvider()

  return (
    <>
    { notify?.error &&
    <div className='fixed top-2 right-5 z-10 bg-orange-500 rounded-lg' style={{width:'200px'}}>
    
       <Notification msg={{msg: notify?.error}}
       handleShow={()=> dispatch({ type: 'NOTIFY', payload: {}})}
       />
       {/* { added && 
       <Notification msg={{msg: 'Added to the cart', title: 'Success'}}
       handleShow={()=> dispatch({ type: 'NOTIFY', payload: {}})}
       color='text-white' />
      } */}
    </div>
    }
    </>
  )
}

export default Notify