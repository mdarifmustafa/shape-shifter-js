import { Fragment, useState, useRef, useEffect, useContext } from "react"
import styles from "./Header.module.scss"
import { Grid, ClickAwayListener } from "@mui/material"
import { MagnetLight } from "@assets/images"
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined"
import SortOutlinedIcon from "@mui/icons-material/SortOutlined"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"

import Button from "@mui/joy/Button"
import TextField from "@mui/joy/TextField"
import Modal from "@mui/joy/Modal"
import ModalDialog from "@mui/joy/ModalDialog"
import Stack from "@mui/joy/Stack"
import Typography from "@mui/joy/Typography"
import { StoreContext } from "@context"
import { TorrentModel } from "@models"
import { v4 as uuidv4 } from "uuid"

// const getClipboardDefaultValue = () => {
//   return "http://torrent.unix-ag.uni-kl.de/"
// }

export const Header = () => {
  const [inputOpen, setInputOpen] = useState(false)
  const [inputValue, setInputValue] = useState(
    "http://torrent.unix-ag.uni-kl.de/"
  )

  const dialogInputRef = useRef(null)

  const { torrents, setTorrents } = useContext(StoreContext)

  const hideInputModal = () => {
    setInputOpen(false)
  }

  const readClipboardText = async () => {
    if (navigator) {
      const text = await navigator.clipboard.readText()
      if (typeof text === "string") {
        // setInputValue(text)
      }
    }
  }

  useEffect(() => {
    if (inputOpen) {
      // if (dialogInputRef.current) dialogInputRef.current.value = "some random value"
      readClipboardText()
    }
  }, [inputOpen])

  const modalFormSubmit = () => {
    const torrent = TorrentModel()
    torrent.source_uid = uuidv4()
    torrent.source_url = inputValue
    torrent.source_expanded = false
    torrent.source_date_added = new Date()

    const newTorrents = [...torrents]
    newTorrents.push(torrent)
    setTorrents(newTorrents)

    setInputOpen(false)
  }

  const showMagnetInputDialog = () => {
    return (
      <Modal
        open={inputOpen}
        onClose={() => setInputOpen(false)}
        className={styles.joyModalStack}
        hideBackdrop
        onClick={(e) => hideInputModal()}
      >
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 2,
            boxShadow: "lg",
          }}
          className={styles.joyModalRoot}
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          <Typography
            id="basic-modal-dialog-title"
            component="h2"
            level="inherit"
            fontSize="1.25em"
            mb="1rem"
          >
            Paste your magnet url:
          </Typography>
          <form
            onSubmit={(event) => {
              event.preventDefault()
              modalFormSubmit()
            }}
          >
            <Stack spacing={2}>
              <TextField
                label="Magnet/Torrent URL"
                autoFocus
                required
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value)
                }}
                ref={dialogInputRef}
                className={styles.joyInputRootClass}
              />
              <Button
                type="submit"
                variant="outlined"
                className={styles.joySubmitButton}
              >
                Submit
              </Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    )
  }

  return (
    <Grid container className={styles.header}>
      <Grid item xs={1} className={styles.gridItem}>
        <MoreVertOutlinedIcon />
      </Grid>
      <Grid item xs={2} className={styles.gridItem}>
        <SortOutlinedIcon />
      </Grid>
      <Grid item xs={2} className={styles.gridItem}>
        <Fragment>
          <img
            src={MagnetLight}
            alt="magnet"
            width={20}
            height={"auto"}
            onClick={(e) => {
              e.stopPropagation()
              setInputOpen(true)
            }}
          />
          {inputOpen && showMagnetInputDialog()}
        </Fragment>
      </Grid>
      <Grid item xs={2} className={styles.gridItem}>
        <SearchOutlinedIcon />
      </Grid>
    </Grid>
  )
}
