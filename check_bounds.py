import re

def get_bounds(filepath):
    min_x, max_x = 10000, -10000
    min_y, max_y = 10000, -10000

    with open(filepath, 'r') as f:
        content = f.read()

    # Extract all numbers after M/L/etc? No, just grab all floats.
    # Actually, simpler: just regex for coordinate pairs?
    # Or just `M x y` is enough to get rough bounds since M is usually start?
    # No, curves go further.
    # Let's just grab ALL numbers and find min/max. It's an approximation but bounding box usually defined by control points too.

    floats = [float(x) for x in re.findall(r'[-+]?[0-9]*\.?[0-9]+', content)]

    # This is too noisy because of 0.5, 1 etc in logic code.
    # Only parse the `logoData.js` ARRAY content.

    # Let's parse src/components/sections/logoData.js
    pass

import re

with open('src/components/sections/logoData.js', 'r') as f:
    data = f.read()

# Extract strings inside ' '
paths = re.findall(r"'([^']+)'", data)

all_x = []
all_y = []

def parse_d(d):
    # tokenize
    tokens = re.findall(r'([a-zA-Z]|[-+]?[0-9]*\.?[0-9]+)', d)
    # This matches numbers.
    # We want to identify X and Y.
    # This is hard without full parser.
    # But usually X, Y alternate.
    # Command specific.
    # Let's just assume rough range from the M commands.

    parts = d.split()
    if parts[0] == 'M':
        return float(parts[1]), float(parts[2])
    return None, None

for p in paths:
    # Just checking the absolute start positions (M) gives a very good idea of the layout
    # since these are small pills.
    x, y = parse_d(p)
    if x is not None:
        all_x.append(x)
        all_y.append(y)

if all_x:
    print(f"Min X: {min(all_x)}")
    print(f"Max X: {max(all_x)}")
    print(f"Min Y: {min(all_y)}")
    print(f"Max Y: {max(all_y)}")

    # Width estimate: Max path is probably +20 width?
    print(f"Est Bounds: X=[{min(all_x)}, {max(all_x) + 20}], Y=[{min(all_y)}, {max(all_y) + 10}]")
