import styled from 'styled-components'

export type ContainerButtonActionProps = {
  outline?: string
}

const ContainerButtonAction = styled.div<ContainerButtonActionProps>`
  height: 48px;
  padding: 12px 24px;

  background-color: ${(props) =>
    props.outline ? 'white' : 'var(--primary-color)'};

  color: ${(props) => (!props.outline ? 'white' : 'var(--primary-color)')};

  font-weight: bold;

  font-size: 13px;
  line-height: 20px;
  text-transform: uppercase;

  box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
  border-radius: 12px;

  border: 2px solid var(--primary-color);

  cursor: pointer;

  text-align: center;

  display: flex;
  align-content: center;
  justify-content: center;

  &.isDisabled {
    background-color: var(--primary-color);
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    stroke: ${(props) =>
      !props.outline ? 'white' : 'var(--primary-color)'} !important;
  }
`

export default ContainerButtonAction
