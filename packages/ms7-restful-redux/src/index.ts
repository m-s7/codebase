import ApiService from './lib/api-service'

const ApiServiceInstance = new ApiService()

export { AxiosError } from 'axios'
export { restReducer, restSlice } from './lib/rest-reducer'
export { apiSubject } from './lib/api-subject'
export { apiLogger } from './lib/api-logger'

export type { Subscription } from 'rxjs'
export type { AxiosResponse } from 'axios'

export default ApiServiceInstance