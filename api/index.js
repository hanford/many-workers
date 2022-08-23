const handleRequest = async () => {
  return new Response("api");
};

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
