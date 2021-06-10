import React, {useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Givingcreen from "./screens/GivingScreen";
import EwalletScreen from "./screens/EwalletScreen";
import LoginScreen from "./screens/LoginScreen";
import AdminScreen from "./screens/AdminScreen";
import { supaBaseKey, supaBaseUrl } from "./keys";
import { createClient } from "@supabase/supabase-js";
import { Provider } from "react-supabase";
import FormViewGiving from "./screens/FormViewGiving"
import FormViewLogin from "./screens/FormViewLogin"


const client = createClient(supaBaseUrl, supaBaseKey);






export default function App() {

 


  return (
    <div>
       <Provider value={client}>
        <Router>
         
                <Switch>
                <Route exact path="/" component={FormViewGiving} />
                <Route path="/payments/" component={EwalletScreen} />
                <Route path="/admin" component={AdminScreen}/>
                <Route path="/login/" component={FormViewLogin} />
              </Switch>
         
         
       
        </Router>
   
    </Provider>
    </div>
  )
}

