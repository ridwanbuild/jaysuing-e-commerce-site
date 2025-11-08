import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function useOrderItem() {

    const [orders, setOrders] = useState([])


    useEffect(() => {

            axios.get("https://jaysuing-e-commerce-server-site.vercel.app/order-data")
            .then((res) => {
                setOrders(res.data)
                console.log('data -------------> successfully from server', res.data);
                
            })
            .catch((error) => {
                console.log("data --------> failed from server", error);
                 setOrders([])
            })

    }, [])


  return { orders, setOrders }
}
