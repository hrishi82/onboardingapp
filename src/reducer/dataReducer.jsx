
export const initialState = {
    data: {
        fullName: '',
        displayName:'',
        workspaceName:'',
        workspaceURL:'',
        planOfUse: {personal: false, team:false}
    },
    processStep:{
        step1:true,
        step2:false,
        step3:false,
        step4:false
    }
}

export const dataReducerFunc = (state, action) =>{
    switch(action.type){
        case "SET_NAME":
            return {...state, data: {...state.data, fullName: action.payload}}
        case "SET_DISPLAY_NAME":
            return {...state, data: {...state.data, displayName: action.payload}}
        case "SET_WORKSPACE_NAME":
            return {...state, data: {...state.data, workspaceName: action.payload}}
        case "SET_WORKSPACE_URL":
            return {...state, data: {...state.data, workspaceURL: action.payload}}
        case "SET_PLAN_OF_USE":
            if(action.payload === 'personal'){
                return {...state, data: {...state.data, planOfUse: {...state.data.planOfUse, personal: true, team:false}}}
            }else if(action.payload === 'team'){
                return {...state, data: {...state.data, planOfUse: {...state.data.planOfUse, personal: false, team:true}}}
            }
            break
        case "SET_FORM_PROGRESS":
            if(action.payload === 'STEP2'){
                return {...state, processStep: {...state.processStep, step2:true}}
            }else if(action.payload === 'STEP3'){
                return {...state, processStep: {...state.processStep, step3:true}}
            }else if(action.payload === 'STEP4'){
                return {...state, processStep: {...state.processStep, step4:true}}
            }
            break

        case "RESET_FORM_DATA":
            return {...state, data: {
                fullName: '',
                displayName:'',
                workspaceName:'',
                workspaceURL:'',
                planOfUse: {personal: false, team:false}
            },
            processStep:{
                step1:true,
                step2:false,
                step3:false,
                step4:false
            }}
            
        default:
            return state
    }
}
