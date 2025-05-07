// lib/supabase.ts

import { createClient, SupabaseClient } from '@supabase/supabase-js';
import "server-only";

// 1. Carrega as variáveis de ambiente
const supabaseUrl     = process.env.SUPABASE_URL!;
const serviceRoleKey  = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !serviceRoleKey) {
  throw new Error('🚨 As variáveis de ambiente SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY devem estar definidas.');
}

// 2. Cria o cliente para uso server-side
export const supabase: SupabaseClient = createClient(
  supabaseUrl,
  serviceRoleKey,
  {
    auth: {
      persistSession: false,      // Sem sessão persistente
      autoRefreshToken: false,    // Não renova token automaticamente
      detectSessionInUrl: false,  // Evita interceptar tokens na URL
    },
  }
);
