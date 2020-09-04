import React from 'react';
import styled from 'styled-components';
import convert from 'htmr';

const Element = styled.h1`
  text-align: ${({ align }) => align};
  //margin-top: 70px;
  //margin-bottom: 40px;
  margin-top: 1em;
  margin-bottom: 1em;
  font-weight: bold;
`;
const HeadingBlock = ({ attributes, ...rest }) => {
    const { content, level, align } = attributes;
    return (
        <Element as={`h${level}`} align={align}>
            {content}
        </Element>
    );
};

export default HeadingBlock;