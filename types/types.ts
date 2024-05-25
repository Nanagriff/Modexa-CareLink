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
    password: string,
    fullName: string,
  }

export type BioDataFormProps = {
  firstName: string;
  lastName: string;
  middleName?: string,
  dob: string,
  gender: string;
  profilePicture?: string;
  medicalLicense: string;
  bio: string;
  medicalLicenseExpiry: string;
}
