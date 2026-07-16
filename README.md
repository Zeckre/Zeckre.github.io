# 🎨 CodeNexo — Sistema de Diseño

> Sistema de diseño para plataformas técnicas de alto rendimiento. Precisión, ingeniería y claridad estructural para stakeholders técnicos y partners empresariales.

![Estilo](https://img.shields.io/badge/estilo-Minimalismo%20T%C3%A9cnico-0052ff?style=flat-square)
![Modo](https://img.shields.io/badge/modo-Dark%20First-051424?style=flat-square)
![Estado](https://img.shields.io/badge/estado-Activo-b7c4ff?style=flat-square)

---

## 📖 Tabla de contenidos

- [Identidad de marca](#-identidad-de-marca)
- [Paleta de colores](#-paleta-de-colores)
- [Tipografía](#-tipografía)
- [Layout y espaciado](#-layout-y-espaciado)
- [Elevación y profundidad](#-elevación-y-profundidad)
- [Formas y radios](#-formas-y-radios)
- [Componentes](#-componentes)

---

## 🧬 Identidad de marca

La personalidad de la marca está diseñada para transmitir **precisión, alto rendimiento e integridad estructural**. Este sistema de diseño está dirigido a stakeholders técnicos sofisticados y partners empresariales que valoran la eficiencia y la claridad estructural.

El estilo visual es una síntesis entre **Minimalismo** y una **estética técnica inspirada en Geist**. Prioriza layouts de alta densidad informativa combinados con espacio negativo generoso, evitando la sobrecarga cognitiva. La respuesta emocional buscada es de **fiabilidad absoluta**: una sensación de "taller digital", a la vez futurista y utilitaria. Se evita cualquier ornamentación innecesaria, priorizando la alineación matemática y la transparencia funcional.

---

## 🎨 Paleta de colores

La paleta está construida sobre un espectro nocturno profundo, pensado para minimizar la fatiga visual y reforzar la narrativa de alta tecnología.

| Rol | Color | Vista previa |
|---|---|---|
| Primary | `#b7c4ff` | ![#b7c4ff](https://placehold.co/60x20/b7c4ff/b7c4ff.png) |
| Primary Container | `#0052ff` | ![#0052ff](https://placehold.co/60x20/0052ff/0052ff.png) |
| Background | `#051424` | ![#051424](https://placehold.co/60x20/051424/051424.png) |
| Surface Container | `#122131` | ![#122131](https://placehold.co/60x20/122131/122131.png) |
| Secondary | `#bec6e0` | ![#bec6e0](https://placehold.co/60x20/bec6e0/bec6e0.png) |
| Tertiary | `#bcc7de` | ![#bcc7de](https://placehold.co/60x20/bcc7de/bcc7de.png) |
| Error | `#ffb4ab` | ![#ffb4ab](https://placehold.co/60x20/ffb4ab/ffb4ab.png) |

**Guía de uso:**

- **Primary (Azul Eléctrico):** reservado exclusivamente para acciones de alta prioridad, estados activos y datos críticos. Funciona como la "fuente de energía" de la interfaz.
- **Escala de superficies:** una serie de pizarras profundas y grises depurados que forman la base estructural del sistema.
- **Acentos (éxito, advertencia, error):** deben usar versiones altamente desaturadas de sus tonos correspondientes para mantener el rigor minimalista y profesional.
- **Contraste:** mantener un ratio mínimo de **7:1** entre texto de cuerpo y fondos de superficie, para asegurar máxima legibilidad en modo oscuro.

<details>
<summary>📋 Ver tokens de color completos</summary>

```yaml
surface: '#051424'
surface-dim: '#051424'
surface-bright: '#2c3a4c'
surface-container-lowest: '#010f1f'
surface-container-low: '#0d1c2d'
surface-container: '#122131'
surface-container-high: '#1c2b3c'
surface-container-highest: '#273647'
on-surface: '#d4e4fa'
on-surface-variant: '#c3c5d9'
inverse-surface: '#d4e4fa'
inverse-on-surface: '#233143'
outline: '#8d90a2'
outline-variant: '#434656'
surface-tint: '#b7c4ff'
primary: '#b7c4ff'
on-primary: '#002682'
primary-container: '#0052ff'
on-primary-container: '#dfe3ff'
inverse-primary: '#004ced'
secondary: '#bec6e0'
on-secondary: '#283044'
secondary-container: '#3f465c'
on-secondary-container: '#adb4ce'
tertiary: '#bcc7de'
on-tertiary: '#263143'
tertiary-container: '#5b667b'
on-tertiary-container: '#d9e4fd'
error: '#ffb4ab'
on-error: '#690005'
error-container: '#93000a'
on-error-container: '#ffdad6'
primary-fixed: '#dde1ff'
primary-fixed-dim: '#b7c4ff'
on-primary-fixed: '#001452'
on-primary-fixed-variant: '#0038b6'
secondary-fixed: '#dae2fd'
secondary-fixed-dim: '#bec6e0'
on-secondary-fixed: '#131b2e'
on-secondary-fixed-variant: '#3f465c'
tertiary-fixed: '#d8e3fb'
tertiary-fixed-dim: '#bcc7de'
on-tertiary-fixed: '#111c2d'
on-tertiary-fixed-variant: '#3c475a'
background: '#051424'
on-background: '#d4e4fa'
surface-variant: '#273647'
```

</details>

---

## 🔤 Tipografía

El sistema tipográfico utiliza una **estrategia de tres fuentes** para delimitar funciones claramente:

| Fuente | Uso |
|---|---|
| **Geist** | Titulares — aporta un filo técnico y afilado |
| **Inter** | Texto de cuerpo — legibilidad alta, cualidades humanistas y neutrales |
| **JetBrains Mono** | Etiquetas, metadatos y bloques de código — refuerza la identidad *developer-centric* |

El texto debe configurarse con **tracking ajustado** en los titulares para transmitir una sensación "encajada" y arquitectónica. El texto de cuerpo debe mantener alturas de línea generosas para facilitar la lectura de documentación técnica extensa.

### Escala tipográfica

| Estilo | Fuente | Tamaño | Peso | Alto de línea | Tracking |
|---|---|---|---|---|---|
| Display LG | Geist | 64px | 700 | 72px | -0.02em |
| Display LG (mobile) | Geist | 40px | 700 | 48px | -0.02em |
| Headline MD | Geist | 32px | 600 | 40px | -0.01em |
| Headline MD (mobile) | Geist | 24px | 600 | 32px | -0.01em |
| Body LG | Inter | 18px | 400 | 28px | — |
| Body MD | Inter | 16px | 400 | 24px | — |
| Label SM | JetBrains Mono | 13px | 500 | 16px | 0.05em |
| Code Block | JetBrains Mono | 14px | 400 | 20px | — |

---

## 📐 Layout y espaciado

El layout utiliza una **grilla fluida de 12 columnas** en escritorio y una **grilla de 4 columnas** en móvil. El espaciado se deriva estrictamente de una unidad base de **4px**, garantizando que todos los elementos se alineen a un ritmo matemático consistente.

| Breakpoint | Columnas | Gutter | Margen lateral |
|---|---|---|---|
| Desktop | 12 | 24px | 64px |
| Tablet | 8 | 20px | 32px |
| Mobile | 4 | 16px | 20px |

- **Ancho máximo del contenedor:** 1280px
- **Ritmo vertical:** usar incrementos de 16px (4 unidades), 32px (8 unidades) y 64px (16 unidades) para separar secciones principales, creando una sensación altamente estructurada, tipo "plano de ingeniería".

---

## 🌗 Elevación y profundidad

Este sistema evita las sombras tradicionales, favoreciendo **capas tonales** y **contornos de bajo contraste**. La profundidad se comunica mediante luminosidad: cuanto más "alto" está un objeto en el eje Z, más clara es su superficie.

| Capa | Color | Uso |
|---|---|---|
| Base | `#020617` | Oscuridad verdadera (fondo raíz) |
| Superficie | `#0F172A` | Tarjetas, barras de navegación |
| Overlay | `#1E293B` | Modales, tooltips, dropdowns |

- Los contornos deben ser de **1px sólido**, con opacidad del 10–15% en blanco o azul primario, para definir bordes sin añadir peso visual.
- Usar **blur de fondo (backdrop blur) de 20px** en elementos de navegación para transmitir transparencia y sofisticación técnica.

---

## 🔺 Formas y radios

El lenguaje de formas es disciplinado y geométrico. Se aplica un radio base **suave (0.25rem)** a componentes estándar como botones e inputs, evitando que la interfaz se sienta demasiado agresiva o "afilada", manteniendo así una silueta profesional y estructurada.

| Token | Valor | Uso |
|---|---|---|
| `sm` | 0.125rem | Elementos utilitarios pequeños (tags) |
| `DEFAULT` | 0.25rem | Botones, inputs |
| `md` | 0.375rem | — |
| `lg` | 0.5rem | Contenedores grandes (tarjetas) |
| `xl` | 0.75rem | — |
| `full` | 9999px | Indicadores de estado (evitar pills en otros casos) |

> ⚠️ Evitar formas tipo *pill* (totalmente circulares) salvo para indicadores de estado.

---

## 🧩 Componentes

### Botones
- **Primarios:** relleno azul eléctrico con texto blanco.
- **Secundarios:** estilo *ghost* con borde de 1px en slate-700.
- Etiquetas de botón en **Geist Medium**.

### Inputs
- Fondo oscuro (`#0F172A`) con borde sutil de 1px.
- Estado *focus*: resplandor azul primario (2px de dispersión, opacidad baja).

### Tarjetas (Cards)
- Sin sombras.
- Borde con gradiente sutil (de esquina superior izquierda a inferior derecha), de azul primario a transparente, para resaltar el contorno del contenedor.

### Chips / Tags
- Texto en **JetBrains Mono**.
- Fondos en versiones de baja opacidad del color primario.

### Tablas de datos
- Alta densidad, padding de celda mínimo.
- Bordes solo entre filas (sin líneas verticales).
- Encabezados en **JetBrains Mono**, todo en mayúsculas.

### Bloques de código
- Encapsulados en un contenedor tipo "terminal".
- Fondo ligeramente más oscuro que la capa de superficie estándar.

---

<p align="center">
  <sub>Sistema de diseño <strong>CodeNexo</strong> — Precisión, rendimiento e integridad estructural.</sub>
</p>
