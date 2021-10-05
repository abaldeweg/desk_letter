import request from '~b/api'

export const list = function () {
  return request().get('/api/letter/')
}

export const create = function (data) {
  return request().post('/api/letter/new', data)
}

export const show = function (id, data) {
  return request().get('/api/letter/' + id, data)
}

export const update = function (id, data) {
  return request().put('/api/letter/' + id, data)
}

export const remove = function (id) {
  return request().delete('/api/letter/' + id)
}

export default { list, create, show, update, remove }
