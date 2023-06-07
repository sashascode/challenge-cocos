import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import styled from '@emotion/styled';
import SearchBar from './SearchBar';

export const Header = () => {
    return (
        <StyledAppBar position="sticky">
            <Container>
                <StyledToolbar>
                    <Link href="#home" underline="none">
                        <StyledBrand variant="h6">
                            SUSHI<span>FLIX</span>
                        </StyledBrand>
                    </Link>
                    <SearchBar />
                </StyledToolbar>
            </Container>
        </StyledAppBar>
    )
}

const StyledBrand = styled(Typography)`
    && {
        color: #ffffff;
        font-weight: bold;
        font-size: 30px;
        flex-grow: 1;

        & span {
            color: #EA1C24;
        }
    }
`;

const StyledAppBar = styled(AppBar)`
    && {
        background: #0D0C0F !important;
        padding: 1rem;
        box-shadow: none;
        border-bottom: 1px solid #222026;
    }
`;

const StyledToolbar = styled(Container)`
    && {
       display: flex;
       justify-content: space-between;
    }
`;
