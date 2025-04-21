import api from './api'

export const handleGetData = async () => {
  return api.get('/api/list')
}
