import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";

import { connectToDb } from "@utils/database";

import User from "@models/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async session({ session }) {
      // Get the User ID from Database to Session
      const sessionUser = await User.findOne({ email: session.user.email });

      session.user.id = sessionUser._id.toString();

      return session;
    },

    async signIn({ profile }) {
      try {
        await connectToDb();

        // Check whether the current User exists
        const userExists = await User.findOne({ email: profile.email });

        // If not, create and save a Document for the new User
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }

        return true;
      } catch (error) {
        console.log(
          "Error encountered while checking if User exists:",
          error.message
        );

        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
