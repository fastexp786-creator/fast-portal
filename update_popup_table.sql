-- Add missing columns to existing popup_configs table
ALTER TABLE popup_configs 
ADD COLUMN IF NOT EXISTS rotation_order INTEGER DEFAULT 1,
ADD COLUMN IF NOT EXISTS display_duration INTEGER DEFAULT 30;

-- Update existing records to have default values
UPDATE popup_configs 
SET rotation_order = 1, display_duration = 30 
WHERE rotation_order IS NULL OR display_duration IS NULL;

-- Insert sample popup if table is empty
INSERT INTO popup_configs (title, description, image_url, button_text, button_url, is_active, rotation_order, display_duration) 
SELECT 'SPECIAL RECRUITMENT!', 'Exclusive 2026 Job Openings for Europe & Gulf.', 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=500', 'WhatsApp Us', 'https://wa.me/923100570707', true, 1, 30
WHERE NOT EXISTS (SELECT 1 FROM popup_configs LIMIT 1);
