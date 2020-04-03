import React, { useContext } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import useStyle from "./style.js";
import { FeedContext } from "@core/context/FeedContext";

export default function YearSelector() {
  const { year, onYearChange } = useContext(FeedContext);
  const classes = useStyle();
  return (
    <FormControl className={classes.formControl}>
      <InputLabel>Año</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={year || 2010}
        onChange={onYearChange}
      >
        <MenuItem value={2010}>2010</MenuItem>
        <MenuItem value={2011}>2011</MenuItem>
        <MenuItem value={2012}>2012</MenuItem>
        <MenuItem value={2013}>2013</MenuItem>
        <MenuItem value={2014}>2014</MenuItem>
        <MenuItem value={2015}>2015</MenuItem>
        <MenuItem value={2016}>2016</MenuItem>
        <MenuItem value={2017}>2017</MenuItem>
        <MenuItem value={2018}>2018</MenuItem>
        <MenuItem value={2019}>2019</MenuItem>
      </Select>
      <FormHelperText>Selecciona un año</FormHelperText>
    </FormControl>
  );
}
