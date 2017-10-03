import _ from 'lodash'

export const padded = val => val < 10 ? _.padStart(val, 2, '0') : val
