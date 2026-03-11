-- Create ticker_messages table
CREATE TABLE IF NOT EXISTS ticker_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  message TEXT NOT NULL,
  priority INTEGER NOT NULL DEFAULT 1,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_ticker_messages_priority ON ticker_messages(priority);
CREATE INDEX IF NOT EXISTS idx_ticker_messages_active ON ticker_messages(is_active);

-- Insert sample data
INSERT INTO ticker_messages (message, priority, is_active) VALUES
  ('Welcome to Fast Portal - Your Gateway to Global Opportunities!', 1, true),
  ('New job opportunities available in UAE, Saudi Arabia, and UK!', 2, true),
  ('Apply now for premium visa services and travel assistance!', 3, true);

-- Enable Row Level Security
ALTER TABLE ticker_messages ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public read access" ON ticker_messages FOR SELECT USING (true);

-- Create policy for admin full access
CREATE POLICY "Admin full access" ON ticker_messages FOR ALL USING (true);

-- Create trigger for updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_ticker_messages_updated_at 
  BEFORE UPDATE ON ticker_messages 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();
