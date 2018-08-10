Package.describe({
  name: "modules",
  version: "0.13.0-beta171.31",
  summary: "CommonJS module system",
  documentation: "README.md"
});

Npm.depends({
  reify: "0.17.2"
});

Package.onUse(function(api) {
  api.use("modules-runtime");
  api.mainModule("client.js", "client");
  api.mainModule("server.js", "server");
  api.export("meteorInstall");
});
