# AI Ded Moroz

Conversational AI prototype with speech recognition, LLM-driven response planning, synthesized voice and semantic video routing.

## Architecture

`Microphone -> VAD -> Speech-to-Text -> LLM -> structured response -> video + TTS -> playback`

## What I built

- character behaviour and prompt architecture
- speech transcription workflow
- structured response chains
- semantic video selection
- parallel audio and video preloading
- fallback handling
- AI-generated video library for reactions and scene routing

## Video system

The prototype uses a tagged library of short reaction clips and longer scene clips. The model can return a `video_id` together with text, and the playback layer resolves that ID to the matching generated video.

Example:

```json
{
  "video_id": "16s_9",
  "text": "..."
}
```

`16s_9` maps to a generated scene tagged around telescope / space / stars.

## Stack

`JavaScript` · `Whisper` · `LLM APIs` · `TTS` · `Web Audio` · `MediaRecorder`

## Public version

- `src/index.html` — sanitized public prototype
- `src/video-library.js` — original generated video library and semantic tags
- `docs/ARCHITECTURE.md` — technical flow
- `examples/orchestration.example.js` — simplified orchestration example

Provider credentials and private production integrations are not included.

---

Built by **Artem Ostvald** and **Zakhar Kondratiev**.  
AI-generated video assets in the public library were created by **Artem Ostvald**.
