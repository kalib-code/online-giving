import React from 'react'
import axios from "axios";

const url = "https://api.paymongo.com/v1";
const sk = btoa("sk_test_LrjDKQYYmW8pNcnxzet7qdCi");
const pk = btoa("pk_test_4pRxZAYAVNuB6mfHAKb3myjZ");
const cpk = "pk_test_4pRxZAYAVNuB6mfHAKb3myjZ";

export default function Payment({ formData, setForm , navigation }) {
    const { amount , giving_info , card_number , card_date , card_cvc } = formData;

    const onSubmit = async (e)=>{
        e.preventDefault();
        const result = await axios(`${url}/payment_methods`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Basic ${pk}`,
            },
            data: {
              data: {
                attributes: {
                  details: {
                    card_number: card_number,
                    exp_month: 2,
                    exp_year: 2029,
                    cvc: card_cvc,
                  },
                  type: "card",
                },
              },
            },
          });
          localStorage.setItem('resultPayment', JSON.stringify(result.data));
    navigation.next()

    }

    
    return (
        <div>
            <h3>{giving_info}</h3>
            <h1>{amount}</h1>
            <div className="ui form">
            <div className="field">
                   <label>Card Number</label>
                   <div className="field">
                       <input type="text" name="card_name" id="" value={card_number} onChange={setForm} />
                   </div>
               </div>
               <div className="two fields">
               <div className="field">
                   <label>Card Date</label>
                   <div className="field">
                       <input type="email" name="card_date" id="" value={card_date} onChange={setForm} />
                   </div>
               </div>
               <div className="field">
                   <label>CVC</label>
                   <div className="field">
                       <input type="text" name="card_cvc" id="" value={card_cvc} onChange={setForm} />
                   </div>
               </div>
           </div>
           <button className="ui button fluid" onClick={onSubmit} >Proceed</button>        </div>
        </div>
    )
}
