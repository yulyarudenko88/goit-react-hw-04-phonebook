import PropTypes from 'prop-types';
import {Block, Title} from './Section.styled';

export const Section = ({ title, children }) => (
    <>
      <Block>
        <Title>{title}</Title>
        {children}
      </Block>
    </>
  );

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};