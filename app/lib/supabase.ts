// lib/supabase.ts

import { createClient, SupabaseClient } from '@supabase/supabase-js';
import "server-only";

// Variáveis de ambiente
const supabaseUrl: string = process.env.SUPABASE_URL!;
const supabaseAnonKey: string = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables.');
}

// Inicializa o cliente Supabase com a chave de função de serviço para operações do lado do servidor
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
  },
});

// Exportações de atalho para banco de dados e armazenamento
export const db = supabase;
export const storage = supabase.storage;
