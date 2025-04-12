import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Database } from '../types/supabase';

type Page = Database['public']['Tables']['pages']['Row'];

export function usePage(slug: string) {
  const [page, setPage] = useState<Page | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchPage() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('pages')
          .select(`
            *,
            page_sections (
              *
            )
          `)
          .eq('slug', slug)
          .single();

        if (error) throw error;
        setPage(data);
      } catch (e) {
        setError(e instanceof Error ? e : new Error('An error occurred'));
      } finally {
        setLoading(false);
      }
    }

    fetchPage();
  }, [slug]);

  return { page, loading, error };
}