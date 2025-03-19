/* eslint-disable prefer-destructuring */
/* eslint-disable no-shadow */
import React, { ReactNode, useEffect, useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiEye } from 'react-icons/fi'

import EmptyListOne from '../../assets/images/EmptyState_1.png'

import CardContainerStyles from './styles'

export type CardTableProps = {
  ///
  /// Mandatory pparams
  ///
  title: string

  ///
  /// Options params
  ///
  grandId?: string
  children?: ReactNode

  labelButtonAction?: ReactNode
  onLabelButtonAction?: () => void

  data?: CardTableItemProps[]

  ///
  /// Boolean actions
  ///
  hideTitle?: boolean
  hideUpdateData?: boolean
  hideEmptyList?: boolean
  isSmall?: boolean
  isHiddenMainHeader?: boolean
  isFullScreen?: boolean
}

export type CardTableItemProps = {
  image: string
  label: string
  status?: CardTableItemStatusEnum | string
  statusLabel?: string
  onClick?: () => void
}

export enum CardTableItemStatusEnum {
  SUCCESS,
  ERROR,
  WARNING,
}

const getRandomBetween = (x: number, y: number) =>
  Math.floor(Math.random() * (y - x + 1) + x)

const images = [EmptyListOne]

function CardContainer({
  grandId,
  title,
  labelButtonAction,
  data,
  hideUpdateData,
  children,
  hideTitle,
  hideEmptyList,
  onLabelButtonAction,
  isSmall,
  isHiddenMainHeader,
  isFullScreen,
}: CardTableProps) {
  const itemsPerPage = 10

  const [filter, setFilter] = useState<string>('')
  const [dataState, setDataState] = useState<CardTableItemProps[]>(data ?? [])

  const [currentPage, setCurrentPage] = useState(1)

  // Calculate total pages
  const totalPages = Math.ceil((data?.length ?? 1 + 1) / itemsPerPage)

  useEffect(() => {
    if (filter.length >= 3) {
      const filteredData = (data ?? []).filter((item) =>
        item.label.toString().toLowerCase().includes(filter.toLowerCase())
      )
      setDataState(filteredData)
    } else {
      setDataState((data ?? []).slice(0, itemsPerPage))
    }
  }, [data, filter])

  useEffect(() => {
    // Get the current page's items
    const startIndex = (currentPage - 1) * itemsPerPage

    const filteredData = (data ?? []).slice(
      startIndex,
      startIndex + itemsPerPage
    )

    setDataState(filteredData)
  }, [currentPage])

  function getFirstLetters(str: string): string {
    const firstLetter = str.split(' ')[0]
    const secondLetter = str.split(' ')[1]

    return `${firstLetter.charAt(0)}${secondLetter.charAt(0)}`
  }

  const isNullData = data === null || data === undefined

  return (
    <CardContainerStyles
      id={grandId}
      className={`${isSmall ? 'small' : ''} ${
        isHiddenMainHeader ? 'isHiddenMainHeader' : ''
      }  ${isFullScreen ? 'fullScreen' : ''} `}
    >
      {hideTitle !== undefined && hideTitle === true ? (
        <></>
      ) : (
        <div className="header-table">
          <h3>{title}</h3>

          <div className="content-buttons-search">
            {!isNullData && (data?.length ?? 0) >= 0 ? (
              <>
                {(data?.length ?? 0) > 9 ? (
                  <div className="content-input-search">
                    <input
                      type="search"
                      placeholder="Buscar"
                      value={filter}
                      onChange={(e) => {
                        setFilter(e.target.value)
                      }}
                    />
                  </div>
                ) : (
                  <></>
                )}
                {(data?.length ?? 0) > 9 ? (
                  <div className="content-navigation">
                    <div className="content-navigation-inner">
                      <div
                        className="navigation-button"
                        aria-hidden
                        onClick={() => {
                          setCurrentPage(1)
                        }}
                      >
                        <FiChevronLeft />
                      </div>
                      <div
                        className="navigation-button"
                        aria-hidden
                        onClick={() => {
                          setCurrentPage(2)
                        }}
                      >
                        <FiChevronRight />
                      </div>
                    </div>
                    {currentPage} / {totalPages}
                  </div>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <></>
            )}

            {labelButtonAction === undefined ? (
              <></>
            ) : (
              <div
                className="button-outline"
                onClick={onLabelButtonAction}
                aria-hidden
              >
                {labelButtonAction}
              </div>
            )}
          </div>
        </div>
      )}
      <div className="items-list">
        {hideEmptyList ? (
          <></>
        ) : (data === null || data === undefined) && dataState?.length === 0 ? (
          <div className="content-empty-image">
            <img
              src={images[getRandomBetween(0, 0)]}
              alt="Empty List of data"
            />
            <h4>Sem dados para mostrar no momento.</h4>
          </div>
        ) : (
          dataState?.map((item, indexed) => {
            const localItem = item
            const hasStatusLabel =
              localItem.statusLabel !== undefined || localItem.image === ''

            const alertMsg =
              localItem.status === CardTableItemStatusEnum.SUCCESS
                ? 'SUCCESS'
                : localItem.status === CardTableItemStatusEnum.WARNING
                ? 'WARNING'
                : localItem.status === CardTableItemStatusEnum.ERROR
                ? 'ERROR'
                : ''

            return (
              <div
                className={`item-list ${
                  hasStatusLabel ? 'flex-space-between' : ''
                }`}
                key={`list-var-${indexed}`}
                onClick={localItem.onClick}
                aria-hidden
              >
                <div className="box-first-letter">
                  {getFirstLetters(`${localItem.label}`)}
                </div>
                {!hasStatusLabel ? (
                  <>
                    <div className="img">
                      <img src={localItem.image} alt="fune-01" />
                    </div>
                  </>
                ) : (
                  <></>
                )}
                <div className="name">{localItem.label}</div>
                {hasStatusLabel ? (
                  <div className={`box-status ${alertMsg}`}>
                    {localItem.statusLabel}
                  </div>
                ) : (
                  <></>
                )}
                {/* <>
                  <FiCalendar fontSize={22} color="#999" />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </> */}
                <>
                  <FiEye fontSize={22} color="#999" />
                  &nbsp;&nbsp;&nbsp;
                </>
              </div>
            )
          })
        )}
        {children}
        {hideUpdateData ? <></> : <div className="search-more">Atualizar</div>}
      </div>
    </CardContainerStyles>
  )
}

CardContainer.propTypes = {} as CardTableProps

export default CardContainer
