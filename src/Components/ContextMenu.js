import React from 'react';
import './ContextMenu.css';

const ContextMenu = ({ visible, position, text, onClose, onEdit, onRemove }) => {
    if (!visible) return null;

    return (
        <div className="context-menu" style={{ top: position.y, left: position.x }}>
            <div className="menu-item">{text}</div>
            <div className="menu-item" onClick={() => { console.log("edit"); onEdit(); }}>დამატება</div>
            <div className="menu-item" onClick={() => { console.log("remove"); onRemove(); }}>ამოშლა</div>
        </div>
    );
};

export default ContextMenu;
