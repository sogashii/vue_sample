<script setup lang="ts">
  import { ErrorMessage, Field, Form } from 'vee-validate'
  import { object, string } from 'yup'
  import { User } from '@/types/User'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const store = useStore()

  const user: User = { id: '', password: '' }
  store.dispatch('users/setUser', {})

  const schema = object({
    id: string().required().label('id'),
    password: string().required().min(8).label('password'),
  })

  const clickLogin = () => {
    store.dispatch('users/setUser', user)
    router.push({ path: '/menu' })
  }
</script>

<template>
  <div :class="$style.login">
    <h1>Login</h1>
    <Form v-slot="{ meta }" :validation-schema="schema">
      <div :class="$style.item">
        <label :class="$style.label" for="id">id</label>
        <Field type="text" id="id" name="id" v-model="user.id" />
      </div>
      <div class="errorMessage"><ErrorMessage name="id" /></div>
      <div :class="$style.item">
        <label :class="$style.label" for="password">password</label>
        <Field type="password" id="password" name="password" v-model="user.password" />
      </div>
      <div class="errorMessage"><ErrorMessage name="password" /></div>
      <button type="button" :disabled="!meta.valid" class="btn btn-primary" @click="clickLogin">ログイン</button>
    </Form>
  </div>
</template>

<style lang="scss" module>
  .login {
    text-align: center;
  }

  .item {
    margin: 0.5rem 0;
  }

  .label {
    width: 10rem;
  }
</style>
