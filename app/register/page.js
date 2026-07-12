"use client";
import { Button } from "@/components/ui/button";
import { registerSchema } from "@/schemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { CiShoppingBasket } from "react-icons/ci";
import { registerImg } from "../_assets/assets";
import toast from "react-hot-toast";

export default function Register() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/auth/signup`,
        data,
      );
      if (response.data.message === "success") {
        toast.success("successfully signed up");
        router.push("/login");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };
  return (
    <div className="mx-4">
      <div className="grid grid-cols-2 md:w-[70%] w-full mx-auto mb-6 rounded-lg overflow-hidden border border-green-200">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full  mx-auto  bg-green-100 p-8 shadow  flex flex-col gap-5 "
        >
          <div className="flex justify-center mb-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-3xl font-bold text-green-700 hover:text-green-800 transition-colors"
            >
              <CiShoppingBasket size={32} />
              ShopMarket
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                {...register("name")}
                placeholder="Name"
                className="w-full rounded border border-green-900 px-4 py-2 focus:border-green-600 focus:ring-2 focus:ring-green-200 outline-none transition"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <input
                {...register("email")}
                placeholder="Email"
                className="w-full rounded border border-green-900 px-4 py-2 focus:border-green-600 focus:ring-2 focus:ring-green-200 outline-none transition"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="password"
                {...register("password")}
                placeholder="Password"
                className="w-full rounded border border-green-900 px-4 py-2 focus:border-green-600 focus:ring-2 focus:ring-green-200 outline-none transition"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="password"
                {...register("rePassword")}
                placeholder="Confirm Password"
                className="w-full rounded border border-green-900 px-4 py-2 focus:border-green-600 focus:ring-2 focus:ring-green-200 outline-none transition"
              />
              {errors.rePassword && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.rePassword.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <input
              {...register("phone")}
              placeholder="Phone Number"
              className="w-full rounded border border-green-900 px-4 py-2 focus:border-green-600 focus:ring-2 focus:ring-green-200 outline-none transition"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">
                {errors.phone.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full rounded bg-green-800 py-2 text-base font-semibold text-green-50 hover:bg-green-900 transition duration-300"
          >
            Register
          </Button>

          {
            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-green-700 hover:underline"
              >
                Login
              </Link>
            </p>
          }
        </form>
        <div className="relative">
          <Image src={registerImg} fill alt="customer at the super market" />
        </div>
      </div>
    </div>
  );
}
