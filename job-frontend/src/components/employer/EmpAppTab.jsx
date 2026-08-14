import React from "react";

const EmpAppTabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="border-b border-zinc-200 px-4 md:px-5">
      <div className="flex items-center gap-7 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => onTabChange(tab.value)}
            className={`relative py-4 text-sm font-medium whitespace-nowrap transition ${
              activeTab === tab.value
                ? "text-blue-600"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            {tab.label} ({tab.count})
            {activeTab === tab.value && (
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-600 rounded-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmpAppTabs;
