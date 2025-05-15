import { Link } from "react-router-dom";

import React from 'react'
import { BiCart, BiCheckCircle } from "react-icons/bi";

const OrderSuccess = () => {
  return (
   <section className="text-xl text-center max-w-4xl mx-auto my-10 py-5 dark:text-slate-100 border dark:border-slate-700">
   
    <div className="my-5">
        <p className="text-green-500 text-7xl mb-5">
            <BiCheckCircle/>

        </p>
        <p>
            Thank you Feranmi for the order
        </p>
        <p>
            Your Order ID: 12urrfevvcvgebcjh
        </p>
    </div>
    <div className="my-5">
        <p>
            Your order is confirmed

        </p>
        <p>
            Please check your email (feranmi22.com) for the ebook.
        </p>
        <p className="my-5">
            payment ID: xyz_123456789

        </p>

    </div>
    <Link to="/products"
         type="button"
         className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-lg px-5 py-2.5 mb-2 dark:hover:bg-blue-700
         dark:bg-blue-600 focus:outline-none inline-flex items-center gap-2">
            continue shopping
            <BiCart/>
    </Link >

   </section>
  )
}

export default OrderSuccess