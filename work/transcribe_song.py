import glob
import json
from pathlib import Path

from faster_whisper import WhisperModel


audio = glob.glob(r"D:\BaiduNetdiskDownload\archives\**\EXO*.mp3", recursive=True)[0]
model = WhisperModel("small", device="cpu", compute_type="int8")
segments, info = model.transcribe(
    audio,
    language="ko",
    beam_size=5,
    best_of=5,
    temperature=0,
    vad_filter=False,
    word_timestamps=True,
    condition_on_previous_text=False,
)

result = {
    "audio": audio,
    "language": info.language,
    "language_probability": info.language_probability,
    "duration": info.duration,
    "segments": [],
}
for segment in segments:
    result["segments"].append(
        {
            "id": segment.id,
            "start": segment.start,
            "end": segment.end,
            "text": segment.text.strip(),
            "words": [
                {"start": word.start, "end": word.end, "word": word.word}
                for word in (segment.words or [])
            ],
        }
    )

out = Path(__file__).with_name("song_transcript.json")
out.write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"saved {out} segments={len(result['segments'])} duration={result['duration']:.2f}")
