declare type TEvent = {
  text: string
  title: string
  date: string
  banner: string
  presentations: Presentation[]
}

declare type Presentation = {
  date: string
  title: string
  presenters: string[]
  local: string
  abstract: string
  banner: string
}