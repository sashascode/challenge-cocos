import * as React from 'react';
import { Page } from '@/types';
import { MouseEvent } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { Button, Box } from '@mui/material';

interface PageButtonProps {
    page: Page;
    handleClose: (event: MouseEvent<HTMLElement>) => void;
}

export const PageButton: React.FC<PageButtonProps> = ({ page, handleClose }) => (
    <Link key={page.id} href={page.url}>
        <StyledButton onClick={handleClose} sx={{ my: 2, ml: 4, color: 'white', display: 'block' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
            {React.createElement(page.icon, { sx: { mr: 1, fontSize:'18px' } })}
            {page.name}
        </Box>
        </StyledButton>
    </Link>
);

const StyledButton = styled(Button)`
  && {
    background-color: transparent;
    transition: background-color 0.3s ease;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      display: block;
      height: 2px;
      width: 0;
      background: white;
      transition: width 0.3s ease;
    }

    &:hover:after {
      width: 100%;
    }
  }
`;