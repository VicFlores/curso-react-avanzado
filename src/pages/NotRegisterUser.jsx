import React, { useContext } from 'react';
import UserForm from '../components/UserForm/UserForm';
import { AppContext } from '../context/AppContext';
import styled from 'styled-components';

import { LoginMutation } from '../container/LoginMutation';
import { RegisterMutation } from '../container/RegisterMutation';

const Figure = styled.figure`
  margin: 0 0 30px;
  padding: 25px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Div = styled.div`
  margin-top: 80px;
`;

const NotRegisteredUser = () => {
  const { activateAuth } = useContext(AppContext);

  const { loginUser, error: errorLog, loading: loadingLog } = LoginMutation();

  const {
    registerUser,
    error: errorReg,
    loading: loadingReg,
  } = RegisterMutation();

  const registerSubmit = ({ email, password }) => {
    registerUser(email, password).then(({ data }) => {
      const { signup } = data;
      activateAuth(signup);
    });
  };

  const loginSubmit = ({ email, password }) => {
    loginUser(email, password).then(({ data }) => {
      const { login } = data;
      activateAuth(login);
    });
  };

  const errorRegMsg = errorReg && 'El usuario ya existe o hay algún problema.';

  const errorLogMsg =
    errorLog && 'La contraseña no es correcta o el usuario no existe.';

  return (
    <div>
      <Figure>
        <Img src="https://i.imgur.com/DuR9wz8.png" alt="Not register user" />
      </Figure>

      <UserForm
        disabled={loadingReg}
        error={errorRegMsg}
        title="Registrarse"
        onSubmit={registerSubmit}
      />
      <UserForm
        disabled={loadingLog}
        error={errorLogMsg}
        title="Iniciar sesión"
        onSubmit={loginSubmit}
      />
      <Div />
    </div>
  );
};

export default NotRegisteredUser;
