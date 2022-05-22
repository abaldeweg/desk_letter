import { onMounted, ref } from 'vue'
import { request } from '@/api'
import file from '@/api/download.js'

export function useLetter() {
  const letters = ref(null)
  const letter = ref(null)
  const title = ref('')

  const list = () => {
    return request('get', '/api/letter/').then((response) => {
      letters.value = response.data
    })
  }

  onMounted(list)

  const create = () => {
    return request('post', '/api/letter/new', { title: title.value }).then(
      () => {
        title.value = ''
        list()
      }
    )
  }

  const show = (id) => {
    return request('get', '/api/letter/' + id).then((response) => {
      letter.value = response.data
    })
  }

  const update = () => {
    return request('put', '/api/letter/' + letter.value.id, {
      title: letter.value.title,
      meta: letter.value.meta,
      content: letter.value.content,
    }).then(() => {
      list()
    })
  }

  const remove = (id) => {
    return request('delete', '/api/letter/' + id).then(() => {
      list()
    })
  }

  const download = (url) => {
    return file()
      .get('/api/letter/download/' + url)
      .then((response) => {
        const blob = new Blob([response.data], {
          type: 'application/pdf',
        })
        const data = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.style.display = 'none'
        a.href = data
        a.download = data + '.pdf'
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(data)
      })
  }

  return { letters, letter, title, show, create, update, remove, download }
}
