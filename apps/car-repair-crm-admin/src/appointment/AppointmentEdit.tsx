import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";
import { AgentTitle } from "../agent/AgentTitle";
import { ClientTitle } from "../client/ClientTitle";
import { WorkshopTitle } from "../workshop/WorkshopTitle";

export const AppointmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="agent.id" reference="Agent" label="Agent">
          <SelectInput optionText={AgentTitle} />
        </ReferenceInput>
        <ReferenceInput source="client.id" reference="Client" label="Client">
          <SelectInput optionText={ClientTitle} />
        </ReferenceInput>
        <DateTimeInput label="Date and Time" source="dateAndTime" />
        <SelectInput
          source="status"
          label="Status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="workshop.id"
          reference="Workshop"
          label="Workshop"
        >
          <SelectInput optionText={WorkshopTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
