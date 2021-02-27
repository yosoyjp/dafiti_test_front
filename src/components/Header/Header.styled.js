import styled from 'styled-components';

export const Container = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;

  svg {
    font-size: 25px;
    margin: 0 10px;
  }
`;

export const Column = styled.div`
  width: 50%;
  height: inherit;
`;

export const Logo = styled.div`
  width: 125px;
  height: inherit;
  
  img{
    width: 100px;
    height: 30px;
    object-fit: contain;
  }
`;
