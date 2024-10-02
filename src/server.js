import http from 'node:http'
import { json } from './middlewares/json.js'
import { routes } from './routes.js'

// Cabeçalhos Headers -> Requisição e resposta são metadados


const server = http.createServer(async (req, res) => {

  await json(req, res)
  const { method, url } = req

  const route = routes.find(route => {
    return method === route.method && route.path.test(url)
  })

  if (route) {
    const routeParams = req.url.match(route.path)

    // cria o params com todo o conteúdo de groups
    const params = { ...routeParams.groups }

    req.params = params
    
    return route.handler(req, res)
  }

  return res.writeHead(404).end()
})

server.listen(3333)