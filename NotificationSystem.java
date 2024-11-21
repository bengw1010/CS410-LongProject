import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Scanner;

public class NotificationSystem {  
    private List<Notification> notis;  
    public NotificationSystem() {  
        notis = new ArrayList<>();  
    }
	public void addNoti(String message, Date date) {  
        Notification noti = new Notification(message, date);  
        notis.add(noti);
    }
	public void viewNotis() {
        for (Notification noti : notis) {
            System.out.println(reminder.getMessage() + " - Date:" + reminder.getDate());
        }
    }
	public void deleteNoti(int index) {
        if (index >= 0 && index < notis.size()) {
            notis.remove(index);
        } else {
            System.out.println("Error: invalid number of Notis");
        }
    }
	public static void main(String[] args) {
		program.viewNotis();
		break;
	}
}