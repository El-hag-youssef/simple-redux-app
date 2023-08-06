console.log(Redux);
const ADD = 'ADD';

const SUB = 'SUB'


const reducerCounter = (state = {value:0}, action)=>{

    switch(action.type){
        case ADD:
            return {value:state.value+1};
            break;
        case SUB:
            return {value:state.value-1};
            break;
        default:
            return state;
            break;

    }
}

let muStore = Redux.createStore(reducerCounter);

document.getElementById('inc').addEventListener('click', (event)=>{
    muStore.dispatch({type:ADD});
})

document.getElementById('dec').addEventListener('click', (event)=>{
    muStore.dispatch({type:SUB});
})



muStore.subscribe(()=>{
    document.getElementById('total').innerHTML = muStore.getState().value
})


muStore.dispatch({type:ADD});

muStore.dispatch({type:ADD});
muStore.dispatch({type:ADD});

muStore.dispatch({type:ADD});