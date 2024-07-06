const { default: Prompt } = require("@models/prompt");
const { connectToDB } = require("@utils/database");

export const GET = async (request) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({}).populate("creator");
    return new Response(JSON.stringify(prompts), {
      status: 200,
    });
  } catch (error) {
    return new Response("failed to fetch all prompts", { status: 501 });
  }
};
