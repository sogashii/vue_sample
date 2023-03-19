<script setup lang="ts">
  import { ErrorMessage, Field, Form, useField, useForm } from 'vee-validate'
  import { ref, watchEffect } from 'vue'
  import { object, string } from 'yup'
  import DialogComponent from '@/components/DialogComponent.vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const store = useStore()
  const dialog = ref<InstanceType<typeof DialogComponent>>()

  store.dispatch('examples/fetchGithubUser')

  watchEffect(() => {
    console.log(store.getters['examples/getGithubUser'])
    console.log(store.getters['examples/isGithubUserFetching'])
  })

  const schema = object({
    aaa: string().required().min(8).label('aaa'),
    bbb: string().required().min(8).label('bbb'),
  })

  const { errors } = useForm({
    validationSchema: schema,
  })

  const aaaFieldContext = useField('aaa')

  const bbbFieldContext = useField('bbb', undefined, {
    validateOnValueUpdate: true,
    validateOnMount: true,
  })

  const formSchema = object({
    ccc: string().required().min(8).label('ccc'),
    ddd: string().required().min(8).label('ddd'),
  })

  const clickBack = () => {
    router.go(-1)
  }

  const clickDialogBtn = () => {
    dialog.value?.confirm('存在しない番号です。\nこの番号でよろしいですか？').then((ret: boolean) => {
      console.log(ret ? 'はい' : 'いいえ')
    })
  }
</script>

<template>
  <div :class="$style.validationSample">
    <DialogComponent ref="dialog" />
    <h1>This is a validation-sample page</h1>

    <h2>Formを使わずバリデーション</h2>
    <ol>
      <li type="disc">blurでバリデーション</li>
      <div>
        <label for="aaa" :class="$style.aaa">aaa</label>
        <input type="text" id="aaa" :value="aaaFieldContext.value.value" @blur="aaaFieldContext.handleChange" />
        <div class="errorMessage">{{ errors.aaa }}</div>
      </div>
      <li type="disc">入力中にバリデーション</li>
      <div>
        <label for="bbb">bbb</label>
        <input type="text" id="bbb" v-model="bbbFieldContext.value.value" />
        <div>
          <div class="errorMessage">{{ errors.bbb }}</div>
        </div>
      </div>
    </ol>

    <h2>Formを使ってバリデーション</h2>
    <Form v-slot="{ values, errors, meta }" :validation-schema="formSchema">
      <div>
        <label for="ccc">ccc</label>
        <Field type="text" id="ccc" name="ccc" />
        <div class="errorMessage"><ErrorMessage name="ccc" /></div>
      </div>
      <div>
        <label for="ddd">ddd</label>
        <Field type="text" id="ddd" name="ddd" />
        <div class="errorMessage">{{ errors.ddd }}</div>
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
        <h3>meta.initialValues</h3>
        <pre>{{ meta.initialValues }}</pre>
      </div>
      <div>
        <h3>meta.touched</h3>
        <span>{{ meta.touched }}</span>
      </div>
      <div>
        <h3>meta.valid</h3>
        <span>{{ meta.valid }}</span>
      </div>
      <div>
        <h3>meta.dirty</h3>
        <span>{{ meta.dirty }}</span>
      </div>
    </Form>

    <div :class="$style.btnArea">
      <button type="button" class="btn btn-primary" @click="clickDialogBtn">ダイアログ</button>
      <button type="button" class="btn btn-secondary" @click="clickBack">戻る</button>
    </div>
  </div>
</template>

<style lang="scss" module>
  .validationSample {
    margin: 0 20rem;
  }

  .btnArea {
    margin-top: 2rem;
    display: flex;
    gap: 1rem;
  }
</style>
