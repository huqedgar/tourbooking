import React, { useEffect, useState } from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const NOMINATIM_BASE_URL = 'https://nominatim.openstreetmap.org/search?';

export default function SearchBox(props) {
    const { selectPosition, setSelectPosition } = props;
    const [searchText, setSearchText] = useState('');
    const [listPlace, setListPlace] = useState([]);

    const handleChange = (e) => {
        setSearchText(e.target.value);
    };

    useEffect(() => {
        console.log(searchText);
        const params = {
            q: searchText,
            format: 'json',
            addressdetails: 1,
            polygon_geojson: 0,
        };
        const queryString = new URLSearchParams(params).toString();
        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };
        fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
            .then((response) => response.text())
            .then((result) => {
                console.log(JSON.parse(result));
                setListPlace(JSON.parse(result));
            })
            .catch((err) => console.log('err: ', err));
    }, [searchText]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    <OutlinedInput style={{ width: '100%' }} value={searchText} onChange={handleChange} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', padding: '0px 20px' }}>
                    <Button variant="contained" color="primary">
                        Search
                    </Button>
                </div>
            </div>
            <div>
                <List component="nav" aria-label="main mailbox folders">
                    {listPlace.map((item) => {
                        return (
                            <div key={item?.place_id}>
                                <ListItem
                                    button
                                    onClick={() => {
                                        setSelectPosition(item);
                                    }}
                                >
                                    <ListItemIcon>
                                        <img
                                            src="./placeholder.png"
                                            alt="Placeholder"
                                            style={{ width: 38, height: 38 }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary={item?.display_name} />
                                </ListItem>
                                <Divider />
                            </div>
                        );
                    })}
                </List>
            </div>
        </div>
    );
}
