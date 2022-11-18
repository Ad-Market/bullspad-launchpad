import React from "react"
import { useSearchParams } from "react-router-dom"
import debounce from "debounce"
import { classNames } from "@knownout/lib"
import "./index.scss"

import { SearchIcon } from "../Icon"
import DropdownMenu from "../DropdownMenu"
import useAnimation from "../../hooks/useAnimation"

const searchParam = "search"

const SearchBar = () => {
  const [searchValue, setSearchValue] = useSearchParams("")
  const {
    elementAppear,
    elementVisible,
    elementAppearHandler,
    elementDisappearHandler
  } = useAnimation({ duration: 200 })

  const dummyProjects = [
    "Zombo Ducks",
    "Zoo",
    "Ziii"
  ]

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const onSearchChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value

    if (text.length === 0) {
      searchValue.delete(searchParam)
      setSearchValue(searchValue, {
        replace: true,
      })
    } else {
      searchValue.set(searchParam, text)
      setSearchValue(searchValue, {
        replace: true,
      })
    }
  }, 300)

  return (
    <div
      className={classNames(
        "search-bar-container",
        elementAppear && "dropdown-visible"
      )}
    >
      <form
        onSubmit={onSubmitHandler}
        onFocus={elementAppearHandler}
        onBlur={elementDisappearHandler}
        autoComplete="off"
      >
        <input
          id="search-input"
          type="search"
          placeholder="Search"
          maxLength={120}
          defaultValue={searchValue.get(searchParam) ?? ""}
          onChange={(e) => onSearchChange(e)}
        />
        {!searchValue.get(searchParam) && <SearchIcon />}
      </form>
      {elementVisible && (
        <DropdownMenu className="search-dropdown">
          {dummyProjects.map(item => <div key={item}>{item}</div>)}
        </DropdownMenu>
      )}
    </div>
  )
}

export default SearchBar
