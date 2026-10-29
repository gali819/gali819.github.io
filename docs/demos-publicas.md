# Demos públicas para el portfolio

## Estado actual

- OjoBache: enlace configurado a `https://gali819.github.io/ojobache/`.
- GuitArg: enlace configurado a `https://guitarg.xyz`.
- OrangeStock (Gestión de Stock): demo compilada integrada en `public/orangestock/`, con captura y enlace `/orangestock/`.
- BlackPaddel y Permutrueque: fichas existentes, demos pendientes. BlackPaddel ya tiene captura.
- ArreglosYa e Invitaciones: retirados del listado por ahora; su contenido anterior queda en el historial de Git.

## Qué vamos a publicar

Una versión demostrativa independiente de cada aplicación, con el diseño del proyecto y flujos que funcionen usando datos inventados. Los visitantes podrán probar acciones sin acceder al sistema real. No es una prueba del backend ni de su seguridad: es una demostración de la experiencia y los flujos.

GitHub Pages sirve archivos estáticos y no ejecuta PHP/Laravel ni una base de datos. [Documentación de GitHub](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

Todo HTML, CSS, JavaScript e imagen enviados al navegador se puede inspeccionar y copiar. Minificar, bloquear clic derecho o esconder botones no protege secretos. La protección consiste en no publicar backend, datos reales, reglas sensibles ni credenciales. Una demo pública tampoco caduca sola: para retirarla hay que eliminarla del despliegue y volver a publicar; eso no revoca copias descargadas.

## Cómo pedir cada demo

Abrí la IA dentro de la carpeta del proyecto original. Pegá el **prompt común** seguido del **bloque específico** de ese proyecto en el mismo mensaje. Empezá por Gestión de Stock; después repetí el proceso con BlackPaddel y Permutrueque.

### Prompt común (copiar completo)

```text
Quiero crear una demo pública interactiva de este proyecto para mi portfolio de GitHub Pages. Implementala y verificala; no te limites a proponer un plan.

Primero inspeccioná las instrucciones del repositorio, el stack, las pantallas y los flujos existentes. Conservá el estilo visual y las funciones representativas que realmente tenga el proyecto. No inventes prestaciones ni afirmes que una simulación prueba el backend original. Si una función solicitada abajo no existe, informalo y elegí un flujo real equivalente.

Creá una aplicación estática independiente en demo-publica/, sin modificar el funcionamiento de producción. Reutilizá solamente componentes y recursos aptos para publicación. Si la interfaz depende de Blade, Inertia o endpoints del servidor, adaptá sus pantallas a una implementación estática mínima que funcione sin PHP, base de datos, API ni credenciales. No copies lógica de negocio confidencial al navegador.

Requisitos:
1. Conservá una experiencia fiel al proyecto, responsive y usable con teclado. Incluí estados vacíos, errores de validación y confirmaciones claras.
2. Usá exclusivamente datos, personas, empresas e imágenes ficticios o autorizados. No extraigas datos de producción ni copies dumps, logs, archivos privados, .env, tokens, correos o teléfonos reales.
3. Mostrá “Demo interactiva · Datos ficticios”. Agregá un acceso “Probar demo” sin registro ni contraseña real. Si hay perfiles, su selección es una simulación, no autenticación.
4. Las acciones principales deben cambiar el estado y permitir completar recorridos de principio a fin; no dejes botones decorativos. Simulá operaciones externas sin pagos, emails, WhatsApp, notificaciones ni pedidos reales.
5. Guardá solo datos ficticios en memoria o localStorage. Usá un prefijo exclusivo y versionado por proyecto. Agregá “Restablecer demo” y eliminá solo las claves de esta demo, nunca localStorage.clear(), porque comparte dominio con mi portfolio y otras demos. Manejá almacenamiento no disponible o corrupto sin romper la página.
6. No hagas solicitudes a servicios de producción ni cargues analítica o dependencias remotas en tiempo de ejecución. Serví los recursos necesarios localmente. No pidas datos personales al visitante.
7. Prepará el build para la ruta pública que indico en el bloque específico. Si usás Vite, configurá base con esa ruta. Usá navegación por hash o una sola página para que recargar una pantalla no produzca 404 en GitHub Pages. Todos los assets deben funcionar dentro de esa subcarpeta.
8. Entregá demo-publica/dist/ con index.html y los assets compilados, sin sourcemaps ni archivos de servidor. No alteres ni publiques el repositorio original, no hagas push ni despliegues. Si no podés compilar, explicá el bloqueo y no digas que el build está listo.
9. Revisá los archivos y solicitudes de red del resultado: no debe haber secretos, datos reales, endpoints privados, recursos faltantes ni conexiones a producción. Desactivar sourcemaps reduce la exposición del fuente original, pero no vuelve secreto el JavaScript publicado.
10. Probá el build bajo su ruta pública, en escritorio y móvil: entrada, recorrido principal, validaciones, recarga, persistencia y reset. Verificá que cada indicador refleje los cambios. Reportá qué pudiste verificar realmente y qué quedó pendiente.

Entregame además un DEMO-README.md fuera de dist/ con comandos exactos para instalar, ejecutar y compilar, archivos publicables, funciones simuladas, limitaciones y resultados de verificación. Incluí una captura horizontal WebP de 1440x900 o similar con datos ficticios si tenés herramientas para capturar el navegador. No inventes una captura si no podés generarla.
```

### Bloque específico: Gestión de Stock

```text
Proyecto: Sistema de Gestión de Stock.
Ruta pública: /orangestock/.
Prefijo de almacenamiento: orangestock:demo-publica:v1.
Captura: stock-management-system.webp.

Recorrido deseado, sujeto a lo que exista en el proyecto:
- Entrar al panel con productos y movimientos ficticios del rubro motos.
- Buscar y filtrar productos.
- Crear o editar un producto ficticio.
- Registrar una entrada y una salida de stock, actualizando cantidades e historial.
- Mostrar validaciones coherentes con la aplicación; demostrar un error y su corrección.
- Mostrar alertas de stock bajo si el sistema original las tiene.
- Restablecer los datos iniciales.

Usá alrededor de 15 productos inventados, con variedad de categorías y cantidades. No copies precios, proveedores, márgenes ni reglas comerciales privadas de la empresa. Para la demo usá reglas simples y explícitamente simuladas.
```

### Bloque específico: BlackPaddel

```text
Proyecto: BlackPaddel.
Ruta pública: /demos/blackpaddel/.
Prefijo de almacenamiento: portfolio-demo-blackpaddel-v1.
Captura: blackpaddel.webp.

Recorrido deseado, sujeto a lo que exista en el proyecto:
- Ver calendario y disponibilidad de canchas ficticias.
- Elegir fecha, cancha y horario.
- Crear una reserva ficticia y verla reflejada en disponibilidad y listado.
- Evitar una segunda reserva sobre el mismo turno dentro de esta simulación local.
- Cancelar una reserva y liberar el horario.
- Explorar la administración si está presente en el sistema real.
- Restablecer la demo.

Generá turnos relativos a la fecha actual para que la demo no quede vacía con el paso del tiempo; manejá también datos guardados de días anteriores. Usá nombres inventados y no pidas teléfono, correo, pagos ni contacto con el club. Aclará que las reservas no son reales y que el estado no se comparte entre visitantes.
```

### Bloque específico: Permutrueque

```text
Proyecto: Permutrueque.
Ruta pública: /demos/permutrueque/.
Prefijo de almacenamiento: portfolio-demo-permutrueque-v1.
Captura: permutrueque.webp.

Recorrido deseado, sujeto a lo que exista en el proyecto:
- Explorar publicaciones ficticias, buscar y filtrar.
- Abrir el detalle de un objeto y su usuario ficticio.
- Crear o editar una publicación local con recursos de ejemplo, sin subir archivos a servicios externos.
- Simular una propuesta de intercambio y ver su estado, si el proyecto incluye ese flujo.
- Gestionar las publicaciones del perfil de demostración.
- Restablecer los datos iniciales.

Usá alrededor de 12 publicaciones variadas con imágenes locales autorizadas y usuarios inventados. No incluyas ubicaciones precisas ni contactos reales. Si el sistema tiene mensajería, limitá la demo a mensajes simulados locales claramente identificados.
```

## Cómo integrar las entregas en este portfolio

La opción elegida es publicar los builds dentro de este mismo portfolio, sin abrir los repositorios originales. OrangeStock ya está integrado localmente; las otras dos demos siguen pendientes. OjoBache conserva su repositorio independiente `gali819/ojobache`: ambos formatos pueden convivir.

| Proyecto | Copiar el contenido de su dist en | URL resultante |
| --- | --- | --- |
| OrangeStock | `public/orangestock/` | `https://gali819.github.io/orangestock/` |
| BlackPaddel | `public/demos/blackpaddel/` | `https://gali819.github.io/demos/blackpaddel/` |
| Permutrueque | `public/demos/permutrueque/` | `https://gali819.github.io/demos/permutrueque/` |

1. Pedí la primera demo con los bloques anteriores. Conservá el proyecto original privado; al portfolio copiá únicamente el resultado compilado revisado. No copies el historial Git del original.
2. Traé la ubicación de `demo-publica/dist/` y su `DEMO-README.md` a este chat para revisar e integrar la entrega. La carpeta destino debe contener `index.html` directamente, no una carpeta `dist` adicional.
3. Colocá las capturas en `public/projects/` con los nombres indicados. Revisá también la captura existente de BlackPaddel antes de reutilizarla.
4. OrangeStock ya tiene `liveUrl: '/orangestock/'`. Una vez que cada otra demo funcione localmente, agregá `liveUrl: '/demos/blackpaddel/'` o `liveUrl: '/demos/permutrueque/'` a su ficha en `src/data/projects.ts`. No agregues enlaces antes de tener sus archivos.
5. Ejecutá `npm run lint`, `npm run build` y `npm run preview`. Abrí cada ruta bajo la URL local que muestre Vite; probá acciones y recarga. Vite copia `public/` al build final.
6. Revisá los archivos que vas a subir y hacé commit/push a `main` cuando esté listo para publicar. El workflow existente compila y publica `dist/` en GitHub Pages; comprobá que termine correctamente y verificá los enlaces públicos.

Como las demos comparten el origen de este portfolio y OjoBache, también comparten el ámbito de localStorage. Los prefijos separados evitan colisiones accidentales, pero no son una frontera de seguridad: no se deben almacenar secretos en ninguna de estas demos.

## Qué falta para cerrar esta parte del portfolio

- Generar, revisar e integrar BlackPaddel y Permutrueque desde sus proyectos originales.
- Agregar la captura de Permutrueque; revisar la de BlackPaddel.
- Activar y probar sus enlaces cuando existan los builds.
- Publicar los cambios y comprobar el resultado en GitHub Pages.

Las demos permiten evaluar interfaz y recorridos. Para mostrar lógica privada del backend sin publicarla, se puede hacer una presentación guiada con pantalla compartida.
