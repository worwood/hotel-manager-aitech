import { postInformDayly } from "../helpers/postInformDayly";
import { types } from "../types/types";
import { viewFinishLoading, viewStartLoading } from "./view";


export const excelDaylyGenerator = (date) => {
    return (dispatch) => {
        dispatch(viewStartLoading());
        postInformDayly(date).then(
            (data) => {
                if(data){
                    dispatch( informSaveData(data) )
                    dispatch(informReady())
                    dispatch(informStateEnable());
                    dispatch(viewFinishLoading());
                    dispatch(informStateDisable());
                }
            }
        ).catch();
    }
}

export const informStateEnable = () => ({
    type: types.informStateEnable
});

export const informStateDisable = () => ({
    type: types.informStateDisable
})
export const informReady = () => ({
    type: types.informReady
});

export const informNotReady = () => ({
    type: types.informNotReady
})
export const informSaveData = (data) => ({
    type: types.informSaveData,
    payload: {data}
    
})