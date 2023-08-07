import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { DndContext } from '@dnd-kit/core';

import {Droppable} from '../Droppable';
import { Draggable } from '../Draggable';



function Scale() {
  const containers = ['A', 'B', 'C', 'D'];
  const [parent, setParent] = useState(null);
  const draggableMarkup = (
    <Draggable id="draggable">Gold Coin</Draggable>
  );

  return (

    <DndContext onDragEnd={handleDragEnd}>
      {parent === null ? draggableMarkup : null}

      {containers.map((id) => (
        // We updated the Droppable component so it would accept an `id`
        // prop and pass it to `useDroppable`
        <Droppable key={id} id={id}>
          {parent === id ? draggableMarkup : 'Scale'}
        </Droppable>
      ))}
    </DndContext>
  );

  function handleDragEnd(event) {
    const {over} = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  }
};

export default Scale;