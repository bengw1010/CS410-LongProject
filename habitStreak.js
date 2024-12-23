habitStreak.js

// Function to calculate the EXP based on streak
const calculateXPWithStreak = (streak) => {
    const baseEXP = 50;
    
    // The EXP doubles up to 5 times
    const maxStreak = 5;
    const streakMultiplier = Math.min(streak, maxStreak);  
  
    // Calculate EXP based on streak
    return baseEXP * Math.pow(2, streakMultiplier - 1); 
  };
  
  // Function to update streak and calculate EXP based on whether the habit was done today
  const updateHabitStreak = (habitCompletedToday, currentStreak) => {
    if (habitCompletedToday) {
      // If habit was completed today, increment the streak
      currentStreak++;
    } else {
      // If habit was not completed, reset the streak
      currentStreak = 1;
    }
  
    // Calculate the EXP for the current streak
    const earnedEXP = calculateXPWithStreak(currentStreak);
  
    // Return the updated streak and earned EXP
    return { currentStreak, earnedXP: earnedEXP };
  };
  
  module.exports = { updateHabitStreak };
