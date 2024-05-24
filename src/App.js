import React, { useState } from 'react';
import ContextMenu from './Components/ContextMenu';
import ListItem from './Components/ListItem';
import './App.css';

const App = () => {
    const [contextMenu, setContextMenu] = useState({
        visible: false,
        position: { x: 0, y: 0 },
        text: '',
    });

    const handleContextMenu = (event, text) => {
        event.preventDefault();
        setContextMenu({
            visible: true,
            position: { x: event.pageX, y: event.pageY },
            text: text,
        });
    };

    const handleClick = () => {
        if (contextMenu.visible) {
            setContextMenu({ ...contextMenu, visible: false });
        }
    };

    const handleEdit = () => {
        console.log("edit");
        setContextMenu({ ...contextMenu, visible: false });
    };

    const handleRemove = () => {
        console.log("remove");
        setContextMenu({ ...contextMenu, visible: false });
    };

    const listItems = ["ჩვენს შესახებ", "გალერეა", "კონტაქტი", "სერვისები"];

    return (
        <div className="App" onClick={handleClick} onContextMenu={(e) => e.preventDefault()}>
            <ul>
                {listItems.map((item, index) => (
                    <ListItem
                        key={index}
                        item={item}
                        index={index}
                        onContextMenu={handleContextMenu}
                    />
                ))}
            </ul>
            <ContextMenu
                visible={contextMenu.visible}
                position={contextMenu.position}
                text={contextMenu.text}
                onClose={() => setContextMenu({ ...contextMenu, visible: false })}
                onEdit={handleEdit}
                onRemove={handleRemove}
            />
        </div>
    );
};

export default App;
