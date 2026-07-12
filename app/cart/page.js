"use client";

import { Button } from "@/components/ui/button";
import {
  clearCart,
  deleteFromCart,
  getCart,
  updateCart,
} from "@/services/apiCart";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { CheckoutModal } from "../_components/CheckoutModal/CheckoutModal";

export default function Cart() {
  const [products, setProducts] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [numOfCartItems, setNumOfCartItems] = useState(0);
  const [loading, setLoading] = useState(true);
  const [cartId, setCartId] = useState("");
  useEffect(() => {
    async function fetchCart() {
      try {
        const res = await getCart();
        setCartId(res.cartId);
        setProducts(res.data.products);
        setTotalCartPrice(res.data.totalCartPrice);
        setNumOfCartItems(res.numOfCartItems);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchCart();
  }, []);
  async function handleRemoveItem(productId) {
    const res = await deleteFromCart(productId);

    if (res.status === "success") {
      setProducts(res.data.products);
      setTotalCartPrice(res.data.totalCartPrice);
      setNumOfCartItems(res.numOfCartItems);
    }
  }
  async function handleUpdateItem(productId, val) {
    const res = await updateCart(productId, val);
    if (res.status === "success") {
      setProducts(res.data.products);
      setTotalCartPrice(res.data.totalCartPrice);
      setNumOfCartItems(res.numOfCartItems);
    }
  }

  async function handleClearCart() {
    const res = await clearCart();
    if (res.message === "success") {
      setProducts([]);
    }
  }
  if (loading) {
    return <div className="flex justify-center py-20">Loading...</div>;
  }
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center text-center py-16 px-6 max-w-md mx-auto">
        <span className="text-slate-800/50 hover:text-green-800 hover:bg-green-200/80 p-4 bg-slate-200/50 rounded-full cursor-pointer duration-300 transition mb-3">
          <FiShoppingBag size={25} />
        </span>

        <h3 className="text-lg font-medium mb-2">Your Cart is empty</h3>

        <p className="text-sm text-stone-500 mb-6">
          Save items you love and find them here later. Tap the heart icon on
          any product to add it.
        </p>

        <Link
          href="/shop"
          className="bg-green-900 text-green-100 rounded-sm px-4 py-1 hover:bg-green-950 transition duration-300"
        >
          Start browsing
        </Link>
      </div>
    );
  }

  return (
    <div className="w-[90%] md:w-[80%] mx-auto flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">Your Cart</h2>{" "}
        <Button
          onClick={handleClearCart}
          className="bg-red-700 text-red-50 rounded-sm px-4 py-1 hover:bg-red-800 transition duration-300 cursor-pointer"
        >
          clear cart
        </Button>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-8">
        <div className="col-span-full sm:col-span-5 flex flex-col gap-4 overflow-y-scroll hide-scrollbar h-[70vh]">
          {products.map((item) => {
            return (
              <div
                key={item._id}
                className="flex gap-5 rounded border p-4 shadow-sm"
              >
                <div className="relative h-24 w-24">
                  <Image
                    src={item.product.imageCover}
                    alt={item.product.title}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>

                <div className="flex flex-1 justify-between">
                  <div>
                    <h2 className="text-lg font-semibold">
                      {item.product.title}
                    </h2>

                    <p className="text-gray-500 text-sm">
                      {item.product.category.name}
                    </p>

                    <p className="text-gray-500 text-sm">
                      Brand: {item.product.brand.name}
                    </p>

                    <p className="text-lg font-bold">£{item.price}</p>
                  </div>

                  <div className="flex flex-col items-end justify-between">
                    <FaTrash
                      className="text-red-500 cursor-pointer"
                      size={20}
                      onClick={() => handleRemoveItem(item.product._id)}
                    />

                    <div className="border border-green-900 rounded overflow-hidden text-sm">
                      <Button
                        className="bg-green-900 text-green-100 cursor-pointer rounded-sm px-4  hover:bg-green-950 transition duration-300"
                        onClick={() => {
                          if (item.count > 1) {
                            handleUpdateItem(item.product._id, item.count - 1);
                          }
                        }}
                      >
                        -
                      </Button>

                      <span className="mx-3">{item.count}</span>

                      <Button
                        className="bg-green-900 text-green-100 cursor-pointer rounded-sm px-4  hover:bg-green-950 transition duration-300"
                        onClick={() =>
                          handleUpdateItem(item.product._id, item.count + 1)
                        }
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="col-span-full sm:col-span-2 bg-green-100 h-fit rounded shadow p-2 flex flex-col gap-4">
          <h3 className="font-bold text-xl border-b border-slate-500 pb-1">
            Order summary
          </h3>

          <div className="flex justify-between font-semibold">
            <p>Total Quantity</p>
            <span>{numOfCartItems}</span>
          </div>

          <div className="flex justify-between font-semibold">
            <p>Total Price</p>
            <span>£{totalCartPrice}</span>
          </div>
          <CheckoutModal cartId={cartId} />
        </div>
      </div>
    </div>
  );
}
