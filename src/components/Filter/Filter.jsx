import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Label, Input } from 'components/AddContactsForm/AddContactsForm.styled';

export const Filter = ({ value, onChange }) => (
  <>
    <Label htmlFor={nanoid()}>Find contacts by name</Label>
    <Input
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
      id={nanoid()}
    />
  </>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
