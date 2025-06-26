CREATE OR REPLACE PROCEDURE TransferFunds(
  p_from_account IN ACCOUNTS.AccountID%TYPE,
  p_to_account   IN ACCOUNTS.AccountID%TYPE,
  p_amount       IN NUMBER
) AS
  v_balance ACCOUNTS.Balance%TYPE;
BEGIN
  -- Check balance in source account
  SELECT Balance INTO v_balance
  FROM ACCOUNTS
  WHERE AccountID = p_from_account
  FOR UPDATE;

  IF v_balance < p_amount THEN
    RAISE_APPLICATION_ERROR(-20001, 'Insufficient funds in source account.');
  END IF;

  -- Deduct from source
  UPDATE ACCOUNTS
  SET Balance = Balance - p_amount
  WHERE AccountID = p_from_account;

  -- Add to destination
  UPDATE ACCOUNTS
  SET Balance = Balance + p_amount
  WHERE AccountID = p_to_account;

  COMMIT;
END;
/
