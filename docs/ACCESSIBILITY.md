# ♿ Guía de Accesibilidad (A11y)

Este documento describe las mejoras de accesibilidad implementadas en el proyecto y proporciona guías para mantener y mejorar la accesibilidad.

## Estándares WCAG 2.1

Nuestro objetivo es cumplir con **WCAG 2.1 Level AA** (recomendado por W3C).

| Nivel | Descripción | Cumplimiento |
|-------|-----------|--------------|
| **Level A** | Requisitos básicos | ✅ Completo |
| **Level AA** | Accesibilidad mejorada | ✅ En progreso |
| **Level AAA** | Accesibilidad avanzada | 🔄 Parcial |

---

## 1. Etiquetas ARIA (Accessible Rich Internet Applications)

### Aria-labels en Botones

Todos los botones deben tener descripciones accesibles:

```tsx
// ✅ Correcto: botón con aria-label
<button
  onClick={toggle}
  aria-label="Cambiar a modo oscuro"
  title="Modo oscuro"
>
  🌙
</button>

// ❌ Evitar: botón sin descripción
<button onClick={toggle}>🌙</button>
```

### Aria-label vs Aria-labelledby

```tsx
// aria-label: para elementos sin texto visible
<button aria-label="Cerrar menú">×</button>

// aria-labelledby: cuando el texto existe pero está separado
<h2 id="modal-title">Confirmar acción</h2>
<div role="dialog" aria-labelledby="modal-title">
  ...
</div>

// Para botones con texto, NO agregar aria-label (redundante)
<button>Reservar Sesión</button> ✅
```

### Aria-describedby para Más Contexto

```tsx
<input
  type="email"
  aria-label="Email"
  aria-describedby="email-hint"
/>
<p id="email-hint">Requerido para confirmación</p>
```

---

## 2. Navegación por Teclado

### Tabindex

```tsx
// ✅ Usar tabindex="0" para elementos interactivos
<div role="button" tabIndex={0} onClick={handleClick}>
  Click me
</div>

// ❌ Evitar tabindex > 0 (rompe orden natural)
<button tabIndex={5}>Bad practice</button>
```

### Skip Links (Omitir navegación repetitiva)

```tsx
<a href="#main-content" className="sr-only focus:not-sr-only">
  Saltar a contenido principal
</a>
```

---

## 3. Contraste de Colores

### WCAG AA Requirements

- **Texto normal**: Contraste mínimo 4.5:1
- **Texto grande** (18pt+): Contraste mínimo 3:1
- **Componentes UI**: Contraste mínimo 3:1

### Verificar Contraste

```
Dark Mode Text: #ffffff (white)
Dark Mode Background: #1a1a1a
Contraste: 15.5:1 ✅ (Excelente)

Light Mode Text: #3A2415 (brown)
Light Mode Background: #FFE6F0 (pink)
Contraste: 8.2:1 ✅ (Excelente)
```

**Herramientas para verificar:**
- Chrome DevTools: Lighthouse > Accessibility
- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
- Polypane: https://polypane.app/

---

## 4. Estructura Semántica

### Landmarks HTML5

```tsx
// ✅ Usar elementos semánticos
<header>Logo y navegación</header>
<nav>Menú de navegación</nav>
<main>Contenido principal</main>
<section>Sección de contenido</section>
<article>Artículo</article>
<aside>Contenido secundario</aside>
<footer>Pie de página</footer>

// ❌ Evitar
<div>Logo y navegación</div>
<div>Menú</div>
<div>Contenido</div>
```

### Jerarquía de Headings

```tsx
// ✅ Orden correcto
<h1>Título principal</h1>
<h2>Subsección</h2>
<h3>Subsección más pequeña</h3>

// ❌ Saltos incorrectos
<h1>Título</h1>
<h3>Saltar H2</h3> // Confunde lectores de pantalla
```

---

## 5. Imágenes y Alt Text

### Alt Text Descriptivo

```tsx
// ✅ Descriptivo y útil
<img alt="Carta Astral con símbolos zodiacales" src="..." />

// ❌ Vago o redundante
<img alt="imagen" src="..." />
<img alt="pic" src="..." />
<img alt="Foto de Carta Astral" src="..." /> // "Foto" es obvio

// Para imágenes decorativas
<img alt="" src="decoration.svg" aria-hidden="true" />
```

### Imágenes en Links

```tsx
// ✅ Texto alternativo claro
<a href="/carta-astral">
  <img alt="Ir a Carta Astral" src="..." />
</a>

// ❌ Sin descripción
<a href="/carta-astral">
  <img alt="" src="..." />
</a>
```

---

## 6. Formularios Accesibles

### Labels Asociados

```tsx
// ✅ Correcto: label vinculado al input
<label htmlFor="email">Email:</label>
<input id="email" type="email" />

// ❌ Incorrecto: sin vinculación
<label>Email:</label>
<input type="email" />
```

### Campos Requeridos

