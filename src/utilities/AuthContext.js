import { createContext } from "react";
import { axiosHelper } from "./axiosHelper";




   const AuthContext = createContext({});

   export const AuthHelper = () =>{

        const [token, setToken] = useState('')

        useEffect(() => {
            let lsToken = window.localStorage.getItem('token');
            if (lsToken){
                setToken(lsToken)
            }
        }, [])

        function register(registrationData) {
             axiosHelper({method:'post', url: 'api/register', successMethod: saveToken})

        }

        function saveToken(res){
           const APItoken = res.data.data.token;
           setToken(APItoken)
           window.localStorage.setItem('token', APItoken)
        }

        function login(loginData) {
            axiosHelper({method:'post', url: 'oauth/token'})
        }

        function logout(registrationData) {
            axiosHelper({method: 'get', url: 'api/logout'})
 
         }
        //sign up (auth)
        //log in
        //getting user info (token or userdata)
        //log out
        //account manager
            //change password
            //block / unblock
        return { token, register, login, logout }


   } 

   export const AuthProvider = (props) => {

    const initialContext = AuthHelper ()
       return (
           <AuthContext.Provider value={initialContext}>
               {props.children}
           </AuthContext.Provider>
       )
   }

   //create custom hook

export default AuthContext;