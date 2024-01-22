class Contact {
  fullName: string
  email: string
  phone: string
  id: number
  friend?: boolean = false

  constructor(
    fullName: string,
    email: string,
    phone: string,
    id: number,
    friend: boolean = false
  ) {
    this.fullName = fullName
    this.email = email
    this.phone = phone
    this.id = id
    this.friend = friend
  }
}

export default Contact
