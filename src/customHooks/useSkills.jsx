import { useEffect, useReducer } from "react"
import axios from "axios"
import { skillReducer, initialState, actionTypes } from "../reducers/skillReducer"

export function useSkills() {
    const [state, dispatch] = useReducer(skillReducer, initialState)

    useEffect(() => {
        dispatch({type: actionTypes.fetch})
        axios.get("https://api.github.com/users/shu-amane/repos")
        .then((response) => {
            console.log(response)
            const languageList = response.data.map(res => res.language)
            const countedLanguageList = generateLanguageCountObj(languageList)
            dispatch({ type:actionTypes.success, payload: { languageList: countedLanguageList }})
        })
        .catch((error) => {
            console.log(error)
            dispatch({ type: actionTypes.error})
        })
    }, [])

    function generateLanguageCountObj(allLanguageList) {
        const notNullLanguageList = allLanguageList.filter(language => language != null)
        const uniqueLanguageList = [...new Set(notNullLanguageList)]
        console.log(uniqueLanguageList)
        return uniqueLanguageList.map(item => {
            return {
                language: item,
                count: allLanguageList.filter(language => language === item).length
            }
        })
    }

    function converseCountToPercentage (count) {
        if (count > 10) {
            return 100
        }
        return count * 10
    }

    function sortedLanguageList() {
        return state.languageList.sort((firstLang, nextLang) => nextLang.count - firstLang.count)
    }

    return [sortedLanguageList, state.requestState, converseCountToPercentage ]
}
