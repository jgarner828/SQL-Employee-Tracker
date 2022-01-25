INSERT INTO department (name)
VALUES  ('HR'),
        ('FRONT OFFICE'),
        ('ENGINEERING'),
        ('FINANCE'),
        ('SALES');
       


INSERT INTO role (title, salary, department_id)
VALUES  ("HR Director", 100000, 1),
        ("HR employee", 40000, 1),

        ("Front Office Director", 120000, 2),
        ("Front Office employee", 40000, 2),

        ("Engineering Director", 120000, 3),
        ("Engineering employee", 40000, 3),

        ("Finance Director", 120000, 4),
        ("Finance employee", 40000, 4),

        ("Sales Director", 140000, 5),
        ("Sales employee", 40000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Mr. HR", "Director", 1, NULL),
        ("HR jr", "employee", 2, 1),

        ("Mr. Front Office", "Director", 3, NULL),
        ("FO jr", "employee", 4, 3),

        ("Mr. Engineering", "Director", 5, NULL),
        ("Eng jr", "employee", 6, 5),

        ("Mr. Finance", "Director", 7, NULL),
        ("F jr", "employee", 8, 7),

        ("Mr. Sales", "Director", 9, NULL),
        ("Sales jr", "employee", 10, 9);

        


       

