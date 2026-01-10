import re
import xml.etree.ElementTree as ET

def tokenize(d):
    return re.findall(r'([a-zA-Z]|[-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?)', d)

def get_args(tokens, idx):
    args = []
    while idx < len(tokens) and not re.match(r'[a-zA-Z]', tokens[idx]):
        args.append(float(tokens[idx]))
        idx += 1
    return args, idx

def analyze_g_stack(filename):
    tree = ET.parse(filename)
    root = tree.getroot()
    paths = root.findall('.//{http://www.w3.org/2000/svg}path') + root.findall('.//path')

    shapes = []

    for path in paths:
        d = path.get('d')
        d = re.sub(r'[,]', ' ', d)
        tokens = tokenize(d)

        cursor = [0.0, 0.0]
        # simplified extraction just for coords
        idx = 0
        current_shape = []
        shape_start_pos = [0.0, 0.0]

        while idx < len(tokens):
            cmd = tokens[idx]
            idx += 1
            args, idx = get_args(tokens, idx)

            if cmd in ['M', 'm']:
                if current_shape:
                    shapes.append({'x': shape_start_pos[0], 'y': shape_start_pos[1]})
                    current_shape = []

                if cmd == 'M':
                    cursor = [args[0], args[1]]
                else:
                    cursor[0] += args[0]
                    cursor[1] += args[1]

                shape_start_pos = list(cursor)

            else:
                # advance cursor logic minimal
                if cmd in ['l', 'm']:
                     for k in range(0, len(args), 2): cursor[0] += args[k]; cursor[1] += args[k+1]
                # ... other commands ignored for simple start-pos finding

        if current_shape:
            shapes.append({'x': shape_start_pos[0], 'y': shape_start_pos[1]})

    # Print shapes in Right Stack Region
    # X > 150, Y > 100
    stack_shapes = []
    for s in shapes:
        if s['x'] > 150 and s['x'] < 165 and s['y'] > 110 and s['y'] < 140:
             stack_shapes.append(s)

    stack_shapes.sort(key=lambda k: k['y'])

    print(f"{'X':<10} {'Y':<10}")
    print("-" * 25)
    for s in stack_shapes:
        print(f"{s['x']:<10.3f} {s['y']:<10.3f}")

analyze_g_stack('/home/hexylon/Datascube/groot/groot-frontend/public/svg/logoo.svg')
