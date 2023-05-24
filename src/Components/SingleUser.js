// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import SingleIlan from "./SingleIlan";

// const SingleUser = ({ user }) => {
//   const [state, setState] = useState([]);
//   const [isFetched, setIsFetched] = useState(false);

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:3001/admin/users/ilan",
//         {
//           params: {
//             user: user._id,
//           },
//         }
//       );
//       setState(response.data.Ilans);
//     } catch (error) {
//       console.error("Kullanıcı ilanlarını getirirken bir hata oluştu:", error);
//     }
//   };

//   const handleFetchUsers = async () => {
//     if (!isFetched) {
//       await fetchUsers();
//       setIsFetched(true);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <h3>
//           {user.name} {user.surname}
//         </h3>
//       </div>
//       <button onClick={handleFetchUsers}>İlanları Getir</button>
//       {isFetched && (
//         <ul>
//           {state.map((ilan, index) => (
//             <SingleIlan ilan={ilan} key={index} />
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default SingleUser;
