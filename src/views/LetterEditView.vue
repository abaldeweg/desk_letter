<template>
  <article>
    <b-container size="m">
      <h1>{{ $t('edit_letter') }}</h1>
    </b-container>

    <b-container size="m" v-if="letter.state.letter">
      <b-form @submit.prevent="letter.update()">
        <b-form-group>
          <b-form-item>
            <b-form-label for="title">{{ $t('title') }}</b-form-label>
          </b-form-item>
          <b-form-item>
            <b-form-input v-model="letter.state.letter.title" />
          </b-form-item>
        </b-form-group>
        <b-form-group>
          <b-form-item>
            <b-form-label for="meta">{{ $t('meta') }}</b-form-label>
          </b-form-item>
          <b-form-item>
            <b-form-textarea v-model="letter.state.letter.meta" rows="10" />
          </b-form-item>
        </b-form-group>
        <b-form-group>
          <b-form-item>
            <b-form-label for="content">{{ $t('content') }}</b-form-label>
          </b-form-item>
          <b-form-item>
            <b-form-textarea v-model="letter.state.letter.content" rows="15" />
          </b-form-item>
        </b-form-group>
        <b-form-group buttons>
          <b-form-item>
            <b-button design="primary">{{ $t('save') }}</b-button>
          </b-form-item>
        </b-form-group>
      </b-form>
    </b-container>
  </article>
</template>

<script>
import useLetter from '@/composables/useLetter'
import { onMounted, toRefs } from '@vue/composition-api'

export default {
  name: 'letter-edit-view',
  head: {
    title: 'Edit Letter',
  },
  props: {
    id: Number,
  },
  setup(props) {
    const { id } = toRefs(props)

    const letter = useLetter()

    onMounted(() => {
      letter.show(id.value)
    })

    return { letter }
  },
}
</script>
