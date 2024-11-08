import java.util.Scanner;


public class HabitTracker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Welcome to the Habit Tracker!");

        // Ask for user's username and create a new User object
        System.out.print("Enter your username: ");
        String username = scanner.nextLine();
        User user = new User(username);

        boolean running = true;

        // Main loop for the program's menu
        while (running) {
            System.out.println("\nOptions:");
            System.out.println("1. Add a new habit");
            System.out.println("2. Increment streak");
            System.out.println("3. Reset streak");
            System.out.println("4. Show all habits");
            System.out.println("5. Exit");
            System.out.print("Choose an option: ");
            int option = scanner.nextInt();
            scanner.nextLine();

            // User’s choice from the menu
            switch (option) {
                case 1:
                    // Add a new habit
                    System.out.print("Enter habit name: ");
                    String habitName = scanner.nextLine();
                    user.addHabit(habitName);
                    System.out.println("Habit added.");
                    break;
                case 2:
                    // Increment the streak for a specific habit
                    System.out.print("Enter habit name to increment streak: ");
                    habitName = scanner.nextLine();
                    for (Habit habit : user.getHabits()) {
                        if (habit.getName().equalsIgnoreCase(habitName)) {
                            habit.incrementStreak();
                            System.out.println("Streak incremented.");
                            break;
                        }
                    }
                    break;
                case 3:
                    // Reset the streak for a specific habit
                    System.out.print("Enter habit name to reset streak: ");
                    habitName = scanner.nextLine();
                    for (Habit habit : user.getHabits()) {
                        if (habit.getName().equalsIgnoreCase(habitName)) {
                            habit.resetStreak();
                            System.out.println("Streak reset.");
                            break;
                        }
                    }
                    break;
                case 4:
                    // Show all habits and their streaks
                    user.showHabits();
                    break;
                case 5:
                    // Exit the program
                    running = false;
                    System.out.println("Exiting Habit Tracker");
                    break;
                default:
                    System.out.println("Invalid option. Please try again.");
                    break;
            }
        }

        scanner.close();
    }
}
