import React, {useState} from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import useStyles from "./styles";
import PlaceDetails from '../PlaceDetails/PlaceDetails';
const List = ({places}) => {
  const classes = useStyles();
  const [ type, setType] = useState('restaurants');
  const [ rating, setRating] = useState('');



  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restaurant, Hotelsn y Attractions around you
      </Typography>
      <FormControl className={classes.formControl}>
          <InputLabel>Type</InputLabel>
          <Select value={type} onChange={(e)=> setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurantes</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
          </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
          <InputLabel>Type</InputLabel>
          <Select value={rating} onChange={(e)=> setRating(e.target.value)}>
              <MenuItem value={0}>0</MenuItem>
              <MenuItem value={2}>rate 2 stars</MenuItem>
              <MenuItem value={3}>rate 3 stars</MenuItem>
              <MenuItem value={4}>rate 4 stars</MenuItem>
              <MenuItem value={5}>rate 5 stars</MenuItem>
          </Select>
      </FormControl>
      <Grid container spacing={3} className="classes.list">
          {places?.map((place, index)=> (<Grid item key={index} xs={12}> 
            <PlaceDetails place={place} />
          </Grid>))}
      </Grid>
    </div>
  );
};

export default List;
