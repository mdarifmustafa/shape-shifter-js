const EnumTorrentStatus = {
    declared: "declared",
    queued: "queued",
    downloading: "downloading",
    paused: "paused",
    completed: "completed",
    deleted: "deleted",
    broken: "broken",
    error: "error",
  }
  
//   interface ITorrent {
//     source_uid: string
//     source_url: string
//     source_title: string
//     source_thumbnail_url: string
//     source_expanded: boolean
//     source_thumbnail_path: string
//     source_date_added: Date
//     source_status: EnumTorrentStatus
//     source_provider: string
//     source_storage_type: string
//     source_download_percent: number
//     source_misc_info?: any[]
//   }

export {
    EnumTorrentStatus
}