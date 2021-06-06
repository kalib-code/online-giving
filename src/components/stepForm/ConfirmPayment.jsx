import React, { useState, useEffect } from "react";

import axios from "axios";

const url = "https://api.paymongo.com/v1";
const sk = btoa("sk_test_LrjDKQYYmW8pNcnxzet7qdCi");
const pk = btoa("pk_test_4pRxZAYAVNuB6mfHAKb3myjZ");
const cpk = "pk_test_4pRxZAYAVNuB6mfHAKb3myjZ";



export default function ConfirmPayment({ formData }) {
  const {
    amount,
    giving_info,
    name,
    email,
    phone,
    address,
    city,
    province,
    intentId,
    card_number,
    card_date,
    card_cvc
  } = formData;
  const [resultAttach, setResultAttach] = useState({});

console.log(resultAttach);

  useEffect(() => {

    const intent = localStorage.getItem("resultIntent")
    const data = JSON.parse(intent);
    console.log(data.data.id)

    const payment = localStorage.getItem("resultPayment")
    const data2 = JSON.parse(payment);

    const postIntent = async () => {
        

    const result3 = await axios(`${url}/payment_intents/${data.data.id}/attach`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Basic ${sk}`,
        },
        data: {
          data: {
              attributes: {
                  payment_method: data2.data.id,
                  client_key: cpk
                }
          },
        },
      });

      setResultAttach(result3.data)
      
    };
    postIntent();

  },[]);

  return (
    <div className="ui segment">
     <h1>Payment Success</h1>
    </div>
  );
}
