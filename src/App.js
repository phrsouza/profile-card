import "./App.css";

function Avatar() {
  return <img className="avatar" src="avatar.jpeg" alt="Pedro Souza" />;
}

function App() {
  return (
    <div className="card">
      Hello Profile Card
      <Avatar />
    </div>
  );
}

export default App;
