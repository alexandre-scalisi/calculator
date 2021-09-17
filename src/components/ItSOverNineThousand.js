import classes from './amazingNumberButton.module.css';
import { useContext } from 'react';
import { ScreenContext } from '../contexts/ScreenContext';
import { ActionContext } from '../contexts/ActionContext';

const ItSOverNineThousand = () => {
    const {actionState, setActionState} = useContext(ActionContext);

    const {
        resultScreenState,
        setResultScreenState,
        operationScreenState,
        setOperationScreenState
    } = useContext(ScreenContext);

    if(actionState === 'over9000') {
        setOperationScreenState(process.env.REACT_APP_OPERATION_SCREEN_STATE);
        setResultScreenState('It\'s over 9000 !!!');
    }
    return (
        <></>
    )
}

export default ItSOverNineThousand