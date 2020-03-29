import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import ArrowRight from '../../assets/arrow-right.svg';
import { flexCenter } from './../_shared/styled-mixins';

export const StyledTextLink = styled(Link)`
  ${flexCenter};
  text-decoration: none;
  color: var(--link-color) !important;
  font-size: 0.8rem;
  font-weight: 500;
  white-space: nowrap;
  padding: 0.4rem 0.8rem;

  &:hover {
    opacity: 1 !important;
    color: var(--link-color) !important;
    text-decoration: underline;
  }

  & > svg {
    height: 0.8rem;
    fill: var(--link-color);
    margin-left: 0.25rem;
    transition: margin-left var(--transition-fast) ease;
  }

  &:hover > svg {
    margin-left: 0.5rem;
  }
`;

const TextLink = ({ label, link }) => {
  return (
    <React.Fragment>
      {label && link && (
        <StyledTextLink to={link ? link : '#'}>
          {label}
          <ArrowRight />
        </StyledTextLink>
      )}
    </React.Fragment>
  );
};

export default TextLink;