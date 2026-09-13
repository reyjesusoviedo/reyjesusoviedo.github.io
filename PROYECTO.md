# Proyecto de herramientas · El Rey Jesús Oviedo

Documento de referencia. Guárdalo junto a los archivos del sitio.
Última actualización: 6 de septiembre de 2026 · web 2.3, tarjetas 1.4, cafetería 1.3.

---

## 1. Datos de la iglesia

| Dato | Valor |
|---|---|
| Ministerio | Ministerio Internacional Gloria Revelada |
| Iglesia | El Rey Jesús Oviedo |
| Pastores | Genilson Santiago y Taiala Santiago |
| Teléfono general | 629 79 38 00 |
| Instagram | migrreyjesusasturias |
| Facebook | Migr rey Jesús asturias |
| Web | https://reyjesusoviedo.github.io |
| Desarrollo | Bernardo Santos · 2026 |
| Bizum del desarrollador | 629 79 38 00 |

### Centros

La iglesia está en Oviedo. Las demás se llaman **Centro de Gloria**.

| Centro | Dirección | Servicios |
|---|---|---|
| **Oviedo** (iglesia) | Calle Jardín 12, La Corredoria, 33011 Oviedo | Servicio familiar, domingo 11:00 · Casa de Oración, martes 20:00 |
| Gijón | Calle Roncal 4, Gijón | Servicio familiar, domingo 18:00 · Oración, martes 17:00 |
| Sama | Calle Constitución 52, Sama de Langreo | Servicio, miércoles 20:00 |
| Cangas de Onís | Calle Rey Alfonso 12, bajo, Cangas de Onís | Servicio familiar, lunes 20:00 · Casa de Oración, miércoles 18:30 |

> Grado se retiró. La Felguera pasó a llamarse Sama.
> En Gijón hay además una reunión los viernes a medianoche que de momento
> no se publica.

---

## 2. Qué se ha construido

Todo son archivos HTML sueltos, sin servidor ni base de datos. Se publican en
GitHub Pages y se abren en cualquier navegador.

| Archivo | Qué es | Para quién |
|---|---|---|
| `index.html` | La web pública de la iglesia | Cualquiera |
| `herramientas.html` | Índice interno de aplicaciones. Contraseña: **reyjesus2026** | Equipo |
| `app.html` | Tarjetas de visita y códigos QR | Cada líder |
| `cafeteria.html` | Comandas, caja y cierre del día | Tablet de la barra |
| `guia.html` | Guía de la aplicación de tarjetas | Reunión de líderes |
| `bienvenida.html` | Lo que ve quien escanea un cartel | Visitantes |
| `tarjeta.html` | Ficha pública de cada líder | Visitantes |
| `evento.html` | Página propia de cada evento, con QR | Visitantes |
| `cartel-conferencia.pdf` · `cartel-retiro.pdf` | Carteles A4 listos para imprimir | Para repartir |
| `version.json` | Anuncia qué versión hay publicada | Sistema |
| `sw.js`, `manifest.json`, `manifest-cafeteria.json` | Instalación y funcionamiento sin cobertura | Sistema |
| `icon-*.png` | Icono de las aplicaciones | Sistema |
| Imágenes `.jpg` | Fotos y carteles, ver sección 5 | — |

**Existe también** una `agenda-sedes.html`, con el cuadrante de quién dirige cada
reunión. Está hecha pero **no se ha subido**. Aparece en el índice como «sin publicar».

---

## 3. Cómo se actualiza cada cosa

### La web, sin pedir ayuda a nadie

**Tres toques seguidos en el logo** de la barra superior abre el editor. Desde ahí
se cambian: textos, teléfono, dirección, redes, sedes con sus horarios, eventos,
el asistente y la sección Colabora.

Se pulsa **Ver cambios** para comprobarlo y **Descargar index.html**. Ese archivo
se sube a GitHub reemplazando el anterior.

**Formato de los horarios**, una línea por reunión:
```
Culto general | domingo 11:00 | reunion-culto-general.jpg
```
Nombre, día y hora, y cartel. El cartel es opcional.

### Las aplicaciones

`app.html` y `cafeteria.html` se editan desde sus propios Ajustes, dentro de la
aplicación. Los datos se guardan en el móvil o tablet de cada persona.

Cuando hay versión nueva, aparece una franja verde con botón de actualizar. Para
que eso funcione hay que subir **siempre** el `version.json` con el número subido.

### Las dos páginas generadas

`bienvenida.html` y `tarjeta.html` **no se editan a mano**: se generan desde
`app.html`, en la pantalla Bienvenida, con los botones *Generar página para
visitantes* y *Generar página de tarjetas*. Se descargan y se suben.

Hay que regenerarlas cada vez que cambien textos, fotos, teléfonos o sedes.

---

## 4. Decisiones tomadas y por qué

**Sin servidor.** Todo son archivos estáticos. Ventaja: gratis, simple, nada que
mantener. Coste: no hay sincronización entre dispositivos ni guardado en la nube.

**Los datos viven en cada aparato.** Lo que un líder mete en su móvil se queda
ahí. No lo ve nadie más. Por eso las copias de seguridad importan tanto.

