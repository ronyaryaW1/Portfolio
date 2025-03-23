
import { cookies } from 'next/headers'
import { Locale, defaultLocale } from '@/i18n/config'


const COOKIE_NAMES = 'NEXT_LOCALE';
 
export async function getUserLocal() { 
    return (await cookies()).get(COOKIE_NAMES)?.value || defaultLocale;
}

export async function setUserLocal(locale: Locale) { 
    (await cookies()).set(COOKIE_NAMES, locale);
}