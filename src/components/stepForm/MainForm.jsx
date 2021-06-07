import React from "react";
import axios from "axios";

const url = "https://api.paymongo.com/v1";
const sk = btoa("sk_test_LrjDKQYYmW8pNcnxzet7qdCi");

export default function MainForm({ formData, navigation, setForm }) {
  const { giving_info, amount, payment_type } = formData;
  const converted_amount = parseInt(amount) * 100;


  const onSubmit = async (e) => {
    e.preventDefault();
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
      
      <div className="w-full">
    <select selected={payment_type} className="input" names='payment_type' onSelect={setForm}>
    <option  value ="Credit Card"  className="py-1">Credit Card</option>
    <option value ="Gcash"  className="py-1">Gcash (Unavailable)</option>
    <option value ="GrabPay"  className="py-1">Grab Pay (Unavailable)</option>
</select>
      </div>


      </div>
        
          <button className="btn w-full bottom-0 bg-indigo-700" type="submit" onClick={onSubmit}>
   
        Proceed
      </button>
  
    </form>
  );
}
