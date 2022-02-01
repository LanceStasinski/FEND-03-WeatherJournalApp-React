import React, { useContext } from 'react';
import styled from 'styled-components';

import { Button } from '../../styles/styles';
import { AuthContext } from '../shared/context/auth-context';

const Journal: React.FC = () => {
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout()
  }

  const addEntry = () => {

  }

  return(
    <Button onClick={logoutHandler}>Logout</Button>
  )
}

export default Journal;