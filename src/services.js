export const fetchUser = async () => {
    const res = await fetch("https://emp-api-v2.onrender.com/employee");
    const data = await res.json();
    return data;
  };
export const fetchUserByID = async (id) => {
    const res = await fetch(`https://emp-api-v2.onrender.com/employee/${id}`);
    const data = await res.json();
    return data;
  };
  