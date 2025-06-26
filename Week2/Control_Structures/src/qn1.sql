BEGIN
  FOR cust IN (SELECT CustomerID FROM CUSTOMERS WHERE Age > 60) LOOP
    UPDATE LOANS
    SET InterestRate = InterestRate - 1
    WHERE CustomerID = cust.CustomerID;
  END LOOP;
  COMMIT;
END;
