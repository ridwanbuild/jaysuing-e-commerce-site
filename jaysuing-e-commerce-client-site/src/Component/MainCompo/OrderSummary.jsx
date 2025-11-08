import React from "react";
import productImg from "../../assets/hero image/about image.jpg";

export default function OrderSummary({ quantity, setQuantity, price, discount, delivery }) {
  // ✅ handle quantity increase/decrease
  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // ✅ recalc subtotal and total per quantity
  const subTotal = price * quantity;
  const grandTotal = subTotal - discount + delivery;

  return (
    <div className="lg:w-[500px] w-full p-6 border border-blue-300 rounded-lg mt-5">
      <h2 className="text-lg font-semibold mb-4">Order Items ({quantity} Items)</h2>

      {/* Product */}
      <div className="flex items-center justify-between border-b pb-4 mb-4">
        <div className="flex w-full flex-col gap-4">
          <div className="flex items-center justify-between">
            <img className="w-15" src={productImg} alt="" />
            <div>
              <p className="font-medium text-gray-800">$ { (price - discount).toLocaleString() }</p>
              <p className="text-gray-400 line-through text-sm">$ { price.toLocaleString() }</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-800">Removal cream</p>
            <div className="flex items-center mt-1">
              <button
                onClick={handleDecrease}
                className="w-6 h-6 bg-gray-200 rounded hover:bg-gray-300 text-center font-bold"
              >
                -
              </button>
              <span className="px-2">{quantity}</span>
              <button
                onClick={handleIncrease}
                className="w-6 h-6 bg-gray-200 rounded hover:bg-gray-300 text-center font-bold"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span>Sub Total:</span>
          <span>$ {subTotal.toLocaleString()}</span> {/* ✅ formatted */}
        </div>
        <div className="flex justify-between text-red-600">
          <span>Discount:</span>
          <span>-$ {discount.toLocaleString()}</span> {/* ✅ formatted */}
        </div>
        <div className="flex justify-between">
          <span>Delivery Charge:</span>
          <span>$ {delivery.toLocaleString()}</span> {/* ✅ formatted */}
        </div>
        <div className="flex justify-between font-semibold border-t pt-2">
          <span>Total:</span>
          <span>$ {grandTotal.toLocaleString()}</span> {/* ✅ formatted */}
        </div>
      </div>
    </div>
  );
}
