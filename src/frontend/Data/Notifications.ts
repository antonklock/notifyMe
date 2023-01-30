export class Notifications {
    public static notifications: notification[] = [
        {
            title: "Notification #1",
            body: "This is the subtitle of the first notification.",
            useOSNotification: false,
            active: true,
            intervalInSeconds: 10,
            id: 1,
        },
        {
            title: "Notification #2",
            body: "This is the subtitle of the SECOND notification.",
            useOSNotification: true,
            active: true,
            intervalInSeconds: 60,
            id: 2,
        },
        {
            title: "Notification #3",
            body: "This is the subtitle of the THIRD notification.",
            useOSNotification: false,
            active: true,
            intervalInSeconds: 20,
            id: 3,
        },
    ]
}

// let notifications = [
//     {
//         title: "Notification #1",
//         body: "This is the subtitle of the first notification.",
//         useOSNotification: false,
//         active: false,
//         intervalInSeconds: 10,
//         id: 1,
//     },
//     {
//         title: "Notification #2",
//         body: "This is the subtitle of the SECOND notification.",
//         useOSNotification: true,
//         active: false,
//         intervalInSeconds: 60,
//         id: 2,
//     },
//     {
//         title: "Notification #3",
//         body: "This is the subtitle of the THIRD notification.",
//         useOSNotification: false,
//         active: false,
//         intervalInSeconds: 20,
//         id: 3,
//     },
// ];

// const UpdateNotifications = (newNotifications) => {
//     notifications = newNotifications;
// }

// export default notifications;
// export { UpdateNotifications };