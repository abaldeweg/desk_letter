<script setup>
import { useTitle } from '@baldeweg/ui'
import AuthPassword from '@/components/auth/Password.vue'
import ProfileLocale from '@/components/profile/Locale.vue'
import ProfileTheme from '@/components/profile/Theme.vue'

defineProps({
  auth: Object,
})

useTitle({ title: 'Profile' })
</script>

<template>
  <BContainer size="m">
    <h1>{{ $t('profile') }}</h1>
  </BContainer>

  <BContainer size="m">
    <AuthPassword />
  </BContainer>

  <BContainer size="m">
    <ProfileLocale />
  </BContainer>

  <BContainer size="m">
    <ProfileTheme />
  </BContainer>
</template>
