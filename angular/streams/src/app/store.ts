import { ADD_COMMENT } from "./app-state-actions.service";

export interface IComment {
    name: string;
    text: string;
}

export interface IAppState {
    comments: IComment[];
}

export const initialAppState: IAppState = { comments: [] };

export function reducer(state: IAppState = initialAppState, action: { type: string }): IAppState {
    switch (action.type) {
        case ADD_COMMENT: {
            let comment = (action as any as { comment: IComment }).comment;
            return { ...state, comments: [...state.comments, comment] }
        }
        default:
            return state;
    }
}