import React, { useEffect, useState } from 'react'
import "./Home.scss"
import axios from "axios"
import moment from "moment"
import {Link} from "react-router-dom"


const Home = () => {

    const [allUsers, setAllUsers] = useState([])

    const fetchAllUsers = async () => {
        const url = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
        const res = await axios.get(url)
        // console.log(res?.data)
        setAllUsers(res?.data)
    }

    useEffect(()=>{
        fetchAllUsers()
    },[])

    console.log(allUsers)

  return (
    <div className='body'>
        <div className='cardHolder'>
            {allUsers.map((e)=>(
                <Link to={"/detail"}> 
                 <div className='card' >
                <div className='organization'>{e?.orgName}</div>
                <div className='userName'>{e?.userName}</div>
                <div className='email'>{e?.email}</div>
                <div className='phoneNumber'>{e?.phoneNumber}</div>
                <div className='phoneNumber'>{moment(e?.lastActiveDate).format("YYYY, MMMM DD dddd hh mm ")}</div>
                <div className='phoneNumber'>Pending</div>
            </div>
                </Link>
              
            ))}
            
        </div>
    </div>
  )
}

export default Home