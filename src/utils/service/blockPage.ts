import { ZoneListResult } from "@/pages/BlockPage/const";
import request, { IResponse } from "../request";

export function zoneList(params: {} = {}): Promise<IResponse<ZoneListResult[]>> {
    return request('/zone/list', {
        method: 'GET',
        params: {}
    })
}