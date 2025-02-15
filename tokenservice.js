const express = require("express")
const cors = require("cors")
const { createProxyMiddleware } = require("http-proxy-middleware")

const app = express()

app.use(cors()) // Allow all origins

app.use(
  "/proxy",
  createProxyMiddleware({
    target: "https://api.meetup.com",
    changeOrigin: true,
    pathRewrite: { "^/proxy": "" }, // Remove /proxy prefix
  })
)

app.listen(8080, () =>
  console.log("✅ CORS Proxy running on http://localhost:8080")
)
