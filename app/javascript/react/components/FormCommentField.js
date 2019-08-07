import React from 'react';

const FormCommentField = (props) => {
  return (
    <label>{props.label}
      <textarea
        name={props.name}
        value={props.content}
        onChange={props.handlerFunction}
      />
    </label>
  );
}

export default FormCommentField;
