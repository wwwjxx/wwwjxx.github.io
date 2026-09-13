from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter


OUT = Path(r"D:\Codex-output\exo-butterfly-girl-lyrics-grammar-long.png")

FONT_KR_BOLD = r"C:\Windows\Fonts\malgunbd.ttf"
FONT_CN = r"C:\Windows\Fonts\msyh.ttc"
FONT_CN_BOLD = r"C:\Windows\Fonts\msyhbd.ttc"


META = {
    "title": "나비소녀(Don't Go) (Korean Ver.) - EXO",
    "phonetic": "那比嗖尼(Don't Go) (Korean Ver.) - EXO",
    "credits": "词：서지음    曲：Hyuk Shin / DK / Jordan Kyle / John Major / Jeffrey Patrick Lewis    编曲：Hyuk Shin / Jordan Kyle / John Major",
}


rows = [
    ("조그만 날갯짓 널 향한 이끌림", "扇动小小的蝶翼 你对我的吸引力", "走可满 那给几 挠 hiang韩 一个林"),
    ("나에게 따라오라 손짓한 것 같아서", "像是在招手呼唤我跟你一起走", "那诶给 大啦哦啦 宋几摊 扣 卡他搜"),
    ("애절한 눈빛과 무언의 이야기", "哀切的眼神和无言的话语", "诶草蓝 努比刮 木翁内 一呀gi"),
    ("가슴에 회오리가 몰아치던 그날 밤", "心中刮起旋风的那个晚上", "嘎森没 会哦里嘎 莫啦气东 可那 半"),
    ("오묘한 그대의 모습에 넋을 놓고", "为你的奇妙神秘失了魂魄", "哦妙韩 可带诶 莫丝呗 闹给 喏够"),
    ("하나뿐인 영혼을 뺏기고", "唯一的灵魂被夺走", "哈那本宁 泳红内 背gi够"),
    ("그대의 몸짓에 완전히 취해서", "完全沉醉于你的身影", "可带诶 蒙几塞 完从尼 催嘿搜"),
    ("숨 쉬는 것조차 잊어버린 나인데", "连呼吸都遗忘的我", "宋 嘘嫩 扣走恰 一走剖林 那因带"),
    ("왈츠처럼 사뿐히 앉아", "华尔兹般脚步轻盈", "挖此凑龙 撒本尼 安那"),
    ("눈을 뗄 수 없어", "坐在一边目不转睛", "努内 得 苏 欧扫"),
    ("시선이 자연스레 걸음마다", "视线不由自主", "西宋尼 加严丝类 勾楞吗他"),
    ("널 따라가잖아", "跟随你的每个足迹", "挠 大啦嘎赞那"),
    ("날 안내해줘", "指引我吧", "那 安内嘿做"),
    ("Yeah 그대가 살고 있는 곳에", "将我一起带到", "Yeah 可带嘎 撒够 一嫩 够塞"),
    ("나도 함께 데려가줘", "你生活的地方去", "那都 韩给 带撩嘎做"),
    ("Oh 세상의 끝이라도 뒤따라갈 테니", "哪怕是世界尽头 也跟着你前进", "Oh 塞桑诶 哥起啦都 对大啦嘎 忒尼"),
    ("부디 내 시야에서 벗어나지 말아줘", "千万不要脱离我的视野", "不地 内 西呀诶搜 波搜那几 马啦做"),
    ("아침이 와도 사라지지 말아줘 oh", "即使清晨来临也不要消失", "啊亲迷 哇都 撒啦几几 马啦做 oh"),
    ("꿈을 꾸는 걸음", "梦想的脚步", "古没 古嫩 勾楞"),
    ("그댄 나만의 아름다운 나비", "你是只属于我的美丽蝴蝶", "可但 那满内 啊楞他温 那比"),
    ("Oh woo-hoo-hoo oh yeah- woo-hoo-hoo yeah woo-hoo-hoo", "", ""),
    ("어디서 왔는지 어디로 가는지", "不知从何而来从何而去", "哦地搜 哇嫩几 哦地咯 嘎嫩几"),
    ("친절히 여기까지 마중을 와준 너", "贴心地到这里来迎接我的你", "亲草里 哟gi嘎几 吗中额 哇君 挠"),
    ("가파른 오르막 깎아진 절벽도", "即便是崎岖险峻的悬崖峭壁", "嘎帕楞 哦了吗 嘎嘎进 草表都"),
    ("걱정마 무엇도 두려울 것이 없으니", "别担心 什么可怕的事都不会发生", "勾从吗 木哦都 度撩乌 扣西 欧丝尼"),
    ("너는 뽐내 우아한 자태", "你独一无二优雅的姿态", "挠嫩 嘣内 乌啊韩 加忒"),
    ("오 난 몇 번이고 반하고", "不管多少次我都会入迷", "哦 南 苗 嘣尼够 半那够"),
    ("사랑은 이렇게 나도 모르게", "爱情就这样 在不知不觉间", "撒朗恩 一漏给 那都 莫了给"),
    ("예고도 없이 불시에 찾아와", "毫无征兆突然降临", "耶够都 欧西 不西诶 恰加哇"),
    ("왈츠처럼 사뿐히 앉아 눈을 뗄 수 없어", "华尔兹般脚步轻盈 坐在一边目不转睛", "挖此凑龙 撒本尼 安那 努内 得 苏 欧扫"),
    ("시선이 자연스레 걸음마다", "视线不由自主", "西宋尼 加严丝类 勾楞吗他"),
    ("널 따라가잖아 oh no", "跟随你的每个足迹", "挠 大啦嘎赞那 oh no"),
    ("날 안내해줘", "指引我吧", "那 安内嘿做"),
    ("Yeah 그대가 살고 있는 곳에", "将我一起带到", "Yeah 可带嘎 撒够 一嫩 够塞"),
    ("나도 함께 데려가줘", "你生活的地方去", "那都 韩给 带撩嘎做"),
    ("Oh 세상의 끝이라도 뒤따라갈 테니", "视线不由自主哪怕是世界尽头 也跟着你前进", "Oh 塞桑诶 哥起啦都 对大啦嘎 忒尼"),
    ("부디 내 시야에서 벗어나지 말아줘", "跟随你的每个足迹千万不要脱离我的视野", "不地 内 西呀诶搜 波搜那几 马啦做"),
    ("아침이 와도 사라지지 말아줘 oh", "指引我吧即使清晨来临也不要消失", "啊亲迷 哇都 撒啦几几 马啦做 oh"),
    ("꿈을 꾸는 걸음", "梦想的脚步", "古没 古嫩 勾楞"),
    ("그댄 나만의 아름다운 나비", "你是只属于我的美丽蝴蝶", "可但 那满内 啊楞他温 那比"),
    ("낯선 곳을 헤맨다 해도", "即使在陌生的地方徘徊", "那宋 够丝 嘿们他 嘿都"),
    ("길을 잃어버린대도", "即使迷失方向", "gil了 一咯剖林带都"),
    ("누구보다 솔직한 나의 맘을 따를거야", "也要跟随我那比谁都真挚的心", "努谷啵他 嗖几看 那诶 满没 大了勾呀"),
    ("조용히 눈에 띄는 몸짓", "静静地跃入视野的身影", "走用hi 努内 第嫩 蒙几"),
    ("강하고 부드러운 눈빛", "强大又温柔的目光", "康哈够 不的漏温 努比"),
    ("거부할 수 없는 나니까 yeah", "我根本无法拒绝啊", "勾不哈 苏 欧嫩 那尼嘎 yeah"),
    ("날 데려가줘", "带我走吧", "那 带撩嘎做"),
    ("Yeah 그대가 살고 있는 곳에", "将我一起带到", "Yeah 可带嘎 撒够 一嫩 够塞"),
    ("나도 함께 데려가줘", "你生活的地方去", "那都 韩给 带撩嘎做"),
    ("Oh 세상의 끝이라도 따라갈게 oh no", "哪怕是世界尽头 也跟着你前进", "Oh 塞桑诶 哥起啦都 大啦嘎给 oh no"),
    ("내 시야에서 벗어나지 말아줘", "千万不要脱离我的视野", "内 西呀诶搜 波搜那几 马啦做"),
    ("아침이 와도 사라지지 말아줘 oh", "即使清晨来临也不要消失", "啊亲迷 哇都 撒啦几几 马啦做 oh"),
    ("조그마한 손짓", "一个小小举动", "走可吗韩 宋几"),
    ("나의 가슴엔 회오리가 친다", "在我心里刮起旋风", "那诶 嘎森们 会哦里嘎 亲他"),
    ("Woo-hoo-hoo woo-hoo-hoo woo-hoo-hoo", "", ""),
]


