import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { Section } from 'components/Section/Section';
import { AddContactsForm } from 'components/AddContactsForm/AddContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Wrapper } from './App.styled';

const parseContacts = JSON.parse(localStorage.getItem('userContacts'));

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    console.log(parseContacts);
    return parseContacts.length !== 0
      ? parseContacts
      : [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('userContacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const isExistName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExistName) {
      alert(`${name} is already in contacts list!`);
    } else {
      setContacts([contact, ...contacts]);
    }
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => setFilter(e.target.value);

  const normalizedContact = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedContact)
  );

  return (
    <Wrapper>
      <Section title="Phonebook">
        <AddContactsForm onSubmit={addContact} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={changeFilter} />
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      </Section>
    </Wrapper>
  );
};
