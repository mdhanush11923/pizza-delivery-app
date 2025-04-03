"use server";
import * as auth from "@/auth";

export async function signInGoogle() {
  return auth.signIn("google");
}
