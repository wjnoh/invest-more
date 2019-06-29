import React from "react";
import NewForm from "../../components/NewForm";
import "./styles.scss";

const NewPage = props => {
  const { updateUser } = props;

  return (
    <div className="new-page">
      <NewForm updateUser={updateUser} />
    </div>
  );
};

export default NewPage;
