from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from workout_logic import generate_workout_plan

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"]) 

@app.route('/')
def home():
    return render_template('form.html')

@app.route('/generate-plan', methods=['POST'])
def generate_plan():
    profile = request.json
    plan = generate_workout_plan(profile)
    return jsonify(plan)

if __name__ == '__main__':
    app.run(debug=True)