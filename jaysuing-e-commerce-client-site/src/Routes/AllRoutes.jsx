import { Route, Routes } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Order_Form from "../Component/MainCompo/Order_Form";
import Contact from "../Pages/Contact";

import React from "react";
import Dashboard_Layout from "../Dashboard/Dashboard_Layout";
import All_User from "../Dashboard/Admin/All_User";
import My_order from "../Dashboard/User/My_order";
import Product_Management from "../Dashboard/Admin/Product_Management";
import My_Order_Card from "../Dashboard/User/My_Order_Card";


export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="order-form" element={<Order_Form></Order_Form>}></Route>
        </Route>

        <Route path="dashboard" element={<Dashboard_Layout></Dashboard_Layout>}>

              {/* admin route */}
          <Route path="all-user" element={<All_User></All_User>}></Route>
          
          <Route path="product-management" element={<Product_Management></Product_Management>}></Route>


              {/* user route */}
          <Route path="my-order" element={<My_order></My_order>}></Route>
          <Route path="my-order-card/:id" element={<My_Order_Card></My_Order_Card>}></Route>


        </Route>



      </Routes>
    </div>
  );
}
