import styled from 'styled-components';

import Colors from '../../theme/colors';

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export const TopBar = styled.div`
  height: 35px;
  width: 100%;
  border-bottom: 1px solid ${Colors.backgroundGray};
  margin-bottom: 10px;

  svg {
    color: ${Colors.grayText};
  }
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${Colors.textBold};
  font-family: 'Arial', sans-serif;
`;

export const ContentInfo = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  max-height: ${({ isOpen }) => (isOpen ? 'auto' : '0px')};
  transition: opacity 200ms ease;

  & div{
    height: 100%;
    width: 100%;
  }

  p{
    padding: 8px;
    font-size: 16px;
    text-align: justify;
  }

  ul{
    margin: 0;
    width: 100%;
    padding-left:  10px;
    li {
      margin-left: 10px;
    }
  }
`;
