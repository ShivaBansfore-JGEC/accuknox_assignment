import { useRef } from "react";
import { TextField } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useDispatch } from "react-redux";
import { updateSearch } from "../../redux-store/slice/DashboardSlice";

const Header = () => {
    const dispatch = useDispatch();
    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        dispatch(updateSearch(value));
    }

    return (
        <div className='header'>
            <div className='header-left'>
                <p>Home</p>
                <NavigateNextIcon fontSize='small' />
                <p className='font-500'>Dashboard V2</p>
            </div>
            <div className="header-right">
                <TextField onChange={onSearch} placeholder='Search widgets...' className='search-bar' size='small' id="outlined-basic" variant="outlined" />
            </div>
        </div>
    )
}

export default Header;