import styled from 'styled-components'

const CardCerimonyFullStyles = styled.div`
  width: 100%;

  background-color: var(--background-color);

  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;

  background-color: white;

  border-radius: 15px;

  box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;

  position: relative;

  .container-float {
    width: 100%;
    height: 200px;

    background-color: #a4c8b8;

    position: absolute;
    top: 0%;
    left: 0;

    border-radius: 15px 15px 0px 0px;

    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      color: white;
      margin-bottom: 40px;
    }
  }

  .container-image {
    width: 220px;
    height: 300px;

    background-image: url('https://www.eurofuneraria.com/wp-content/uploads/2025/03/Maria-Costa-FOTO.jpg');
    background-size: cover;
    background-position: center;

    border-radius: 50px;

    position: absolute;

    top: 136px;

    border: 10px solid white;

    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  .container-body {
    width: 100%;

    padding-top: 470px;

    display: flex;
    flex-direction: column;
    align-items: center;

    .container-body-age-cross {
      margin-top: 10px;
      color: #a4c8b8;
      font-size: 32px;
    }

    .container-body-age-border {
      height: 3px;
      width: 220px;
      border-radius: 10px;

      background-color: #a4c8b8;

      margin-top: 4px;

      margin-bottom: 30px;
    }

    .container-body-name {
      font-size: 32px;

      margin-bottom: 30px;

      font-weight: 500;
    }

    .container-body-table {
      width: 100%;
      max-width: 900px;

      margin-top: 20px;

      table {
        width: 100%;

        border-collapse: collapse;
      }

      td {
        padding: 20px;
        border: 2px solid #a4c8b8;

        text-align: center;
      }

      /* Remove the outer border */
      tr:first-child td {
        border-top: none;
      }
      tr td:first-child {
        border-left: none;
      }
      tr:last-child td {
        border-bottom: none;
      }
      tr td:last-child {
        border-right: none;
      }

      .card-cerimony-detail {
        width: 100%;
        max-width: 260px;
        min-width: 260px;

        display: flex;
        align-items: flex-start;
        justify-content: flex-start;

        gap: 20px;

        .card-cerimony-detail-image {
          img {
            width: 50px;
          }
        }

        .card-cerimony-detail-texts {
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          p {
            text-align: left;
            font-size: 14px;

            margin-top: 4px;
          }
        }
      }
    }

    .container-body-title {
      font-size: 26px;

      margin-top: 40px;
      margin-bottom: 20px;

      font-weight: 500;
    }

    .container-body-description {
      max-width: 500px;

      text-align: center;
    }

    .container-botton {
      width: 100%;
      display: flex;
      justify-content: flex-end;

      img {
        width: 50px;
        margin: 20px;
      }
    }
  }
`

export default CardCerimonyFullStyles
