import { createGlobalState } from 'react-hooks-global-state';

  

const {setGlobalState, useGlobalState} = createGlobalState({
    
    translation: true,
    // true - ru
    // false - eng
});


export { useGlobalState,setGlobalState};