**La contraseña de herramientas es una cortina, no una cerradura.** Evita que
alguien entre por curiosidad. Quien conozca la dirección de `app.html` o
`cafeteria.html` puede abrirlas directamente. No poner ahí nada delicado.

**La cafetería no lleva datos de personas**, solo pedidos e importes. Las tarjetas
y los contactos sí, y por eso llevan casilla de permiso y botón de borrado.

**El asistente de la web no usa inteligencia artificial.** Solo dice lo que está
escrito. Se descartó un asistente que respondiera libremente por el riesgo de que
dijera algo que la iglesia no ha dicho.

**En «Necesito oración» hay un aviso con el teléfono 024**, la línea de atención a
la conducta suicida. Está puesto a propósito. Conviene no quitarlo.

**Los eventos pasados desaparecen solos.** No hay que acordarse de nada.

**Los precios admiten coma.** Se corrigió un fallo por el que escribir 1,80 en la
cafetería guardaba cero.

---

## 5. Los archivos de imagen

Se cambian subiendo una imagen con **el mismo nombre**. No hay que tocar nada más.

| Archivo | Qué es | Formato |
|---|---|---|
| `fondo-1.jpg` · `fondo-2.jpg` | Fondo de la portada, se cruzan cada 7 s | Panorámica |
| `foto-1.jpg` … `foto-8.jpg` | Galería de «Quiénes somos». Las que no existan no salen | 3:2 apaisada |
| `pastores-foto.jpg` | Sección de pastores. Si no existe, sale el logo | libre |
| `sede-oviedo.jpg` · `sede-gijon.jpg` · `sede-sama.jpg` · `sede-cangas-de-onis.jpg` | Imagen de cada centro | 3:2 apaisada |
| `reunion-culto-general.jpg` · `reunion-culto-de-oracion.jpg` · `reunion-reunion-general.jpg` | Carteles de las reuniones semanales | 3:4 vertical |
| `evento-1.jpg` · `evento-retiro-sanidad.jpg` | Carteles de eventos. El nombre se elige en el editor | cualquiera, se ve entero |

Los carteles de sedes y reuniones son provisionales: fondo azul con el logo y el
nombre. El `evento-1.jpg` es el cartel real de la conferencia.

---

## 6. Publicar

1. Entrar en `github.com`, repositorio `reyjesusoviedo.github.io`.
2. **Add file → Upload files**, arrastrar los archivos, **Commit changes**.
3. Esperar dos minutos. Los cambios se ven al momento en el navegador.
4. En el móvil, si la aplicación está instalada, esperar el aviso de versión nueva
   o borrar la caché de Chrome y reinstalarla.

---

## 6 bis. Eventos

Cada evento tiene su propia página en `evento.html?e=ID`. Se edita desde el editor
oculto de la web: título, fechas, sede, frase de gancho, donativo, teléfono de
información y cartel.

**Casilla «Mostrarlo en la portada».** Si no está marcada, el evento no aparece en
la agenda de la web, pero su página sigue funcionando. Sirve para repartir el QR
mientras se termina de preparar.

**Eventos cargados ahora mismo**, los dos sin publicar:

| Evento | Fecha | Donativo | Información |
|---|---|---|---|
| Retiro de sanidad interior y liberación | 19 de septiembre, 9:00 | — | teléfono general |
| Conferencia Gloria Postrera | 23 y 24 de octubre | 30 € | Tiffanny · 642 23 02 78 |

Invitados de la conferencia, comprobados: Apóstol Dublas Rodríguez y Profeta
Jessica Rodríguez, del Ministerio Internacional El Rey Jesús de Miami. No se
muestran en la página, pero están guardados en los datos.

## 7. Lo que queda pendiente

- [ ] Número de Bizum e IBAN de la iglesia, para activar la sección Colabora
- [ ] Enlace de pago con tarjeta, tras hablar con el banco de los datáfonos o
      darse de alta en Stripe
- [ ] Cambiar la contraseña de `herramientas.html` antes de repartir la dirección
- [ ] Fotos oficiales para sustituir las provisionales
- [ ] Subir `agenda-sedes.html` si se quiere usar el cuadrante
- [ ] Decidir si se mantiene GitHub o se pasa a un dominio propio

---

## 8. Avisos que conviene no olvidar

**Copias de seguridad.** Las aplicaciones guardan en el navegador. Si alguien
limpia los datos de navegación sin haber hecho copia, se pierde lo suyo. En la
cafetería, con dinero de por medio, el archivo del cierre debe salir de la tablet
el mismo día.

**Fiscalidad.** El comprobante de la cafetería lleva fecha, conceptos y total.
Aunque diga «donativo», cumple la función de un recibo. Si se entrega con
regularidad, conviene que un asesor de entidades religiosas confirme cómo
registrar esos ingresos.

**Datos de terceros.** Los contactos de la aplicación de tarjetas son nombres y
teléfonos de personas reales. La copia de seguridad los lleva dentro: no
compartirla por grupos.

**Fotos de personas.** Las que están en la web son de la congregación y de los
pastores. Si alguien pide que se retire la suya, se cambia el archivo y listo.

---

Herramientas desarrolladas por **Bernardo Santos** · 2026
Sin ánimo de lucro, para bendecir y administrar mejor los recursos del Reino.
