# Architecture

The original prototype is a browser-based conversational loop designed to keep the interaction feeling continuous.

## Flow

1. **Listen** — microphone input is captured with browser media APIs.
2. **Detect speech** — the app waits for a spoken turn before processing audio.
3. **Transcribe** — speech is sent to a speech-to-text model with Russian-language constraints.
4. **Plan response** — an LLM receives the child utterance, current character context and interaction rules.
5. **Return structure** — the model responds with a sequence of blocks containing text plus a media identifier.
6. **Prepare media** — TTS requests for response blocks are started in parallel while the current reaction is playing.
7. **Route video** — each response block is paired with a matching pre-generated reaction clip.
8. **Playback** — audio and video are played as a continuous chain, then the app returns to listening mode.

## Latency strategy

The prototype reduces dead air by overlapping work:

- response generation begins while the short reaction is already playing;
- TTS for multiple blocks is requested in parallel;
- the next video is preloaded before the current block ends.

## Reliability

The interaction loop includes fallbacks for failed model, audio and video requests so the character can recover instead of freezing.

## Public scope

This repository is a sanitized portfolio reconstruction of the original working prototype. It includes the public interaction flow, architecture notes, screenshots, and the generated video routing library. Provider credentials, private prompts, backend implementations, and production integrations are intentionally omitted.
