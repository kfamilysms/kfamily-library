import React, { ReactNode } from 'react'
import { RotatingLines } from 'react-loader-spinner'

import ContainerButtonAction from './styles'

export type ButtonActionProps = {
  label?: string
  onClick?: () => void
  outline?: boolean
  isLoading?: boolean
  isDisabled?: boolean
  children?: ReactNode
}

export default function ButtonAction({
  label,
  onClick,
  isLoading,
  isDisabled,
  children,
}: ButtonActionProps) {
  return (
    <ContainerButtonAction
      className={`container-button-action ${isDisabled ? 'isDisabled' : ''}`}
      onClick={onClick}
    >
      {isLoading ? (
        <RotatingLines
          width="20"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          visible
        />
      ) : (
        children ?? label
      )}
    </ContainerButtonAction>
  )
}
