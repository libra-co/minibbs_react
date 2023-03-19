import { ModelNameSpaceEnum } from "@/interface";
import { UserProfileResult } from "@/pages/Login/const";
import { userProfile } from "@/utils/service/user";
import { AnyAction, DvaModel } from "umi";

export interface CommonModelState {
    user: UserProfileResult
}

const commonModel: DvaModel<CommonModelState> = {
    namespace: ModelNameSpaceEnum.common,
    state: <CommonModelState>{
        user: {}
    },
    effects: {
        *fetchLogin({ payload }, { call, put }) {
            try {
                const { result, status } = yield call(userProfile)
                if (status === 200) {
                    yield put({
                        type: 'changeUser',
                        payload: result
                    })
                }
            } catch (error) {
                console.log('error', error)
            }
        }
    },
    reducers: {
        changeUser(state: CommonModelState, action: AnyAction) {
            return {
                ...state,
                user: {
                    ...action.payload,
                },
            }
        },
    }
}

export default commonModel