import { AppBar, Typography, Box, Container } from "@mui/material"
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Nav = () => {
    return (
        <AppBar position="sticky" color="primary" >
            <Container sx={{ p: 1, display: 'flex' }}>
                <Typography sx={{ flexGrow: 1 }} variant="h5" >
                    TokoPaedi
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3 }}>
                    <SearchOutlinedIcon color="secondary" sx={{ mr: 2, color: 'white' }} />
                    <LocalMallOutlinedIcon color="secondary" sx={{ mr: 2, color: 'white' }} />
                    <PersonOutlineOutlinedIcon color="secondary" sx={{ mr: 2, color: 'white' }} />
                </Box>
            </Container>
        </AppBar>
    )
}

export default Nav 
