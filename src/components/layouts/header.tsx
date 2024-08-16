
import { TextField } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Header = () => {
    return (
        <div className='header'>
            <div className='header-left'>
                <p className='font-500'>Home</p>
                <NavigateNextIcon fontSize='small' />
                <p>Dashboard</p>
            </div>
            <TextField placeholder='Search anything...' className='search-bar' size='small' id="outlined-basic" variant="outlined" />
        </div>
    )
}

export default Header;