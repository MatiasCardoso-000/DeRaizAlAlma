#!/bin/bash

# Script para optimizar imágenes del proyecto
# Requiere: cwebp (para convertir a WEBP)
# Instalación: brew install webp (macOS) o apt install webp (Linux)

set -e

ASSETS_DIR="src/assets"
OPTIMIZED_DIR="src/assets/optimized"

echo "🖼️  Iniciando optimización de imágenes..."

# Crear directorio para imágenes optimizadas
mkdir -p "$OPTIMIZED_DIR"

# Función para convertir imagen a WEBP
convert_to_webp() {
    local input="$1"
    local output="$OPTIMIZED_DIR/$(basename "$input" .${input##*.}).webp"

    if command -v cwebp &> /dev/null; then
        echo "  ✓ Convirtiendo $(basename "$input") a WEBP..."
        cwebp -q 80 "$input" -o "$output"
        echo "    Guardado en: $output"
    else
        echo "  ✗ cwebp no está instalado"
        echo "    Instálalo con: brew install webp (macOS) o apt install webp (Linux)"
        return 1
    fi
}

# Procesar imágenes JPEG
for jpeg in "$ASSETS_DIR"/*.jpg "$ASSETS_DIR"/*.jpeg; do
    if [ -f "$jpeg" ]; then
        convert_to_webp "$jpeg"
    fi
done

echo ""
echo "✅ Optimización completada"
echo ""
echo "📝 Próximos pasos:"
echo "  1. Importar OptimizedImage component en tus páginas"
echo "  2. Reemplazar <img> con <OptimizedImage>"
echo "  3. Proporcionar webpSrc para las versiones WEBP"
echo ""
echo "Ejemplo:"
echo "  <OptimizedImage"
echo "    src={cartaAstralImg}"
echo "    webpSrc='/assets/optimized/carta-astral.webp'"
echo "    alt='Carta Astral'"
echo "    loading='lazy'"
echo "  />"
