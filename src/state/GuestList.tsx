import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);
  
  const [searchName, setSearchName] = useState("");
  const [foundUser, setFoundUser] = useState<string | undefined>();

  const addGuest = () => {
    setGuests([...guests, name]);
    setName("");
  };

  const onSearchUser = () => {
    const user = guests.find((guest) => guest === searchName);

    setFoundUser(user);
  };

  return (
    <div>
      <h2>Guest List</h2>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={addGuest}>Add Guest</button>
      <br />
      <hr />
      <h2>Find Guests</h2>
      <input value={searchName} onChange={(e) => setSearchName(e.target.value)}></input>
      <button onClick={onSearchUser}>Find User</button>
      <div>
        {foundUser}
      </div>
    </div>
  );
};

export default GuestList;
