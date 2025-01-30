import { ref } from 'vue'

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

const weddingDate = new Date('february 22, 2025 19:00:00')

setInterval(() => {
  const currentDate = new Date()
  const finalDate = weddingDate.valueOf() - currentDate.valueOf()

  seconds.value = Math.floor(finalDate / 1000)
  minutes.value = Math.floor(seconds.value / 60)
  hours.value = Math.floor(minutes.value / 60)
  days.value = Math.floor(hours.value / 24)

  seconds.value = seconds.value % 60
  minutes.value = minutes.value % 60
  hours.value = hours.value % 24

  if (currentDate.getTime() >= weddingDate.getTime()) {
    seconds.value = 0
    minutes.value = 0
    hours.value = 0
    days.value = 0
  }
}, 1000)

export { days, hours, minutes, seconds }
