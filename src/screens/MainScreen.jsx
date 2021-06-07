import React from 'react'
import { useForm, useStep } from 'react-hooks-helper'
import MainForm from '../components/stepForm/MainForm'
import BillingForm from '../components/stepForm/BillingForm'
import Payment from '../components/stepForm/Payment'
import ConfirmPayment from '../components/stepForm/ConfirmPayment'

const defaultData = {
    giving_info:'',
    amount:'',
    payment_type:'Credit Card',
    name:'',
    email:'',
    phone:'',
    address:'',
    city:'',
    province:'',
    card_number:'4404520000001439',
    card_date_year:'',
    card_date_month:'',
    card_cvc:'',
    intentId: ''
}
const steps =[
    {id: 'MainForm'},
    {id: 'BillingForm'},
    {id: 'Payment'},
    {id: 'ConfirmPayment'},

]

export default function MainScreen() {
    const [formData, setForm] = useForm(defaultData)
    const {step,navigation} = useStep({
        steps,
        initialStep: 0,
    })

    const props = {formData,navigation,setForm}

    switch (step.id){
        case "MainForm":
            return <MainForm {...props} />;
        case "BillingForm":
            return <BillingForm {...props} />;
        case "Payment":
            return <Payment {...props} />;  
            case "ConfirmPayment":
                return <ConfirmPayment {...props} />;  
    }
    return (
        <div>
      
        </div>
    )
}
