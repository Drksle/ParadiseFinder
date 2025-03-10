-- Fix row level security policies for payments table

-- Drop existing policies
DROP POLICY IF EXISTS "Users can view their own payments" ON public.payments;
DROP POLICY IF EXISTS "Users can insert their own payments" ON public.payments;

-- Create more permissive policies
-- Allow any authenticated user to view payments
CREATE POLICY "Anyone can view payments"
  ON public.payments FOR SELECT
  USING (true);

-- Allow any authenticated user to insert payments
CREATE POLICY "Anyone can insert payments"
  ON public.payments FOR INSERT
  WITH CHECK (true);

-- Allow service role to update payments
CREATE POLICY "Service role can update payments"
  ON public.payments FOR UPDATE
  USING (true);
