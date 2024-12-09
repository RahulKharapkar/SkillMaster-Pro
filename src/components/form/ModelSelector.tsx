import React from 'react';
import { AIModel } from '../../types';
import { AI_MODELS } from '../../constants/models';

interface ModelSelectorProps {
  selectedModel: AIModel;
  onModelSelect: (model: AIModel) => void;
}

const ModelSelector: React.FC<ModelSelectorProps> = ({ selectedModel, onModelSelect }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Select AI Model</label>
      <div className="grid grid-cols-2 gap-4">
        {AI_MODELS.map((model) => (
          <button
            key={model.id}
            type="button"
            onClick={() => onModelSelect(model.id)}
            className={`p-3 border rounded-lg text-left ${
              selectedModel === model.id
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            {model.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ModelSelector;