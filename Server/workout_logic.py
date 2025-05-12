import json, random
from datetime import datetime, timedelta

def load_exercises():
    with open('exercises.json') as f:
        return json.load(f)

def filter_by_equipment(ex_list, user_eq):
    return [
        ex for ex in ex_list
        if not ex.get("equipment") or set(ex["equipment"]).issubset(set(user_eq))
    ]

def generate_workout_plan(profile):
    data = load_exercises()
    plan, session_date = [], datetime.now()

    exp_mult = {"beginner":0.75, "intermediate":1.0, "advanced":1.25}
    rep_ranges = {
        "muscle_gain": (8,12),
        "strength": (4,6),
        "endurance": (15,20)
    }
    workout_types = ['push','pull','legs']

    for i in range(1,13):
        wtype = workout_types[(i-1)%3]

        # pick main exercises matching equipment
        pool = filter_by_equipment(data["main"][wtype], profile["equipment"])
        main_exs = random.sample(pool, k=2)

        # adjust sets/reps
        for ex in main_exs:
            ex["sets"] = max(1, int(ex["sets"] * exp_mult[profile["experience"]]))
            low, high = rep_ranges.get(profile["goal"], (10,12))
            ex["reps"] = random.randint(low, high)
            ex.setdefault("rest", "60s")

        sess = {
            "session": i,
            "date": session_date.strftime("%Y-%m-%d"),
            "sections": {
                "warmup": random.sample(data["warmup"], 2),
                "main": main_exs,
                "cooldown": random.sample(data["cooldown"], 2)
            }
        }

        # optional circuit
        if profile.get("include_circuit") and "circuit_pool" in data and len(data["circuit_pool"]) >= 3:
            circ = random.sample(data["circuit_pool"], 3)
            sess["sections"]["circuit"] = circ

        plan.append(sess)
        session_date += timedelta(days=7//profile["days_per_week"])

    return plan