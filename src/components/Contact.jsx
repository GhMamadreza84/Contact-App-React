import { useState } from "react";

const Contact = () => {
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const addHandler = () => {
    console.log(contact);
  };

  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });
  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={contact.name}
        onChange={changeHandler}
      />
      <input
        type="text"
        placeholder="Last text"
        name="lastName"
        value={contact.lastName}
        onChange={changeHandler}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={contact.email}
        onChange={changeHandler}
      />
      <input
        type="number"
        placeholder="Phone"
        name="phone"
        value={contact.phone}
        onChange={changeHandler}
      />
      <button onClick={addHandler}>Add Contact</button>
    </div>
  );
};

export default Contact;
