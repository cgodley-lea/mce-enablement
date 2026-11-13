"""Builds the "you are here" trail graphic for the session decks.

Edit STOPS and TODAY, then run:
    python3 make_trail.py            # writes trail-map.svg
    node render_png.js               # writes trail-map.png (needs network for fonts)
"""
from pathlib import Path

STOPS = [
    ("0", "Start Here"),
    ("1", "Setup"),
    ("2", "Data"),
    ("3", "Content"),
    ("4", "Sending"),
    ("5", "Automation"),
    ("6", "Consent"),
    ("7", "Reporting"),
    ("8", "Web & Mobile"),
    ("9", "Capstone"),
]
TODAY = 5  # index into STOPS; this stop sits on the loop

# ListEngage tokens
INK, BODY, BORDER = "#222222", "#595959", "#c7c7c7"
BLUE_DK, ORANGE, ORANGE_LT, PURPLE = "#005caa", "#e2752b", "#f8b133", "#542d89"
W, H = 1920, 1080
LINE_Y = 760
X0, STEP = 140, 178
R = 26

FONTS = ("@import url('https://fonts.googleapis.com/css2?"
         "family=Lato:wght@400;700;900&amp;family=Quicksand:wght@500;700&amp;display=swap');")


def x_of(i):
    return X0 + i * STEP


def esc(s):
    return s.replace("&", "&amp;").replace("<", "&lt;")


