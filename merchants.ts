import axios from "axios";

export const Auth = axios.create({
  baseURL: 'https://api.neemo.com.br/api/ecommerce/v1/authenticates',
  headers: {
    "Accept": "application/json",
    'Client-secret': 'ZWZhODJkNzUwOGQ1NWFmMDhlYWM1YTNkNDUyODQzYzE=',
    'Neemo-secret': 'NWU0MzMyZmE3ZjRmOWI2YmZjNDdmMWU1ZWE3MjBlNDc=',
  }
})

export default Auth