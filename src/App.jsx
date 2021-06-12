import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EwalletScreen from "./screens/EwalletScreen";
import AdminScreen from "./screens/AdminScreen";
import { createClient } from "@supabase/supabase-js";
import { Provider } from "react-supabase";
import FormViewGiving from "./screens/FormViewGiving";
import FormViewLogin from "./screens/FormViewLogin";
import { AuthContext } from "./auth/context";
import { supaBaseKey, supaBaseUrl } from "./keys";
import { useAuth } from './auth/hooks'

const client = createClient(supaBaseUrl, supaBaseKey);

export default function App() {


  const state =  useAuth();

  return (
    <div>
      <Provider value={client}>
        <AuthContext.Provider value={state} >
          <Router>
            <Switch>
              <Route exact path="/" component={FormViewGiving} />
              <Route path="/payments/" component={EwalletScreen} />
              <Route path="/admin/" component={AdminScreen} />
              <Route path="/login/" component={FormViewLogin} />
            </Switch>
          </Router>
        </AuthContext.Provider>
      </Provider>
    </div>
  );
}
