/// <reference types="svelte" />

type notification = {
    title: string;
    body: string;
    useOSNotification: boolean;
    active: boolean;
    intervalInSeconds: number;
    id: number;
}