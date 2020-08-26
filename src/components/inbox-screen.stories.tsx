import React from "react";
import { Provider } from "react-redux";
import store from "../lib/redux";

import { PureInboxScreen } from "./inbox-screen.cmp";

export default {
    component: PureInboxScreen,
    title: "InboxScreen",
    decorators: [(story: any) => <Provider store={store}>{story()}</Provider>],
};


export const Default = () => <PureInboxScreen />;

export const Error = () => <PureInboxScreen error="Something" />;
