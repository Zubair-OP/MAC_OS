import React, { useState, useEffect } from 'react';

const ContextMenu = ({ onRefresh }) => {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleContextMenu = (e) => {
            e.preventDefault();

            // Calculate position to ensure menu doesn't go off-screen
            let x = e.clientX;
            let y = e.clientY;

            // Adjust if close to right edge
            if (x + 150 > window.innerWidth) {
                x = window.innerWidth - 160;
            }

            // Adjust if close to bottom edge
            if (y + 200 > window.innerHeight) {
                y = window.innerHeight - 210;
            }

            setPosition({ x, y });
            setVisible(true);
        };

        const handleClick = () => setVisible(false);

        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('click', handleClick);
        };
    }, []);

    if (!visible) return null;

    return (
        <div
            style={{ top: `${position.y}px`, left: `${position.x}px` }}
            className="fixed z-[9999] w-48 bg-gray-100/80 backdrop-blur-xl border border-white/20 rounded-lg shadow-xl text-black/90 py-1 flex flex-col font-system-ui text-[13px] select-none"
        >
            <MenuItem label="New Folder" />
            <div className="h-[1px] bg-gray-500 mx-2 my-1"></div>
            <MenuItem onClick={onRefresh} label="Refresh" />
            <MenuItem label="Change Wallpaper..." />
            <div className="h-[1px] bg-gray-500 mx-2 my-1"></div>
            <MenuItem label="Use Stacks" />
            <MenuItem label="Sort By" hasSubmenu />
            <MenuItem label="Clean Up" />
            <MenuItem label="Clean Up By" hasSubmenu />
            <MenuItem label="Show View Options" />
        </div>
    );
};

const MenuItem = ({ label, hasSubmenu, ...props }) => {
    return (
        <div {...props} className="px-4 py-1 hover:bg-blue-500 hover:text-white cursor-default flex justify-between items-center group rounded mx-1">
            <span>{label}</span>
            {hasSubmenu && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-black/50 group-hover:text-white">
                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                </svg>
            )}
        </div>
    );
};

export default ContextMenu;
