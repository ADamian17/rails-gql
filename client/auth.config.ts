import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    authorized: ({ auth }) => {
      return !!auth?.user;
    },
    session: async ({ session, token }) => {
      session.user = token.user as typeof session.user;

      return session;
    },
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user;
      }

      return token;
    },
  },
  providers: [], // Add an empty array or provide the necessary provider configurations
} satisfies NextAuthConfig;
