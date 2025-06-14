import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://telidragtsanvulczfcw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlbGlkcmFndHNhbnZ1bGN6ZmN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0OTk5MjMsImV4cCI6MjA2NTA3NTkyM30.vXpvS__5h1bX4fWHcJ89YRmiudhr9jq9aVfsM-HfDns";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
