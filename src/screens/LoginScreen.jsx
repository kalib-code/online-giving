import React,{useState} from 'react'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'
import { useForm, useStep } from "react-hooks-helper";





const defaultData = {
    email:'',
    password:''
   
  };

  const steps = [
    { id: "Login" },
    { id: "Sign up" },
  ];


  export default function LoginScreen() {



    const [auth, setAuth] = useForm(defaultData);
    const { step, navigation } = useStep({
      steps,
      initialStep: 0,
    });

const props = { auth, navigation, setAuth ,step };


   switch (step.id) {
    case "Login":
      return <LoginForm {...props} />;
    case "Sign up":
      return <SignUpForm {...props} />;
    
  }
}
