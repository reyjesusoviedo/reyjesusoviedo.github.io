# Publicar la aplicación · paso a paso

## Los archivos

Sube estos diecinueve, todos juntos y sin cambiarles el nombre:

| Archivo | Qué es |
|---|---|
| `index.html` | La web de la iglesia. Es la portada del sitio. |
| `herramientas.html` | Índice interno con todas las aplicaciones. Pide contraseña. |
| `app.html` | Tarjetas y QR. Es la que instalan los líderes. |
| `cafeteria.html` · `manifest-cafeteria.json` | La cafetería, para la tablet de la barra. |
| `manifest.json` | Le dice al móvil el nombre y el icono. |
| `sw.js` | Hace que funcione sin cobertura. |
| `icon-192.png` · `icon-512.png` · `icon-maskable.png` | El logo de la iglesia. |
| `foto-1.jpg` … `foto-4.jpg` | La galería de la portada. Admite hasta `foto-8.jpg`. |
| `fondo-1.jpg` · `fondo-2.jpg` | Las fotos del encabezado. |
| `pastores-foto.jpg` | Foto de los pastores. Si no existe, sale el logo. |
| `sede-oviedo.jpg` · `sede-gijon.jpg` · `sede-la-felguera.jpg` · `sede-grado.jpg` · `sede-cangas-de-onis.jpg` | Imagen de cada sede en su carrusel. |
| `reunion-culto-general.jpg` · `reunion-culto-de-oracion.jpg` · `reunion-reunion-general.jpg` | Carteles de las reuniones semanales. |
| `evento-1.jpg` · `evento-2.jpg` · `evento-3.jpg` | Carteles de los eventos. El 2 y el 3 son de relleno: cámbialos por los vuestros. |
| `guia.html` | La guía para presentar a los líderes. |
| `bienvenida.html` | Lo que ve quien escanea un cartel. |
| `tarjeta.html` | La tarjeta pública de cada líder. |

Los dos últimos van con la dirección de ejemplo `reyjesusoviedo.github.io`.
Si tu dirección es otra, hay que volver a generarlos desde la aplicación (paso 6).

---

## 1 · Crear la cuenta

Entra en **github.com** y regístrate. Es gratis.

El nombre de usuario que elijas forma parte de la dirección. Si eliges
`reyjesusoviedo`, quedará:

```
https://reyjesusoviedo.github.io
```

## 2 · Crear el repositorio

Arriba a la derecha, el botón **+** y luego **New repository**.

- **Repository name**: tu usuario seguido de `.github.io`, exactamente así.
  Por ejemplo `reyjesusoviedo.github.io`.
- Marca **Public**.
- Pulsa **Create repository**.

## 3 · Subir los archivos

En la página que aparece, busca el enlace **uploading an existing file**.

Arrastra ahí los nueve archivos, todos a la vez.

Baja del todo y pulsa **Commit changes**.

## 4 · Activar la publicación

Entra en **Settings** y, en la columna de la izquierda, en **Pages**.

En *Branch* elige **main** y la carpeta **/ (root)**. Pulsa **Save**.

Espera dos o tres minutos y abre tu dirección en el navegador.

## 5 · Repartir las herramientas

Al abrir tu dirección sale la web de la iglesia. Abajo del todo hay un enlace
discreto, **Herramientas del equipo**, que lleva al índice.

Ahí cada herramienta tiene un botón de **Código QR**: se lo enseñas a cada líder,
lo escanea y la instala en su móvil sin teclear direcciones.

### La contraseña

`herramientas.html` pide una contraseña. La de partida es **reyjesus2026**.

**Cámbiala antes de repartir la dirección.** Dentro de la página, abajo del todo, hay
un enlace *Cambiar la contraseña*: escribes la nueva y te da un código largo. Abre
`herramientas.html` con un editor de texto, busca la línea que empieza por
`const CLAVE` y sustituye lo que hay entre comillas por ese código. Sube el archivo.

**Qué protege y qué no.** Evita que alguien entre por curiosidad. No es una cerradura:
la contraseña viaja dentro de la página y alguien con conocimientos puede saltársela.
Además, quien conozca la dirección exacta de `app.html` o `cafeteria.html` puede
abrirlas directamente. No pongas ahí nada que no pueda verse.

## 6 · Instalarla en el móvil

La aplicación de los líderes está en `tudireccion.github.io/app.html`.

**Android, con Chrome**: abre la dirección, toca los tres puntos de arriba a la
derecha y elige *Instalar aplicación*.

**iPhone, con Safari**: abre la dirección, toca el botón de compartir, el
cuadrado con la flecha, y elige *Añadir a pantalla de inicio*.

