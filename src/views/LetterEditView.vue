<script setup>
import { useTitle } from '@baldeweg/ui'
import useLetter from '@/composables/useLetter.js'
import { onMounted, toRefs } from 'vue'

useTitle({ title: 'Edit Letter' })

const props = defineProps({
  auth: Object,
  id: String,
})

const { id } = toRefs(props)

const letter = useLetter()

const download = () => {
  return letter.download(id.value)
}

onMounted(() => {
  letter.show(id.value)
})
</script>

<template>
  <BContainer size="m">
    <h1>{{ $t('edit_letter') }}</h1>
  </BContainer>

  <BContainer size="m">
    <BButton design="outline" @click="download">
      {{ $t('download') }}
    </BButton>
  </BContainer>

  <BContainer size="m" v-if="letter.state.letter">
    <BForm @submit.prevent="letter.update()">
      <BFormGroup>
        <BFormItem>
          <BFormLabel for="title">{{ $t('title') }}</BFormLabel>
        </BFormItem>
        <BFormItem>
          <BFormInput v-model="letter.state.letter.title" />
        </BFormItem>
      </BFormGroup>
      <BFormGroup>
        <BFormItem>
          <BFormLabel for="meta">{{ $t('meta') }}</BFormLabel>
        </BFormItem>
        <BFormItem>
          <BFormTextarea v-model="letter.state.letter.meta" rows="10" />
        </BFormItem>
      </BFormGroup>
      <BFormGroup>
        <BFormItem>
          <BFormLabel for="content">{{ $t('content') }}</BFormLabel>
        </BFormItem>
        <BFormItem>
          <BFormTextarea v-model="letter.state.letter.content" rows="15" />
        </BFormItem>
      </BFormGroup>
      <BFormGroup buttons>
        <BFormItem>
          <BButton design="primary">{{ $t('save') }}</BButton>
        </BFormItem>
      </BFormGroup>
    </BForm>
  </BContainer>
</template>
