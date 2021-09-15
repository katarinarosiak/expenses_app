CREATE TABLE expenses (
  id serial PRIMARY KEY,
  amount decimal(6,2) NOT NULL,
  memo text NOT NULL,
  created_on DATE NOT NULL
);

ALTER TABLE expenses 
  ADD CONSTRAINT positive_amount CHECK (amount > 0.00);