def has_hangul(text):
    return any("\uac00" <= ch <= "\ud7a3" for ch in text)


def units(text):
    if not has_hangul(text):
        return [text] if text else []
    out = []
    buf = ""
    for ch in text:
        if "\uac00" <= ch <= "\ud7a3":
            if buf.strip():
                out.append(buf.strip())
                buf = ""
            out.append(ch)
        elif ch.isspace():
            if buf.strip():
                out.append(buf.strip())
                buf = ""
        else:
            buf += ch
    if buf.strip():
        out.append(buf.strip())
    return out


def phonetic_units(text, count):
    if not text or count <= 0:
        return [""] * count
    parts = []
    i = 0
    while i < len(text):
        ch = text[i]
        if ch.isspace():
            i += 1
            continue
        if ch.isascii() and (ch.isalnum() or ch in "'-"):
            j = i + 1
            while j < len(text) and text[j].isascii() and (text[j].isalnum() or text[j] in "'-"):
                j += 1
            parts.append(text[i:j])
            i = j
        else:
            parts.append(ch)
            i += 1
    if len(parts) == count:
        return parts
    if len(parts) < count:
        return parts + [""] * (count - len(parts))
    merged = []
    for k in range(count):
        start = round(k * len(parts) / count)
        end = round((k + 1) * len(parts) / count)
        merged.append("".join(parts[start:end]))
    return merged


