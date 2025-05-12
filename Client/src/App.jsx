import React, { useState } from 'react';
import WorkoutForm from './WorkoutForm';
import WorkoutPlan from './WorkoutPlan';

function App() {
  const [plan, setPlan] = useState(null);

  const handleGeneratePlan = async (profile) => {
    try {
      const response = await fetch(' http://127.0.0.1:5000/generate-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profile)
      });
      const data = await response.json();
      setPlan(data);
    } catch (error) {
      console.error('Error generating plan:', error);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1 className="fixed top-0 left-0 right-0 z-50 bg-blue-600 text-white text-xl font-semibold px-6 py-4 shadow-md">
        FitFlow
      </h1>
      <WorkoutForm onSubmit={handleGeneratePlan} />
      {plan && <WorkoutPlan plan={plan} />}
    </div>
  );
}

export default App;