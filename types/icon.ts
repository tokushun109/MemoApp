export const IconEnum = {
  Plus: 'plus',
  Check: 'check',
  Delete: 'delete',
  Pencil: 'pencil'
} as const

export type IconType = (typeof IconEnum)[keyof typeof IconEnum]
