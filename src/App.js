import File from './components/files/File';
const initialData = {
  Todo: [
    "Design UI mockups",
    "Set up project repository",
    "Write Unit test",
    "Integrate payment gateway"
  ],
  InProgress: [
    "Develop authentication flow",
    "Implement Unit test",
  ],
  Completed:[
    "Set up CI/CD pipeline",
    "Conduct code reviews",
    "Deploy initial version to staging"
  ]
}
function App() {
  return (
    <>
      <File initialState={initialData}/>
    </>
  );
}

export default App;


