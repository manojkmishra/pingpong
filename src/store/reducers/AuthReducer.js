const AuthReducer = (state={},actions)=>{
    console.log('AuthReducers.js-previous state=', state)
    console.log('AuthReducers.js-action=', actions)
    switch ( actions.type){
        case 'value': return state;
        default: return state;
    }
};

export default AuthReducer;