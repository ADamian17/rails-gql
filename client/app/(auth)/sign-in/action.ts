"use server";
import { signIn } from "@/auth";
import { redirect } from "next/navigation";

export const signInAction = async (fd: FormData) => {
  try {
    const email = fd.get("email") as string;
    const password = fd.get("password") as string;

    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
  } catch (error) {
    console.log(error);
  } finally {
    redirect("/");
  }
};
