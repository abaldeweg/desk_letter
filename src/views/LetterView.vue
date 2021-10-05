<template>
  <article>
    <b-container size="m">
      <h1>{{ $t('letters') }}</h1>
    </b-container>

    <b-container size="m">
      <b-form @submit.prevent="create()">
        <b-form-group>
          <b-form-item>
            <b-form-label for="title" hidden>{{ $t('title') }}</b-form-label>
          </b-form-item>
          <b-form-item>
            <b-form-input
              :placeholder="$t('add_new_letter')"
              v-model="state.title"
            />
          </b-form-item>
        </b-form-group>
      </b-form>
    </b-container>

    <b-container size="m">
      <b-list
        v-for="item in letter.state.letters"
        :key="item.id"
        :route="{ name: 'letter.edit', params: { id: item.id } }"
        divider
      >
        <template #title>{{ item.title }}</template>
        <template #options>
          <b-dropdown>
            <template #selector>
              <b-icon type="meatballs" />
            </template>
            <b-dropdown-item
              icon="pencil"
              @click.prevent="
                $router.push({ name: 'letter.edit', params: { id: item.id } })
              "
            >
              {{ $t('edit') }}
            </b-dropdown-item>
            <b-dropdown-item icon="bin" @click.prevent="letter.remove(item.id)">
              {{ $t('remove') }}
            </b-dropdown-item>
          </b-dropdown>
        </template>
      </b-list>
    </b-container>
  </article>
</template>

<script>
import useLetter from '@/composables/useLetter'
import { reactive } from '@vue/composition-api'

export default {
  name: 'letter-view',
  head: {
    title: 'Letter',
  },
  setup() {
    const state = reactive({
      title: '',
    })

    const create = () => {
      letter.create(state.title).then(() => {
        state.title = ''
      })
    }

    const letter = useLetter()

    return { state, letter, create }
  },
}
</script>
