import json
import random

# Define the path to your JSON file
file_path = '/Users/saugatsingh/Documents/Projects/ChargeRadar/frontend/chargeradar/src/TemporaryData/Data.json'  # Adjust the path as necessary

status_arr = ['fast_charging', 'commercial_charging', 'level2', 'unavailable']
amenities_arr = ['wifi','parking','food','washroom','disability','shopping']
payment_arr = ['esewa', 'khalti', 'fonepay', 'alipay']
speed = [20, 40, 60, 100]

def update_json_file(path):
    try:
        # Read the JSON file
        with open(path, 'r', encoding='utf-8') as file:
            data = json.load(file)

        # Modify the JSON data
        for item in data:
            # Generate a random number of unique payment methods
            random_limit = random.randint(1, len(amenities_arr))
            # Use random.sample to ensure unique values
            supported_payments = random.sample(amenities_arr, random_limit)
            item['reviews'] = []

        # Save the updated data back to the file
        with open(path, 'w', encoding='utf-8') as file:
            json.dump(data, file, ensure_ascii=False, indent=2)

        print('File successfully updated!')

    except Exception as e:
        print(f'Error: {e}')

if __name__ == '__main__':
    update_json_file(file_path)
