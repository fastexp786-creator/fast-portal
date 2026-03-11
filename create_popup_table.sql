CREATE TABLE IF NOT EXISTS popup_configs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  button_text TEXT NOT NULL,
  button_url TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  rotation_order INTEGER DEFAULT 1,
  display_duration INTEGER DEFAULT 30,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

INSERT INTO popup_configs (title, description, image_url, button_text, button_url, is_active, rotation_order, display_duration) VALUES
  ('SPECIAL RECRUITMENT!', 'Exclusive 2026 Job Openings for Europe & Gulf.', 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=500', 'WhatsApp Us', 'https://wa.me/923100570707', true, 1, 30);
