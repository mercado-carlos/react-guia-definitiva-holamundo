export const mat = (entity: any) => [
    `${entity}/pending`,
    `${entity}/fulfilled`,
    `${entity}/rejected`,
];

export const mac =
    (type: any, ...argNames: any[]) =>
    (...args: any[]) => {
        const action = { type };
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index];
        });

        return action;
    };

export const asyncMac = (asyncTypes: any[]) => [
    mac(asyncTypes[0]),
    mac(asyncTypes[1], 'payload'),
    mac(asyncTypes[2], 'error'),
];

export const reduceReducers =
    (...reducers: any[]) =>
    (state: any, action: any) =>
        reducers.reduce((acc, el) => el(acc, action), state);

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

export const makeCrudReducer =
    (actions: any) =>
    (state: any = [], action: any) => {
        switch (action.type) {
            case actions[0]: {
                return state.entities.concat({ ...action.payload });
            }
            case actions[1]: {
                const newEntities = state.map((entity: any) => {
                    if (entity.id === action.payload.id) {
                        return { ...entity, completed: !entity.completed };
                    }

                    return entity;
                });

                return newEntities;
            }
            default:
                return state;
        }
    };
