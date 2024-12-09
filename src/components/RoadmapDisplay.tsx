import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface RoadmapDisplayProps {
  roadmap: string;
}

const RoadmapDisplay: React.FC<RoadmapDisplayProps> = ({ roadmap }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center space-x-2 mb-4">
        <CheckCircle2 className="w-6 h-6 text-green-500" />
        <h2 className="text-xl font-semibold">Your Learning Roadmap</h2>
        
      </div>
      <div className="prose prose-lg prose-blue max-w-none">
        <ReactMarkdown>{roadmap}</ReactMarkdown>
      </div>
    </div>
  );
};

export default RoadmapDisplay;