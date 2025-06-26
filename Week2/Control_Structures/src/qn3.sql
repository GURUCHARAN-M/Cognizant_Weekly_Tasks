DECLARE
  v_name CUSTOMERS.FullName%TYPE;
BEGIN
  FOR loan_rec IN (
    SELECT LoanID, CustomerID, DueDate 
    FROM LOANS 
    WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30
  ) LOOP
    -- Get customer name
    SELECT FullName INTO v_name 
    FROM CUSTOMERS 
    WHERE CustomerID = loan_rec.CustomerID;

    -- Print reminder
    DBMS_OUTPUT.PUT_LINE('Reminder: Dear ' || v_name || 
                         ', your loan (ID: ' || loan_rec.LoanID || 
                         ') is due on ' || TO_CHAR(loan_rec.DueDate, 'DD-MON-YYYY') || '.');
  END LOOP;
END;
