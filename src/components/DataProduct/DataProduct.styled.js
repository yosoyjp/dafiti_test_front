import styled from 'styled-components';

import Colors from '../../theme/colors';

export const Container = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  align-items: flex-start;
  border-bottom: 2px solid ${Colors.grayText};
`;

export const ContainerData = styled.div`
  width: 75%;
  height: inherit;
  align-items: flex-start;
`;

export const Title = styled.h1`
  font-size: 23px;
  font-weight: 600;
  color: ${Colors.black};
  font-family: Arial, sans-serif;
`;

export const Summary = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: ${Colors.grayText};
  margin-top: 5px;
`;

export const Brand = styled.h3`
  font-size: 14px;
  font-weight: 300;
  color: ${Colors.grayText};
  margin-top: 5px;

  & span {
    color: ${Colors.cyan};
    margin-left: 5px;
    font-weight: 600;
  }
`;

export const ContainerHeart = styled.div`
  height: 100%;
  width: 25%;

  & svg {
    font-size: 35px;
    color: ${({ isFavorite }) => (isFavorite ? Colors.black : Colors.grayText)};
  }
`;
