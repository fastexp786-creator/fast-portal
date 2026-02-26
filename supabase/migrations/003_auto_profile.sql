-- Auto-create user profile on signup
create or replace function public.handle_new_auth_user()
returns trigger
language plpgsql
security definer
as $$
begin
  insert into public.user_profiles (auth_user_id, email, full_name, role, is_approved)
  values (new.id, new.email, null, 'seeker', false)
  on conflict (email) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_auth_user();

