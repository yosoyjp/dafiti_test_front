import styled, { css } from 'styled-components';

import Colors from '../../theme/colors';

export const TalleListStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: white;
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;
  flex-wrap: nowrap;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 16px;
`;

export const TalleStyled = styled.div`
  outline: none;
  margin: 15px 10px;
  background-color: ${Colors.backgroundGray};
  font-weight: 600;
  font-size: 16px;
  border-radius: 50%;
  border: 2px solid ${({ selected }) => (selected ? 'cyan' : 'transparent')};

  color: ${({ available }) => (available ? Colors.textBold : Colors.textDisabled)};
  cursor: ${({ available }) => (available ? 'pointer' : 'auto')};

  ${({ size }) => css`
    width: ${size}px;
    min-width: ${size}px;
    height: ${size}px;
    min-height: ${size}px;
  `}

  &:first-child{
    margin-left: 0;
  }

  &:last-child{
    margin-right: 0;
  }
`;
