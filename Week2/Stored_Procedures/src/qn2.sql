CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
  p_dept_id IN EMPLOYEES.DepartmentID%TYPE,
  p_bonus_percent IN NUMBER
) AS
BEGIN
  UPDATE EMPLOYEES
  SET Salary = Salary + (Salary * p_bonus_percent / 100)
  WHERE DepartmentID = p_dept_id;

  COMMIT;
END;
/
