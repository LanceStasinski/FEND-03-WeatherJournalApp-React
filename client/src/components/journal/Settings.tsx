import React, { useContext, useState, createRef } from "react";
import styled from "styled-components";

import Modal from "../shared/Modal";
import { useAuth } from "../shared/hooks/auth-hook";
import {
  Button,
  Form,
  SettingField,
  Label,
  SettingInput,
  SettingSelect,
  SettingFooter
} from "../../styles/styles";
import { AuthContext } from "../shared/context/auth-context";

const SettingsForm = styled(Form)`
  margin: 0;
`;

const Settings: React.FC<{ show: boolean; onCancel: () => void }> = (props) => {
  const authCtx = useContext(AuthContext);
  const [zip, setZip] = useState(authCtx.zipCode);
  const [units, setUnits] = useState(authCtx.unitPreference);
  const zipRef = createRef<HTMLInputElement>();
  const unitsRef = createRef<HTMLSelectElement>();
  const { updatePreferences } = useAuth();

  const zipChangeHandler = () => {
    setZip(zipRef.current!.value);
  };

  const unitsChangeHandler = () => {
    setUnits(unitsRef.current!.value);
  };

  const submitHandler = () => {
    console.log({ zip: zipRef.current!.value, units: unitsRef.current!.value });
    console.log({ zip, units });
  };

  return (
    <Modal
      show={props.show}
      onCancel={props.onCancel}
      header="SETTINGS"
      footer={
        <SettingFooter>
          <Button type="button" onClick={submitHandler}>
            Save
          </Button>
          <Button type="button" onClick={props.onCancel}>
            Cancel
          </Button>
        </SettingFooter>
      }
    >
      <SettingsForm>
        <SettingField>
          <Label htmlFor="zip">Zip Code:</Label>
          <SettingInput
            id="zip"
            name="input"
            type='text'
            ref={zipRef}
            value={zip}
            onChange={zipChangeHandler}
            
          />
        </SettingField>
        <SettingField>
          <Label htmlFor="units">Prefered Units:</Label>
          <SettingSelect
            id="units"
            name="units"
            ref={unitsRef}
            value={units}
            onChange={unitsChangeHandler}
          >
            <option value="imperial">Imperial (mph, °F)</option>
            <option value="metric">Metric (m/s, °C)</option>
            <option value="standard">Standard (m/s, K)</option>
          </SettingSelect>
        </SettingField>
      </SettingsForm>
    </Modal>
  );
};

export default Settings;
