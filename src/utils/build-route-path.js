export function buildRoutePath(path) {
  const routeParametersRegex = /:([a-zA-Z]+)/g
  const paramWithRegex = path.replaceAll(routeParametersRegex, '(?<$1>[a-z0-9\-_]+)')

  const pathRegex = new RegExp(`${paramWithRegex}`)

  console.log(pathRegex);
  
  // const test = /\/users\/([a-z0-9\-_]+)/

  return pathRegex
  
}