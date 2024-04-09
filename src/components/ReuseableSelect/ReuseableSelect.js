import React from "react";
import { FormControl, NativeSelect } from "@mui/material";

const ReuseableSelect = ({ BootstrapInput }) => {
  return (
    <FormControl variant="standard">
      <NativeSelect
        id="demo-customized-select-native"
        // value={age}
        // onChange={handleChange}
        input={<BootstrapInput />}
      >
        <option aria-label="None" value="" />
        <option value={10}>Ten</option>
        <option value={20}>Twenty</option>
        <option value={30}>Thirty</option>
      </NativeSelect>
    </FormControl>
  );
};

export default ReuseableSelect;
