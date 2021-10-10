const initialState=0;
const changeTheQty=(state=initialState,action)=>
{
switch(action.type)
{
    case 'PLUS':
        return state+1;
        case 'MINUS':
        if(state > 0)
        {return state-1};
        default:
        return state;
}
}
export default changeTheQty;