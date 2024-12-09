import React, { useState } from 'react';
import { FormData, AIModel } from './types';
import RoadmapForm from './components/RoadmapForm';
import RoadmapDisplay from './components/RoadmapDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import { generateRoadmap } from './services/api';
import { AlertCircle } from 'lucide-react';

function App() {
  const [roadmap, setRoadmap] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const handleSubmit = async (formData: FormData, model: AIModel) => {
    setIsLoading(true);
    setError('');
    try {
      const response = await generateRoadmap(formData, model);
      setRoadmap(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Skill Development Roadmap
          </h1>
          <p className="text-gray-600">
            Get a personalized learning plan based on your goals and availability
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <RoadmapForm onSubmit={handleSubmit} isLoading={isLoading} />
        </div>

        {isLoading && (
          <div className="my-8">
            <LoadingSpinner />
          </div>
        )}

        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
              <p className="text-red-700">{error}</p>
            </div>
          </div>
        )}

        {roadmap && !isLoading && <RoadmapDisplay roadmap={roadmap} />}
      </div>
    </div>
  );
}

export default App;