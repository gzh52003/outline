import { observable } from 'mobx'

const data = {
  counter: 0,
  counterStore() {
    this.counter++
  },
  increment() {
    this.counter++
  },
  decrement() {
    this.counter--
  },
  incrementAsync() {
    setTimeout(() => {
      this.counter++
    }, 1000)
  }
}

const counterStore = observable(data);

console.log('counterStore=',counterStore)

export default counterStore


