import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import MainForm from "../components/stepForm/MainForm";
import BillingForm from "../components/stepForm/BillingForm";
import Payment from "../components/stepForm/Payment";
import ConfirmPayment from "../components/stepForm/ConfirmPayment";
import { useAuthStateChange } from 'react-supabase'



const defaultData = {
  giving_info: "",
  payment_type:'',
  amount: "",
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  province: "",
  card_number: "",
  card_date_year: "",
  card_date_month: "",
  card_cvc: "",
 
};


const steps = [
  { id: "MainForm" },
  { id: "BillingForm" },
  { id: "Payment" },
  { id: "ConfirmPayment" },
];


export default function MainScreen() {

  useAuthStateChange((event, session) => {
    console.log(`Supbase auth event: ${event}`, session)
  })

  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, navigation, setForm  };

  switch (step.id) {
    case "MainForm":
      return <MainForm {...props} />;
    case "BillingForm":
      return <BillingForm {...props} />;
    case "Payment":
      return <Payment {...props} />;
    case "ConfirmPayment":
      return <ConfirmPayment {...props} />;
  }
}
