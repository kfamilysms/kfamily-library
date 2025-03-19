import styled from 'styled-components'

const CardCerimonyStyles = styled.div`
  max-width: 450px;

  background-color: white;

  border-radius: 20px;

  padding: 14px;

  display: flex;
  align-items: center;

  box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;

  gap: 20px;

  cursor: pointer;

  &:hover {
    .card-cerimony-right-side-bottom-button {
      transition: all 0.2s ease-in-out;

      background-color: #a4c8b8;
      color: white;

      svg {
        transition: all 0.2s ease-in-out;
        color: white;
      }
    }
  }

  img {
    width: 140px;

    border-radius: 20px;

    background-color: white;
  }

  .card-cerimony-right-side {
    width: 100%;
    height: 140px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .card-cerimony-right-side-top {
      h3 {
        color: #6a8979;

        margin-bottom: 10px;
      }

      p {
        width: 100%;
        color: #727272;
      }
    }

    .card-cerimony-right-side-bottom {
      width: 100%;

      display: flex;
      justify-content: space-between;
      align-items: end;

      .card-cerimony-right-side-bottom-left {
        color: #727272;
      }

      .card-cerimony-right-side-bottom-button {
        border: 1.5px solid #a4c8b8;

        height: 42px;
        width: 42px;

        display: flex;
        align-items: center;
        justify-content: center;

        color: #a4c8b8;

        border-radius: 10px;
        margin-right: 10px;

        font-size: 22px;
      }
    }
  }
`

export default CardCerimonyStyles
