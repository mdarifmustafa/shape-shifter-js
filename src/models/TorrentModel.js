import { EnumTorrentStatus } from "@utils"

const model = {
  source_uid: "",
  source_url: "",
  source_title: "",
  source_thumbnail_url: "",
  source_expanded: false,
  source_thumbnail_path: "",
  source_date_added: new Date(),
  source_status: EnumTorrentStatus.declared,
  source_provider: "",
  source_storage_type: "",
  source_download_percent: 0,
}

export const TorrentModel = () => model