Aparece el icono con el logo. Al tocarlo se abre a pantalla completa, sin barra
de direcciones.

## 7 · Poner la dirección dentro de la aplicación

Este paso es el que enciende todo lo demás.

Abre la aplicación, entra en **Ajustes** y escribe tu dirección en
*Dirección web del sitio*:

```
reyjesusoviedo.github.io
```

Pulsa **Guardar**. A partir de ahí:

- En el QR aparece la pastilla **Mi página**, que lleva a tu tarjeta con
  botones que la otra persona puede tocar.
- Los QR de los carteles llevan a la bienvenida en vez de a WhatsApp.

## 8 · Generar las dos páginas públicas

Entra en **Bienvenida** y pulsa los dos botones de abajo:

- *Generar página para visitantes* → descarga `bienvenida.html`
- *Generar página de tarjetas* → descarga `tarjeta.html`

Sube esos dos archivos a GitHub reemplazando los que había.

Repite este paso cada vez que cambies textos, fotos, horarios o teléfonos.

## 9 · Imprimir los carteles

Ahora que los QR llevan a la página, entra en **Imprimir** y saca:

- El cartel A4 para la puerta de cada local. Elige *una por cada sede*.
- Las tarjetas de 85 por 55 para tablones y mostradores.

---

## Poner un evento

En la web, toca **tres veces el logo** de la barra de arriba: se abre el editor.
Baja hasta *Eventos* y pulsa **Añadir evento**. Rellena el título, las fechas, la
sede y, si tienes cartel, escribe el nombre del archivo, por ejemplo `evento-2.jpg`.

Pulsa **Ver cambios** para comprobarlo, luego **Descargar index.html**, y sube ese
archivo junto con el cartel.

Se muestran hasta tres eventos en un carrusel, con el más próximo en el centro.
Los pasados desaparecen solos al llegar la fecha.

Los carteles se cambian subiendo una imagen con el mismo nombre, sin tocar nada más.
Recórtalos verticales, tres de ancho por cuatro de alto, a unos 800 píxeles.

Cada tarjeta tiene dos botones: *Quiero ir*, que abre WhatsApp, y *Compartir*.

## Poner los horarios de una sede

Tres toques en el logo, baja hasta *Sedes*, y en el campo de horarios escribe una
línea por reunión con este formato:

```
Culto general | domingo 11:00 | reunion-culto-general.jpg
```

Nombre, día y hora, y el cartel. El cartel es opcional. De ahí salen la franja
azul de horarios, el aviso de la próxima reunión y los horarios de cada tarjeta
de sede.

## Cambiar las fotos de la web

No hace falta tocar ningún archivo de texto. Sube a GitHub una imagen con el mismo
nombre y sustituye la que hay:

- `foto-1.jpg` a `foto-8.jpg` son la galería. Las que no existan simplemente no
  aparecen, así que puedes empezar con cuatro y añadir más cuando quieras.
  Recórtalas apaisadas, tres de ancho por dos de alto, a unos 900 píxeles.
- `fondo-1.jpg` y `fondo-2.jpg` son las del encabezado. Panorámicas y anchas.
- `pastores.jpg` es la imagen de la sección de pastores.

La galería no lleva textos, así que cambiar fotos es solo subir archivos.

## Actualizar más adelante

Cuando haya una versión nueva de cualquier archivo, súbela reemplazando la anterior.
Los móviles que ya la tengan instalada se actualizan solos la próxima vez que
la abran con cobertura.

**Los datos de cada persona no se pierden al actualizar.**

---

## Sobre los datos

Lo que cada uno guarda en su móvil se queda ahí. No se sube a GitHub ni lo ve
nadie más. La dirección solo sirve para descargar la aplicación.

Lo que sí es público es el archivo de partida: el logo, las sedes con sus
direcciones y horarios, el teléfono general y las tarjetas de los pastores.
Son datos que de todas formas van impresos en los carteles.

**No subas aquí nada que no quieras que se vea.** La agenda de sedes, con los
teléfonos de los servidores, no se publica: ese archivo se queda en los móviles
del equipo.

## Copias de seguridad

Recuérdaselo al equipo en la reunión. En *Ajustes* hay un botón para descargar
una copia. Si alguien limpia los datos de navegación del móvil sin haberla
hecho, pierde lo que haya metido. La copia se restaura en un minuto desde el
mismo sitio.

---

Aplicación desarrollada por Bernardo Santos · 2026
Sin ánimo de lucro, para bendecir y administrar mejor los recursos del Reino.
