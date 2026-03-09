# 🖼️ Guía de Optimización de Imágenes

Este documento explica cómo optimizar las imágenes del proyecto para mejor performance.

## Beneficios de la Optimización

| Métrica | Impacto |
|---------|--------|
| **WEBP vs JPG** | 25-35% menor tamaño |
| **Lazy loading** | Reduce carga inicial |
| **Responsive images** | Adapta al ancho del viewport |
| **Async decoding** | No bloquea main thread |

## Herramientas Necesarias

### Convertir a WEBP

**macOS:**
```bash
brew install webp
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt install webp
```

**Windows:**
Descarga desde https://developers.google.com/speed/webp/download

## Proceso de Optimización

### 1. Convertir JPG/PNG a WEBP

**Opción A: Automático (con script)**
```bash
chmod +x scripts/optimize-images.sh
./scripts/optimize-images.sh
```

**Opción B: Manual**
```bash
# Convertir una imagen
cwebp -q 80 src/assets/carta-astral.jpeg -o src/assets/optimized/carta-astral.webp

# Convertir todas las JPEG
for f in src/assets/*.jpeg; do
  cwebp -q 80 "$f" -o "src/assets/optimized/$(basename "$f" .jpeg).webp"
done
```

### 2. Usar OptimizedImage Component

Reemplazar `<img>` tags con `<OptimizedImage>`:

**Antes:**
```tsx
<img
  src={cartaAstralImg}
  alt="Carta Astral"
  className="rounded-xl"
/>
```

**Después:**
```tsx
import OptimizedImage from "../components/OptimizedImage";

<OptimizedImage
  src={cartaAstralImg}
  webpSrc="/assets/optimized/carta-astral.webp"
  alt="Carta Astral"
  loading="lazy"
  decoding="async"
  fetchPriority="high" // Para hero images
  className="rounded-xl"
/>
```

## Parámetros de OptimizedImage

```typescript
interface OptimizedImageProps {
  src: string;              // Ruta de la imagen (fallback)
  alt: string;              // Texto alternativo (OBLIGATORIO)
  webpSrc?: string;         // Ruta de versión WEBP
  width?: number;           // Ancho en píxeles
  height?: number;          // Alto en píxeles
  loading?: "lazy"|"eager"; // lazy: carga lazy, eager: carga inmediata
  sizes?: string;           // Media query para responsive
  className?: string;       // Clases CSS
}
```

## Ejemplos

### Hero Image (eager loading)
```tsx
<OptimizedImage
  src={cartaAstralImg}
  webpSrc="/assets/optimized/carta-astral.webp"
  alt="Carta Astral"
  loading="eager"
  fetchPriority="high"
  className="max-w-[360px] rounded-xl object-cover"
/>
```

### Content Image (lazy loading)
```tsx
<OptimizedImage
  src={arbolLibroImg}
  webpSrc="/assets/optimized/arbol-libro.webp"
  alt="Árbol y libro"
  loading="lazy"
  sizes="(max-width: 768px) 100vw, 50vw"
  className="w-full max-w-[400px]"
/>
```

## Atributos Recomendados

### Por Tipo de Imagen

| Tipo | Loading | Decoding | fetchPriority |
|------|---------|----------|---------------|
| Hero (above-fold) | eager | sync | high |
| Content (below-fold) | lazy | async | auto |
| Background | lazy | async | low |

## Medición de Mejora

### Herramientas Online
- **Google PageSpeed Insights**: https://pagespeed.web.dev
- **WebPageTest**: https://www.webpagetest.org
- **GTmetrix**: https://gtmetrix.com

### Localmente (Chrome DevTools)
1. Abre DevTools (F12)
2. Network tab → Filter by Img
3. Compara tamaños antes/después

## Imágenes del Proyecto

### Actuales

| Imagen | Ubicación | Tamaño (est.) | Optimización |
|--------|-----------|---------------|--------------|
| carta-astral.jpeg | Home, CartaAstral | ~250KB | Convertir a WEBP |
| arbol-libro.jpeg | Constelaciones | ~200KB | Convertir a WEBP |
| logo.png | Header | ~100KB | PNG es OK (sin fondo) |

### Después de Optimizar

| Imagen | WEBP Size | Reducción |
|--------|-----------|-----------|
| carta-astral.webp | ~75KB | -70% |
| arbol-libro.webp | ~60KB | -70% |

## Notas Importantes

### Soporte de Navegadores

✅ **WEBP soportado en:**
- Chrome/Edge 23+
- Firefox 65+
- Safari 14.1+
- Opera 11+

✅ **Fallback automático** con `<picture>` + `<img>`

### Lazy Loading

```tsx
// Lazy loading: carga cuando entra en viewport
loading="lazy"

// Eager loading: carga inmediata (hero images)
loading="eager"
```

### Async Decoding

```tsx
// No bloquea el main thread
decoding="async"

// Usa el decodificador del navegador (default)
decoding="sync" // evitar para images grandes
```

## Checklist

- [ ] Instalar `cwebp`
- [ ] Ejecutar script de optimización
- [ ] Mover archivos .webp a `src/assets/optimized/`
- [ ] Importar `OptimizedImage` en componentes
- [ ] Reemplazar `<img>` con `<OptimizedImage>`
- [ ] Agregar `webpSrc` para cada imagen
- [ ] Testear en DevTools (Network tab)
- [ ] Verificar en Google PageSpeed
- [ ] Eliminar versiones JPG antiguas (opcional)

## Referencias

- [Google WebP Guide](https://developers.google.com/speed/webp)
- [MDN: Picture Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
- [MDN: Loading Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#loading)
- [Web.dev: Image Optimization](https://web.dev/image-optimization/)
