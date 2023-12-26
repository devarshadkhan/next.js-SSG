// import CSR from '@/app/(CSR)/client-side-rendering/page'
// import React from 'react'

// const page = ({data}) => {
//   return (
//     <div>
//     <CSR data={data} />
//     </div>
//   )
// }

// export async function getServerSideProps() {
//   try {
//     const response = await axios.get("https://dummyjson.com/products");
//     const data = response.data.products || [];
//     console.log("DDDDDDDDDDDDDDDDDDDDD", data);
//     return {
//       props: {
//         data,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching data:", error);

//     return {
//       props: {
//         data: [],
//       },
//     };
//   }
// }
// export default page





import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page