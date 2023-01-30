function ShowNotification(title = "Title", body = "Body") {
    const NOTIFICATION_TITLE = title;
    const NOTIFICATION_BODY = body;
    const CLICK_MESSAGE = "Notification clicked!";

    new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY }).onclick =
        () => (document.getElementById("output").innerText = CLICK_MESSAGE);
}

export default ShowNotification;