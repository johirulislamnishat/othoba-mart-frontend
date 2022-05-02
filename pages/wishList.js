import { useState, useEffect } from "react";
import Router from "next/router";
import { LoadingOutlined } from "@ant-design/icons";
import useIsAuthenticated from "../hooks/useIsAuthenticated";
import WishFull from '../components/wish/WishFull'
import HomeLayout from '../components/layouts/homeLayout'

const WishList = () => {
  const isAuthenticating = useIsAuthenticated({query:{from:'/wishList'}})

  return (
      <HomeLayout>
        { isAuthenticating && <LoadingOutlined style={{fontSize:'large'}} /> }
    <div className='p-8'>
        <WishFull />
    </div>
    </HomeLayout>
  )
}

export default WishList