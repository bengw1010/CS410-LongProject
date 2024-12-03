class NotificationSystem {
    constructor() {
        this.notis = [];
    }

    // use this when adding habit, or for daily notification
    addNoti(message, date) {
        const noti = new Notification(message, date);
        this.notis.push(noti);
    }

    // use this when logining to the habit tracker
    viewNotis() {
        this.notis.forEach(noti => {
            console.log(noti.getMessage() + " - Date:" + noti.getDate());
        });
    }

    // use this when finish each day task
    deleteNoti(index) {
        if (index >= 0 && index < this.notis.length) {
            this.notis.splice(index, 1);
        } else {
            console.log("Error: invalid number of Notis");
        }
    }
}

const program = new NotificationSystem();
program.viewNotis();

