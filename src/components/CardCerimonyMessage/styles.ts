import styled from 'styled-components'

const CardCerimonyMessageStyles = styled.div`
  max-width: 450px;

  background-color: white;

  border-radius: 20px;

  padding: 10px;

  display: flex;
  flex-direction: column;

  box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;

  cursor: pointer;

  ::selection {
    color: white;
    background: var(--primary-color);
  }

  img {
    width: 80px;

    border-radius: 20px;
  }

  p {
    padding: 10px 20px 0px 14px;
    line-height: 26px;
  }

  .bottom-cerimony-profile-box {
    display: flex;
    align-items: flex-start;

    gap: 16px;

    margin: 20px 10px 10px 10px;

    .bottom-cerimony-profile-box-image {
      img {
        width: 70px;
        height: 70px;

        border-radius: 70px;
      }
    }
    .bottom-cerimony-profile-box-name {
      display: flex;
      flex-direction: column;
      gap: 6px;

      h3 {
        color: var(--primary-color);
        line-height: 24px;
      }
      span {
        color: var(--secondary-colo);
        line-height: 20px;
      }
    }
  }
`

export default CardCerimonyMessageStyles
