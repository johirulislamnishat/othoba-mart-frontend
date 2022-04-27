const Notification = ({msg, handleShow}) => {
    return (
        <div className='text-white font-semibold text-md p-2'>           
            <button className='absolute right-0 top-0 p-2' onClick={handleShow}>X</button>     
            <div className=''>{msg.msg}</div>
        </div>
    )
}

export default Notification