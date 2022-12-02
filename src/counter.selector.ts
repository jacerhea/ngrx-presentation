import { createSelector } from "@ngrx/store";
import { State } from "./counter.state";

export const getState = (state: { rootState: State }) => state.rootState;

export const selectCount = createSelector(getState,
    state => state.count);
