import './App.css';

const  App = () => {
  const name = "sidharthviz";
  const isShowing = false;
  return (
    <div className="App">
      <h1>Hello {isShowing ? name : 'User!'}</h1>
      {name ? (
        <>
        <h1>{name}</h1>
        </>
      ) : (
        <>
        <h1>test</h1>
        </>
      )}
    </div>
  );
}

export default App;