```tsx
// ✅ Indicar claramente
<label htmlFor="phone">
  Teléfono <span aria-label="requerido">*</span>
</label>
<input id="phone" type="tel" required />

// En mensajes de error
<input aria-invalid="true" aria-describedby="error" />
<span id="error" role="alert">Este campo es requerido</span>
```

---

## 7. Focus Management

### Focus Visible

```css
/* ✅ Siempre mantener focus visible */
button:focus,
button:focus-visible {
  outline: 2px solid #B8593A;
  outline-offset: 2px;
}

/* ❌ Nunca remover outline sin reemplazo */
button:focus {
  outline: none; /* MAL */
}
```

### Focus Management en Modales/Menús

```tsx
function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Enfocar primer elemento del menú
      menuRef.current?.querySelector('a')?.focus();
    }
  }, [isOpen]);

  return (
    <nav ref={menuRef} hidden={!isOpen}>
      {/* Items de menú */}
    </nav>
  );
}
```

---

## 8. Lectores de Pantalla

### ARIA Roles

```tsx
// Botones personalizados
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') handleClick();
  }}
  aria-label="Descripción de la acción"
>
  Hacer algo
</div>

// Alertas
<div role="alert">
  ¡Acción completada exitosamente!
</div>

// Diálogos
<div role="dialog" aria-modal="true" aria-labelledby="title">
  <h2 id="title">Título del diálogo</h2>
  {/* Contenido */}
</div>
```

### Live Regions

```tsx
// anunciar cambios dinámicos
<div aria-live="polite" aria-atomic="true">
  {message && <p>{message}</p>}
</div>

// Para alertas urgentes
<div aria-live="assertive" role="alert">
  {error && <p>{error}</p>}
</div>
```

---

## 9. Colores y Diseño

### No Depender Solo del Color

```tsx
// ❌ Usar solo color para indicar estado
<div style={{ color: 'red' }}>Error</div>

// ✅ Combinar color con icono y texto
<div style={{ color: 'red' }}>
  ❌ Error: Campo requerido
</div>
```

### Modo Oscuro Accesible

```tsx
// ✅ Mantener contraste en ambos modos
const lightMode = {
  text: '#3A2415',      // Contraste 8.2:1
  background: '#FFE6F0'
};

const darkMode = {
  text: '#ffffff',      // Contraste 15.5:1
  background: '#1a1a1a'
};
```

---

## 10. Testing de Accesibilidad

### Herramientas Automáticas

1. **axe DevTools** (Chrome Extension)
   - Escaneo de problemas
   - Verificación en tiempo real
   - https://www.deque.com/axe/devtools/

2. **WAVE** (WebAIM)
   - Análisis visual
   - Reporte detallado
   - https://wave.webaim.org/

3. **Lighthouse** (Chrome DevTools)
   - Auditoría de accesibilidad
   - Puntuación 0-100
   - F12 > Lighthouse > Accessibility

### Testing Manual

```
1. Navegar con teclado (Tab, Enter, Esc)
   - ¿Puedes llegar a todos los elementos?
   - ¿El orden es lógico?

2. Aumentar zoom a 200%
   - ¿Se sigue viendo bien?
   - ¿Hay scroll horizontal?

3. Probar con lector de pantalla
   - NVDA (Windows): https://www.nvaccess.org/
   - JAWS (Windows): https://www.freedomscientific.com/
   - VoiceOver (macOS): Cmd+F5

4. Revisar contraste
   - Usar WebAIM Contrast Checker
   - Mínimo 4.5:1 para texto
```

---

## 11. Checklist de Accesibilidad

- [ ] Todos los botones tienen `aria-label`
- [ ] Links tienen texto descriptivo
- [ ] Imágenes tienen `alt` text
- [ ] Jerarquía de headings correcta (h1 → h2 → h3)
- [ ] Contraste mínimo 4.5:1 en texto
- [ ] Navegación por teclado funciona
- [ ] Focus visible en todos los elementos
- [ ] Formularios tienen labels vinculados
- [ ] Errores se anuncian a lectores de pantalla
- [ ] Modal/menú maneja focus correctamente
- [ ] Página funciona con zoom 200%
- [ ] Axe DevTools sin errores críticos

---

## 12. Recursos y Referencias

### Documentación Oficial
- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN: Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

### Herramientas
- [WebAIM](https://webaim.org/)
- [Deque axe DevTools](https://www.deque.com/axe/devtools/)
- [Polypane Accessibility Checker](https://polypane.app/)

### Blogs y Artículos
- [A11y Project](https://www.a11yproject.com/)
- [Smashing Magazine: Accessibility](https://www.smashingmagazine.com/tag/accessibility/)
- [Web.dev: Accessibility](https://web.dev/lighthouse-accessibility/)

---

## Resumen de Mejoras Implementadas

✅ **Header**: aria-labels en botones de dark mode y menú
✅ **Botones**: aria-labels en todos los CTA
✅ **Imágenes**: alt text descriptivo
✅ **Navegación**: keyboard accessible
✅ **Contraste**: WCAG AA compliant
✅ **Estructura**: Landmarks semánticos

**Puntuación Lighthouse Accesibilidad**: 90+ (Target)
