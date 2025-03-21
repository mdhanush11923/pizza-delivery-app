import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/db";
import GitHub from "next-auth/providers/github";

// const GITHUB_ID = process.env.AUTH_GITHUB_ID;
// const GITHUB_SECRET = process.env.AUTH_GITHUB_SECRET;

// if (!GITHUB_ID || !GITHUB_SECRET) {
//   throw new Error("Missing github outh credentials");
// }

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    GitHub
  ],
});
