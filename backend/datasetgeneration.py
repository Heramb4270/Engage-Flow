import random
import csv

post_types = ['carousel', 'reel', 'static_image']

# Generate 100 rows of data
data = []
for i in range(1, 1000):
    post = {
        "post_id": i,
        "type": random.choice(post_types),
        "likes": random.randint(50, 300),
        "comments": random.randint(10, 100),
        "shares": random.randint(5, 70)
    }
    data.append(post)

# Write to CSV
with open('social_engagement.csv', 'w', newline='') as csvfile:
    writer = csv.DictWriter(csvfile, fieldnames=["post_id", "type", "likes", "comments", "shares"])
    writer.writeheader()
    writer.writerows(data)

print("Dataset generated successfully!")

