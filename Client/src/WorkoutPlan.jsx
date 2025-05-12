import React from 'react';

function WorkoutPlan({ plan }) {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Your 12-Session Workout Plan</h2>

      {plan.map(session => (
        <div
          key={session.session}
          className="bg-white shadow-md rounded-lg p-6 mb-6 border border-gray-200"
        >
          <h3 className="text-xl font-semibold mb-2">
            Session {session.session} - <span className="text-gray-500">{session.date}</span>
          </h3>

          {['warmup', 'main', 'circuit', 'cooldown'].map(section =>
            session.sections[section] ? (
              <div key={section} className="mb-4">
                <h4 className="font-semibold text-blue-600 uppercase mb-2">{section}</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {session.sections[section].map((ex, idx) => (
                    <li key={idx}>
                      <span className="font-medium">{ex.name}</span>
                      <span className="ml-2 text-sm text-gray-600">
                        {ex.sets ? `${ex.sets} sets` : ''}
                        {ex.reps ? `, ${ex.reps} reps` : ''}
                        {ex.duration ? `, ${ex.duration}` : ''}
                        {ex.rest ? ` | Rest: ${ex.rest}` : ''}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null
          )}
        </div>
      ))}
    </div>
  );
}

export default WorkoutPlan;