#!/bin/bash

mkdir -p /root/projects/roadtombb/casebooks

declare -A BOOKS=(
  ["Anderson_2020"]="https://files.cdn.thinkific.com/file_uploads/163260/attachments/61d/b06/b36/Anderson_2020.pdf"
  ["Australian_Graduate_School_of_Management_2002"]="https://s3.amazonaws.com/thinkific/file_uploads/163260/attachments/4f9/026/7b8/Australian_Graduate_School_of_Management_2002.pdf"
  ["Bauer_2025"]="https://files.cdn.thinkific.com/file_uploads/163260/attachments/5ec/db4/aa7/Bauer_2025.pdf"
  ["Booth_2025"]="https://files.cdn.thinkific.com/file_uploads/163260/attachments/a56/ff7/d02/Booth_2025.pdf"
  ["Columbia_2021"]="https://files.cdn.thinkific.com/file_uploads/163260/attachments/f68/c7b/2d0/Columbia_2021.pdf"
  ["Darden_2025"]="https://files.cdn.thinkific.com/file_uploads/163260/attachments/fff/cb6/4a3/Darden_2025.pdf"
  ["ESADE_2025"]="https://files.cdn.thinkific.com/file_uploads/163260/attachments/4b0/113/132/ESADE_2025.pdf"
  ["Fuqua_2024"]="https://files.cdn.thinkific.com/file_uploads/163260/attachments/ddc/107/876/Fuqua_2024.pdf"
  ["Goizueta_2006"]="https://s3.amazonaws.com/thinkific/file_uploads/163260/attachments/170/3cb/524/Goizueta_2006.pdf"
  ["Haas_2019"]="https://s3.amazonaws.com/thinkific/file_uploads/163260/attachments/a3c/7d5/a54/Haas_2019.pdf"
  ["Harvard_Business_School_2012"]="https://s3.amazonaws.com/thinkific/file_uploads/163260/attachments/6a8/b00/90c/Harvard_Business_School_2012.pdf"
  ["HKUST_2024"]="https://files.cdn.thinkific.com/file_uploads/163260/attachments/7b5/c0d/d0a/HKUST_2024.pdf"
  ["Illinois_2015"]="https://s3.amazonaws.com/thinkific/file_uploads/163260/attachments/8b5/efa/454/Illinois_2015.pdf"
  ["INSEAD_2021"]="https://files.cdn.thinkific.com/file_uploads/163260/attachments/1e1/d1e/705/INSEAD_2021.pdf"
  ["Johnson_2021"]="https://files.cdn.thinkific.com/file_uploads/163260/attachments/578/d5d/4eb/Johnson_2021.pdf"
  ["Kellogg_2020"]="https://files.cdn.thinkific.com/file_uploads/163260/attachments/bf2/d90/0c4/Kellogg_2020.pdf"
  ["Sloan_2020"]="https://files.cdn.thinkific.com/file_uploads/163260/attachments/918/daf/18c/Sloan_2020.pdf"
  ["Stern_2024"]="https://files.cdn.thinkific.com/file_uploads/163260/attachments/8e0/e78/dc6/Stern_2024.pdf"
  ["Tuck_2024"]="https://files.cdn.thinkific.com/file_uploads/163260/attachments/bd5/4a6/922/Tuck_2024.pdf"
  ["Wharton_2025"]="https://files.cdn.thinkific.com/file_uploads/163260/attachments/633/d83/221/Wharton_2025.pdf"
)

FAILED=()

for NAME in "${!BOOKS[@]}"; do
  DIR="/root/projects/roadtombb/casebooks/$NAME"
  mkdir -p "$DIR"
  URL="${BOOKS[$NAME]}"
  echo "Downloading $NAME..."
  if curl -s -L -o "$DIR/$NAME.pdf" "$URL" && [ -s "$DIR/$NAME.pdf" ]; then
    SIZE=$(du -sh "$DIR/$NAME.pdf" | cut -f1)
    echo "  ✓ $NAME ($SIZE)"
  else
    echo "  ✗ FAILED: $NAME"
    FAILED+=("$NAME — $URL")
    rm -f "$DIR/$NAME.pdf"
  fi
done

echo ""
if [ ${#FAILED[@]} -gt 0 ]; then
  printf '%s\n' "${FAILED[@]}" > /root/projects/roadtombb/failed_downloads.txt
  echo "Failed: ${#FAILED[@]} — see failed_downloads.txt"
else
  echo "All downloads succeeded."
fi
