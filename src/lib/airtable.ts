import Airtable from 'airtable';

// Initialize Airtable
const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID as string);

export interface RegistrationData {
  name: string;
  email: string;
  company?: string;
  role?: string;
  attendees: string;
  timestamp: Date;
}

export async function submitToAirtable(data: RegistrationData) {
  try {
    const records = await base('Registrations').create([
      {
        fields: {
          Name: data.name,
          Email: data.email,
          Company: data.company || '',
          Role: data.role || '',
          Attendees: data.attendees,
          Timestamp: data.timestamp.toISOString(),
          Status: 'Registered',
          Source: 'Webinar Landing Page'
        },
      },
    ]);

    return {
      success: true,
      recordId: records[0].id,
      message: 'Registration successful!'
    };
  } catch (error) {
    console.error('Airtable error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      message: 'Registration failed. Please try again.'
    };
  }
}