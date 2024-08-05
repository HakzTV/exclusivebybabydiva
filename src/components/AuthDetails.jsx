import { useEffect, useState } from "react"
import { auth } from '../firebase';
import { onAuthStateChanged } from "firebase/auth";



const AuthDetails =()=>{
const [authUser, setAuthUser] = useState(null);

useEffect(()=>{
    const listen = onAuthStateChanged(auth, (user) => {
        if(user){
            setAuthUser(user)  
            const uid = user.uid;
            console.log(uid)
        }else {
            setAuthUser(null)
        }
    })
    return () =>{
        listen()
    }
},[])

 
    return(
        <div style={{color: 'white', display: 'none'}}>{authUser ? <><p>{` Signed In as ${authUser.email}`}</p>  </> : <>Signed Out</> }</div>
    )
}
export default AuthDetails