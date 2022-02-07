import React, { useContext, useState, createRef, FormEvent } from "react";
import styled from "styled-components";

import Modal from "../shared/Modal";
import {
  Button,
  Form,
  SettingField,
  Label,
  SettingInput,
  SettingSelect,
  SettingFooter,
  ErrorP,
} from "../../styles/styles";
import { AuthContext } from "../shared/context/auth-context";
import { useHttpClient } from "../shared/hooks/http-hook";
import LoadingSpinner from "../shared/LoadingSpinner";
import ErrorModal from "../shared/ErrorModal";

const SettingsForm = styled(Form)`
  margin: 0;
`;

const Settings: React.FC<{ show: boolean; onCancel: () => void }> = (props) => {
  const authCtx = useContext(AuthContext);
  const [zip, setZip] = useState(authCtx.zipCode);
  const [units, setUnits] = useState(authCtx.unitPreference);
  const [formError, setFormError] = useState(false);
  const zipRef = createRef<HTMLInputElement>();
  const unitsRef = createRef<HTMLSelectElement>();
  const { sendRequest, isLoading, httpError, clearError } = useHttpClient();

  const zipChangeHandler = () => {
    setZip(zipRef.current!.value);
    if (zipRef.current!.value.length === 0) setFormError(true);
    else setFormError(false);
  };

  const unitsChangeHandler = () => {
    setUnits(unitsRef.current!.value);
  };

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await sendRequest(
        `${process.env.REACT_APP_REST_API}/preferences`,
        "POST",
        JSON.stringify({ unitPreference: units, zipCode: zip }),
        {
          Authorization: "Bearer " + authCtx.token,
          "Content-Type": "application/json",
        }
      );
      authCtx.updatePreferences(response.unitPreference, response.zipCode);
      props.onCancel();
    } catch (error) {}
  };

  return (
    <React.Fragment>
      {!httpError && (
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
          {isLoading && <LoadingSpinner />}
          <SettingsForm>
            <SettingField>
              <Label htmlFor="zip">ZIP Code:</Label>
              <SettingInput
                id="zip"
                name="input"
                type="text"
                ref={zipRef}
                value={zip}
                onChange={zipChangeHandler}
              />
            </SettingField>
            {formError && (
              <ErrorP>ZIP code must be at least 1 character long.</ErrorP>
            )}
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
      )}
      <ErrorModal error={httpError} onClear={clearError} />
    </React.Fragment>
  );
};

export default Settings;
