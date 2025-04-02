import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { type NextAuthConfig } from "next-auth";
import { loginSchema } from "./schemas";
import bcrypt from "bcryptjs";
import { db } from "./db";

export default {
  providers: [
    GitHub,
    Credentials({
      async authorize(credentials) {
        const validatedFields = loginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;
          const user = await db.user.findUnique({
            where: { email: email },
          });

          if (!user || !user.password) {
            return null;
          }

          const isValid = await bcrypt.compare(password, user.password);
          if (isValid) {
            return user;
          }
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
