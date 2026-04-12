Documentar tu código es una excelente práctica para que tú (o cualquier otra persona) puedan entenderlo en el futuro sin romperse la cabeza. Aquí tienes una propuesta de documentación estructurada, clara y profesional para tu **Calculadora de Letras**.

---

## 📝 Documentación de Proyecto: Calculadora de Letras

Esta página web es una herramienta interactiva que funciona como una calculadora basada en un sistema de codificación de letras por números. Permite al usuario ingresar una secuencia de letras y visualizar simultáneamente su valor numérico correspondiente.

### 🚀 Tecnologías Utilizadas
* **HTML5:** Estructura semántica del sitio.
* **Tailwind CSS:** Framework de diseño para estilos rápidos, modernos y responsivos.
* **JavaScript (Vanilla):** Lógica funcional para el procesamiento de datos y manipulación del DOM.
* **Google Fonts (Inter):** Tipografía para mejorar la legibilidad.

---

### 🏗️ Estructura del Código

#### 1. Interfaz de Usuario (UI)
El diseño se basa en una cuadrícula (**Grid**) de 3 columnas contenida en un panel con bordes redondeados y sombras para dar un aspecto de "tarjeta".
* **Pantalla (Display):** Ubicada en la parte superior, dividida en dos secciones para mostrar tanto la cadena de letras como el resultado numérico.
* **Firma del Desarrollador:** Se incluye una etiqueta discreta en la parte superior derecha (`Desarrollador: FA`) integrada con el esquema de colores.
* **Teclado:** Botones interactivos que representan el mapa de caracteres.

#### 2. Lógica de Codificación
La aplicación utiliza un objeto constante llamado `letterMap` que define la relación entre letras y números:

| Letra | Valor | Letra | Valor |
| :--- | :--- | :--- | :--- |
| **B** | 1 | **A** | 6 |
| **U** | 2 | **G** | 7 |
| **I** | 3 | **O** | 8 |
| **T** | 4 | **S** | 9 |
| **R** | 5 | **E** | 0 |

---

### ⚙️ Funcionamiento de JavaScript
El script maneja tres procesos principales:

1.  **Captura de Entrada:** Escucha los eventos de "click" en todos los elementos con la clase `.button`.
2.  **Procesamiento de Datos:** * Si se pulsa **BORRAR**, se limpia la variable `currentInput`.
    * Si se pulsa una letra, se busca su equivalente numérico y se añade a la cadena.
3.  **Renderizado en Pantalla:** * `letterDisplay`: Reconvierte la cadena numérica a letras para confirmación visual.
    * `resultDisplay`: Muestra la secuencia numérica final.

---

### 🛠️ Mantenimiento y Personalización
Para cambiar las letras o los números asignados, solo debes modificar el objeto `letterMap` en la sección de `<script>`:

```javascript
const letterMap = {
    'B': '1', 'U': '2', // ... y así sucesivamente
};
```

> [!TIP]
> **Nota de Diseño:** Los estilos de Tailwind están configurados mediante CDN. Para un entorno de producción de alto rendimiento, se recomienda compilar Tailwind localmente o usar un bundler.

---

**¿Te gustaría que añadiera alguna sección técnica más específica, como el manejo de eventos o los estilos de hover?**
