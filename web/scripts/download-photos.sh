#!/bin/bash
set -e

UA="almorzando.pe demo (contact: marca@almorzando.pe)"
DEST="public/menu"

mkdir -p "$DEST"

download() {
  local name="$1"
  local url="$2"
  local ext="${url##*.}"
  ext=$(echo "$ext" | tr '[:upper:]' '[:lower:]')
  local out="$DEST/${name}.${ext}"
  echo "-> $name"
  curl -sSL -A "$UA" -o "$out" "$url"
}

download "lomo-saltado"        "https://upload.wikimedia.org/wikipedia/commons/c/ca/Lomo-saltado-perudelights.jpg"
download "ceviche"             "https://upload.wikimedia.org/wikipedia/commons/2/27/Ceviche_at_Peru.jpg"
download "aji-de-gallina"      "https://upload.wikimedia.org/wikipedia/commons/4/44/Aj%C3%AD_de_gallina_-_Tradicional.jpg"
download "causa-limena"        "https://upload.wikimedia.org/wikipedia/commons/1/1f/Causa_Rellena.jpg"
download "arroz-con-pollo"     "https://upload.wikimedia.org/wikipedia/commons/3/39/Arroz-con-Pollo.jpg"
download "anticuchos"          "https://upload.wikimedia.org/wikipedia/commons/c/c2/Anticuchos_de_la_Tia_Grima.jpg"
download "papa-huancaina"      "https://upload.wikimedia.org/wikipedia/commons/3/3c/Papa_huancaina.jpg"
download "tallarin-saltado"    "https://upload.wikimedia.org/wikipedia/commons/9/95/Tallarin_saltado_con_pollo_en_trozos_28042010.JPG"
download "salmon-parrilla"     "https://upload.wikimedia.org/wikipedia/commons/a/ad/Salmon_steak_with_with_Beurre_Maitre_d%27Hotel_and_spinach.jpg"
download "bowl-veggie"         "https://upload.wikimedia.org/wikipedia/commons/5/53/BuddhaBowlLot.jpg"
download "crema-choclo"        "https://upload.wikimedia.org/wikipedia/commons/e/e1/Vegan_Garden_Corn_Chowder_with_Chives_%28cropped%29.jpg"
download "ensalada-quinoa"     "https://upload.wikimedia.org/wikipedia/commons/6/64/Healthy_quinoa_salad_with_dried_fruit.jpg"
download "crema-zapallo"       "https://upload.wikimedia.org/wikipedia/commons/c/cd/K%C3%BCrbissuppe_mit_Kern%C3%B6l.JPG"
download "wantan-veggie"       "https://upload.wikimedia.org/wikipedia/commons/3/39/Pork_Steamed_Wontons.jpg"
download "mazamorra-morada"    "https://upload.wikimedia.org/wikipedia/commons/d/d6/Mazamorra_morada_peruana.jpg"
download "arroz-con-leche"     "https://upload.wikimedia.org/wikipedia/commons/b/ba/Arroz_con_leche.png"
download "ensalada-frutas"     "https://upload.wikimedia.org/wikipedia/commons/7/74/Fruktsallad_%28Fruit_salad%29.jpg"
download "suspiro-limena"      "https://upload.wikimedia.org/wikipedia/commons/e/ed/Suspiro_lime%C3%B1o.jpg"
download "yogur-granola"       "https://upload.wikimedia.org/wikipedia/commons/9/94/Granola%2C_yogurt%2C_fruit._%2816696981528%29.jpg"
download "chicha-morada"       "https://upload.wikimedia.org/wikipedia/commons/f/fa/Chicha_Morada_2017.jpg"
download "limonada-hierbabuena" "https://upload.wikimedia.org/wikipedia/commons/1/10/Lemonade_-_27682817724.jpg"
download "maracuya-frozen"     "https://upload.wikimedia.org/wikipedia/commons/1/14/Cocktail_of_passion_fruit_juice_and_watermelon_juice_in_a_glass.jpg"
download "emoliente"           "https://upload.wikimedia.org/wikipedia/commons/9/9f/Emol.jpg"
download "te-muna"             "https://upload.wikimedia.org/wikipedia/commons/7/7f/Peppermint_Tea_in_a_pot_-_Abyssinia.jpg"
download "refresco-carambola"  "https://upload.wikimedia.org/wikipedia/commons/8/8c/Glass_of_Fresh_Orange_Juice.jpg"

echo ""
echo "Done. Files in $DEST:"
ls -la "$DEST"
