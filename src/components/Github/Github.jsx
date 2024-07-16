import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  // const [data, setData] = useState([])

  // useEffect(()=>{
  //   fetch('https://api.github.com/users/shuva0')
  //   .then(response=> response.json())
  //   .then(data=>{
  //       console.log(data);
  //       setData(data)
  //   })
  // },[])

  return (<>
    <div className='bg-gray-600 text-white text-3xl p-4'>
        <h4>{data.name}</h4>
      Github Followers : {data.followers}
        <img src={data.avatar_url} alt="Github picture" width={300} />
      </div>
    </>
  )
}

export default Github

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/shuva0');
    return response.json()
}