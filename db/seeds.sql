INSERT INTO department (department_name)
VALUES
  ('HR'),
  ('Sales Rep'),
  ('Implemenation');

  INSERT INTO role (title, salary, department_id)
VALUES
  ('Payroll', '71000.00', 1),
  ('Senior', '85000.00', 2),
  ('IM', '62000.00', 3);

INSERT INTO employee
  (first_name, last_name, role_id, manager_id)
VALUES
  ('Hermonie', 'Granger', 1, Null),
  ('Ron', 'Weasley', 1, 1),
  ('Draco', 'Malfoy', 1, Null),
  ('Harry', 'Potter', 2, 2)
