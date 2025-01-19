import React from "react";

class BasicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: props.name,
        email: props.email,
        dateOfBirth: props.dateOfBirth,
        role: props.role,
      },
    };
  }

  render() {
    return (
      <div>
        <h2>{this.state.person.name}</h2>
        <h4>
          email: <span>{this.state.person.email}</span>
        </h4>
        <h4>
          dathe of birth: <span>{this.state.person.dateOfBirth}</span>
        </h4>
        <h4>
          role: <span>{this.state.person.role}</span>
        </h4>
      </div>
    );
  }
}

export default BasicInfo;
