import { ajax_json, ajax } from '@/utils/http'
export const login = data => {
  return ajax_json({
    url: '/api/portal_user/noauth/login',
    data,
    method: 'post'
  })
}
