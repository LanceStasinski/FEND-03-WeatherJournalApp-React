import React from "react";

import {
  LoginField,
  IconPortraitFrame,
  IconPortrait,
  StyledInput,
} from "../../styles/styles";

const Input: React.FC<{ name: string; image: string; type: string; }> = (
  props
) => {
  const capitalizedName =
    props.name.charAt(0).toUpperCase() + props.name.slice(1);
  return (
    <LoginField>
      <IconPortraitFrame>
        <IconPortrait src={props.image} />
      </IconPortraitFrame>

      <label htmlFor={props.name} />
      <StyledInput
        id={props.name}
        name={props.name}
        placeholder={capitalizedName}
        type={props.type}
      />
    </LoginField>
  );
};

export default Input;
