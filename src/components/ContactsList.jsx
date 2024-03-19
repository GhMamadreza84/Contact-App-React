import ContactItems from "./ContactItems";
const ContactsList = ({ contact }) => {
  return (
    <div>
      <h3>ContactsList :</h3>
      {contact.length ? (
        <ul>
          {contact.map((contacts) => (
            <ContactItems key={contacts.id} data={contacts} />
          ))}
        </ul>
      ) : (
        <p>No Contact yet !</p>
      )}
    </div>
  );
};

export default ContactsList;
