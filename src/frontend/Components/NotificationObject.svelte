<script lang="ts">
    import ShowNotification from "../Utils/ShowNotification";

    export let title: string;
    export let body: string;
    // export let useOSNotification = true;
    export let isActive: boolean;
    export let intervalInSeconds: number;

    import { createEventDispatcher, onMount } from "svelte";
    const dispatch = createEventDispatcher();

    const toggleActive = () => {
        dispatch("toggleActive");
    };

    const deleteNotification = () => {
        dispatch("deleteNotification");
    };

    let count = 0;

    onMount(() => {
        setInterval(() => {
            count++;
        }, 1000);

        if (isActive) {
            if (count % (intervalInSeconds + 1) === intervalInSeconds) {
                console.log("SHOW NOTIFICATION");
                ShowNotification(title, body);
            }
        }
    });
</script>

<div>
    <h1>{title}</h1>
    <p>{body}</p>

    <button
        class="button"
        on:click={() => {
            ShowNotification(title, body);
        }}>Show notification</button
    >
    <!-- <p>Use OS Notification</p>
    <input type="checkbox" checked={useOSNotification} /> -->
    <p>Active = {isActive}</p>
    <input type="checkbox" checked={isActive} on:change={toggleActive} />
    <p>Interval: {intervalInSeconds} seconds.</p>
    <p>
        Count {count} % {intervalInSeconds} = {count % (intervalInSeconds + 1)}
    </p>
    <button on:click={deleteNotification}>Delete notification</button>
</div>

<style>
    div {
        margin: 50px;
        background-color: lightblue;
    }
    button:focus {
        outline: 1px dotted;
        outline: 5px auto -webkit-focus-ring-color;
    }
    input:focus {
        outline: 1px dotted;
        outline: 5px auto -webkit-focus-ring-color;
    }
</style>
