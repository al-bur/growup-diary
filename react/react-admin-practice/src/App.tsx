import {
  Admin,
  Resource,
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  Edit,
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
} from 'react-admin';
import authProvider from 'authProvider';
// import { StudyLog } from 'Studylogs';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

export const PostList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="title" />
      <EditButton />
    </Datagrid>
  </List>
);

const PostCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
);

const PostEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
);

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource
      name="users"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
    />
  </Admin>
);

export default App;
