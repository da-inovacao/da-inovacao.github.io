declare type TEvent = {
  id: string
  title: string
  abstract: string
  presentations: Presentation[]
  created_at: string
  updated_at: string
}

declare type Presentation = {
  id: string
  date: string
  title: string
  presenters: string[]
  local: string
  abstract: string
  banner: string
}

declare type _Notices = {
  id: string
  date: string | Date
  created_at: string
  href: string
  title: string
}

declare type _Certificates = {
  id: string
  created_at: string
  href: string
  title: string
}

type NoticesFirebase = { [key: string | number]: _Notices }

declare module 'react-alert-template-basic';