def grammar_label(token):
    t = token.strip()
    if not t:
        return ""
    if all(ord(c) < 128 for c in t):
        return "英文/语气"
    if t in {"Yeah", "Oh", "oh", "woo-hoo-hoo", "yeah"}:
        return "英文语气"
    if t.endswith(("은", "는", "이", "가")) and len(t) > 1:
        return "主语/主题"
    if t.endswith(("을", "를")):
        return "宾语"
    if t.endswith(("에", "에서")):
        return "位置/方向"
    if t.endswith(("과", "와")):
        return "并列：和"
    if t.endswith(("처럼",)):
        return "比喻：像"
    if t.endswith(("마다",)):
        return "每..."
    if t.endswith(("라도",)):
        return "让步：即使"
    if t.endswith(("테니",)):
        return "原因/承诺"
    if t.endswith(("줘", "가줘", "해줘")):
        return "请求：请..."
    if t.endswith(("마", "말아줘")):
        return "禁止/请求"
    if t.endswith(("지만",)):
        return "转折：但是"
    if t.endswith(("고",)):
        return "连接：并且"
    if t.endswith(("서",)):
        return "原因/顺接"
    if t.endswith(("던", "한", "는", "린", "진", "운")):
        return "定语：...的"
    if t.endswith(("지",)):
        return "疑问嵌入"
    if t.endswith(("도",)):
        return "也/即使"
    return "词义/语法块"


def chunk_line(kr):
    return kr.split()


def fit_font(draw, text, font_path, max_width, start, min_size=14):
    size = start
    while size >= min_size:
        font = ImageFont.truetype(font_path, size)
        b = draw.textbbox((0, 0), text, font=font)
        if b[2] - b[0] <= max_width:
            return font
        size -= 2
    return ImageFont.truetype(font_path, min_size)


def text_size(draw, text, font):
    b = draw.textbbox((0, 0), text, font=font)
    return b[2] - b[0], b[3] - b[1]


W = 1900
PAD_X = 120
TOP = 270
SECTION_H = 365
H = TOP + 90 + SECTION_H * len(rows)

bg = Image.new("RGB", (W, H), "#332112")
overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
od = ImageDraw.Draw(overlay)
for y in range(0, H, 8):
    shade = int(24 + 19 * y / max(1, H))
    od.rectangle([0, y, W, y + 8], fill=(shade, 18, 10, 32))
