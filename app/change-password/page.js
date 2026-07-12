"use client";
import { Button } from "@/components/ui/button";
import { passwordSchema } from "@/schemas/schemas";
import { changePassword } from "@/services/apiUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { signOut } from "next-auth/react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MdLockPerson } from "react-icons/md";
export default function ChangePassword() {
  const form = useForm({
    defaultValues: {
      currentPassword: "",
      password: "",
      rePassword: "",
    },

    resolver: zodResolver(passwordSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  async function onSubmit(data) {
    try {
      const result = await changePassword(data);
      if (result.message !== "success") {
        toast.error(result.message || "Failed to change password");
        return;
      }

      toast.success("Password changed successfully");
      signOut({ callbackUrl: "/login" });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  }
  return (
    <div className="w-[90%] md:w-[80%] mx-auto">
      <div className="flex flex-col items-center justify-center mb-6">
        <MdLockPerson size={40} className="text-green-800" />
        <p
          href="/"
          className="flex items-center gap-2 text-3xl font-bold text-green-700 hover:text-green-800 transition-colors"
        >
          Change Password
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:w-[60%] mx-auto bg-green-50  h-full p-8 shadow   flex flex-col gap-5 mb-8"
      >
        <div className="flex flex-col gap-4">
          <div>
            <input
              {...register("currentPassword")}
              placeholder="currentPassword"
              type="password"
              className="w-full rounded border border-green-900 px-4 py-2 focus:border-green-600 focus:ring-2 focus:ring-green-200 outline-none transition"
            />
            {errors.currentPassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.currentPassword.message}
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
          <div>
            <input
              type="password"
              {...register("rePassword")}
              placeholder="rePassword"
              className="w-full rounded border border-green-900 px-4 py-2 focus:border-green-600 focus:ring-2 focus:ring-green-200 outline-none transition"
            />
            {errors.rePassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.rePassword.message}
              </p>
            )}
          </div>
        </div>

        <Button
          type="submit"
          className="w-full cursor-pointer rounded bg-green-800 py-2 text-base font-semibold text-green-50 hover:bg-green-900 transition duration-300"
        >
          change password
        </Button>
      </form>
    </div>
  );
}
