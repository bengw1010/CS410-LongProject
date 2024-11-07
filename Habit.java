public class Habit {
    private String name;
    private int streak;

    /**
     * Constructor to create a new Habit with a specified name.
     * The streak is initialized to 0
     * @param name the name of the habit
     */
    public Habit(String name) {
        this.name = name;
        this.streak = 0;
    }

    /**
     * Gets the name of the habit
     * @return the name of the habit
     */
    public String getName() {
        return name;
    }

    /**
     * Gets the current streak for the habit
     * @return the current streak count
     */
    public int getStreak() {
        return streak;
    }

    /**
     * Increments the streak count by one. This can represent a day
     * or instance that the habit was completed
     */
    public void incrementStreak() {
        streak++;
    }

    /**
     * Resets the streak count to zero. This can be used if the habit
     * is missed or the user wants to restart tracking
     */
    public void resetStreak() {
        streak = 0;
    }

    /**
     * Returns a string representation of the habit for display
     * @return a string showing the habit name and current streak
     */
    @Override
    public String toString() {
        return "Habit: " + name + ", Streak: " + streak;
    }
}
