const CACHE = "reyjesus-v4";
const FILES = ["./", "./index.html", "./app.html", "./herramientas.html",
  "./cafeteria.html", "./guia.html", "./bienvenida.html", "./tarjeta.html",
  "./manifest.json", "./manifest-cafeteria.json",
  "./icon-192.png", "./icon-512.png", "./icon-maskable.png"];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.allSettled(FILES.map(f => c.add(f))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("message", e => {
  if (e.data && e.data.type === "saltar") self.skipWaiting();
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // version.json siempre de la red, sin caché
  if (url.pathname.endsWith("version.json")) {
    e.respondWith(fetch(req, { cache: "no-store" }).catch(() => caches.match(req)));
    return;
  }

  const esPagina = req.mode === "navigate" || url.pathname.endsWith(".html") ||
                   url.pathname.endsWith("/") || url.pathname.endsWith(".json") ||
                   url.pathname.endsWith(".js");

  if (esPagina) {
    // primero la red, saltándose la caché del navegador
    e.respondWith(
      fetch(req, { cache: "reload" })
        .then(r => {
          const copia = r.clone();
          caches.open(CACHE).then(c => c.put(req, copia)).catch(() => {});
          return r;
        })
        .catch(() => caches.match(req).then(r => r || caches.match("./index.html")))
    );
    return;
  }

  // imágenes e iconos: primero la caché, que no cambian casi nunca
  e.respondWith(
    caches.match(req).then(r => r || fetch(req).then(res => {
      const copia = res.clone();
      caches.open(CACHE).then(c => c.put(req, copia)).catch(() => {});
      return res;
    }))
  );
});
