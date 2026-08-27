// Simplified portfolio example — no credentials or production assets.

async function handleConversationTurn(userText) {
  // Start response planning immediately.
  const responsePromise = planStructuredResponse(userText);

  // Play a short acknowledgement while the model is thinking.
  await playReaction("acknowledgement");

  const blocks = await responsePromise;

  // Generate speech for all blocks in parallel.
  const audioPromises = blocks.map((block) => synthesizeSpeech(block.text));

  for (let i = 0; i < blocks.length; i += 1) {
    const block = blocks[i];

    // Preload the next visual to reduce transition delay.
    if (blocks[i + 1]) {
      preloadVideo(blocks[i + 1].videoId);
    }

    const audioUrl = await audioPromises[i];
    await playSynchronizedBlock(block.videoId, audioUrl, block.text);
  }

  resumeListening();
}

async function planStructuredResponse(userText) {
  // In production, the LLM returned validated structured output
  // such as: [{ videoId: "reaction_01", text: "..." }]
  return [
    { videoId: "reaction_01", text: `I heard: ${userText}` },
  ];
}

async function synthesizeSpeech(text) {
  return `audio-for:${text}`;
}

function preloadVideo(videoId) {
  console.log("preload", videoId);
}

async function playReaction(videoId) {
  console.log("reaction", videoId);
}

async function playSynchronizedBlock(videoId, audioUrl, text) {
  console.log("play", { videoId, audioUrl, text });
}

function resumeListening() {
  console.log("listening");
}
