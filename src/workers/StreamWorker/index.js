
const streamWorker = globalThis

const stream = (torrent) => {
  var constructTorrent = { ...torrent }
  // throw "I will not do the work"
  streamWorker.postMessage(JSON.stringify(constructTorrent))
}

const tixati = (torrent) => stream(torrent)

streamWorker.onmessage = (e) => {
  console.log("tixati e.data is:", e.data)
  tixati(e.data)
}
