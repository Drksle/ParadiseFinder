-- Create payments table
CREATE TABLE IF NOT EXISTS payments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  property_id TEXT,
  amount DECIMAL(10,2) NOT NULL,
  payment_method TEXT NOT NULL,
  status TEXT NOT NULL,
  transaction_id TEXT,
  out_trade_no TEXT,
  phone_number TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create bookings table for property rentals/purchases
CREATE TABLE IF NOT EXISTS bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  property_id TEXT NOT NULL,
  user_id UUID REFERENCES users(id),
  payment_id TEXT,
  amount DECIMAL(10,2) NOT NULL,
  status TEXT NOT NULL,
  booking_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable realtime for these tables
alter publication supabase_realtime add table payments;
alter publication supabase_realtime add table bookings;
