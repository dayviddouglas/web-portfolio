import { createClient} from "@supabase/supabase-js";


export const supabase = createClient("https://axjpjxwcjcpsnwlmeneo.supabase.co", 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4anBqeHdjamNwc253bG1lbmVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4MzA1MzIsImV4cCI6MjAwNjQwNjUzMn0.A_Zf5jFrDKsm_8c-phHfOpXDPOLQZL3zqhuGWLKwubY")