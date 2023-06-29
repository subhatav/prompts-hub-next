import { connectToDb } from "@utils/database";

import Prompt from "@models/prompt";

export const POST = async (request) => {
  const { userId, prompt, tag } = await request.json();

  try {
    await connectToDb();
    const fresh = new Prompt({ creator: userId, prompt, tag });

    await fresh.save();
    return new Response(JSON.stringify(fresh), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new Prompt!", { status: 500 });
  }
};
