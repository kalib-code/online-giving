import React, { useEffect } from "react";
import { Redirect } from 'react-router-dom';

import { useNot } from "react-hooks-helper";
import axios from "axios";

const url = "https://api.paymongo.com/v1";
const sk = btoa("sk_test_LrjDKQYYmW8pNcnxzet7qdCi");

export default function BillingForm({ formData, navigation, setForm }) {
  const {
    name,
    email,
    phone,
    address,
    city,
    province,
    payment_type,
    amount
  } = formData;

  const [value, notValue] = useNot(false);

  useEffect(() => {
    if (payment_type === "card") {
      notValue(true);
    }
  }, [payment_type]);

  const onSubmit = async (e) => {
    const result = await axios(`${url}/sources`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Basic ${sk}`,
      },
      data: {
        data: {
          attributes: {
            amount: parseInt(amount) * 100,
            redirect: {
              success: "https://church-giving.netlify.app/payments",
              failed: "https://church-giving.netlify.app/payments",
            },
            billing: {
              address: {
                line1: address,
                line2: null,
                city: city,
                country: "PH",
              },
              name: name,
              phone: phone,
              email: email
            },
            type: payment_type,
            currency: "PHP",
          },
        },
      },
    });
    localStorage.setItem("resultSource", JSON.stringify(result.data)); 
    window.location.replace(result.data.data.attributes.redirect.checkout_url );
  };


  return (
    <div>
      <div className="">
        <div className="">
          <label>Name</label>
          <div className="">
            <input
              className="input"
              type="text"
              name="name"
              value={name}
              onChange={setForm}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-full mx-1">
            <label>Email</label>

            <input
              className="input"
              type="email"
              name="email"
              value={email}
              onChange={setForm}
            />
          </div>
          <div className="w-full">
            <label>Phone</label>

            <input
              className="input"
              type="text"
              name="phone"
              value={phone}
              onChange={setForm}
            />
          </div>
        </div>
        <div className="field">
          <label>Address</label>
          <div className="field">
            <input
              className="input"
              type="text"
              name="address"
              value={address}
              onChange={setForm}
            />
          </div>
        </div>
        <div className="flex">
          <div className="w-full mx-1">
            <label>City</label>
            <input
              className="input"
              type="text"
              name="city"
              value={city}
              onChange={setForm}
            />
          </div>
          <div className="w-full">
            <label>Province</label>
            <input
              className="input"
              type="text"
              name="province"
              value={province}
              onChange={setForm}
            />
          </div>
        </div>
        <div className={`${value ? "" : "hidden"}flex justify-between`}>
          <button
            className={`${
              value ? "btn" : "hidden"
            }  mx-1 bg-gray-500 hover:bg-gray-100`}
            onClick={() => navigation.previous()}
          >
            Back
          </button>
          <button
            className={`${value ? "btn" : "hidden"} bg-indigo-700`}
            onClick={() => navigation.next()}
          >
            Next
          </button>
          <button
            className={`${value ? "hidden" : "btn"} bg-indigo-700`}
            onClick={()=> onSubmit()}
          >
            Pay
          </button>
        </div>
      </div>
    </div>
  );
}
