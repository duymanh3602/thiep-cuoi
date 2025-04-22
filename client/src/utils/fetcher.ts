import api from './api'

export const handleGetData = async () => {
  return api.get('/api/list')
}

export const handleAddComment = async (data) => {
  return api.post('/api/create', data)
}
