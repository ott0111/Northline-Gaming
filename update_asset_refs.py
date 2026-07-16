from pathlib import Path
import re

root = Path('.')
for path in root.glob('*.html'):
    text = path.read_text(encoding='utf-8')
    orig = text

    text = re.sub(
        r'<a class="logo" href="index\.html">\s*<span class="logo-mark"></span>\s*NORTHLINE\s*</a>',
        '<a class="logo" href="index.html">\n    <img class="logo-img" src="northline.jpg" alt="Northline logo">\n    <span>NORTHLINE</span>\n  </a>',
        text,
    )

    text = re.sub(
        r'<div class="logo">\s*<span class="logo-mark"></span>\s*NORTHLINE\s*</div>',
        '<div class="logo">\n        <img class="logo-img" src="northline.jpg" alt="Northline logo">\n        <span>NORTHLINE</span>\n      </div>',
        text,
    )

    text = text.replace('src="logo.svg"', 'src="northline.jpg"')
    text = text.replace('src="logo.png"', 'src="northline.jpg"')
    text = text.replace('src="logo.jpeg"', 'src="northline.jpg"')
    text = text.replace('src="logo.JPG"', 'src="northline.jpg"')

    if path.name == 'index.html':
        text = re.sub(r'src="[^"]*Northline[^\"]*"', 'src="Northlineee.jpg"', text)

    if text != orig:
        path.write_text(text, encoding='utf-8')
        print('Updated', path.name)
