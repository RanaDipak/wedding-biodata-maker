export const FIELD_CATALOG = {
  fullName: { label: 'Full Name', type: 'text' },
  gender: { label: 'Gender', type: 'select', options: ['Male', 'Female', 'Other'] },
  dob: { label: 'Date of Birth', type: 'date' },
  tob: { label: 'Time of Birth', type: 'time' },
  pob: { label: 'Place of Birth', type: 'text' },
  height: { label: 'Height', type: 'text' },
  weight: { label: 'Weight', type: 'text' },
  complexion: { label: 'Complexion', type: 'text' },
  bloodGroup: { label: 'Blood Group', type: 'text' },
  maritalStatus: { label: 'Marital Status', type: 'select', options: ['Single', 'Divorced', 'Widowed'] },
  religion: { label: 'Religion', type: 'text' },
  caste: { label: 'Caste', type: 'text' },
  subCaste: { label: 'Sub-Caste', type: 'text' },
  gotra: { label: 'Gotra', type: 'text' },
  manglik: { label: 'Manglik', type: 'select', options: ['Yes', 'No', 'Partial (Anshik)'] },
  rashi: { label: 'Rashi', type: 'text' },
  nakshatra: { label: 'Nakshatra', type: 'text' },
  education: { label: 'Highest Education', type: 'text' },
  college: { label: 'College Name', type: 'text' },
  occupation: { label: 'Job/Occupation', type: 'text' },
  company: { label: 'Organization Name', type: 'text' },
  income: { label: 'Annual Income', type: 'text' },
  hobbies: { label: 'Hobbies', type: 'textarea' },
}

export const FAMILY_CATALOG = {
  father: { label: "Father's Name", type: 'text' },
  fatherOcc: { label: "Father's Occupation", type: 'text' },
  mother: { label: "Mother's Name", type: 'text' },
  motherOcc: { label: "Mother's Occupation", type: 'text' },
  brothers: { label: 'Brothers', type: 'text' },
  sisters: { label: 'Sisters', type: 'text' },
  marriedBrothers: { label: 'Married Brothers', type: 'text' },
  marriedSisters: { label: 'Married Sisters', type: 'text' },
  nativePlace: { label: 'Native Place', type: 'text' },
}

export const CONTACT_CATALOG = {
  phone: { label: 'Contact Number', type: 'text' },
  altPhone: { label: 'Alternate Number', type: 'text' },
  email: { label: 'Email ID', type: 'email' },
  address: { label: 'Address', type: 'textarea' },
}

export const DEFAULT_PERSONAL_ORDER = [
  'fullName', 'gender', 'dob', 'tob', 'pob', 'height', 'complexion',
  'maritalStatus', 'religion', 'caste', 'gotra', 'manglik', 'rashi',
  'nakshatra', 'education', 'occupation', 'company', 'income', 'hobbies',
]
export const DEFAULT_FAMILY_ORDER = ['father', 'fatherOcc', 'mother', 'motherOcc', 'brothers', 'sisters']
export const DEFAULT_CONTACT_ORDER = ['phone', 'email', 'address']
