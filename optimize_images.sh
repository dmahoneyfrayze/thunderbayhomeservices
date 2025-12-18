#!/bin/bash
cd src/assets/images

echo "Optimizing Header Images..."

# Optimize PNGs -> JPG (Quality 75)
for file in *_Page_Header.png; do
    if [ -f "$file" ]; then
        filename=$(basename "$file" .png)
        echo "Converting $file -> $filename.jpg"
        sips -s format jpeg -s formatOptions 75 -Z 1920 "$file" --out "$filename.jpg"
    fi
done

# Specific large files
echo "Optimizing Contractor Hero..."
sips -s format jpeg -s formatOptions 75 -Z 1920 "For_Contractors_Background_Thunder_Bay.png" --out "For_Contractors_Background_Thunder_Bay.jpg"

echo "Optimizing Home Hero..."
# Already JPG but large, re-compress
sips -s format jpeg -s formatOptions 75 -Z 1920 "thunder-bay-hero.jpg" --out "thunder-bay-hero.jpg"

# Optimize cleaning/snow if they serve as failovers
# (servicesConfig uses specific headers now, but good to clean up)

echo "Optimization Complete."
ls -lh *.jpg
