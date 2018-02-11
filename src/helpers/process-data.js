import { compose, curry, equals, map, prop, reject } from 'ramda'

export const assignItemBy = curry((key, newItem, oldItem) =>
    oldItem[key] === newItem[key] ? { ...oldItem, ...newItem } : oldItem)

export const assignItemById = assignItemBy('id')

export const updateItemInList = (item, list) => map(assignItemById(item), list)

export const removeItemFromList = ({ id }, items) => reject(compose(equals(id), prop('id')), items)
