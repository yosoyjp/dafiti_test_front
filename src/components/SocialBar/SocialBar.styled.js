import styled from 'styled-components';

import Colors from '../../theme/colors';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 25%;
  box-sizing: border-box;

  & svg {
    color: ${Colors.grayText};
    font-size: 25px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
`;
