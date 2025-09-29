import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

if (!supabaseUrl || !supabaseAnonKey) {
  // Not throwing to allow the app to run locally without env while we still have fallback data
  console.warn('Supabase env not found. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to enable backend features.');
}

export const supabase = createClient(supabaseUrl ?? 'https://wmifvxlabiitjnfhuxrf.supabase.co', supabaseAnonKey ?? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtaWZ2eGxhYmlpdGpuZmh1eHJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkxNDc1MzcsImV4cCI6MjA3NDcyMzUzN30.sCCdO_Utxu31PBSwzGyOx2EIvlLEy0skUgLnQBHY-7A');
