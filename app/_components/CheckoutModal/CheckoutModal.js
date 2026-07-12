"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { shippingSchema } from "@/schemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export function CheckoutModal({ cartId }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(shippingSchema),
    defaultValues: {
      shippingAddress: {
        details: "",
        phone: "",
        city: "",
      },
    },
  });
  async function createOrder(values, cartId) {
    const res = await fetch("/api/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cartId,
        shippingAddress: values.shippingAddress,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data.status === "success") {
      toast.success("your order has been created successfully");
      router.push("/");
    }
  }

  function onSubmit(values) {
    createOrder(values, cartId);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full rounded bg-green-800 py-2 text-base font-semibold text-green-50 hover:bg-green-900 transition duration-300">
          Proceed to Checkout
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Shipping Address</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register("shippingAddress.details")}
              placeholder="Address Details"
              className="w-full border rounded px-3 py-2"
            />
            <p className="text-red-500 text-sm">{errors.details?.message}</p>
          </div>

          <div>
            <input
              {...register("shippingAddress.phone")}
              placeholder="Phone"
              className="w-full border rounded px-3 py-2"
            />
            <p className="text-red-500 text-sm">{errors.phone?.message}</p>
          </div>

          <div>
            <input
              {...register("shippingAddress.city")}
              placeholder="City"
              className="w-full border rounded px-3 py-2"
            />
            <p className="text-red-500 text-sm">{errors.city?.message}</p>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button
                className=" rounded bg-green-50 py-2 text-base font-semibold text-green-900 hover:text-green-50 shadow hover:bg-green-900 transition duration-300 cursor-pointer"
                type="button"
              >
                Cancel
              </Button>
            </DialogClose>

            <Button
              type="submit"
              className=" rounded bg-green-800 py-2 text-base font-semibold text-green-50 hover:bg-green-900 transition duration-300 cursor-pointer"
            >
              Place Order
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
