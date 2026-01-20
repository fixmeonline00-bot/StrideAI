import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-400">More sections coming soon...</p>
      </div>
    </div>
  );
}

export default App;
