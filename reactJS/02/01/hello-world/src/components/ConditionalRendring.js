//  conditional rendring (if-else rendring)

import React from "react";

class ConditionalRendring extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    let message = this.state.isLoggedIn ? (
      <div>
        <hr /> Welcome Sonu ,, you are loggedIn
      </div>
    ) : (
      <div>
        <hr /> Welcome Guest ,, you are not loggedIn
      </div>
    );

    return (
      <div>{message}</div>
      // (this.state.isLoggedIn)? (<div>Welcome Sonu ,, you are loggedIn</div>) : (<div>Welcome Guest ,, you are not loggedIn</div>)
    );
    // ---or ---
    // return this.state.isLoggedIn && <div>Welcome Sonu uou are LoggedIn.</div>
  }
}
export default ConditionalRendring;
