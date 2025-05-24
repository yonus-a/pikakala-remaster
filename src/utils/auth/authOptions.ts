import CredentialsProvider from "next-auth/providers/credentials";
import authorizeUser from "@/server-actions/auth/authrizeUser";
import { AuthorizeSchema } from "@/types/authorize";
import safePars from "../validation/safePars";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials: any): Promise<any> {
        const error = safePars(AuthorizeSchema, credentials);
        if (error) throw new Error(error);
        const user = await authorizeUser(credentials);

        return {
          id: user.id,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user, account }: any) {
      if (account) token = Object.assign(token, user);
      return token;
    },
    async session({ session, token }: any) {
      session.user.id = token.id;
      return session;
    },
  },
};
