import { fetchUser, fetchUserByID } from '@/services';
import React from 'react'

const page = async (props) => {
  
  const currentUserID = props.params.user
  const fetchApi = await fetchUserByID(currentUserID);
  // const oneUser = currentUserID
  console.log(fetchApi);
  // console.log(props.params.user);
  return (
    <div>
      <h1>{fetchApi.name}</h1>
      <h1>{fetchApi.email}</h1>
      <h1>{fetchApi.PhoneNo}</h1>
      <h1>{fetchApi.Status}</h1>
      <h1>{fetchApi.JobType}</h1>
      <h1>{fetchApi.role}</h1>
    </div>
  )
}

export default page


// export async function generateStaticParams() {
//   const users = await fetchUser(); // Assuming fetchUser returns an array of users
//   return users.map((user) => ({
//     params: { user: user.id.toString() },
//   }));
// }
export async function generateStaticParams() {
    const getU =  fetchUser() // make all users API call 
    const response = await getU
    return response.map((res)=>({
      user:res.id.toString() // daynamic page name
    }))
}