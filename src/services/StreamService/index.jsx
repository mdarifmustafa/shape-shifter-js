import { StoreContext } from "@context"
import { useEffect, useContext } from "react"
import { EnumTorrentStatus } from "@utils"

export const StreamService = () => {
  const { torrents, setTorrents } = useContext(StoreContext)
  const streamWorkerInstance = new Worker(
    new URL("./../../workers/StreamWorker", import.meta.url)
  )

  streamWorkerInstance.onmessage = (e) => {
    const torObj = JSON.parse(e.data)
    const newTorrents = [...torrents].map((tor) => {
      if (tor.source_uid === torObj.source_uid) {
        tor.source_status = EnumTorrentStatus.queued
      }
      return tor
    })
    setTorrents(newTorrents)
  }

  const initWorker = (torrent) => {
    streamWorkerInstance.postMessage(torrent)
  }

  useEffect(() => {
    if (torrents.length) {
      const torrent = torrents.find(
        (tor) => tor.source_status === EnumTorrentStatus.declared
      )
      if (torrent) initWorker(torrent)
    }
  }, [torrents])

  return null
}
