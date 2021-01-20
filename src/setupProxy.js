const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        ["/api", "/auth/twitch"],
        createProxyMiddleware({
            target: "https://twitch-auth-0.herokuapp.com",
            changeOrigin: true
        })
    )
}
// http://localhost:3000