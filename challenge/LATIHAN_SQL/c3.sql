SELECT first_name, last_name, email, hire_date
FROM employees
WHERE first_name LIKE '%o%'   
  AND email LIKE '%.com'      
ORDER BY hire_date DESC;      

