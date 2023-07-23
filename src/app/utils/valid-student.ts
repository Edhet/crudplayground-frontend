import Student from "../types/student";

export default function validStudent(student: Student): boolean {
  return Boolean(validString(student.name)
    && validString(student.email)
    && validString(student.course)
    && validGender(student.gender)
    && validDate(student.birthDate))
}

function validDate(date?: Date): boolean {
  return Boolean(date)
}

function validGender(gender?: string): boolean {
  return gender == "MALE" || gender == "FEMALE"
}

function validString(s: string | null | undefined): boolean {
  return Boolean(s && s.length > 0)
}
