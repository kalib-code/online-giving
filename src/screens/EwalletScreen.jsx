import React, { useEffect, useState } from "react";
import axios from "axios";
const url = "https://api.paymongo.com/v1";
const sk = btoa("sk_test_LrjDKQYYmW8pNcnxzet7qdCi");
const pk = btoa("pk_test_4pRxZAYAVNuB6mfHAKb3myjZ");

export default function EwalletScreen({}) {
  const [result, setResult] = useState({});
  const [load, setLoad] = useState(false);
  const [status, setStatus] = useState(true);
  const [success, setSuccess] = useState(false);
  const source = JSON.parse(localStorage.getItem("resultSource"));
  const status_payment = source.data.attributes;

  const createPay = async () => {
    const createrResult = await axios(`${url}/payments`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Basic ${sk}`,
      },
      data: {
        data: {
          attributes: {
            amount: status_payment.amount,
            source: {
              type: "source",
              id: source.data.id,
            },
            description: "Destiny City Church",
            currency: "PHP",
            statement_descriptor: "Giving",
          },
        },
      },
    });
    if (createrResult.data.data.attributes.status === "paid") {
      setSuccess(true);
    } else {
      setStatus(false);
    }
  };

  useEffect(() => {
    if (!load) {
      const getStatus = async () => {
        const result = await axios.get(`${url}/sources/${source.data.id}`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Basic ${pk}`,
          },
        });

        setResult(result.data);
      };

      getStatus();
      if (!success) {
        createPay();
        setLoad(true);
      }
    }
  }, [status]);

  return (
    <div>
     <div className=" text-center font-bold text-xl my-5">
          Thank you for giving
        </div>
        <div
          className="btn bg-green-500 my-10 "
          onClick={(event) => (window.location.href = "/")}
        >
          Give Again
        </div>
    </div>
  );
}
