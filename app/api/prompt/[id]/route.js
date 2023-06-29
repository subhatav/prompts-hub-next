import { connectToDb } from "@utils/database";

import Prompt from "@models/prompt";

export const GET = async (_, { params }) => {
  try {
    await connectToDb();

    const prompt = await Prompt.findById(params.id).populate("creator");

    if (!prompt) return new Response("Prompt is not found!", { status: 404 });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Error encountered while fetching the Prompt!", {
      status: 500,
    });
  }
};

export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json();

  try {
    await connectToDb();

    // Find the existing Prompt by ID
    const existingPrompt = await Prompt.findById(params.id);

    if (!existingPrompt) {
      return new Response("Prompt is not found!", { status: 404 });
    }

    // Update the Prompt with new data
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();

    return new Response("Prompt has been updated successfully.", {
      status: 200,
    });
  } catch (error) {
    return new Response("Error encountered while updating the Prompt!", {
      status: 500,
    });
  }
};

export const DELETE = async (_, { params }) => {
  try {
    await connectToDb();

    // Find the Prompt by ID and delete it
    await Prompt.findByIdAndRemove(params.id);

    return new Response("Prompt has been deleted successfully.", {
      status: 200,
    });
  } catch (error) {
    return new Response("Error encountered while deleting the Prompt!", {
      status: 500,
    });
  }
};
