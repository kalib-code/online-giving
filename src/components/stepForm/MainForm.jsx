import React from "react";
import axios from 'axios'

const url = "https://api.paymongo.com/v1";
const sk = btoa("sk_test_LrjDKQYYmW8pNcnxzet7qdCi");

export default function MainForm({ formData, navigation, setForm }) {
  const { giving_info, amount, cc } = formData;
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

    localStorage.setItem('resultIntent', JSON.stringify(result.data));
    navigation.next()
  }

  return (
    <form className="ui form">
      <div className=" field ui right labeled input fluid">
        <label className="ui label">PHP</label>
        <input name="amount" type="text" placeholder="Amount" id="amount" value={amount}  onChange={setForm} />
        <div className="ui basic label">.00</div>
      </div>
      <div className=" field ui input fluid">
        <input name= "giving_info" type="text" placeholder="Giving For" value={giving_info}  onChange={setForm} />
      </div>
      <div className="ui checkbox field">
  <input type="checkbox" name="cc" value={cc} onChange={setForm} />
  <label>Credit Card / Debit</label>
  </div>
  <button className="ui button fluid" type="submit" onClick={onSubmit}>Proceed</button>
      </form>
  );
}
