<script setup>
import { useTitle } from '@baldeweg/ui'
import { onMounted, toRefs } from 'vue'
import { useLetter } from '@/composables/useLetter.js'

useTitle({ title: 'Edit Letter' })

const props = defineProps({
  auth: Object,
  id: String,
})

const { id } = toRefs(props)

const { letter, show, update, download } = useLetter()

onMounted(() => {
  show(id.value)
})
</script>

<template>
  <BContainer size="m">
    <h1>{{ $t('edit_letter') }}</h1>
  </BContainer>

  <BContainer size="m">
    <BButton design="outline" @click="download(id)">
      {{ $t('download') }}
    </BButton>
  </BContainer>

  <BContainer size="m" v-if="letter">
    <BForm @submit.prevent>
      <BFormGroup>
        <BFormItem>
          <BFormLabel for="title">{{ $t('title') }}</BFormLabel>
        </BFormItem>
        <BFormItem>
          <BFormInput v-model="letter.title" />
        </BFormItem>
      </BFormGroup>
      <BFormGroup>
        <BFormItem>
          <BFormLabel for="meta">{{ $t('meta') }}</BFormLabel>
        </BFormItem>
        <BFormItem>
          <BFormTextarea v-model="letter.meta" rows="10" />
        </BFormItem>
      </BFormGroup>
      <BFormGroup>
        <BFormItem>
          <BFormLabel for="content">{{ $t('content') }}</BFormLabel>
        </BFormItem>
        <BFormItem>
          <BFormTextarea v-model="letter.content" rows="15" />
        </BFormItem>
      </BFormGroup>
      <BFormGroup>
        <BFormItem>
          <BButton design="primary_wide" @click.prevent="update">{{
            $t('save')
          }}</BButton>
        </BFormItem>
      </BFormGroup>
    </BForm>
  </BContainer>
</template>
