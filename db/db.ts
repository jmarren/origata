
/**
 * Centralized Supabase client configuration
 */

import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase_url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabase_key = process.env.SUPABASE_SECRET_KEY!;

// if (!supabase_url || !supabase_key) {
//     throw new Error('Missing Supabase environment variables: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SECRET_KEY are required');
// }
//
// export const database_client = createClient(supabase_url, supabase_key, {
//     // db: {
//     //     schema: 'oryo'
//     // }
// });

export const db = createClient("http://127.0.0.1:54321", "sb_secret_N7UND0UgjKTVK-Uodkm0Hg_xSvEMPvz")


// // Creates a client connected to the 'oryo' schema
// export const createOryoClient = () => createClient(supabase_url, supabase_key, {
//     db: {
//         schema: 'oryo'
//     }
// });
//
// // Creates a public client (default schema)
// export const createPublicClient = () => createClient(supabase_url, supabase_key);
//
//
//
