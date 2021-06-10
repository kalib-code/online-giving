import React, { useState  } from "react";
import axios from "axios";

const url = "https://api.paymongo.com/v1";
const sk = btoa("sk_test_LrjDKQYYmW8pNcnxzet7qdCi");

export default function MainForm({ formData, navigation, setForm }) {
  const { giving_info, amount, payment_type } = formData;
  const converted_amount = parseInt(amount) * 100;

  const [validInfo, setValidInfo] = useState(true);
  const [validAmount, setValidAmount] = useState(true);
  const [validType, setValidType] = useState(true);

  localStorage.removeItem("resultIntent");
  localStorage.removeItem("resultPayment");
  localStorage.removeItem("resultSource");

  const isValid = () => {
    const textRegex = new RegExp("^$|s+");
    const numRegex = new RegExp("^d+$");

    // if (textRegex.test(giving_info)) {
    //   setValidInfo(false);
    //   return false;
    // }

    if (numRegex.test(amount)) {
      setValidAmount(false);
      return false;
    }

    if(!payment_type){
      setValidAmount(false);
    }

    return true;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const valid = isValid();

    if (valid) {
      if (payment_type === "card") {
        onCC();
      } else {
        onEwallet();
      }
    } else {
      console.log(valid);
    }
  };

  const onEwallet = () => {
    navigation.next();
  };

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
            statement_descriptor: giving_info,
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
          className={`${
            validAmount ? "input" : "border-red-500 border-2 w-full"
          } `}
          name="amount"
          type="number"
          placeholder="Amount"
          id="amount"
          value={amount}
          onChange={setForm}
        />

        <input
          className={`${
            validInfo ? "input" : "border-red-500 border-2 w-full"
          } `}
          name="giving_info"
          type="text"
          placeholder="Giving For"
          value={giving_info}
          onChange={setForm}
        />

        <div className={`${
            validType ? " " : "border-red-500 border-2 w-full"
          }radio-group flex flex-col w-full justify-around my-4`}>
          <div className="radio flex w-full items-center p-2 mb-2 border relative">
            <input
              className="mr-2"
              name="payment_type"
              type="radio"
              value="card"
              checked={payment_type === "card"}
              onChange={setForm}
            />
            <span> Credit Card</span>
            <svg
              className="w-8 h-8 absolute right-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
          </div>
          <div className="radio flex w-full items-center p-2 mb-2 border relative">
            <input
              className="mr-2"
              name="payment_type"
              type="radio"
              value="gcash"
              checked={payment_type === "gcash"}
              onChange={setForm}
            />
            <span> Gcash</span>
          </div>
          <div className="radio flex w-full items-center p-2 mb-2 border relative">
            <input
              className="mr-2"
              name="payment_type"
              type="radio"
              value="grab_pay"
              checked={payment_type === "grab_pay"}
              onChange={setForm}
            />
            <span> Grab Pay</span>
          </div>
        </div>
      </div>

      <button
        className="btn w-full bottom-0 bg-indigo-700"
        type="submit"
        onClick={onSubmit}
      >
        Proceed
      </button>
    </form>
  );
}
