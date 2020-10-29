import React from 'react';
import LoginContainer from './Containers/LoginContainer';
import ProfileContainer from './Containers/ProfileContainer';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  return(
    <>
      <DndProvider backend={HTML5Backend}>
        {/* <LoginContainer /> */}
        <ProfileContainer />
      </DndProvider>
    </>
  )
}

export const ItemTypes = {
  DRAGME: 'dragme'
}

export default App;
