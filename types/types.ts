import { UserRole } from "@prisma/client"

export type ServicesProps = {
    title: string,
    image: string,
    slug: string 
  }

  export type RegisterInputProps = {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    password: string,
    role: UserRole
  }

  export type LoginInputProps = {
    email: string,
    password: string
  }

