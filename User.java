import java.util.ArrayList;
import java.util.List;

/**
 * The User class represents a user who can track multiple habits.
 * It stores a list of habits and provides methods to manage them.
 */
public class User {
    private String username;    // The username of the user
    private List<Habit> habits; // List of habits the user is tracking

    /**
     * Constructor to create a new user with a given username.
     * Initializes an empty list of habits.
     *
     * @param username the name of the user
     */
    public User(String username) {
        this.username = username;
        this.habits = new ArrayList<>();
    }

    /**
     * Gets the username of the user.
     * @return the username
     */
    public String getUsername() {
        return username;
    }

    /**
     * Gets the list of habits the user is tracking.
     * @return the list of habits
     */
    public List<Habit> getHabits() {
        return habits;
    }

    /**
     * Adds a new habit to the user's list of habits.
     * @param habitName the name of the new habit
     */
    public void addHabit(String habitName) {
        habits.add(new Habit(habitName));
    }

    /**
     * Displays all habits of the user. If there are no habits,
     * it informs the user that no habits are being tracked.
     */
    public void showHabits() {
        if (habits.isEmpty()) {
            System.out.println("No habits.");
        } else {
            for (Habit habit : habits) {
                System.out.println(habit);
            }
        }
    }
}
