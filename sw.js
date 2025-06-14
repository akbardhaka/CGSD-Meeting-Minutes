self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("CGSD-cache").then((cache) => {
      return cache.addAll(["index.html", "styles.css", "app.js", "manifest.json", "images/logo.png"]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
