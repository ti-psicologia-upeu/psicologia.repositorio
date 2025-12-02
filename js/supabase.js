// Cargar la librería de supabase desde el CDN
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

// URL DE TU PROYECTO
const SUPABASE_URL = "https://kxscsimitzauzpgddoqq.supabase.co";

// LEGACY ANON KEY (NO LA PUBLISHABLE)
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4c2NzaW1pdHphdXpwZ2Rkb3FxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ1OTUzMDksImV4cCI6MjA4MDE3MTMwOX0.zWm6WOujN3OsMGLbuu7DYqoN8O2cs0Ej5rVQeAMVay4";

// Crear cliente global
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
