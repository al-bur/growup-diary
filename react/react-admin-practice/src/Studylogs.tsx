import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  EditButton,
} from 'react-admin';

export const StudyLog = () => (
  <List>
    <Datagrid rowClick="edit">
      <EditButton />
    </Datagrid>
  </List>
);
