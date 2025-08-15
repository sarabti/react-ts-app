import { Component } from 'react';

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  inputName: string;
  user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    inputName: '',
    user: undefined,
  };

  onClick = () => {
    const foundUser = this.props.users.find((user) => {
      return user.name === this.state.inputName;
    });

    this.setState({ user: foundUser });
  };

  render() {
    const { inputName, user } = this.state;

    return (
      <div>
        <h2>New User Search</h2>
        <input
          value={inputName}
          onChange={(e) => this.setState({ inputName: e.target.value })}
        />
        <button onClick={this.onClick}>Find User</button>
        <div>
          {user && user.name}
          {user && user.age}
        </div>
      </div>
    );
  }
}

export default UserSearch;
