import React, { useState, memo, ChangeEvent, useContext } from "react"
import styles from "./SearchComp.module.scss"
import FormControl from "@mui/material/FormControl"
import TextField from "@mui/material/TextField"
import OutlinedInput from "@mui/material/OutlinedInput"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "@mui/material/IconButton"
import ClearIcon from "@mui/icons-material/Clear"
import { StoreContext } from "@context"

const SearchComp = () => {
  const [value, setValue] = useState("")

  const { setSearchValue } = useContext(StoreContext)

  const syncToContextSearch = (payload) => {
    setSearchValue(value)
  }

  const debounce = function (debounceParams) {
    const { fn, delay, payload } = debounceParams
    let timer;
    return function () {
      let context = globalThis
      clearTimeout(timer)
      timer = setTimeout(() => {
        return fn.apply(context, [payload])
      }, delay)
    }
  }

  const handleChange = (event) => {
    setValue(event.target.value)
    const debounceArgs = {
      fn: syncToContextSearch,
      delay: 750,
      payload: event.target.value,
    }
    debounce(debounceArgs)()
  }

  const handleClearClick = () => {
    setValue("")
  }

  return (
    <>
      <FormControl sx={{ m: 0, width: "100%" }} variant="outlined">
        <OutlinedInput
          id="outlined-adornment-search-text"
          type={"text"}
          value={value}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              {value.length > 0 && (
                <ClearIcon
                  onClick={handleClearClick}
                  sx={{ cursor: "pointer" }}
                />
              )}
            </InputAdornment>
          }
          placeholder={"Search torrent"}
          sx={{ maxHeight: "48px" }}
          inputProps={{
            maxLength: 50,
          }}
        />
      </FormControl>
    </>
  )
}

export default memo(SearchComp)
