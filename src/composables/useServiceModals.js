import { ref } from "vue"

const modals = ref({
  consultancy: false,
  training: false,
  support: false,
})

export function useServiceModals() {
  const openModal = (modalName) => {
    modals.value[modalName] = true
  }

  const closeModal = (modalName) => {
    modals.value[modalName] = false
  }

  const closeAllModals = () => {
    Object.keys(modals.value).forEach((key) => {
      modals.value[key] = false
    })
  }

  return {
    modals,
    openModal,
    closeModal,
    closeAllModals,
  }
}
