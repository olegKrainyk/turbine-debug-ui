import ReactHlsPlayer from 'react-hls-player';

function App() {
  return (
    <div className="App">
      loxik nonamik
      <ReactHlsPlayer
    src=""
    hlsConfig={{
      maxLoadingDelay: 4,
      minAutoBitrate: 0,
      lowLatencyMode: true,
    }}
  />
    </div>
  );
}

export default App;