import React from 'react';
import { Layout } from 'lucide-react';
import { PageConfig } from '../types';
import { defaultPages } from '../data/defaultPages';
import * as Icons from 'lucide-react';

interface PageConfiguratorProps {
  pages: PageConfig[];
  onChange: (pages: PageConfig[]) => void;
}

export default function PageConfigurator({ pages, onChange }: PageConfiguratorProps) {
  const handleToggle = (pageId: string) => {
    const updatedPages = pages.map(page =>
      page.id === pageId ? { ...page, enabled: !page.enabled } : page
    );
    onChange(updatedPages);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <Layout className="h-5 w-5 text-teal-600" />
        Page Configuration
      </h3>
      
      <div className="space-y-3">
        {pages.map(page => {
          const IconComponent = Icons[page.icon as keyof typeof Icons];
          return (
            <div key={page.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2">
                {IconComponent && <IconComponent className="h-5 w-5 text-teal-600" />}
                <span className="text-sm font-medium text-gray-700">{page.name}</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={page.enabled}
                  onChange={() => handleToggle(page.id)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}