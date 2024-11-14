import java.util.Scanner;

public class Account {
    private String id; // user id
    private String pw; // user password

    public Account(String id, String pw) {
        this.id = id;
        this.pw = pw;
    }

    public static Account signup() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter UserID: ");
        String id = scanner.nextLine(); // read input id
        System.out.print("Enter Password: ");
        String pw = scanner.nextLine(); // read input password
        scanner.close();

        Account new_user = new Account(id, pw); // sign up new account using input id and password
        return new_user;
    }

    public String getid() {
        return id; // return the user id
    }

    public String getpw() {
        return pw; // return the user password
    }

    public static void main(String[] args) {
        Account user = signup();

        System.out.print("user id: " + user.getid() + "\n");
        System.out.print("password: " + user.getpw() + "\n");
    }
}