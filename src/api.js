import { sample } from 'lodash/collection'

const TIMEOUT = 1500;
const RequestMock = {
  200: () => new Promise(resolve => {
    return setTimeout(() => resolve('200'), TIMEOUT)
  }),
  400: () => new Promise((resolve, reject) => {
    return setTimeout( () => reject(new Error('Failed To Fix Thing')), TIMEOUT)
  })
}

export const fixThingEndpoint = async () => await sample(RequestMock)()
