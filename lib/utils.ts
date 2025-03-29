import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// convert prisma to object
export function convertPrismaToObject<T>(value: T):T{
  return JSON.parse(JSON.stringify(value));
}


//format Number Decimal
export function formatNumberDecimal(value: number,):string {
   const [int,decimal]=value.toString().split(',');
   return decimal ? `${int}.${decimal.padEnd(2,'0')}` : `${int}.00}`
}


//convert Date to ISO string