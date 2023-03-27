import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

export const Button = ({ children }) => <Btn>{children}</Btn>;

Button.propTypes = {
  children: PropTypes.string.isRequired,  
};
