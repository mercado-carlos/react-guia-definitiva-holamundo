const initialFetching = { loading: 'idle', error: null };
export const makeFetchingReducer =
    (actions: any) =>
    (state: any = initialFetching, action: any) => {
        switch (action.type) {
            case actions[0]: {
                return { ...state, loading: 'pending' };
            }
            case actions[1]: {
                return { ...state, loading: 'succeded' };
            }
            case actions[2]: {
                return { error: action.error, loading: 'rejected' };
            }
            default: {
                return state;
            }
        }
    };

export const makeSetReducer =
    (actions: any) =>
    (state: string = 'all', action: any) => {
        switch (action.type) {
            case actions[0]:
                return action.payload;
            default:
                return state;
        }
    };
