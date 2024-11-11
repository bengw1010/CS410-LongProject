import java.util.ArrayList;
import java.util.List;

// User Track multiple habits and stores a list of habits and provides methods to manage them
public class User {
    private String username;
    private List<Habit> habits;

    /**
     * Constructor to create a new user with a given username
     * Initializes an empty list of habits
     */
    public User(String username) {
        this.username = username;
        this.habits = new ArrayList<>();
    }

    // Gets the username of the user and return the username
    public String getUsername() {
        return username;
    }

    // Gets the list of habits the user is tracking and return the list of habits
    public List<Habit> getHabits() {
        return habits;
    }

    // Adds a new habit to the user's list of habits
    public void addHabit(String habitName) {
        habits.add(new Habit(habitName));
    }
    // Delete habit that is already in the list of habits
    public boolean deleteHabit(String habitName) {
        for (Habit habit : habits) {
            if (habit.getName().equalsIgnoreCase(habitName)) {
                habits.remove(habit);
                return true;
            }
        }
        return false;
    }

    //Displays all habits of the user if no habits print no habit
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
