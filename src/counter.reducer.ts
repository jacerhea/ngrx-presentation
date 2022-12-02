import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';
import { initialState } from './counter.state';

export const counterReducer = createReducer(
    initialState,
    on(increment, (state, props) => ({ ...state, count: state.count + props.amount })),
    on(decrement, (state, props) => ({ ...state, count: state.count - props.amount })),
    on(reset, (state) => ({ ...state, count: 0 }))
);