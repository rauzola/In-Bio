// lib/auth.ts
import { createClient, SupabaseClient, Session, AuthChangeEvent } from '@supabase/supabase-js';
import "server-only";

// 1. Inicialização do cliente Supabase 
//    - Aqui usamos a chave ANON (pública) para operações de login/logout no frontend.
//    - Caso queira operações administrativas, use a SERVICE_ROLE_KEY apenas no backend!
const supabaseUrl    = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnon   = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnon) {
  throw new Error('🚨 Defina NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY no .env');
}

export const supabase: SupabaseClient = createClient(
  supabaseUrl, 
  supabaseAnon,
  {
    auth: {
      persistSession: false,    // Não persiste sessões no localStorage
      autoRefreshToken: false,  // Não renova token automaticamente
      detectSessionInUrl: false // Evita interceptar tokens na URL
    }
  }
);
// :contentReference[oaicite:0]{index=0}

// 2. Funções de autenticação

/**
 * Faz login com e-mail e senha.
 */
export async function signInWithEmail(email: string, password: string) {
  return supabase.auth.signInWithPassword({ email, password });
}
// :contentReference[oaicite:1]{index=1} :contentReference[oaicite:2]{index=2}

/**
 * Envia magic link para e-mail.
 */
export async function signInWithMagicLink(email: string) {
  return supabase.auth.signInWithOtp({ email });
}
// :contentReference[oaicite:3]{index=3}

/**
 * Faz logout do usuário atual.
 */
export async function signOut() {
  return supabase.auth.signOut();
}
// :contentReference[oaicite:4]{index=4}

/**
 * Observa mudanças de estado de autenticação 
 * (SIGNED_IN, SIGNED_OUT, PASSWORD_RECOVERY, etc.).
 */
export function onAuthStateChange(
  callback: (event: AuthChangeEvent, session: Session | null) => void
) {
  return supabase.auth.onAuthStateChange(callback);
}
// :contentReference[oaicite:5]{index=5}
