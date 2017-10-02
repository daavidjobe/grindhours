import _ from 'lodash'

export const padded = val => val < 10 ? _.padStart(val, 1, '0') : val
