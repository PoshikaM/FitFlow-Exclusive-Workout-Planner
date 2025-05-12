# 🏋️ Personalized Workout Plan Generator
This is a full-stack application that generates a 12-session workout plan tailored to user preferences including fitness level, workout goals, available equipment, and more.

### 🚀 Getting Started
#### 1. Clone the Repository
```
git clone https://github.com/PoshikaM/FitFlow-Exclusive-Workout-Planner
cd Server
```
#### 2. Setup the Backend
- Create a virtual environment:

  ```
  python3 -m venv venv
  source venv/bin/activate  # or venv\Scripts\activate on Windows
  ```
- Install dependencies:
  ```
  pip install -r requirements.txt
  ```
- Run the server:
  ```
  python3 app.py
  ```
#### 3. Setup the Frontend (React)
- Navigate to the frontend directory and install dependencies:
  ```
  cd client
  npm install
  ```
- Start the development server:
  ```
  npm run dev
  ```
### Sample Input JSON:
```
{ 
 "name": "Aarav", 
 "age": 35, 
 "gender": "male", 
 "goal": "muscle_gain", 
 "experience": "intermediate", 
 "equipment": ["dumbbells", "bench", "resistance_band"], 
 "days_per_week": 3 
}
```
### Sample Output Format (Workout Plan) 
```
{ 
 "session": 1, 
 "date": "2025-05-06", 
 "sections": { 
 "warmup": [ 
 { "name": "Jumping Jacks", "duration": "2 min" }, 
 { "name": "Arm Circles", "sets": 2, "reps": 15 } 
 ], 
 "main": [ 
 { "name": "Dumbbell Chest Press", "sets": 3, "reps": 10, "rest": "60s", "tempo": "2-1-1" }, 
 { "name": "Resistance Band Row", "sets": 3, "reps": 12 } 
 ], 
 "cooldown": [ 
 { "name": "Child’s Pose", "duration": "1 min" }, 
 { "name": "Chest Stretch", "duration": "30 sec each side" } 
 ] 
 } 
} 
```
### Output Image:
![Output Image](https://github.com/user-attachments/assets/11f48924-b35d-4e61-ae72-9a671e47ca4c)

![Output Image](https://github.com/user-attachments/assets/839eff18-0f8f-4585-9d4c-d29b257fc626)
