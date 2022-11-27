

const streamWorker = globalThis;

const stream = (torrent) => {
  var constructTorrent = { ...torrent }
  // throw "I will not do the work"
  streamWorker.postMessage(JSON.stringify(constructTorrent))
}

const tixati = (torrent) => stream(torrent)

streamWorker.onmessage = (e) => {
  tixati(e.data)
}
