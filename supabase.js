import 'react-native-url-polyfill/auto';
import 'react-native-get-random-values';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://zgltesoetvtfmrphmhdb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnbHRlc29ldHZ0Zm1ycGhtaGRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0MjA5MjUsImV4cCI6MjA3Nzk5NjkyNX0.IQUQ4iwwZBaICTrk25WRd0dAWTJNpD6NT1kvH5BK7gE';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);