# AI Ded Moroz

Commercial conversational AI prototype with speech recognition, LLM-driven response planning, synthesized voice and semantic video routing.

<p align="center">
  <img src="docs/screenshots/dedmoroz-tree.webp" width="420" alt="AI Ded Moroz generated scene" />
</p>

## My role

I worked on the **AI implementation and generative media layer**, not the final production UI.

- character behaviour and prompt architecture
- speech transcription workflow
- structured response chains
- semantic video routing
- parallel TTS and video preloading
- fallback handling
- AI-generated reaction and scene library

`Microphone -> VAD -> Speech-to-Text -> LLM -> structured response -> video + TTS -> playback`

## Runtime prototype

The dark interface below was a development/testing environment for validating the conversational pipeline, logs, subtitles and playback flow — not the intended final product UI.

![Runtime testing interface](docs/screenshots/dedmoroz-runtime.webp)

## Generated media

The prototype uses a tagged library of short reactions and longer scenes. The model can return a `video_id` together with text, and the playback layer resolves it to the matching generated clip.

| Story scene | Gift scene |
| --- | --- |
| ![Ded Moroz with a book](docs/screenshots/dedmoroz-book.webp) | ![Ded Moroz with a gift](docs/screenshots/dedmoroz-gift.webp) |

The public video library and the generated assets shown here were created by **Artem Ostvald**.

## Stack

`JavaScript` · `Whisper` · `LLM APIs` · `TTS` · `Web Audio` · `MediaRecorder`

## Project status

The original AI prototype was operational. This public repository is a **sanitized portfolio reconstruction**, not an end-to-end production build: provider backends, credentials and private integrations are intentionally omitted.

The public reconstruction exposes the generated-media demo flow. Live STT / LLM / TTS mode is deliberately disabled unless the private backend is supplied.

Final production integration was handled by another team and was not completed.

## Repository

- `src/index.html` — sanitized public reconstruction and media demo
- `src/video-library.js` — generated video library and semantic tags
- `docs/ARCHITECTURE.md` — technical flow and latency strategy

---

Built by **Artem Ostvald** and **Zakhar Kondratiev**.
