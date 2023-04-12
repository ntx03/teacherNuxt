<script setup>
const showModal = useShowModal();

const closeModal = () => {
  showModal.value = false;
};
</script>

<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

    <div class="fixed inset-0 bg-gray-500 bg-opacity-30 transition-opacity"></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">

        <div
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-20 sm:text-center">
                <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">Сообщение отправлено успешно!
                </h3>
                <div class="mt-2">
                  <p class="text-m text-gray-500"></p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-2 py-3  sm:px-48">
            <button @click="closeModal" type="button"
              class="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


