
"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

const getSnapshot = () =>
    new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

const getServerSnapshot = () => "";

const CurrentDate = () => {
    const date = useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot
    );

    return <span>{date}</span>;
};

export default CurrentDate;
