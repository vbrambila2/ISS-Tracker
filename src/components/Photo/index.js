import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => {
    return ({
        nasaPhoto: {
            width: '100vw',
        }
    });
});

function NasaPhoto(props) {
    const { 
        photo,
    } = props;
  
    const classes = useStyles(props);
  
    return (
        <div >
            <img className={classes.nasaPhoto} src={photo} alt='Daily space provided by NASA' />
        </div>
    )
}
  
export default NasaPhoto;