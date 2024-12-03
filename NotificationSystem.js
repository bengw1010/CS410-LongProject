class Notification {
    constructor(message, date) {
        this.message = message;
        this.date = date;
    }

    getMessage() {
        return this.message;
    }

    getDate() {
        return this.date;
    }
}

class NotificationSystem {
    constructor() {
        this.notis = [];
    }

    addNoti(message, date) {
        const noti = new Notification(message, date);
        this.notis.push(noti);
    }

    viewNotis() {
        this.notis.forEach(noti => {
            console.log(noti.getMessage() + " - Date:" + noti.getDate());
        });
    }

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

