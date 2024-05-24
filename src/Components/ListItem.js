
import React from 'react';

const colors = ['#FF9999', '#99FF99', '#9999FF', '#FFFF99'];

const ListItem = ({ item, index, onContextMenu }) => {
    return (
        <li
            onContextMenu={(e) => onContextMenu(e, item)}
            style={{ backgroundColor: colors[index % colors.length] }}
        >
            {item}
        </li>
    );
};

export default ListItem;
