const AuthReducer = (state={},actions)=>{
    console.log('AuthReducers.js-previous state=', state)
    console.log('AuthReducers.js-action=', actions)
    switch ( actions.type){
        case 'SET_LOGIN': { console.log('AuthReducer--case:SET_LOGIN');
            return {...state, loggedIn:true, user:actions.payload};  }
        default: { console.log('AuthReducer--case:default'); ;return state;  }
    }
   
};

export default AuthReducer;