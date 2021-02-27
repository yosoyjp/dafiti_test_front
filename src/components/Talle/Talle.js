import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  TalleListStyled, TalleStyled, Title, List,
} from './Talle.styled';

const TalleList = ({ talleList, size }) => {
  const [selected, setSelected] = useState(null);

  const Item = ({ available, value }) => (
    <TalleStyled
      className="center"
      selected={selected === value}
      onClick={() => available && setSelected(value)}
      available={available}
      size={size}
    >
      {value}
    </TalleStyled>
  );

  return (
    <TalleListStyled>
      <Title>TALLE</Title>
      <List>
        {talleList.map((talle) => <Item available={talle.available} value={talle.value} />)}
      </List>
    </TalleListStyled>
  );
};

TalleList.propTypes = {
  talleList: PropTypes.arrayOf({
    value: PropTypes.string.isRequired,
    available: PropTypes.bool.isRequired,
  }),
  size: PropTypes.number,
};

TalleList.defaultProps = {
  talleList: [],
  size: 40,
};

export default TalleList;