def build():
    jx = x_of(TODAY)  # junction where the loop leaves and rejoins the trail
    top = 400         # top of the loop, where today's stop sits
    loop = (f"M {jx} {LINE_Y} C {jx-60} {LINE_Y-160}, {jx-250} {top+10}, {jx} {top} "
            f"C {jx+250} {top+10}, {jx+60} {LINE_Y-160}, {jx} {LINE_Y}")
    last = x_of(len(STOPS) - 1)
    o = []
    o.append(f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">')
    o.append(f"""<defs><style>{FONTS}
  .h{{font-family:Lato,Arial,sans-serif;font-weight:900;letter-spacing:2px}}
  .b{{font-family:Quicksand,Arial,sans-serif;font-weight:700}}
</style>
<linearGradient id="og" x1="0" x2="1"><stop offset="0" stop-color="{ORANGE_LT}"/><stop offset="1" stop-color="#e84e1b"/></linearGradient>
</defs>""")
    o.append(f'<rect width="{W}" height="{H}" fill="#ffffff"/>')

    # Heading
    o.append(f'<text class="h" x="{X0-R}" y="130" font-size="56" fill="{INK}">YOU ARE HERE</text>')
    o.append(f'<text class="b" x="{X0-R}" y="180" font-size="26" fill="{BODY}">'
             f'Today we leave the main trail for a loop through {esc(STOPS[TODAY][1])}, '
             f'then rejoin it for Session {STOPS[TODAY + 1][0]}.</text>')

    # Main trail: travelled (solid blue) up to the junction, ahead (dashed grey) after it
    o.append(f'<line x1="{x_of(0)}" y1="{LINE_Y}" x2="{jx}" y2="{LINE_Y}" stroke="{BLUE_DK}" stroke-width="10" stroke-linecap="round"/>')
    o.append(f'<line x1="{jx}" y1="{LINE_Y}" x2="{last + 60}" y2="{LINE_Y}" stroke="{BORDER}" stroke-width="10" stroke-linecap="round" stroke-dasharray="2 22"/>')
    # Finish flag
    fx = last + 80
    o.append(f'<line x1="{fx}" y1="{LINE_Y}" x2="{fx}" y2="{LINE_Y-70}" stroke="{INK}" stroke-width="4"/>')
    o.append(f'<path d="M {fx} {LINE_Y-70} L {fx+40} {LINE_Y-58} L {fx} {LINE_Y-46} Z" fill="{PURPLE}"/>')

    # The loop, with direction chevrons
    o.append(f'<path d="{loop}" fill="none" stroke="url(#og)" stroke-width="10" stroke-linecap="round"/>')
    o.append(f'<circle cx="{jx}" cy="{LINE_Y}" r="12" fill="#ffffff" stroke="{ORANGE}" stroke-width="5"/>')

    # Stops
    for i, (num, label) in enumerate(STOPS):
        if i == TODAY:
            cx, cy = jx, top
            o.append(f'<circle cx="{cx}" cy="{cy}" r="{R+10}" fill="{ORANGE}" stroke="#ffffff" stroke-width="6"/>')
            o.append(f'<text class="h" x="{cx}" y="{cy+11}" font-size="32" text-anchor="middle" fill="{INK}">{num}</text>')
            o.append(f'<text class="h" x="{cx+150}" y="{cy-6}" font-size="34" fill="{INK}">{esc(label.upper())}</text>')
            o.append(f'<text class="b" x="{cx+150}" y="{cy+26}" font-size="20" fill="{BODY}">Session {num} · today\'s loop</text>')
            # Pin
            py = cy - 70
            o.append(f'<path d="M {cx} {py+28} C {cx-8} {py+10}, {cx-26} {py-4}, {cx-26} {py-24} '
                     f'A 26 26 0 1 1 {cx+26} {py-24} C {cx+26} {py-4}, {cx+8} {py+10}, {cx} {py+28} Z" fill="{INK}"/>')
            o.append(f'<circle cx="{cx}" cy="{py-24}" r="9" fill="#ffffff"/>')
            o.append(f'<rect x="{cx+150}" y="{py-48}" width="250" height="46" fill="{INK}"/>')
            o.append(f'<text class="h" x="{cx+275}" y="{py-16}" font-size="22" text-anchor="middle" fill="#ffffff">YOU ARE HERE</text>')
            continue
        cx = x_of(i)
        done = i < TODAY
        fill, stroke, txt = (BLUE_DK, BLUE_DK, "#ffffff") if done else ("#ffffff", BORDER, BODY)
        o.append(f'<circle cx="{cx}" cy="{LINE_Y}" r="{R}" fill="{fill}" stroke="{stroke}" stroke-width="5"/>')
        if done:
            o.append(f'<path d="M {cx-11} {LINE_Y} L {cx-3} {LINE_Y+8} L {cx+12} {LINE_Y-8}" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>')
        else:
            o.append(f'<text class="h" x="{cx}" y="{LINE_Y+9}" font-size="26" text-anchor="middle" fill="{txt}">{num}</text>')
        o.append(f'<text class="b" x="{cx}" y="{LINE_Y+70}" font-size="17" text-anchor="middle" fill="{BODY}">SESSION {num}</text>')
        o.append(f'<text class="h" x="{cx}" y="{LINE_Y+102}" font-size="22" text-anchor="middle" fill="{INK}" letter-spacing="0">{esc(label)}</text>')

    # Legend
    ly = 990
    o.append(f'<circle cx="{X0}" cy="{ly}" r="10" fill="{BLUE_DK}"/>'
             f'<text class="b" x="{X0+22}" y="{ly+7}" font-size="20" fill="{BODY}">Completed</text>')
    o.append(f'<circle cx="{X0+200}" cy="{ly}" r="10" fill="{ORANGE}"/>'
             f'<text class="b" x="{X0+222}" y="{ly+7}" font-size="20" fill="{BODY}">Today</text>')
    o.append(f'<circle cx="{X0+360}" cy="{ly}" r="9" fill="#ffffff" stroke="{BORDER}" stroke-width="4"/>'
             f'<text class="b" x="{X0+382}" y="{ly+7}" font-size="20" fill="{BODY}">Up next</text>')
    o.append("</svg>")
    return "\n".join(o)


if __name__ == "__main__":
    out = Path(__file__).with_name("trail-map.svg")
    out.write_text(build())
    print("wrote", out)