bg = Image.alpha_composite(bg.convert("RGBA"), overlay).convert("RGB").filter(ImageFilter.SMOOTH)
draw = ImageDraw.Draw(bg)

title_font = ImageFont.truetype(FONT_KR_BOLD, 58)
meta_font = ImageFont.truetype(FONT_CN, 28)
num_font = ImageFont.truetype(FONT_CN, 25)
text_color = "#eadfce"
muted = "#c9b9a6"
line_color = "#d8cbbb"
phonetic_color = "#d5bea1"

for text, font, yy, color in [
    (META["title"], title_font, 45, text_color),
    (META["phonetic"], meta_font, 120, muted),
    (META["credits"], meta_font, 166, muted),
]:
    tw, _ = text_size(draw, text, font)
    draw.text(((W - tw) / 2, yy), text, font=font, fill=color)

y = TOP
for idx, (kr, zh, ph) in enumerate(rows, 1):
    chunks = chunk_line(kr)
    token_groups = [units(c) for c in chunks]
    unit_total = sum(len(g) for g in token_groups) + max(0, len(chunks) - 1) * 1.4
    unit_w = (W - PAD_X * 2) / max(1, unit_total)
    kr_size = min(56, max(24, int(unit_w * 0.95)))
    ph_size = min(30, max(16, int(unit_w * 0.56)))
    kr_font = ImageFont.truetype(FONT_KR_BOLD, kr_size)
    latin_font = ImageFont.truetype(FONT_CN_BOLD, kr_size)
    ph_font = ImageFont.truetype(FONT_CN, ph_size)

    draw.text((PAD_X, y - 8), f"{idx:02d}", font=num_font, fill="#9e8a74")
    ph_parts = phonetic_units(ph, sum(len(g) for g in token_groups)) if ph and has_hangul(kr) else []
    ph_i = 0
    group_centers = []
    x = PAD_X
    for group in token_groups:
        local = []
        for u in group:
            cx = x + unit_w / 2
            font = kr_font if has_hangul(u) else latin_font
            tw, _ = text_size(draw, u, font)
            draw.text((cx - tw / 2, y + 20), u, font=font, fill=text_color)
            if has_hangul(u) and ph_i < len(ph_parts):
                syll = ph_parts[ph_i]
                ptw, _ = text_size(draw, syll, ph_font)
                draw.text((cx - ptw / 2, y + 92), syll, font=ph_font, fill=phonetic_color)
                ph_i += 1
            elif has_hangul(u):
                ph_i += 1
            local.append(cx)
            x += unit_w
        group_centers.append(sum(local) / len(local))
        x += unit_w * 1.4

    if zh:
        zh_font = fit_font(draw, zh, FONT_CN, W - PAD_X * 2, 31, 20)
        tw, _ = text_size(draw, zh, zh_font)
        draw.text(((W - tw) / 2, y + 128), zh, font=zh_font, fill=muted)

    line_y1, line_y2 = y + 176, y + 216
    for cx in group_centers:
        draw.line([(cx, line_y1), (cx, line_y2)], fill=line_color, width=3)
        r = 5
        draw.ellipse([cx - r, line_y1 - r, cx + r, line_y1 + r], fill=line_color)
        draw.ellipse([cx - r, line_y2 - r, cx + r, line_y2 + r], fill=line_color)

    col_w = (W - PAD_X * 2) / max(1, len(chunks))
    for cx, c in zip(group_centers, chunks):
        label = grammar_label(c)
        font = fit_font(draw, label, FONT_CN, col_w - 18, 27, 15)
        tw, _ = text_size(draw, label, font)
        draw.text((cx - tw / 2, y + 236), label, font=font, fill=text_color)

    sep_y = y + SECTION_H - 35
    for sx in range(PAD_X, W - PAD_X, 14):
        draw.ellipse([sx, sep_y, sx + 3, sep_y + 3], fill="#9b8062")
    y += SECTION_H

OUT.parent.mkdir(parents=True, exist_ok=True)
bg.save(OUT, quality=95)
print(OUT)
