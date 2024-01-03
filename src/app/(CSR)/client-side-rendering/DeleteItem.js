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
// import { useRouter } from 'next/navigation';
import React from 'react';
import axios from 'axios';
const DeleteItem = ({item}) => {
  // console.log(item);
  // const router = useRouter();

  // const handleDelete = (id) => {
  //   // Implement the logic to delete the item or make an API call
  //   console.log(`Item with ID ${id} will be deleted.`);
  //   props.id.filter((i) => i.id !== id);
  //   // Use router.push to navigate to the desired page after deletion
  //   router.push('/client-side-rendering');
  // };

  const handleDelete = async (itemId) => {
    console.log(itemId);
      // Implement the logic to delete the item with the specified ID
      try {
        await axios.delete(`https://dummyjson.com/products/${itemId}`);
        console.log(`Item with ID ${itemId} deleted successfully`);
      } catch (error) {
        console.error(`Error deleting item with ID ${itemId}:`, error);
      }
    };
  return (
    <>
      <button onClick={() => handleDelete(item)}>Delete Item</button>
    </>
  );
};

export default DeleteItem;
