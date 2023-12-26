"use client"
// import { useRouter } from 'next/navigation'
// import React from 'react'

// const DeleteItem = (props) => {
//     const router = useRouter()

//     const handleDelete = (id)=>{
//         const filteredArray = props.id.filter((i) => i.id !== id);
//        console.log(filteredArray)
//        router.push("/client-side-rendering")
//     }   
//   return (
//     <>
//         <button onClick={()=>handleDelete(props.id)}>Delete Item</button>
//     </>
//   )
// }

// export default DeleteItem

// DeleteItem.js (Client Component)
import { useRouter } from 'next/navigation';
import React from 'react';

const DeleteItem = (props) => {
  const router = useRouter();

  const handleDelete = (id) => {
    // Implement the logic to delete the item or make an API call
    console.log(`Item with ID ${id} will be deleted.`);
    props.id.filter((i) => i.id !== id);
    // Use router.push to navigate to the desired page after deletion
    router.push('/client-side-rendering');
  };

  return (
    <>
      <button onClick={() => handleDelete(props.id)}>Delete Item</button>
    </>
  );
};

export default DeleteItem;
