import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import Loader from './Loader';

function Protected({children, authentication}) {
    const navigate = useNavigate();
    const authStatus = useSelector((state) => state.auth.status)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        if (authentication) {
            if (!authStatus) {
                navigate("/login")
            }
        } else{
            if (authStatus) {
                navigate("/")
            }
        }
        setLoading(false)
   },[navigate, authStatus, authentication])

    return loading ? <Loader /> : (
        <div>
            {children}
      </div>
  )
}

export default Protected