import React from "react";
import ReactDOM from "react-dom"
import "./Payment.css"

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function Payment() {
    const createOrder=(data, actions)=> {return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: "30.0",
            },
          },
        ],
      });
    }
      const onApprove=(data, actions)=>{
        return actions.order.capture();
      }
    return (

        <div className="container">
            <div className="container--buttons">
                <PayPalButton
                createOrder={(data, actions) => createOrder(data, actions)}
                onApprove={(data, actions) => onApprove(data, actions)}/>
            </div>
        </div>
    )
}

export default Payment
