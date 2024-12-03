habitStreak.js

// Function to calculate the XP based on streak
const calculateXPWithStreak = (streak) => {
    const baseEXP = 50;
    
    // The EXP doubles up to 5 times
    const maxStreak = 5;
    const streakMultiplier = Math.min(streak, maxStreak);  
  
    // Calculate XP based on streak
    return baseEXP * Math.pow(2, streakMultiplier - 1); 
  };
  
  // Function to update streak and calculate XP based on whether the habit was done today
  const updateHabitStreak = (habitCompletedToday, currentStreak) => {
    if (habitCompletedToday) {
      // If habit was completed today, increment the streak
      currentStreak++;
    } else {
      // If habit was not completed, reset the streak
      currentStreak = 1;
    }
  
    // Calculate the XP for the current streak
    const earnedEXP = calculateXPWithStreak(currentStreak);
  
    // Return the updated streak and earned XP
    return { currentStreak, earnedXP: earnedEXP };
  };
  
  module.exports = { updateHabitStreak };