import * as z from "zod";
export const loginSchema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),
  password: z.string().nonempty("Password is required").min(6, "min length 6"),
});
export const registerSchema = z
  .object({
    name: z
      .string()
      .nonempty("Name is required")
      .min(2, "min length 2")
      .max(10, "max length 10"),
    email: z
      .string()
      .nonempty("Email is required")
      .email("Invalid email address"),
    password: z
      .string()
      .nonempty("Password is required")
      .min(6, "min length 6"),
    rePassword: z.string().nonempty("rePassword is required"),
    phone: z
      .string()
      .nonempty("Phone is required")
      .regex(/^(010|011|012|015)\d{8}$/),
  })
  .refine((obj) => obj.password === obj.rePassword, {
    path: ["rePassword"],
    error: "Password and rePassword not match!",
  });
export const passwordSchema = z
  .object({
    currentPassword: z.string().nonempty("Password is required"),
    password: z
      .string()
      .nonempty("Password is required")
      .min(6, "min length 6"),
    rePassword: z.string().nonempty("rePassword is required"),
  })
  .refine((obj) => obj.password === obj.rePassword, {
    path: ["rePassword"],
    error: "Password and rePassword not match!",
  });
