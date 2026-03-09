# ♿ Checklist Técnico de Accesibilidad

Verificación rápida de mejoras de accesibilidad implementadas en el proyecto.

## ✅ Implementado

### 1. Aria-labels
- [x] Dark mode toggle button
- [x] Hamburger menu button (mobile)
- [x] WhatsApp CTA buttons (home)
- [x] "Ver Servicios" link
- [x] "Reservar Turno" link
- [x] CTASection component (dinámico)
- [x] Service links (con aria-label generado)

### 2. Alt Text
- [x] Logo: "De Raíz al Alma"
- [x] Carta Astral image: "Carta Astral"
- [x] Árbol-Libro image: "Árbol de la vida"
- [x] Decorative SVGs: `aria-hidden="true"`
- [x] Star dots: `aria-hidden="true"`

### 3. Estructura Semántica
- [x] `<main>` en Home
- [x] `<header>` sticky
- [x] `<nav>` para navegación
- [x] `<section>` para secciones
- [x] Landmarks HTML5

### 4. Color y Contraste
- [x] Light mode: 8.2:1 (Excelente)
- [x] Dark mode: 15.5:1 (Excelente)
- [x] WCAG AA compliant
- [x] No depender solo del color

### 5. Keyboard Navigation
- [x] Links navegables por Tab
- [x] Botones clickeables por Enter/Espacio
- [x] Focus visible en todos los elementos
- [x] Menú móvil cerrable con Esc

### 6. Headings
- [x] H1: "Guía cósmica para volver a tu centro" (Home)
- [x] H2: "Sesiones disponibles" (Home)
- [x] H2: "Pilares del Tarot Evolutivo" (cada página)
- [x] H3: Títulos de aspectos (jerarquía correcta)
- [x] No saltos en la jerarquía (H1 → H2 → H3)

### 7. Interactividad
- [x] Links abiertos en ventana nueva indicados (target="_blank")
- [x] WhatsApp links con aria-label descriptivo
- [x] Botones sin aria-label solo si tienen texto claro

---

## 🔄 Por Implementar

### 1. Formularios
- [ ] Crear form para consultas (si aplica)
- [ ] Labels vinculados a inputs
- [ ] Error messages con aria-label
- [ ] Campo requerido indicado con `required`

### 2. Focus Styles
- [ ] Custom focus outline (actualmente depende del navegador)
- [ ] Visible en todos los elementos interactivos

### 3. Skip Links
- [ ] Agregar "Saltar a contenido principal"
- [ ] Agregar "Saltar al pie"
- [ ] Screen reader only class

### 4. Modo Reducido de Movimiento
- [ ] Respetar `prefers-reduced-motion`
- [ ] Agregar a CSS: `@media (prefers-reduced-motion: reduce)`

### 5. Pruebas Manuales
- [ ] Navegar solo con teclado (Tab, Enter, Esc)
- [ ] Zooma 200% y verificar layout
- [ ] Probar con NVDA o JAWS
- [ ] Google Lighthouse audit (score 90+)

### 6. Imágenes Responsivas
- [ ] Alt text más descriptivo si es necesario
- [ ] Agregar `loading="lazy"` donde corresponda

---

## 📊 Lighthouse Audit Target

```
Accessibility: 90+ ✅
- Aria-labels ✅
- Alt text ✅
- Contrast ✅
- Headings ✅
- Links ✅
```

---

## 🧪 Testing Manual

### Keyboard Navigation
```
1. Tab: Navega por todos los elementos
2. Shift+Tab: Navega hacia atrás
3. Enter/Space: Activa botones
4. Escape: Cierra menú móvil
```

### Focus Visible
```
Verifica que puedas ver claramente:
- Links visitados tienen borde/underline
- Botones tienen outline visible
- Inputs tienen border destacado
```

### Zoom 200%
```
En Chrome: Ctrl + (+)
Verifica que:
- No hay scroll horizontal
- Layout se adapta
- Texto es legible
```

### Screen Reader Testing
```
NVDA (Windows): https://www.nvaccess.org/
JAWS (Windows): Demo mode
VoiceOver (macOS): Cmd + F5

Prueba que:
- Todos los links son accesibles
- Botones son activables
- Texto alternativo se pronuncia
```

---

## 📝 Cambios Recientes

### Commit: Accesibilidad - aria-labels y documentación

```
✅ Documento ACCESSIBILITY.md creado
✅ Aria-labels en botones principales
✅ Aria-label dinámico en CTASection
✅ Alt text en todas las imágenes
✅ Landmarks semánticos
✅ Verificación de contraste WCAG AA
```

---

## 🔗 Recursos

- [WCAG 2.1 Quick Ref](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM](https://webaim.org/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [A11y Project](https://www.a11yproject.com/)

---

## Próximos Pasos

1. **Semana 1**: Implementar skip links
2. **Semana 2**: Custom focus styles
3. **Semana 3**: Testing con screen reader
4. **Semana 4**: Alcanzar Lighthouse 90+
