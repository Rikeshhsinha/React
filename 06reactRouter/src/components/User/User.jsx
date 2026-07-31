import React from 'react'
import { useParams } from 'react-router-dom'




function User() {

    const {userId} = useParams();

    return (
        <>
       <div className="text-3xl text-center mt-10">
      user: {userId}
    </div>
        </>
    )
}

export default User
