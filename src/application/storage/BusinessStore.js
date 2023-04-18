import { observer } from "mobx-react-lite";
import { useObserver } from "mobx-react-lite";
import { useState } from "react";
// const { observable } = mobx;
import { action } from "mobx";

export const store = observer({
  count: [],
  steCount: action(function (object) {
    this.count.push(object);
  }),
});
