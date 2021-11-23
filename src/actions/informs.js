import { postInformDayly } from "../helpers/postInformDayly";
import { postInformRange } from "../helpers/postInformRange";
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
export const excelRangeGenerator = (date) => {
    return (dispatch) => {
        dispatch(viewStartLoading());
        postInformRange(date).then(
            (data) => {
                if(data){
                    dispatch(informSaveDataRange(data) )
                    dispatch(informReady2())
                    dispatch(informStateEnable2());
                    dispatch(viewFinishLoading());
                    dispatch(informStateDisable2());
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
export const informStateEnable2 = () => ({
    type: types.informStateEnable2
});

export const informStateDisable2 = () => ({
    type: types.informStateDisable2
})
export const informStateEnable3 = () => ({
    type: types.informStateEnable3
});

export const informStateDisable3 = () => ({
    type: types.informStateDisable3
})
export const informReady = () => ({
    type: types.informReady
});

export const informNotReady = () => ({
    type: types.informNotReady
})

export const informReady2 = () => ({
    type: types.informReady2
});

export const informNotReady2 = () => ({
    type: types.informNotReady2
})

export const informReady3 = () => ({
    type: types.informReady3
});

export const informNotReady3 = () => ({
    type: types.informNotReady3
})
export const informSaveData = (data) => ({
    type: types.informSaveData,
    payload: {data}
    
})
export const informSaveDataRange = (data) => ({
    type: types.informSaveDataRange,
    payload: {data}
    
})