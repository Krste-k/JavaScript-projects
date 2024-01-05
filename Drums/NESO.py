total_sum = 0

# Iterate through numbers from 4 to 1000
for num in range(4, 1001):
    # Check if the number is divisible by 4 or 6
    if num % 4 == 0 or num % 6 == 0:
        # Add the number to the sum
        total_sum += num

# Print the sum of the divisible numbers
print("The sum of numbers divisible by 4 or 6 from 4 to 1000 is:", total_sum)