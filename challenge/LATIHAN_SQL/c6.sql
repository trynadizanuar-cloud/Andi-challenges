SELECT
    e.first_name,
    e.last_name,
    e.salary,
    d.department_name
FROM employees e
JOIN departments d
    ON e.department_id = d.id;
