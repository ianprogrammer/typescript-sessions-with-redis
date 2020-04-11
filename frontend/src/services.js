import axios from 'axios'
const baseURL = 'http://localhost:4000'


export const loginService = async (email, password) =>{

  const auth = await axios.post(`${baseURL}/login`,{email, password}, {headers: { 'Content-type': 'application/json'}, withCredentials: true})

  return auth
}
export const logoutService = async () =>{

  const auth = await axios.post(`${baseURL}/logout`,{}, {headers: { 'Content-type': 'application/json'}, withCredentials: true})

  return auth
}


export const getHomeData = async () => {
  const data = await axios.get(`${baseURL}/home`,{ withCredentials: true})

  return data
}