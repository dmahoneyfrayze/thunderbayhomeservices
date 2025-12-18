#!/bin/bash
cd src/assets/images

echo "Converting Hero Images..."
cwebp -q 80 thunder-bay-hero.jpg -o thunder-bay-hero.webp
cwebp -q 80 For_Contractors_Background_Thunder_Bay.jpg -o For_Contractors_Background_Thunder_Bay.webp

echo "Converting Headers..."
for file in *_Page_Header.jpg; do
    if [ -f "$file" ]; then
        filename=$(basename "$file" .jpg)
        echo "Converting $file -> $filename.webp"
        cwebp -q 80 "$file" -o "$filename.webp"
    fi
done

echo "Done."
