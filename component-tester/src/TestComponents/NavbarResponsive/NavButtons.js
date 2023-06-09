import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function NavButtons(props) {
    const { navItems } = props;

    return (
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
                <Button key={item} sx={{ color: '#fff' }}>
                    {item}
                </Button>
            ))}
        </Box>
    )
}