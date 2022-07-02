import React from "react";
import { AllCheckerCheckbox, Checkbox, CheckboxGroup } from '@createnl/grouped-checkboxes';

export default function PermissionsFrom(props){
    return (
        <CheckboxGroup onChange={console.log}>
          <label>
            <Checkbox value="tos" />
            Terms and Conditions
          </label>
          <label>
            <Checkbox value="privacy-policy" />
            Privacy Policy
          </label>
          <label>
            <Checkbox value="advertisements" />
            Advertisements
          </label>
          <label>
            <AllCheckerCheckbox />
            Agree to all
          </label>
        </CheckboxGroup>
    );
};