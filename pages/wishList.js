import WishFull from '../components/wish/WishFull'
import HomeLayout from '../components/layouts/homeLayout'

const wishList = () => {
  return (
      <HomeLayout>
    <div className='p-8'>
        <WishFull />
    </div>
    </HomeLayout>
  )
}

export default wishList