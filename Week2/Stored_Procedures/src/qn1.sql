CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
  UPDATE ACCOUNTS
  SET Balance = Balance + (Balance * 0.01)
  WHERE AccountType = 'SAVINGS';

  COMMIT;
END;
/
