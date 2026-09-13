import asyncio
import json
import re
from pathlib import Path

import edge_tts

ROOT = Path(__file__).resolve().parents[1]
HTML = ROOT / "index.html"
AUDIO = ROOT / "audio"
VOICE = "ko-KR-SunHiNeural"


def collect_texts():
    source = HTML.read_text(encoding="utf-8")
    lyrics_block = source.split("const lyrics = [", 1)[1].split("const vocab = [", 1)[0]
    vocab_block = source.split("const vocab = [", 1)[1].split("].map", 1)[0]
    lyric_texts = re.findall(r"\{ko:'([^']+)'", lyrics_block)
    vocab_texts = re.findall(r"\['([^']+)','[^']+'", vocab_block)
    return lyric_texts, vocab_texts


async def save_audio(text, target):
    if target.exists() and target.stat().st_size > 1000:
        return True
    for attempt in range(3):
        try:
            await edge_tts.Communicate(text, VOICE, rate="-12%", pitch="+0Hz").save(str(target))
            if target.exists() and target.stat().st_size > 1000:
                return True
        except Exception as error:
            if target.exists():
                target.unlink()
            print(f"retry {attempt + 1}/3: {target.name} ({type(error).__name__})", flush=True)
            await asyncio.sleep(1.5 * (attempt + 1))
    return False


async def main():
    lyric_texts, vocab_texts = collect_texts()
    AUDIO.mkdir(exist_ok=True)
    manifest = {"voice": VOICE, "lyrics": {}, "vocab": {}}
    for index, text in enumerate(lyric_texts, 1):
        filename = f"line-{index:02d}.mp3"
        if await save_audio(text, AUDIO / filename):
            manifest["lyrics"][str(index - 1)] = f"audio/{filename}"
    for index, text in enumerate(vocab_texts):
        filename = f"word-{index:02d}.mp3"
        if await save_audio(text, AUDIO / filename):
            manifest["vocab"][str(index)] = f"audio/{filename}"
    (AUDIO / "manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"generated lyrics={len(manifest['lyrics'])}/{len(lyric_texts)} vocab={len(manifest['vocab'])}/{len(vocab_texts)}")


if __name__ == "__main__":
    asyncio.run(main())
