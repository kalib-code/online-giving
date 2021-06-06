import React,{ useEffect} from 'react'




export default function BillingForm({ formData, navigation, setForm }) {
    const { name , email , phone ,address , city , province , amount } = formData;
    

    return (
        <div>
           <div className="ui form">
               <div className="field">
                   <label>Name</label>
                   <div className="field">
                       <input type="text" name="name" id="" value={ name } onChange={setForm} />
                   </div>
               </div>
               <div className="two fields">
               <div className="field">
                   <label>Email</label>
                   <div className="field">
                       <input type="email" name="email" id="" value={email} onChange={setForm} />
                   </div>
               </div>
               <div className="field">
                   <label>Phone</label>
                   <div className="field">
                       <input type="text" name="phone" id="" value={phone} onChange={setForm} />
                   </div>
               </div>
           </div>
           <div className="field">
                   <label>Address</label>
                   <div className="field">
                       <input type="text" name="address" id="" value={address} onChange={setForm} />
                   </div>
               </div>
               <div className="two fields">
               <div className="field">
                   <label>City</label>
                   <div className="field">
                       <input type="text" name="city" id=""  value={city} onChange={setForm} />
                   </div>
               </div>
               <div className="field">
                   <label>Province</label>
                   <div className="field">
                       <input type="text" name="province" id="" value={province} onChange={setForm}/>
                   </div>
               </div>
           </div>
           <button className="ui button  " onClick={()=> navigation.previous()} >Back</button>
           <button className="ui button " onClick={()=> navigation.next()} >Next</button>


           </div>
        </div>
    )
}
