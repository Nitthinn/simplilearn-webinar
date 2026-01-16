'use server';

import { submitToAirtable } from '@/lib/airtable';

export async function submitRegistration(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const company = formData.get('company') as string;
  const role = formData.get('role') as string;

  if (!name || !email) {
    return { success: false, message: 'Name and email are required' };
  }

  const data = {
    name,
    email,
    company,
    role,
    timestamp: new Date().toISOString(),
    attendees: [],
  };

  const result = await submitToAirtable(data);
  
  if (result.success) {
    return { success: true, message: 'Registration successful!' };
  } else {
    return { success: false, message: 'Registration failed. Please try again.' };
  }
}
