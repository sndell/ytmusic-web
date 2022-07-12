from colorthief import ColorThief
import urllib

def get_color(url):
    urllib.request.urlretrieve(url, "img.png")
    color_thief = ColorThief('img.png')
    palette = color_thief.get_palette(color_count=20, quality=6)

    highest = 0
    highestColor = ""

    for val in palette:
        r, g, b = val

        R_dash = r / 255
        G_dash = g / 255
        B_dash = b / 255

        Cmax = max(R_dash, G_dash, B_dash)
        Cmin = min(R_dash, G_dash, B_dash)
        delta = Cmax - Cmin

        if (delta == 0):
            H = 0
        elif (Cmax == R_dash):
            H = (60 * (((G_dash - B_dash) / delta) % 6))
        elif (Cmax == G_dash):
            H = (60 * (((B_dash - R_dash) / delta) + 2))
        elif (Cmax == B_dash):
            H = (60 * (((R_dash - G_dash) / delta) + 4))

        # saturation calculation
        if (Cmax == 0):
            S = 0
        else:
            S = delta / Cmax
        # value calculation
        V = Cmax
        # print output. H in degrees. S and V in percentage.
        # these values may also be represented from 0 to 255.
        S = S * 100
        V = V * 100

        if((S + V) > highest):
            highest = S + V
            # valbig = str(str(H) + " " + str(S) + " " + str(V))
            highestColor = (r, g, b)
    return(highestColor)