import { Admin, Resource, EditGuesser } from 'react-admin';
import { UserList } from 'users';
import { StudyLog } from 'Studylogs';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://api.prolog.techcourse.co.kr');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="studylogs" list={StudyLog} edit={EditGuesser} />
    <Resource name="users" list={UserList} />
  </Admin>
);

export default App;
