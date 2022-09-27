import axios from "axios";

const API = axios.create();


export const createCustomer = async (tokenId, values) => {
    try {
      return await API.post(
        process.env.REACT_APP_URL + "/v1/stitchapp/api",
        {
            token: `Bearer ${tokenId}`,
            endPoint: `v1/customers`,
            httpMethod: "POST",
            request: {
              
            }
        }
      )
    }catch (e) {
        throw e;
    }
};






// import API from "../api";

// export const getAllPartner = async (tokenId) => {
//   try {
//     return await API.post(
//       process.env.REACT_APP_AUTH0_BACKEND_API_URL + "/v1/stitchapp/api",
//       {
//         token: `Bearer ${tokenId}`,
//         endPoint: `/v1/partners/linked-partners`,
//         httpMethod: "GET",
//       }
//     );
//   } catch (e) {
//     throw e;
//   }
// };
