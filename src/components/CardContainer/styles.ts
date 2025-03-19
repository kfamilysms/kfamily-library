import styled from 'styled-components'

const CardContainerStyles = styled.div`
  width: 100%;

  display: flex;
  justify-content: start;
  flex-direction: column;

  background-color: white;

  border-radius: 15px;

  box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;

  overflow: scroll;

  &.big {
    height: 600px;

    margin-bottom: 40px;
  }

  &.small {
    min-height: auto;
    max-height: auto;
  }

  &.fullScreen {
    max-height: calc(100dvh - 204px);
    min-height: calc(100dvh - 204px);
  }

  .header-table {
    width: 100%;
    padding: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      color: var(--secondary-color);
      cursor: pointer;
    }

    .button-outline {
      padding: 6px 12px;

      border: 1px solid var(--primary-color);

      font-weight: bold;
      font-size: 14px;

      color: var(--primary-color);

      border-radius: 8px;

      cursor: pointer;
    }
  }
  .items-list {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    padding: 0px 20px 20px;

    .content-empty-list {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;

      h3 {
        margin-top: 20px;
        margin-bottom: 20px;
        color: var(--secondary-color);
      }

      .image-empty-list {
        width: 300px;
      }
    }

    .content-empty-image {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      flex-direction: column;

      padding: 40px 0px;

      img {
        width: 200px;
        cursor: pointer;
      }

      h4 {
        color: var(--secondary-color);
        margin-top: 20px;
        cursor: pointer;
      }
    }

    .item-list {
      width: 100%;
      display: flex;

      align-items: center;
      justify-content: flex-start;
      padding: 10px;
      border-radius: 15px;

      &.flex-space-between {
        display: flex;
        justify-content: space-between;
        padding: 10px 10px 10px 16px;
      }

      &:hover {
        width: 100%;
        background: rgba(149, 157, 165, 0.05);

        cursor: pointer;
      }

      .box-first-letter {
        background-color: var(--primary-color-highlight);

        border-radius: 6px;
        padding: 10px 11px;

        margin-right: 10px;
      }

      .img {
        width: 45px;
        height: 45px;

        img {
          width: 45px;
          height: 45px;

          border-radius: 12px;
        }

        border-radius: 12px;

        background-color: rgba(0, 0, 0, 0.06);

        margin-right: 20px;
      }

      .name {
        width: 100%;
        color: rgba(0, 0, 0, 0.4);
        font-weight: bold;
        font-size: 15px;
      }

      .box-status {
        padding: 10px 14px;
        border-radius: 10px;

        font-size: 15px;

        &.SUCCESS {
          background-color: green;
        }
        &.WARNING {
          background-color: #f6ad55;
          color: white;
          font-size: 11px;
          font-weight: bold;
        }
        &.ERROR {
          background-color: red;
        }
      }
    }
  }

  .search-more {
    width: 100%;

    margin-top: 10px;

    padding: 10px;

    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.04);

    color: rgba(0, 0, 0, 0.3);
    cursor: pointer;

    font-size: 14px;
    font-weight: bold;
  }

  .content-buttons-search {
    display: flex;
    align-items: center;
    gap: 20px;

    .content-input-search {
      width: 100% auto;

      display: flex;
      justify-content: end;

      input {
        width: 200px;
        border-radius: 8px;
        padding: 8px 12px;
        background: rgba(149, 157, 165, 0.09);
        border: 1.5px solid transparent;

        cursor: pointer;

        &:hover {
          transition: all 0.2s ease-in-out;
          border: 1.5px solid var(--primary-color);
        }
      }
    }
  }

  .content-navigation {
    display: flex;

    align-items: center;

    gap: 6px;

    .content-navigation-inner {
      display: flex;

      align-items: center;

      gap: 6px;
      .navigation-button {
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 8px;

        border-radius: 8px;
        background: rgba(149, 157, 165, 0.09);
        border: 1.5px solid transparent;

        cursor: pointer;

        &:hover {
          transition: all 0.2s ease-in-out;
          border: 1.5px solid var(--primary-color);
        }
      }
    }
  }

  @media (max-width: 1200px) {
    .header-table {
      align-items: flex-start;
      flex-direction: column;
      padding: 20px 20px 10px;
    }
    .content-buttons-search {
      width: 100%;
      align-items: flex-end;
      /* background-color: pink; */
      flex-direction: column;
      gap: 10px;
      margin-top: 10px;

      .content-input-search {
        width: 100%;
        input {
          width: 100%;
        }
      }
    }

    .content-navigation {
      flex-direction: row-reverse;
      gap: 20px;
      .content-navigation-inner {
      }
    }

    &.isHiddenMainHeader {
      max-height: calc(100dvh - 106px);
      min-height: calc(100dvh - 106px);

      .container-start {
        padding-top: 200px;
      }
    }
  }
`

export default CardContainerStyles
