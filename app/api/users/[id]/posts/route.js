import { connectToDb } from "@utils/database";

import Prompt from "@models/prompt";

export const GET = async (_, { params }) => {
  try {
    await connectToDb();

    const prompts = await Prompt.find({ creator: params.id }).populate(
      "creator"
    );

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch Prompts created by the User!", {
      status: 500,
    });
  }
};