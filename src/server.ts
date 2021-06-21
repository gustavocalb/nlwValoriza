import express from 'express'

const app = express()

app.get("/test", (request, response) => {
  return response.send("Olá NLW")
})
app.post("/test-post", (request, response) => {
  return response.send("Olá NLW médoto POST")
})

app.listen(3333, () => console.log('🚀 Serve is running'))