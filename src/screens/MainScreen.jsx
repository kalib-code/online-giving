import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import MainForm from "../components/stepForm/MainForm";
import BillingForm from "../components/stepForm/BillingForm";
import Payment from "../components/stepForm/Payment";
import ConfirmPayment from "../components/stepForm/ConfirmPayment";

const defaultData = {
  giving_info: "",
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
  intentId: "",
};
const steps = [
  { id: "MainForm" },
  { id: "BillingForm" },
  { id: "Payment" },
  { id: "ConfirmPayment" },
];

const payment_types = {
    Credit_card : 'Credit Card',
    Gcash : 'Gcash',
    GrabPay:'GrabPay'}

    


export default function MainScreen() {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, navigation, setForm , payment_types };

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
