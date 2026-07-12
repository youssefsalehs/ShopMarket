"use client";
import { Button } from "@/components/ui/button";
import { loginSchema } from "@/schemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { CiShoppingBasket } from "react-icons/ci";
import { loginImg } from "../_assets/assets";

export default function Login() {
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
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    let res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
      callbackUrl: "/",
    });
    if (res.ok) {
      toast.success("you logged in successfuly");
      window.location.href = "/";
    } else {
      toast.error(res?.error);
    }
  };
  return (
    <div className="mx-4">
      <div className="grid grid-cols-2 md:w-[70%] w-full mx-auto mb-6 rounded-lg overflow-hidden border border-green-200">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full   mx-auto h-full bg-green-100 p-8 shadow   flex flex-col gap-5 "
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

          <div className="flex flex-col gap-4">
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
          </div>

          <Button
            type="submit"
            className="w-full rounded bg-green-800 py-2 text-base font-semibold text-green-50 hover:bg-green-900 transition duration-300"
          >
            login
          </Button>

          {
            <p className="text-center text-sm text-gray-600">
              create new account
              <Link
                href="/register"
                className="font-semibold text-green-700 hover:underline"
              >
                Register
              </Link>
            </p>
          }
        </form>
        <div className="relative">
          <Image src={loginImg} fill alt="vegetables" />
        </div>
      </div>
    </div>
  );
}
