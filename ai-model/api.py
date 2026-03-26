from flask import Flask, request, jsonify
import numpy as np
import pandas as pd

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    file = request.files['file']
    df = pd.read_csv(file)

    emotion = np.random.choice(["Neutral", "Positive", "Negative"])
    confidence = float(np.random.uniform(0.7, 0.99))

    return jsonify({
        "emotion": emotion,
        "confidence": confidence
    })

app.run(port=8000)