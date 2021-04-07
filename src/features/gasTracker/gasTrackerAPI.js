// since there the ethgas.watch doesn't have Access-Control-Allow-Origin": "*"
// or API keys in order to access this from the browser we need to use a cors proxy
// some proxy options: https://nordicapis.com/10-free-to-use-cors-proxies/
// or in the future this can be ran in house
// Here is the ethGasWatch repo: https://github.com/wslyvh/ethgaswatch

export function fetchGasInfo() {
  return fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      "https://ethgas.watch/api/gas"
    )}`
  )
    .then(response => {
      if (response.ok) return response.json()
      throw new Error("Network response was not ok.")
    })
    .then(data => JSON.parse(data.contents))
}
