import React from "react";
import Select from "react-select";

const RecentFilter = ({ selectedCountry, changeCountry, options }) => {
  return (
    <div style={{ marginTop: "10px", marginBottom: "10px" }}>
      <Select
        value={selectedCountry}
        className="country-selector"
        classNamePrefix="country-select"
        onChange={e => changeCountry(e)}
        options={options}
      />
    </div>
  );
};

export default RecentFilter;
