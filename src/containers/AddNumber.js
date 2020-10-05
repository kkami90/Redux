import React from "react";

import AddNumberR from "../components/AddNumber";
import { connect } from "react-redux";
import { increase } from "../store";

// const AddNumber = () => {
//   return <AddNumberR />;
// };

const reduxProps = (dispatch) => {
  return {
    handleAdd: (size) => {
      dispatch(increase(size));
    },
  };
};

export default connect(null, reduxProps)(AddNumberR);
