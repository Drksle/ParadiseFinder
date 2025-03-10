-- Create properties table
CREATE TABLE IF NOT EXISTS properties (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  location TEXT NOT NULL,
  address TEXT,
  bedrooms INTEGER NOT NULL,
  bathrooms INTEGER NOT NULL,
  area DECIMAL(10, 2) NOT NULL,
  property_type TEXT NOT NULL,
  images JSONB,
  amenities JSONB,
  rating DECIMAL(3, 1),
  available BOOLEAN DEFAULT true,
  available_from DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  agent_id UUID REFERENCES auth.users(id)
);

-- Create favorites table for users to save properties
CREATE TABLE IF NOT EXISTS favorites (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  property_id UUID REFERENCES properties(id) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, property_id)
);

-- Create viewings table for scheduling property viewings
CREATE TABLE IF NOT EXISTS viewings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  property_id UUID REFERENCES properties(id) NOT NULL,
  viewing_date TIMESTAMP WITH TIME ZONE NOT NULL,
  status TEXT DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create applications table for rental applications
CREATE TABLE IF NOT EXISTS applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  property_id UUID REFERENCES properties(id) NOT NULL,
  status TEXT DEFAULT 'pending',
  application_data JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable realtime for all tables
alter publication supabase_realtime add table properties;
alter publication supabase_realtime add table favorites;
alter publication supabase_realtime add table viewings;
alter publication supabase_realtime add table applications;