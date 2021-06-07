import React from "react";
import axios from "axios";

const url = "https://api.paymongo.com/v1";
const sk = btoa("sk_test_LrjDKQYYmW8pNcnxzet7qdCi");
const pk = btoa("pk_test_4pRxZAYAVNuB6mfHAKb3myjZ");
const cpk = "pk_test_4pRxZAYAVNuB6mfHAKb3myjZ";

export default function Payment({ formData, setForm, navigation }) {
  const {
    amount,
    giving_info,
    card_number,
    card_date,
    card_cvc,
    name,
    email,
    address,
    province,
    city,
    phone,
    card_date_year,
    card_date_month
  } = formData;

  const onSubmit = async (e) => {
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
              exp_month: parseInt(card_date_month),
              exp_year: parseInt(card_date_year),
              cvc: card_cvc,
            },
            billing: {
              address: {
                line1: address,
                line2: null,
                city: city,
                state: province,
                postal_code: null,
                country: "PH",
              },
              name: name,
              email: email,
              phone: phone,
            },
            type: "card",
          },
        },
      },
    });
    localStorage.setItem("resultPayment", JSON.stringify(result.data));
    navigation.next();
  };

  return (
    <div>
      <div className="w-full items-center justify-center text-center mt-3 mb-3">
      <h3 className="font-regular text-xl mb-1">{giving_info}</h3>
      <h1 className="font-light text-4xl mb-4"><span>₱</span>{amount} </h1>
      </div>
     
      <div className="ui form">
        <div className="field">
          <label>Card Number</label>
          <div className="field">
            <input
            className="input"
              type="text"
              name="card_name"
              
              value={card_number}
              onChange={setForm}
            />
          </div>
        </div>
        <div className="flex">
          <div className="w-full">
            <label>Card Date</label>
            <div>
            <div className="flex">
              <input
              className="input w-6/12"
                type="text"
                name="card_date_month"
                placeholder="Month"
                
                value={card_date}
                onChange={setForm}
              />
               <input
              className="input w-6/12 mx-4"
                type="text"
                name="card_date_year"
                placeholder="Year"
                
                value={card_date}
                onChange={setForm}
              />
              </div>
            </div>
          </div>
          <div className="w-full mx-2">
            <label>CVC</label>
            
              <input
              className="input"
                type="text"
                name="card_cvc"
                
                value={card_cvc}
                onChange={setForm}
              />
            
          </div>
        </div>
        <button className="btn bg-green-500" onClick={onSubmit}>
          Proceed
        </button>
      </div>
    </div>
  );
}
