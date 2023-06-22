import { SvgIcon } from '@mui/material';

export interface Page {
    id: string;
    name: string;
    icon: typeof SvgIcon;
    url: string;
}