
// async function getData() {
//     let res = await fetch('https://dummyjson.com/products',{cache:"no-cache"})
//     res  = await res.json()
   
//     return res
//   }
import axios from 'axios';
import DeleteItem from './DeleteItem';

async function getData() {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}


  const CSR  = async  () =>  {
    // const handleDelete = async (itemId) => {
    //   // Implement the logic to delete the item with the specified ID
    //   try {
    //     await axios.delete(`https://dummyjson.com/products/${itemId}`);
    //     console.log(`Item with ID ${itemId} deleted successfully`);
    //   } catch (error) {
    //     console.error(`Error deleting item with ID ${itemId}:`, error);
    //   }
    // };

const dataALl = await getData()
  return (
    <div>
      {dataALl.products.map((item) => {
        return (
          <>
            <h6>{item.title}</h6>
            <p>{item.description}</p>
            {/* <button onDelete={() => handleDelete(item.id)}>delete</button> */}
            <DeleteItem  item={item.id}/>
          </>
        );
      })}
    </div>
  );
};

export default CSR;
