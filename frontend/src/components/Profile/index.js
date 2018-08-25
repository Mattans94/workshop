import React from 'react';
import { connect } from 'react-redux';

const Profile = ({ user }) => {
  const date = new Date(user.registeredAt);

  const outputDate = `${date.getDate()}/${date.getMonth() +
    1}/${date.getFullYear()}`;
  return (
    <div className="container profile-page">
      <div className="info">
        <h1>Välkommen, {user.firstName}</h1>
        <p>Ditt fulla namn är {`${user.firstName} ${user.lastName}`}</p>
        <p>Du är {user.age} år gammal</p>
        <p>
          Du registrerade dig {outputDate} med mailadressen {user.email}
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Profile);
