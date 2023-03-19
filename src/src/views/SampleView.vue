<script setup lang="ts">
  import { object, string } from 'yup'
  import { useForm, useField, useIsFormValid } from 'vee-validate'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const schema = object({
    aaa: string().required().min(8).label('aaa'),
    email: string().required().email().label('Eメール'),
    password: string().required().min(8).label('パスワード'),
  })

  const { values, errors, meta, validate } = useForm({ validationSchema: schema })

  const { value: aaa, errorMessage: aaaError } = useField('aaa')
  const { value: email, errorMessage: emailError } = useField('email')
  const { value: password, errorMessage: passwordError } = useField('password')

  const isValid = useIsFormValid()

  const clickBtn = () => {
    console.log('meta.value.valid', meta.value.valid)
    console.log('isValid.value', isValid.value)
    validate().then((validate) => console.log('validate.valid', validate.valid))
  }

  const clickBack = () => {
    router.go(-1)
  }
</script>

<template>
  <div :class="$style.sample">
    <h1>This is a sample page</h1>
    <div>
      <label for="aaa">aaa</label>
      <input type="text" id="aaa" name="aaa" v-model="aaa" />
      <div class="errorMessage">{{ aaaError }}</div>
    </div>
    <div>
      <label for="email">email</label>
      <input type="email" id="email" name="email" v-model="email" />
      <div class="errorMessage">{{ emailError }}</div>
    </div>
    <div>
      <label for="password">password</label>
      <input type="password" id="password" name="password" v-model="password" />
      <div class="errorMessage">{{ passwordError }}</div>
    </div>
    <div>
      <h3>values</h3>
      <pre>{{ values }}</pre>
    </div>
    <div>
      <h3>errors</h3>
      <pre>{{ errors }}</pre>
    </div>
    <div>
      <h3>meta</h3>
      <pre>{{ meta }}</pre>
    </div>
    <div :class="$style.btnArea">
      <button type="button" class="btn btn-primary" @click="clickBtn">validate</button>
      <button type="button" class="btn btn-secondary" @click="clickBack">戻る</button>
    </div>
  </div>
</template>

<style lang="scss" module>
  .sample {
    margin: 0 20rem;
  }
  .btnArea {
    margin-top: 2rem;
    display: flex;
    gap: 1rem;
  }
</style>
