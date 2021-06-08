import React, { useState, useEffect } from "react";

import axios from "axios";

const url = "https://api.paymongo.com/v1";
const sk = btoa("sk_test_LrjDKQYYmW8pNcnxzet7qdCi");
const pk = btoa("pk_test_4pRxZAYAVNuB6mfHAKb3myjZ");
const cpk = "pk_test_4pRxZAYAVNuB6mfHAKb3myjZ";

export default function ConfirmPayment({ formData, navigation }) {
  const { name } = formData;
  const [resultAttach, setResultAttach] = useState({});

  useEffect(() => {
    const intent = localStorage.getItem("resultIntent");
    const data = JSON.parse(intent);

    const payment = localStorage.getItem("resultPayment");
    const data2 = JSON.parse(payment);

    const postIntent = async () => {
      const result3 = await axios(
        `${url}/payment_intents/${data.data.id}/attach`,
        {
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
                client_key: cpk,
              },
            },
          },
        }
      );

      setResultAttach(result3.data);
    };
    postIntent();
  }, []);
  if (!resultAttach) {
    return (
      <>
        <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
        <h2 class="text-center text-white text-xl font-semibold">Loading...</h2>
        <p class="w-1/3 text-center text-white">
          This may take a few seconds, please don't close this page.
        </p>
      </>
    );
  } else {
    return (
      <>
        <div className=" text-center font-bold text-xl my-5">
          Thank you for giving
        </div>
        <div
          className="btn bg-green-500 my-10 "
          onClick={(event) => (window.location.href = "/")}
        >
          Give Again
        </div>
      </>
    );
  }
}
