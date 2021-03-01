import { createGlobalStyle } from 'styled-components';

const styles = createGlobalStyle`

  body{
    overflow-x: hidden;
  }

  *{
    margin: 0;
    padding: 0;
    font-family: 'Nunito Sans', sans-serif;
  }

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .vertical-around {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
  }

  .vertical-between {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  .horizontal-around {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .horizontal-between {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .horizontal-start {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .horizontal-end {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

export default styles;
