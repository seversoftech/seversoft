create extension if not exists pgcrypto;

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text not null,
  category text not null,
  content jsonb not null default '[]'::jsonb,
  callout text not null default '',
  status text not null default 'draft' check (status in ('draft', 'review', 'published')),
  read_time text not null default '4 min read',
  featured boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists posts_status_published_at_idx on public.posts (status, published_at desc);
create index if not exists posts_featured_idx on public.posts (featured);

create table if not exists public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  action text not null,
  detail text not null,
  created_at timestamptz not null default now()
);

alter table public.posts enable row level security;
alter table public.audit_logs enable row level security;

drop policy if exists "Published posts are publicly readable" on public.posts;
create policy "Published posts are publicly readable"
on public.posts
for select
using (status = 'published');

-- Admin writes are performed from Next.js server actions with SUPABASE_SERVICE_ROLE_KEY.
-- The service role key bypasses RLS and must never be exposed to the browser.

insert into public.posts (slug, title, excerpt, category, content, callout, status, read_time, featured, published_at)
values
(
  'reliable-payment-systems-at-scale',
  'What makes a payment system reliable at scale?',
  'Reliability is not only uptime. It comes from careful ledger design, observability, reconciliation, and predictable failure handling across every transaction path.',
  'Fintech Infrastructure',
  '[{"heading":"Reliability starts with the ledger","paragraphs":["A payment system can have a beautiful interface and fast APIs, but the ledger is where trust is either protected or lost. Every credit, debit, reversal, and fee needs a clear record that can be audited without guesswork.","At scale, teams need to design for idempotency, duplicate prevention, and clear transaction states from the beginning. These are not polish items. They are the core mechanics that keep balances accurate when traffic spikes or partner systems respond slowly."]}]'::jsonb,
  'Reliable systems are designed before traffic arrives.',
  'published',
  '1 min read',
  true,
  now()
)
on conflict (slug) do nothing;
