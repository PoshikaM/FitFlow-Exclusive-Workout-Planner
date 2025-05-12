import React, { useState } from 'react';

const defaultProfile = {
  name: '',
  age: '',
  gender: '',
  experience: 'beginner',
  goal: 'muscle_gain',
  days_per_week: 3,
  equipment: [],
  include_circuit: false
};

const equipmentOptions = [
  'Dumbbell', 'Resistance Band', 'Towel', 'Jump Rope', 'Mat'
];

function WorkoutForm({ onSubmit }) {
  const [form, setForm] = useState(defaultProfile);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'equipment') {
      const updated = checked
        ? [...form.equipment, value]
        : form.equipment.filter(eq => eq !== value);
      setForm({ ...form, equipment: updated });
    } else if (type === 'checkbox') {
      setForm({ ...form, [name]: checked });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-5 mt-16">
      <h2 className="text-3xl font-bold text-center">Workout Plan Generator</h2>

      <div>
        <label className="block font-medium mb-1">Name</label>
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-1">Age</label>
          <input
            type="number"
            name="age"
            min="1"
            required
            value={form.age}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Gender</label>
          <select
            name="gender"
            required
            value={form.gender}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">-- Select --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block font-medium mb-1">Experience</label>
        <select
          name="experience"
          required
          value={form.experience}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <div>
        <label className="block font-medium mb-1">Goal</label>
        <select
          name="goal"
          required
          value={form.goal}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
          <option value="muscle_gain">Muscle Gain</option>
          <option value="strength">Strength</option>
          <option value="endurance">Endurance</option>
        </select>
      </div>

      <div>
        <label className="block font-medium mb-1">Days Per Week</label>
        <input
          type="number"
          name="days_per_week"
          required
          min="1"
          max="7"
          value={form.days_per_week}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block font-medium mb-2">Available Equipment</label>
        <div className="flex flex-wrap gap-3">
          {equipmentOptions.map(eq => (
            <label key={eq} className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="equipment"
                value={eq}
                onChange={handleChange}
                checked={form.equipment.includes(eq)}
                className="accent-blue-600"
              />
              <span>{eq}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="include_circuit"
          checked={form.include_circuit}
          onChange={handleChange}
          className="accent-blue-600"
        />
        <label className="font-medium">Include Circuit Training</label>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Generate Plan
      </button>
    </form>
  );
}

export default WorkoutForm;