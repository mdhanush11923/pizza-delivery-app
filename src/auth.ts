import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/db";
import authConfig from "./auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  callbacks: {
    async jwt({token}) {
      console.log({token})
      return token;
    }
  },
  session: { strategy: "jwt" },
  ...authConfig,
});
