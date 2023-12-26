
async function getData() {
    let res = await fetch('https://dummyjson.com/products',{cache:"no-cache"})
    res  = await res.json()
   
    return res
  }
import axios from 'axios';
import DeleteItem from './DeleteItem';

// async function getData() {
//   try {
//     const response = await axios.get('https://dummyjson.com/products');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return null;
//   }
// }
  const CSR  = async  () =>  {

const dataALl = await getData()
  return (
    <div>
      {dataALl.products.map((item) => {
        return (
          <>
            <h6>{item.title}</h6>
            <DeleteItem {...item} />
          </>
        );
      })}
    </div>
  );
};

export default CSR;
