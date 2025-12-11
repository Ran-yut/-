import React, { Suspense } from 'react';
import { Experience } from './components/Scene/Experience';
import { Overlay } from './components/UI/Overlay';
import { Loader } from './components/UI/Loader';

const App: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-lux-emerald-dark overflow-hidden">
      <Overlay />
      <Suspense fallback={null}>
        <Experience />
      </Suspense>
      <Loader />
    </div>
  );
};

export default App;