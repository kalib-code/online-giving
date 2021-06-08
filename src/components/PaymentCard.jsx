import React from 'react'

export default function PaymentCard(props) {
    console.log(props.Credit_card)
    return (
        <div>
            <h1>{props.Credit_card}</h1>
        </div>
    )
}
