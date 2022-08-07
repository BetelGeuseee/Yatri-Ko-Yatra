import React,{useState,useEffect}from 'react'
import { useNavigate } from 'react-router-dom';
import fire from '../fire';
import Home from './Home';
import SignIn from './SignIn';
import '../components/components_css/SignUp.css'

const SignUp = ()=>{
  const navigate = useNavigate();
  const [user,setUser] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword]= useState('');
  const [emailError,setEmailError]= useState('');
  const [passwordError,setPasswordError]=useState('');
  const [hasAccount,setHasAccount]=useState(false);

  const clearInputs = ()=>{
    setEmail('');
    setPassword('');

  }
  const clearErrors = ()=>{
    setEmailError('');
    setPasswordError('');
  }
  const handleLogin =()=>{
    clearErrors();
       /* fire.auth().signInWithEmailAndPassword(email,password).catch(err => {
          switch(err.code){
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
              setEmailError(err.message);
              break;
            case "auth/wrong-password":
              setPasswordError(err.message);  
              break;    
          }
        }).then(()=>{
          navigate('/')
        }) */
        fire.auth().signInWithEmailAndPassword(email,password).then((userCredential)=>{
          navigate('/');
        }).catch((error)=>{
          const errMsg = error.message;
          alert(errMsg);
        })
  }

  const handleSignUp = ()=>{
     clearErrors();
   /* fire.auth().createUserWithEmailAndPassword(email,password)
    .catch(err => {
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);  
          break;    
      }
   
    }); */
    fire.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate('/');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });

  }

   const handleLogout = ()=>{
    fire.auth().signOut();
   }
   const authListener = ()=>{
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        clearInputs();
        setUser(user);
      }else{
        setUser('');
      }
    })
   }
   useEffect(()=>{
      authListener();
   },[])

   return (
    <div className="App">
     
      <SignIn email ={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin}
      handleSignUp={handleSignUp} hasAccount={hasAccount} setHasAccount={setHasAccount} emailError={emailError}
      passwordError={passwordError}/>
     
    </div>
  );

}
export default SignUp;