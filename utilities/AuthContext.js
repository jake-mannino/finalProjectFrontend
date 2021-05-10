import { createContext } from "react";




   const AuthContext = createContext({});

   export const AuthHelper = () =>{

        const [token, setToken] = useState('')

        useEffect(() => {
            window.localStorage.getItem('token');
            if (lsToken){
                setToken(lsToken)
            }
        }, [])

        function register(registrationData) {

        }

        function login(registrationData) {

        }

        function logout(registrationData) {
 
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