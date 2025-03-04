'use client';

import React from 'react';

const SettingsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="space-y-4">
          {/* Add your settings content here */}
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-2">Account Settings</h2>
            {/* Settings form or controls will go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;