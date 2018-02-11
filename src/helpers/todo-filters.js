import { compose, equals, filter, prop } from 'ramda'

export const checkArchive = value => compose(equals(value), prop('archive'))
export const getNotArchive = filter(checkArchive(false))
export const getArchive = filter(checkArchive(true))
