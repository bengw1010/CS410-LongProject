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

        while (running) {
            System.out.println("\nOptions:");
            System.out.println("1. Add a new habit");
            System.out.println("2. Increment habit streak");
            System.out.println("3. Delete a habit");
            System.out.println("4. Reset habit streak");
            System.out.println("5. Show all habits");
            System.out.println("6. Exit");
            System.out.print("Choose an option: ");
            int option = scanner.nextInt();
            scanner.nextLine(); // Consume newline

            // Handle the user’s choice from the menu
            switch (option) {
                case 1:
                    System.out.print("Enter habit name: ");
                    String habitName = scanner.nextLine();
                    user.addHabit(habitName);
                    System.out.println("Habit added.");
                    break;
                case 2:
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
                    System.out.print("Enter habit name to delete: ");
                    habitName = scanner.nextLine();
                    if (user.deleteHabit(habitName)) {
                        System.out.println("Habit deleted.");
                    } else {
                        System.out.println("Habit not found.");
                    }
                    break;
                case 4:
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
                case 5:
                    user.showHabits();
                    break;
                case 6:
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