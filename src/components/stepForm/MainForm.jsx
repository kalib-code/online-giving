import React,{useState} from "react";
import axios from "axios";
import { Listbox } from '@headlessui/react'
import { useForm } from "react-hooks-helper";





const url = "https://api.paymongo.com/v1";
const sk = btoa("sk_test_LrjDKQYYmW8pNcnxzet7qdCi");


export default function MainForm({ formData, navigation, setForm }) {
  


  const { giving_info, amount, payment_type, card_number } = formData;
  const converted_amount = parseInt(amount) * 100;
  console.log(payment_type)


  localStorage.removeItem("resultIntent");
  localStorage.removeItem("resultPayment");
  localStorage.removeItem("resultSource");
  

const onSubmit = async (e)=>{
  e.preventDefault();

if( payment_type === "card"){

    onCC();

}else{

  onEwallet();

}


  }

  const onEwallet = async () =>{

    navigation.next();

  }

  const onCC = async () => {
  
    const result = await axios(`${url}/payment_intents`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Basic ${sk}`,
      },
      data: {
        data: {
          attributes: {
            amount: converted_amount,
            payment_method_allowed: ["card"],
            payment_method_options: {
              card: { request_three_d_secure: "any" },
            },
            currency: "PHP",
            description: "Destiny City Church",
            statement_descriptor: "Test",
          },
        },
      },
    });

    localStorage.setItem("resultIntent", JSON.stringify(result.data));
    navigation.next();
  };


  return (
    <form className="relative">
      <div className="">
        <input
          className="input"
          name="amount"
          type="text"
          placeholder="Amount"
          id="amount"
          value={amount}
          onChange={setForm}
        />
     
        <input
          className="input"
          name="giving_info"
          type="text"
          placeholder="Giving For"
          value={giving_info}
          onChange={setForm}
        />
      <div className="radio-group flex w-full justify-around my-4">

      <div className="radio">
          <input name='payment_type' type="radio" value="card" checked={ payment_type === 'card'} onChange={setForm} />
         <span> Credit Card</span>
      </div>
      <div className="radio">
          <input name='payment_type' type="radio" value="gcash" checked={ payment_type === 'gcash'} onChange={setForm} />
         <span> Gcash</span>
      </div>
      <div className="radio">
          <input name='payment_type' type="radio" value="grab_pay" checked={ payment_type === 'grab_pay'} onChange={setForm} />
         <span> Grab Pay</span>
      </div>

      </div>

      </div>
        
          <button className="btn w-full bottom-0 bg-indigo-700" type="submit" onClick={onSubmit}>
   
        Proceed
      </button>
  
    </form>
  );
}
