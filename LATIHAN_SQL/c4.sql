SELECT * 
FROM employees
WHERE (hire_date BETWEEN '2019-01-01' AND '2020-12-31') 
   OR salary >= 65000
ORDER BY salary DESC;
