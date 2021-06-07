import React, { useEffect } from "react";

export default function BillingForm({ formData, navigation, setForm }) {
  const { name, email, phone, address, city, province, payment_type } = formData;
  console.log(payment_type);

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
        <div className="flex justify-between">
          <button
            className="btn mx-1 bg-gray-500 hover:bg-gray-100"
            onClick={() => navigation.previous()}
          >
            Back
          </button>
          <button
            className="btn bg-indigo-700"
            onClick={() => navigation.next()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
