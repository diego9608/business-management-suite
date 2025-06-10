// src/App.js
import React, { useState } from 'react';
import CafeManagementSystem from './CafeManagementSystem';
import SmartInsightsEngine from './SmartInsightsEngine';
import UltimateCafeSystem from './UltimateCafeSystem';
import MobileSocialIntegration from './MobileSocialIntegration';

const App = () => {
  const [activeSystem, setActiveSystem] = useState('pos'); // Changed default to POS

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Global Navigation */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">Café Yasin</span>
              <span className="text-xs text-gray-600 bg-green-100 px-2 py-1 rounded-full">Ultimate v2.0</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveSystem('pos')}
                className={`px-4 py-2 rounded-lg transition ${
                  activeSystem === 'pos' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                POS System
              </button>
              <button
                onClick={() => setActiveSystem('insights')}
                className={`px-4 py-2 rounded-lg transition ${
                  activeSystem === 'insights' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Supplier Hub
              </button>
              <button
                onClick={() => setActiveSystem('management')}
                className={`px-4 py-2 rounded-lg transition ${
                  activeSystem === 'management' 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Management
              </button>
              <button
                onClick={() => setActiveSystem('mobile')}
                className={`px-4 py-2 rounded-lg transition ${
                  activeSystem === 'mobile' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Mobile & Social
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* System Components */}
      <div className="relative">
        {activeSystem === 'management' && <CafeManagementSystem />}
        {activeSystem === 'insights' && <SmartInsightsEngine />}
        {activeSystem === 'pos' && <UltimateCafeSystem />}
        {activeSystem === 'mobile' && <MobileSocialIntegration />}
      </div>
    </div>
  );
};

export default App;