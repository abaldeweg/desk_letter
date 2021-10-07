import api from '@/api/letter'
import { onMounted, reactive } from '@vue/composition-api'

export default function useLetter() {
  const state = reactive({
    letters: null,
    letter: null,
  })

  const list = () => {
    return api.list().then((response) => {
      state.letters = response.data
    })
  }

  onMounted(list)

  const create = (title) => {
    return api.create({ title }).then(() => {
      list()
    })
  }

  const show = (id) => {
    return api.show(id).then((response) => {
      state.letter = response.data
    })
  }

  const update = () => {
    return api
      .update(state.letter.id, {
        title: state.letter.title,
        meta: state.letter.meta,
        content: state.letter.content,
      })
      .then(() => {
        list()
      })
  }

  const remove = (id) => {
    return api.remove(id).then(() => {
      list()
    })
  }

  const download = (url) => {
    return api.download(url)
  }

  return { state, list, create, show, update, remove, download }
}
