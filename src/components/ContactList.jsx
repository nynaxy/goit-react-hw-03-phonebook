import React from "react";
import PropTypes from "prop-types";
import ContactListItem from "./ContactListItem";

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;