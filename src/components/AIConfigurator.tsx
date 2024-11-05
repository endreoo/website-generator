import React from 'react';
import { Brain, MessageSquare, Wand2 } from 'lucide-react';

export default function AIConfigurator() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <Brain className="h-5 w-5 text-teal-600" />
        AI Configuration
      </h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-teal-600" />
            <span className="text-sm font-medium text-gray-700">AI Chat Assistant</span>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2">
            <Wand2 className="h-5 w-5 text-teal-600" />
            <span className="text-sm font-medium text-gray-700">Smart Recommendations</span>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
          </label>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">AI Personality</label>
          <select className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500">
            <option value="professional">Professional & Formal</option>
            <option value="friendly">Friendly & Casual</option>
            <option value="luxury">Luxury & Sophisticated</option>
            <option value="playful">Playful & Energetic</option>
          </select>
        </div>
      </div>
    </div>
  );
}