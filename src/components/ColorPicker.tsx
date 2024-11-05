import React from 'react';
import { Palette } from 'lucide-react';

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
}

export default function ColorPicker({ color, onChange }: ColorPickerProps) {
  const presetColors = [
    '#0f766e', // Teal
    '#0369a1', // Blue
    '#7c3aed', // Purple
    '#be185d', // Pink
    '#b91c1c', // Red
    '#92400e', // Orange
    '#365314', // Green
    '#1e293b', // Slate
  ];

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
        <Palette className="h-4 w-4" />
        Brand Color
      </label>
      <div className="flex items-center gap-2">
        <input
          type="color"
          value={color}
          onChange={(e) => onChange(e.target.value)}
          className="h-8 w-8 rounded cursor-pointer"
        />
        <div className="flex flex-wrap gap-2">
          {presetColors.map((presetColor) => (
            <button
              key={presetColor}
              className="w-6 h-6 rounded-full border-2 border-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              style={{ backgroundColor: presetColor }}
              onClick={() => onChange(presetColor)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}