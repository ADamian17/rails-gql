import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { executeApiReq } from "./graphql/utils";
import { SignInDocument } from "./__generated__/graphql";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const { email, password } = credentials as Record<
          "email" | "password",
          string
        >;
        const data = await executeApiReq(SignInDocument, {
          email,
          password,
        });

        if (!data?.signInUser?.user && !data?.signInUser?.token) return null;

        return {
          id: data?.signInUser?.user?.id,
          signedJwt: data?.signInUser?.token,
        };
      },
    }),
  ],
});
