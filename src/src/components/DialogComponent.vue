<script setup lang="ts">
  import { onUpdated, ref } from 'vue'

  const okButton = ref<HTMLButtonElement>()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let promiseResolve: any

  const isShow = ref(false)
  const isConfirm = ref(false)
  const massege = ref('')

  /**
   * モーダルを表示する
   *
   * @param {string} messageParam
   * @param {boolean} isConfirmParam
   */
  const show = (messageParam: string, isConfirmParam: boolean) => {
    massege.value = messageParam
    isConfirm.value = isConfirmParam
    isShow.value = true
  }

  /**
   * 確認モーダルを表示する
   *
   * @param {string} message
   */
  const confirm = (message: string): Promise<boolean> => {
    show(message, true)
    return new Promise((resolve) => {
      promiseResolve = resolve
    })
  }

  /**
   * 警告モーダルを表示する
   *
   * @param {string} message
   */
  const alert = (message: string): Promise<boolean> => {
    show(message, false)
    return new Promise((resolve) => {
      promiseResolve = resolve
    })
  }

  /**
   * はいボタン押下時処理
   */
  const clickOk = () => {
    isShow.value = false
    promiseResolve(true)
  }

  /**
   * いいえボタン押下時処理
   */
  const clickNo = () => {
    isShow.value = false
    promiseResolve(false)
  }

  /**
   * ×ボタン押下時処理
   */
  const clickBatsu = () => {
    isShow.value = false
    promiseResolve(false)
  }

  onUpdated(() => {
    const element = okButton.value
    if (element) {
      element.focus()
    }
  })

  defineExpose({
    confirm,
    alert,
  })
</script>

<template>
  <div v-if="isShow">
    <div :class="$style.modal" class="modal show" tabindex="-1">
      <div tabindex="0" class="dummy"></div>
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">ダイアログタイトル</h5>
            <a v-if="isConfirm" @click="clickBatsu" class="close btn">
              <span aria-hidden="true">&times;</span>
            </a>
          </div>
          <div class="modal-body">
            <div :class="$style.massege">{{ massege }}</div>
          </div>
          <div class="modal-footer">
            <button v-if="isConfirm" @click="clickNo" class="btn btn-secondary" tabindex="2">いいえ</button>
            <button ref="okButton" @click="clickOk" class="btn btn-primary" tabindex="1">はい</button>
          </div>
        </div>
      </div>
      <div tabindex="0" class="dummy"></div>
    </div>
    <div class="modal-backdrop fade show"></div>
  </div>
</template>

<style lang="scss" module>
  .modal {
    display: block;

    .message {
      white-space: pre;
    }
  }
</style>
