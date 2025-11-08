import React from "react";
import useOrderItem from "../../Hook/useOrderItem";
import Loading from "../../Component/Share_Compo.jsx/Loading";

function Product_Management() {
  const { orders } = useOrderItem();



  // যদি কোনো অর্ডার না থাকে বা লোডিং অবস্থায়
  if (!orders || orders.length === 0) return <Loading />;

  // delete function (dummy for now)
  const handleDelete = (id) => {
    alert(`Delete order with id: ${id}`);
  };



  


  return (
    <div className="p-4 md:p-6">
      <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
        Product Management: {orders.length}
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {orders.map((order, index) => (            
          <div
            key={order._id?.$oid || order._id?.toString() || index}
            className="bg-white shadow rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition"
          >

            {/* Product Image */}
            <div className="h-40 bg-gray-100 flex items-center justify-center">
              <img
                src={order.productImg || "https://via.placeholder.com/150"}
                alt={order.name}
                className="h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold">Product: {order.name}</h3>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Email:</span> {order.email || "N/A"}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Phone:</span> {order.phone || "N/A"}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Address:</span> {order.address}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Note:</span> {order.notes}
              </p>

              {/* Order Time - AM/PM সহ readable */}
              <p className="text-sm text-gray-600">
                <span className="font-medium">Order Time:</span>{" "}
                {/* ✅ orderTimeDate কে 12-hour AM/PM format এ দেখানো */}
                {order.orderTimeDate
                  ? new Date(order.orderTimeDate).toLocaleString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true, // 12-hour format with AM/PM
                    })
                  : "N/A"}
              </p>

              {/* Actions */}
              <div className="pt-3 flex justify-between">
                {/* Delete button */}
                <button
                  onClick={() => handleDelete(order._id)}
                  className="text-red-600 border px-2 py-1 rounded border-red-200 hover:text-red-800 text-sm font-medium"
                >
                  ❌ Delete
                </button>

                {/* Status */}
                <button className="inline-block capitalize px-2 py-1 text-xs font-medium rounded bg-yellow-100 text-yellow-700">
                  {order.status}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product_Management;
