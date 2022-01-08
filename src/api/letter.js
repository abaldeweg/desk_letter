import { request } from '~b/api'
import file from '@/api/download'

export const list = function () {
  return request('get', '/api/letter/')
}

export const create = function (data) {
  return request('post', '/api/letter/new', data)
}

export const show = function (id, data) {
  return request('get', '/api/letter/' + id, data)
}

export const update = function (id, data) {
  return request('put', '/api/letter/' + id, data)
}

export const remove = function (id) {
  return request('delete', '/api/letter/' + id)
}

export const download = function (id) {
  return file()
    .get('/api/letter/download/' + id)
    .then((response) => {
      const blob = new Blob([response.data], {
        type: 'application/pdf',
      })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.style.display = 'none'
      a.href = url
      a.download = id + '.pdf'
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
    })
}

export default { list, create, show, update, remove, download }
