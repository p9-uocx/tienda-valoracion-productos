import React from 'react';
import {
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  DateField,
  TextField,
  EditButton,
  DisabledInput,
  TextInput,
  LongTextInput,
  AutocompleteArrayInput,
  RadioButtonGroupInput,
  DateInput,
} from 'react-admin';
import BookIcon from '@material-ui/icons/Book';
export const PostIcon = BookIcon;

export const PostList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id_user" />
      <TextField source="first_name" />
      <TextField source="last_name" />
      <TextField source="gender" />
      <TextField source="gender" />
      <TextField source="email" />
      <TextField source="password" />
      <TextField source="rol" />
      <TextField source="date_add" />
      <EditButton basePath="/user" />
    </Datagrid>
  </List>
);

const PostTitle = ({ record }) => {
  return <span>{`User ${record.first_name}`}</span>;
};

export const PostEdit = props => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id_user" />
      <TextField source="first_name" />
      <TextField source="last_name" />
      <RadioButtonGroupInput
        source="gender"
        choices={[{ id: 'M', name: 'Masculino' }, { id: 'F', name: 'Femenino' }]}
      />
      <TextField source="email" />
      <TextField source="password" />
      <TextField source="rol" />
      <DateInput label="Publication date" source="date_add" />
    </SimpleForm>
  </Edit>
);

export const PostCreate = props => (
  <Create title="Create a User" {...props}>
    <SimpleForm>
      <TextField source="first_name" />
      <DateField source="last_name" />
      <TextField source="gender" />
      <TextField source="email" />
      <TextField source="password" />
      <TextField source="rol" />
      <DateInput label="Publication date" source="date_add" />
    </SimpleForm>
  </Create>
);
