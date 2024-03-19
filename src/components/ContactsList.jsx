const ContactsList = ({ contact }) => {
    return (
    <div>
      <h3>ContactsList :</h3>
      <ul>
        {contact.map((contacts) => (
          <li key={contacts.id}>{contacts.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
