insert into storage.buckets (id, name, public) values ('banners_bucket', 'banners_bucket', false) on conflict (id) do nothing;
insert into storage.buckets (id, name, public) values ('cv_bucket', 'cv_bucket', false) on conflict (id) do nothing;

create policy "banners insert" on storage.objects for insert to authenticated with check (bucket_id = 'banners_bucket');
create policy "banners select" on storage.objects for select to authenticated using (bucket_id = 'banners_bucket');
create policy "banners delete" on storage.objects for delete to authenticated using (bucket_id = 'banners_bucket');

create policy "cv insert" on storage.objects for insert to authenticated with check (bucket_id = 'cv_bucket');
create policy "cv select" on storage.objects for select to authenticated using (bucket_id = 'cv_bucket');
create policy "cv delete" on storage.objects for delete to authenticated using (bucket_id = 'cv_bucket');
