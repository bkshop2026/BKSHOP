# BK Shop — Guía rápida de edición

Todo lo que cambias seguido está en **un solo lugar**: el inicio del archivo
`js/script.js`, en el bloque marcado como **CONFIGURACIÓN RÁPIDA**.

Ábrelo con el Bloc de notas (o cualquier editor de texto) y verás esto:

```js
const WHATSAPP = "50200000000";

const PRECIOS = {
  barcelona:     299,
  "real-madrid": 299,
  retro:         350,
  messi:         350,
  cr7:           350,
};

const PRECIO_DESDE = 299;

const TALLAS = ["M", "L", "XL"];
```

---

## 1. Tu número de WhatsApp

Cambia el número que está entre comillas en `WHATSAPP`.

- Se escribe con código de país (Guatemala = **502**), **sin** el signo `+`,
  **sin** espacios y **sin** guiones.
- Si tu número es 5555-1234 → escribes `"50255551234"`.

```js
const WHATSAPP = "50255551234";
```

Con eso quedan actualizados los tres lugares donde aparece WhatsApp:
el botón del encabezado, el botón "Pedir" de cada camisola y el botón
del pie de página. No hay que tocar nada más.

Cada botón "Pedir" abre WhatsApp con un mensaje ya escrito que incluye
el nombre de la camisola, el precio y las tallas.

---

## 2. Precios

Cambia solo el número. Se actualiza en **todas** las camisolas de esa sección.

```js
const PRECIOS = {
  barcelona:     325,   // <- ahora todas las del Barça valen Q325
  "real-madrid": 299,
  retro:         375,
  messi:         375,
  cr7:           375,
};
```

**Importante:** `PRECIO_DESDE` es el precio que se anuncia en la banda que se
mueve arriba y en el pie de página. Ponlo siempre igual al **precio más bajo**
de tu lista, para que no se anuncie un precio que no existe.

```js
const PRECIO_DESDE = 299;
```

### Ponerle un precio distinto a UNA sola camisola

Si una camisola en particular vale diferente al resto de su sección, agrégale
su propio `precio` en el catálogo (más abajo en el mismo archivo):

```js
retro: [
  { nombre: "Argentina '86", dorsal: 10, precio: 450 },  // esta sí vale Q450
  { nombre: "Brasil '70", dorsal: 10 },                  // esta usa los Q350 de PRECIOS
  ...
]
```

---

## 3. Tallas

Se muestran en todas las camisolas de todas las secciones.

```js
const TALLAS = ["M", "L", "XL"];
```

Para agregar otra, escríbela entre comillas y separada por coma:

```js
const TALLAS = ["S", "M", "L", "XL", "XXL"];
```

Para quitarla, bórrala junto con su coma.

### Tallas distintas para UNA sola camisola

Igual que con el precio, agrégale su propio campo `tallas`:

```js
{ nombre: "Brasil '70", dorsal: 10, tallas: ["L", "XL"] },
```

---

## 4. Dorsales disponibles (Barcelona y Real Madrid)

En esas dos secciones los dorsales son **texto libre**. Busca el campo
`descripcion` de cada camisola en el catálogo y escribe lo que quieras:

```js
descripcion: "Dorsales disponibles: Yamal #10, Pedri #8, Lewandowski #9.",
```

En Retros, Messi y CR7 el dorsal es un solo número, en el campo `dorsal`.

---

## 5. Reglas para no romper nada

- Los textos siempre van **entre comillas**.
- Los precios y dorsales van **sin comillas** (son números) y sin el signo Q.
- Cada línea del catálogo termina en **coma**.
- Después de guardar, recarga la página con **Ctrl + F5** para ver los cambios.
- Si algo se ve en blanco, presiona **F12 → pestaña Console**: ahí sale el
  error, casi siempre una comilla o una coma que falta.

Guarda siempre una copia del archivo antes de editarlo.
