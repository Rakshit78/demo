import Dropdown1 from './Dropdown';

function App() {
  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: 100 }}>
        <Dropdown1 />
        <div
          style={{
            borderWidth: 1,
            borderColor: 'rgba(205, 205, 205, 1)',
            borderStyle: 'solid',
            // marginTop: 10,
            marginBottom: 20,
          }}
        />
        <button
          style={{
            backgroundColor: 'rgba(255, 206, 34, 1)',
            color: 'black',
            border: 'none',
            width: 340,
            height: 40,
          }}
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default App;
