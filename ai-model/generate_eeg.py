from openpyxl import Workbook
import math
import random

wb = Workbook()
ws = wb.active
ws.title = "EEG Data"

ws.append(["Person", "Alpha", "Beta", "Gamma", "Theta"])

num_members = 100
points = 100

for i in range(1, num_members + 1):
    person = f"User-{i}"

    for t in range(points):
        alpha = 0.5 + 0.3 * math.sin(2 * math.pi * t / 20)
        beta = 0.4 + 0.2 * math.sin(2 * math.pi * t / 10)
        gamma = 0.3 + 0.1 * math.sin(2 * math.pi * t / 5)
        theta = 0.6 + 0.25 * math.sin(2 * math.pi * t / 30)

        alpha += random.uniform(-0.05, 0.05)
        beta += random.uniform(-0.05, 0.05)
        gamma += random.uniform(-0.03, 0.03)
        theta += random.uniform(-0.05, 0.05)

        ws.append([
            person,
            round(alpha, 3),
            round(beta, 3),
            round(gamma, 3),
            round(theta, 3),
        ])

wb.save("realistic_eeg.xlsx")