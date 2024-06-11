import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

import { BillingTitle } from "../billing/BillingTitle";

export const InvoiceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <ReferenceInput source="billing.id" reference="Billing" label="Billing">
          <SelectInput optionText={BillingTitle} />
        </ReferenceInput>
        <DateTimeInput label="Date" source="date" />
        <BooleanInput label="Paid" source="paid" />
      </SimpleForm>
    </Create>
  );
};
