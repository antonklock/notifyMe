<script lang="ts">
  import "./css/tailwind.pcss";
  import NotificationObject from "./Components/NotificationObject.svelte";
  import { Notifications } from "./Data/Notifications";
  // import notifications, { UpdateNotifications } from "./Data/Notifications";

  const handleToggleActive = (notificationId) => {
    let newNotifications: notification[];
    
    newNotifications = Notifications.notifications.map((notification) => {
      if (notification.id === notificationId) {
        notification.active = !notification.active;
      }
    });

    Notifications.notifications = [...newNotifications];

    console.log(Notifications.notifications);

    

  //   Notifications.notifications = Notifications.notifications.map(
  //     (notification: { id: number; active: boolean }) => {
  //       if (notification.id == notificationId) {
  //         notification.active = !notification.active;
  //         // console.log(Notifications.notifications);
  //       }
  //     }
  //   );
  // };

  const handleAddNewNotification = () => {
    let newNotification = {
      title: "Title #4",
      body: "Hello I am four!",
      useOSNotification: true,
      active: false,
      intervalInSeconds: 30,
      id: 4,
    };

    Notifications.notifications = [
      ...Notifications.notifications,
      newNotification,
    ];
  };

  const handleDeleteNotification = (notificationId) => {
    Notifications.notifications = Notifications.notifications.filter(
      (notification) => {
        if (notificationId == notification.id) {
          return false;
        } else {
          return true;
        }
      }
    );
  };

  const handleShowNotification = (notificationId) => {};
</script>

<svelte:head>
  <title>NotifyMe</title>
</svelte:head>

<section class="text-center space-y-6">
  <h1>Notify me!</h1>
  <button on:click={handleAddNewNotification}>Add new notification</button>
</section>

{#each Notifications.notifications as notification}
  <NotificationObject
    title={notification.title}
    body={notification.body}
    intervalInSeconds={notification.intervalInSeconds}
    isActive={notification.active}
    on:toggleActive={() => handleToggleActive(notification.id)}
    on:deleteNotification={() => handleDeleteNotification(notification.id)}
  />
{/each}

<style>
</style>
