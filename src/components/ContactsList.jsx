import ContactItems from "./ContactItems";
import styles from "./ContactList.module.css"

const ContactsList = ({ contact, deleteHandler }) => {
  return (
    <div className={styles.container}>
      <h3>ContactsList :</h3>
      {contact.length ? (
        <ul className={styles.contacts}>
          {contact.map((contacts) => (
            <ContactItems
              key={contacts.id}
              data={contacts}
              deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No Contact yet !</p>
      )}
    </div>
  );
};

export default ContactsList;
