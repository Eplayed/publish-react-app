import { ajax_json, ajax } from '@/utils/http'

// 工单列表--新增-工单类型
export const queryOrderTypeByCurrentOrg = data => {
  return ajax_json({
    url: '/auth/portal/dict/queryOrderTypeByOrgId',
    method: 'post',
    data: data
  })
}

export const createWorkOrderOutside = data => {
  return ajax_json({
    url: '/api/business/IthdworkOrder/createWorkOrderOutside',
    method: 'post',
    data: data
  })
}

export const getJson = data => {
  return ajax_json({
    url: '/api/u/report/apply',
    method: 'post'
  })
}
