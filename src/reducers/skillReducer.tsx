import { requestStates } from "../constants"

export const actionTypes = {
    initial: "INITIAL",
    fetch: "FETCHING",
    success: "FETCH_SUCCESS",
    error: "FETCH_ERROR"
}

export const initialState = {
    languageList: [],
    requestState: requestStates.idle
}

export function skillReducer(state: any, action: any) {
    switch(action.type) {
        case actionTypes.initial: {
            return {
                languageList: [],
                requestState: requestStates.idle
            }
        }
        case actionTypes.fetch: {
            return {
                ...state,
                requestStates:requestStates.loading
            }
        }
        case actionTypes.success: {
            return {
                languageList: action.payload.languageList,
                requestState: requestStates.success
            }
        }
        case actionTypes.error: {
            return {
                languageList: [],
                requestState: requestStates.error
            }
        }
        default: {
            throw new Error()
        }
    }
}