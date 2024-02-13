import * as React from 'react';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Avatar, Typography } from '@mui/material';

interface AvatarSelectorProps {
    setAvatar: (newAvatar: string) => void
}

const AvatarSelector: React.FC<AvatarSelectorProps> = ({ setAvatar }) => {
    const [alignment, setAlignment] = React.useState('/avatars/fc_avatar1.webp');

    const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
    ) => {
        setAlignment(newAlignment);
        setAvatar(newAlignment);
    };

    const avatars = [
        { value: "/avatars/fc_avatar1.webp", alt: "Jack", src: "/avatars/fc_avatar1.webp" },
        { value: "/avatars/fc_avatar2.webp", alt: "Tyler", src: "/avatars/fc_avatar2.webp" },
        { value: "/avatars/fc_avatar3.webp", alt: "Marla", src: "/avatars/fc_avatar3.webp" },
    ];

    const control = {
        value: alignment,
        onChange: handleChange,
        exclusive: true,
    };

    return (
        <Stack spacing={2} alignItems="center">
            <Typography color="#ffffff">
            Choose your avatar:
            </Typography>
            <ToggleButtonGroup size="large" {...control} aria-label="Select avatar">
            {avatars.map(({ value, alt, src }) => (
                <ToggleButton 
                    sx={{
                        "&.MuiToggleButtonGroup-grouped": {
                        borderRadius: "50px !important",
                        mx: 2,
                        border:`2px solid ${value === alignment ? '#EA088A' : 'lightgrey'} !important`,
                        padding: "0px"
                        }
                    }} 
                    key={value} 
                    value={value}
                >
                    <Avatar alt={alt} src={src} sx={{ height: '70px', width: '70px' }} />
                </ToggleButton>
            ))}
            </ToggleButtonGroup>
        </Stack>
    );
}

export default AvatarSelector;