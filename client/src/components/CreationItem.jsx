
import React, { useState } from 'react';
import Markdown from 'react-markdown';

const CreationItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="p-4 max-w-5xl text-sm bg-white border border-gray-200 rounded-lg">
      <div
        onClick={() => setExpanded(!expanded)}
        className="flex justify-between items-center gap-4 cursor-pointer"
      >
        <div className="min-w-0">
          <h2 className="font-medium text-gray-800 truncate">
            {item.prompt}
          </h2>
          <p className="text-gray-500 mt-1">
            {item.type} - {new Date(item.created_at).toLocaleDateString()}
          </p>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(!expanded);
          }}
          className="shrink-0 bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF] px-4 py-1 rounded-full"
        >
          {item.type}
        </button>
      </div>

      {expanded && (
        <div className="mt-4 border-t border-gray-100 pt-3">
          {item.type === 'image' ? (
            <img
              src={item.content}
              alt={item.prompt || 'Generated image'}
              className="w-full max-w-md rounded-lg"
            />
          ) : (
            <div className="max-h-96 overflow-y-auto text-sm text-slate-700 leading-6">
              <Markdown>{item.content}</Markdown>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CreationItem;