import { jwtDecode } from "jwt-decode";
import Credentials from "next-auth/providers/credentials";

export const authOptions = {
  pages: { signIn: "/login" },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let response = await fetch(`${process.env.BACKEND}/auth/signin`, {
          method: "POST",
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        let payload = await response.json();
        console.log(payload);
        if (payload.message === "success") {
          const decoded = jwtDecode(payload.token);
          return {
            id: decoded.id,
            user: payload.user,
            token: payload.token,
          };
        } else {
          throw new Error(payload.error || "wrong credentials");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user?.user;
        token.token = user?.token;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token?.user;
      return session;
    },
  },
};
