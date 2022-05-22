<script setup>
import { useTitle } from '@baldeweg/ui'
import useLetter from '@/composables/useLetter.js'
import { reactive } from 'vue'

defineProps({
  auth: Object,
})

useTitle({ title: 'Letter' })

const state = reactive({
  title: '',
})

const create = () => {
  letter.create(state.title).then(() => {
    state.title = ''
  })
}

const letter = useLetter()
</script>

<template>
  <BContainer size="m">
    <h1>{{ $t('letters') }}</h1>
  </BContainer>

  <BContainer size="m">
    <BForm @submit.prevent="create">
      <BFormGroup>
        <BFormItem>
          <BFormLabel for="title" hidden>{{ $t('title') }}</BFormLabel>
        </BFormItem>
        <BFormItem>
          <BFormInput
            :placeholder="$t('add_new_letter')"
            v-model="state.title"
          />
        </BFormItem>
      </BFormGroup>
    </BForm>
  </BContainer>

  <BContainer size="m">
    <BList
      v-for="item in letter.state.letters"
      :key="item.id"
      :route="{ name: 'letter.edit', params: { id: item.id } }"
      divider
    >
      <template #title>{{ item.title }}</template>
      <template #options>
        <BDropdown>
          <template #selector>
            <BIcon type="meatballs" />
          </template>
          <BDropdownItem
            icon="pencil"
            @click.prevent="
              $router.push({ name: 'letter.edit', params: { id: item.id } })
            "
          >
            {{ $t('edit') }}
          </BDropdownItem>
          <BDropdownItem icon="bin" @click.prevent="letter.remove(item.id)">
            {{ $t('remove') }}
          </BDropdownItem>
        </BDropdown>
      </template>
    </BList>
  </BContainer>
</template>
