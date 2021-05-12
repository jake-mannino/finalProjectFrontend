import axios from "axios";

export function axiosHelper(props) {
  const {
    method = "get",
    url = "/",
    data = {},
    successMethod = (r) => console.log(r),
    failureMethod = (e) => console.log(e),
    token 

  } = props; //default props

  const API_URL = "https://loudfog-yomannino549969.codeanyapp.com:3000";

  return axios({
    method,
    url: API_URL + url,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
    data,
  })
    .then(successMethod)
    .catch(er => console.log(er));
}
