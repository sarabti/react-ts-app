import UserSearch from "./classes/UserSearch";
import GuestList from "./state/GuestList";

const App = () => {
  return (
    <div>
      <GuestList />
      <UserSearch
        users={[
          { name: "sara", age: 20 },
          { name: "dina", age: 15 },
          { name: "amin", age: 10 },
        ]}
      />
    </div>
  );
};

export default App;
