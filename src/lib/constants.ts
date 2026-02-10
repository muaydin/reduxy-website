export const EXAMPLE_TEXTS = [
  {
    label: 'Personal info',
    text: 'Ahmed Hassan (ahmed@company.com, SSN: 123-45-6789) and Priya Sharma (priya@company.com, UK NHS: 485 777 3456) attended the meeting.',
  },
  {
    label: 'Medical record',
    text: "Dr. Hiroshi Tanaka (Medical License: MD123456789) works at Tokyo General Hospital. Contact him at hiroshi.tanaka@hospital.jp or +81-90-1234-5678. His IBAN is JP60 MUFG 0001 2345 6789 0123.",
  },
  {
    label: 'Financial data',
    text: "Maria Gonzalez transferred $5,000 from IBAN ES91 2100 0418 4502 0005 1332 to her Bitcoin wallet 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa. Contact at maria.gonzalez@empresa.com or +34-612-345-678.",
  },
]

export const ENTITY_TYPE_COLORS: Record<string, string> = {
  FIRST_NAME: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  LAST_NAME: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  PERSON: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
  EMAIL_ADDRESS: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
  EMAIL: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
  PHONE: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
  PHONE_NUMBER: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
  CREDIT_CARD: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
  SSN: 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300',
  US_SSN: 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300',
  DATE: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
  DATE_TIME: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
  DATE_OF_BIRTH: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
  ORG: 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300',
  ORGANIZATION: 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300',
  ADDRESS: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300',
  LOCATION: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300',
  FACE: 'bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300',
  NAME: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
  DRIVER_LICENSE: 'bg-stone-100 text-stone-800 dark:bg-stone-900/30 dark:text-stone-300',
  US_DRIVER_LICENSE: 'bg-stone-100 text-stone-800 dark:bg-stone-900/30 dark:text-stone-300',
  NATIONAL_ID: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
  PASSPORT: 'bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300',
  US_PASSPORT: 'bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300',
  POSTAL_CODE: 'bg-lime-100 text-lime-800 dark:bg-lime-900/30 dark:text-lime-300',
  CRYPTO: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
  IBAN_CODE: 'bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-300',
  IBAN: 'bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-300',
  MEDICAL_LICENSE: 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300',
  UK_NHS: 'bg-lime-100 text-lime-800 dark:bg-lime-900/30 dark:text-lime-300',
  IP_ADDRESS: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300',
  MONEY: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300',
  FINANCIAL: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300',
}

export function getEntityColor(type: string): string {
  return ENTITY_TYPE_COLORS[type] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300'
}

export const ACCEPTED_IMAGE_TYPES = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/bmp', 'image/webp', 'image/tiff']
export const MAX_FILE_SIZE = 25 * 1024 * 1024 // 25MB
export const MAX_TEXT_LENGTH = 500
