import { onMounted, reactive } from '@vue/composition-api'
import { request } from '@/api'
import file from '@/api/download'

export default function useLetter() {
  const state = reactive({
    letters: null,
    letter: null,
  })

  const list = () => {
    return request('get', '/api/letter/').then((response) => {
      state.letters = response.data
    })
  }

  onMounted(list)

  const create = (title) => {
    return request('post', '/api/letter/new', { title }).then(() => {
      list()
    })
  }

  const show = (id) => {
    return request('get', '/api/letter/' + id).then((response) => {
      state.letter = response.data
    })
  }

  const update = () => {
    return request('put', '/api/letter/' + state.letter.id, {
      title: state.letter.title,
      meta: state.letter.meta,
      content: state.letter.content,
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
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.style.display = 'none'
        a.href = url
        a.download = url + '.pdf'
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
      })
  }

  return { state, list, create, show, update, remove, download }
}
