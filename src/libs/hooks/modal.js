import create from 'zustand'

/**
 * # useModal
 *
 * the hooks to handle to show
 * and hide the modal globally
 *
 */
const useModal = create((set) => ({
  isShow: false,
  show: () => {
    set({ isShow: true })
  },
  hide: () => {
    set({ isShow: false })
  },
}))

// if you need more modal and manage multiple modal just change
// the current state using a multi property
/**
 * {
  alert: {
    isShow:false,
    show: () => {
      set(state => state.alert.isShow = true)
    },
    hide: () => {
      set(state => state.alert.isShow = false)
    },
  },
  signin: {
    isShow:false,
    show: () => {
      set(state => state.signin.isShow = true)
    },
    hide: () => {
      set(state => state.signin.isShow = false)
    },
  },
}
 */

export default useModal
