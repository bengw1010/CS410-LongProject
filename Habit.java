public class Habit {
    private String name;
    private int streak;

    /**
     * Constructor to create a new Habit with a specified name
     * The streak is initialized to 0
     */
    public Habit(String name) {
        this.name = name;
        this.streak = 0;
    }

    //return the name of the habit
    public String getName() {
        return name;
    }


    //return the current streak count
    public int getStreak() {
        return streak;
    }


    //Increments the streak count by one

    public void incrementStreak() {
        streak++;
    }

    /**
     * Resets the streak count to zero
     */
    public void resetStreak() {
        streak = 0;
    }

    /**
     * Returns a string representation of the habit for display
     * return a string showing the habit name and current streak
     */
    @Override
    public String toString() {
        return "Habit: " + name + ", Streak: " + streak;
    }
}
