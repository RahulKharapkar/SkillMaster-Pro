import React, { useState } from 'react';
import { Brain, Clock, GraduationCap } from 'lucide-react';
import { FormData, ProficiencyLevel, AIModel } from '../types';
import FormInput from './form/FormInput';
import FormSelect from './form/FormSelect';
import ModelSelector from './form/ModelSelector';

interface RoadmapFormProps {
  onSubmit: (data: FormData, model: AIModel) => void;
  isLoading: boolean;
}

const PROFICIENCY_OPTIONS = [
  { value: 'rookie', label: 'Rookie' },
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
];

const RoadmapForm: React.FC<RoadmapFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<FormData>({
    skill: '',
    proficiencyLevel: 'rookie',
    timeCommitment: '',
  });
  const [selectedModel, setSelectedModel] = useState<AIModel>('gpt-4o-mini');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData, selectedModel);
  };

  const updateFormData = (field: keyof FormData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormInput
        label="Skill to Learn"
        icon={GraduationCap}
        value={formData.skill}
        onChange={updateFormData('skill')}
        placeholder="e.g., JavaScript, Photography, Piano"
        required
      />

      <FormSelect
        label="Current Proficiency Level"
        icon={Brain}
        value={formData.proficiencyLevel}
        onChange={updateFormData('proficiencyLevel')}
        options={PROFICIENCY_OPTIONS}
      />

      <FormInput
        label="Time Commitment"
        icon={Clock}
        value={formData.timeCommitment}
        onChange={updateFormData('timeCommitment')}
        placeholder="e.g., 2 hours daily, 10 hours weekly"
        required
      />

      <ModelSelector
        selectedModel={selectedModel}
        onModelSelect={setSelectedModel}
      />

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-blue-300 transition-colors"
      >
        Generate Roadmap
      </button>
    </form>
  );
};

export default RoadmapForm;