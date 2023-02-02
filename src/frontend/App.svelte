<script lang="ts">
  import "./css/tailwind.pcss";
  import NotificationObject from "./Components/NotificationObject.svelte";
  import { notifications } from "./Data/Notifications";
  import { onMount } from "svelte";
  import { TitleBar } from "@el3um4s/svelte-titlebar";
  // import notifications, { UpdateNotifications } from "./Data/Notifications";

  // const handleToggleActive = (notificationId) => {
  //   let newNotifications: notification[];

  //   newNotifications = Notifications.entries.map((notification) => {
  //     if (notification.id === notificationId) {
  //       notification.active = !notification.active;
  //     }
  //     return notification;
  //   });

  //   Notifications.entries = [...newNotifications];

  //   console.log(Notifications.entries);
  // };

  // const handleAddNewNotification = () => {
  //   let newNotification = {
  //     title: "Title #4",
  //     body: "Hello I am four!",
  //     useOSNotification: true,
  //     active: false,
  //     intervalInSeconds: 30,
  //     id: 4,
  //   };

  //   Notifications.entries = [...Notifications.entries, newNotification];
  // };

  onMount(() => {
    // notifications.subscribe(notifications);
  });

  const handleDeleteNotification = (notificationId) => {
    const newNotifications = $notifications.filter((notification) => {
      if (notification.id !== notificationId) {
        return notification;
      } else {
        return;
      }
    });

    notifications.set([...newNotifications]);
  };

  // const handleShowNotification = (notificationId) => {};
</script>

<svelte:head>
  <title>NotifyMe</title>
</svelte:head>

<section class="text-center space-y-6">
  <h1>Notify me!</h1>
  <!-- <button on:click={handleAddNewNotification}>Add new notification</button> -->
</section>

{#each $notifications as notification}
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
