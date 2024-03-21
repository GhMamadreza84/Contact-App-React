import ContactItems from "./ContactItems";
const ContactsList = ({ contact, deleteHandler }) => {
  return (
    <div>
      <h3>ContactsList :</h3>
      {contact.length ? (
        <ul>
          {contact.map((contacts) => (
            <ContactItems
              key={contacts.id}
              data={contacts}
              deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      ) : (
        <p>No Contact yet !</p>
      )}
    </div>
  );
};

export default ContactsList;
