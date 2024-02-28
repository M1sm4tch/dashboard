import GettingData from './components/GettingData';
import VisualizationComponent from './components/VisualizationComponent';
import { useState } from 'react';

const App = () => {
  const [currentView, setCurrentView] = useState('dataModel');

  const handleNavigate = view => {
    setCurrentView(view);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      {/* Navigation Panel */}
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleNavigate('dataModel')} style={{ marginRight: '10px' }}>
          Data Model
        </button>
        <button onClick={() => handleNavigate('visualization')}>
          Visualization
        </button>
      </div>

      {/* Main Content */}
      {currentView === 'dataModel' ? (
        <GettingData />
      ) : (
        <VisualizationComponent />
      )}
    </div>
  )
};


export default App;
