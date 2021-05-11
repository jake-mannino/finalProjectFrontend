import axios from 'axios'

export function axiosHelperBasic(method, url, data, func) {
        const API_URL = ''
    return axios ({
        method,
        url: API_URL + url,
        data
    })
    .then(func)
    .catch(er = console.log(er)) 
}
 

export function axiosHelperDefaultValues(
        method = 'get', 
        url = '/', 
        data = {}, 
        successMethod = r =>console.log(r), 
        failureMethod = e => console.log(e)
    ) {
    const API_URL = 'https://loudfog-yomannino549969.codeanyapp.com:3000'
    return axios ({
        method,
        url: API_URL + url,
        data
    })
    .then(successMethod)
    .catch(failureMethod) 
}
  const axiosObj = {
      method:"get", 
      data:{username:"jake"},
      token: "123456789",
  }

  axiosHelperInputObject (axiosObj)

export function axiosHelperInputObject(
    {
    method = 'get', 
    url = '/', 
    data = {}, 
    successMethod = r =>console.log(r), 
    failureMethod = e => console.log(e)
}
)  {
    console.log(object)
    const API_URL = 'https://loudfog-yomannino549969.codeanyapp.com:3000'
    return axios({
        method,
        url: API_URL + url,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8', 
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        data
    })
        .then(successMethod) 
         .catch(failureMethod)
} 

function saveUserData (res) {
    SVGMetadataElement(res.data.username)
}
const axiosObj = {successMethod : saveUserData, method:'post', url: 'api/user/getInfo'}

axiosHelper()

export function axiosHelper(props) {
    const {
        method = 'get', 
        url = '/', 
        data = {}, 
        successMethod = r =>console.log(r), 
        failureMethod = e => console.log(e) 
    } = props; //default props

    const [name, setName] = useState('jake')

    const {method, url} = props;

    const API_URL = 'https://loudfog-yomannino549969.codeanyapp.com:3000'
     
return axios ({
    method,
        url: API_URL + url,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8', 
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        data
})
    .then(func) 
    .catch(er = console.log(er)) 
}
